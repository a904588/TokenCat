var TokenCat = artifacts.require("TokenCat");
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
contract("TokenCat", function(_accounts) {
 let instance;
  before(async () => {
    instance = await TokenCat.deployed();
  });
  it('El admin coge todo el supply',async () => {
    let saldoAdmin = await instance.balanceOf.call(_accounts[0]);
    let saldoTotal = await instance.totalSupply.call();
    console.log(saldoAdmin.toNumber());
    console.log(saldoTotal.toNumber());         
    assert.equal(saldoTotal.toNumber(),saldoAdmin.toNumber());
  });
  it('la valoraciones funcionan correctamente',async () => {
  	var idPlato=1
  	var valoracion=5
    await instance.ValorarPlato.sendTransaction(idPlato, valoracion, {from: _accounts[0]});
    let PlatoContador = await instance.Platos.call(idPlato);
    let PlatoValoracion = await instance.Platos.call(idPlato);
    let descuento = await instance.Usuario.call(_accounts[0]);
    console.log(PlatoValoracion[1].toNumber()); 
    console.log(PlatoContador[2].toNumber());
    assert.equal(PlatoValoracion[1].toNumber(), valoracion);
   	assert.equal(PlatoContador[2].toNumber(), 1);
   	assert.equal(descuento[0].toNumber(), 1);
  });
   it('No se puede valorar con una nota mayor a 5',async () => {
  	var idPlato=1
  	var valoracion=6
   	try{
      await instance.ValorarPlato.sendTransaction(idPlato, valoracion, {from: _accounts[0]});
      assert.fail(true,false,"The function should throw error");  
    }
    catch(err){
        assert.include(String(err),'revert','throws different error');
    }
  });


it('No se puede valorar con una nota menor a 0',async () => {
  	var idPlato=1
  	var valoracion=-1
   	try{
      await instance.ValorarPlato.sendTransaction(idPlato, valoracion, {from: _accounts[0]});
      assert.fail(true,false,"The function should throw error");  
    }
    catch(err){
        assert.include(String(err),'revert','throws different error');
    }
  });

it('No se puede realizar una compra si no tienes dinero',async () => {
  	var fecha=1010209
  	var id1=1
  	var id2=2
  	var id3=3
  	var precio=10
  	let saldoUser = await instance.balanceOf.call(_accounts[2]);
  	assert.equal(saldoUser.toNumber(),0)
   	try{
	await instance.Compra.sendTransaction(precio, id1, id2, id3, fecha, {from:_accounts[2]});
    assert.fail(true,false,"The function should throw error");  
    }
    catch(err){
        assert.include(String(err),'revert','throws different error');
    }
  });





  it('la compra funciona bien',async () => {
  	var fecha=1010209
  	var id1=1
  	var id2=2
  	var id3=3
  	var precio=10
	await instance.transfer.sendTransaction(_accounts[1], 1000, {from:_accounts[0]});
	var saldoUser1 = await instance.balanceOf.call(_accounts[1]);
	await instance.Compra.sendTransaction(precio, id1, id2, id3, fecha, {from:_accounts[1]});
	var saldoUser2 = await instance.balanceOf.call(_accounts[1]);
    let PlatoContador1 = await instance.Platos.call(id1); //Contador de cuántas veces se ha elegido el plato
    let PlatoContador2 = await instance.Platos.call(id2);
    let PlatoContador3 = await instance.Platos.call(id3);
    //Vemos si el contador de los platos ha aumnetado
    assert.equal(PlatoContador1[0].toNumber(), 1);
    assert.equal(PlatoContador2[0].toNumber(), 1);
    assert.equal(PlatoContador3[0].toNumber(), 1);
    //Vemos si se le ha descontado el saldo
   	assert.equal(saldoUser1.toNumber()-precio, saldoUser2);
   	//Vemos la ultima fecha del pedido
   	let User = await instance.Usuario.call(_accounts[1]);
   	assert.equal(User[1].toNumber(), fecha);
   	//Vemos si se ha metido en el pedido
   	let Pedido = await instance.Pedidos.call(fecha, _accounts[1]);
   	assert.equal(Pedido[0].toNumber(), id1);
    assert.equal(Pedido[1].toNumber(), id2);
    assert.equal(Pedido[2].toNumber(), id3);

  });
 
it('la votaciones funcionan correctamente',async () => {
  	var idPlato=1
  	var voto0=1 
	var voto1=1
	var voto2=0

    await instance.VotarPropuesta.sendTransaction(idPlato, voto0, {from: _accounts[0]});
    await instance.VotarPropuesta.sendTransaction(idPlato, voto1, {from: _accounts[1]});
    await instance.VotarPropuesta.sendTransaction(idPlato, voto2, {from: _accounts[2]});


    let Propuesta = await instance.Propuestas.call(idPlato);
    assert.equal(Propuesta[0].toNumber(), voto0+voto1+voto2); //Vemos que el numero de votos si está bien
    assert.equal(Propuesta[1].toNumber(), 3); //Vemos que el numero de votos está bien
    let User0 = await instance.Usuario.call(_accounts[0]);
    let User1 = await instance.Usuario.call(_accounts[1]);
    let User2 = await instance.Usuario.call(_accounts[2]);
    let User3 = await instance.Usuario.call(_accounts[3]);   //tenemos que ver el descuento que tiene


   	assert.equal(User0[0].toNumber(), 2);
   	assert.equal(User1[0].toNumber(), 1);
   	assert.equal(User2[0].toNumber(), 1);
   	assert.equal(User3[0].toNumber(), 0);


  });
 
});
