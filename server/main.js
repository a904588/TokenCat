//Configuración del servidor
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//configuración del Web3 y el contrato
const Web3 = require ('web3')
const web3 = new Web3('HTTP://127.0.0.1:7545')
//var web3 = new Web3(new Web3.providers.HttpProvider("https://:85f037b29e994384a56a5625bc13898b@ropsten.infura.io/v3/f78d36b565844549a8234497b3d0f875"));
//const web3 = new Web3(process.env.REMOTE_NODE)
//var TruffleContract = require('truffle-contract');
var TokenCat =new web3.eth.Contract([
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "Votaciones",
      "outputs": [
        {
          "name": "numvoto",
          "type": "uint256"
        },
        {
          "name": "voto",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "standard",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "Propuestas",
      "outputs": [
        {
          "name": "VotosSi",
          "type": "uint256"
        },
        {
          "name": "NumVotos",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "Valoraciones",
      "outputs": [
        {
          "name": "numval",
          "type": "uint256"
        },
        {
          "name": "val",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "MenuDia",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "Usuario",
      "outputs": [
        {
          "name": "descuento",
          "type": "uint256"
        },
        {
          "name": "ultimopedido",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "Pedidos",
      "outputs": [
        {
          "name": "primero",
          "type": "uint256"
        },
        {
          "name": "segundo",
          "type": "uint256"
        },
        {
          "name": "postre",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        },
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "Platos",
      "outputs": [
        {
          "name": "contador",
          "type": "uint256"
        },
        {
          "name": "puntuacion",
          "type": "uint256"
        },
        {
          "name": "contadorPuntuacion",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "Codigo",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "admin",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "precio",
          "type": "uint256"
        },
        {
          "name": "id1",
          "type": "uint256"
        },
        {
          "name": "id2",
          "type": "uint256"
        },
        {
          "name": "id3",
          "type": "uint256"
        },
        {
          "name": "fecha",
          "type": "uint256"
        },
        {
          "name": "cod",
          "type": "uint256"
        }
      ],
      "name": "Compra",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "id",
          "type": "uint256"
        },
        {
          "name": "puntuacion",
          "type": "uint256"
        }
      ],
      "name": "ValorarPlato",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "fecha",
          "type": "uint256"
        },
        {
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "EstablecerMenu",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "fecha",
          "type": "uint256"
        }
      ],
      "name": "VerMenu",
      "outputs": [
        {
          "name": "id",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "IniciarPropuesta",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "id",
          "type": "uint256"
        },
        {
          "name": "voto",
          "type": "uint256"
        }
      ],
      "name": "VotarPropuesta",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "VerVotaciones",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "id1",
          "type": "uint256"
        },
        {
          "name": "id2",
          "type": "uint256"
        },
        {
          "name": "id3",
          "type": "uint256"
        },
        {
          "name": "fecha",
          "type": "uint256"
        }
      ],
      "name": "ModificarPedido",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "fecha",
          "type": "uint256"
        }
      ],
      "name": "EstablecerPedido",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ], '0x6E89F1cae7dE4C35C79D1c40752c964D66E32654');
//0x6E89F1cae7dE4C35C79D1c40752c964D66E32654
//0xa84B9db33c0e9d73Aa0b47c2569Df60abCFE4fcc
var admin= '0x05E83E938fD373d85514f9443C5e13C53605049E';

//Configuracion de la BBDD
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tokencat"
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Conetados a la BBDD!");
});


var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
 
app.use(express.static('client'));
app.use(express.static('build/contracts'));

async function verSaldo(address) {
  let result
  result = await TokenCat.methods.balanceOf(address).call()
  return result
}
async function transfer(address, value) {
  let result
  TokenCat.methods.transfer(address, value).send({from: admin}).then(result=>{
  		console.log(result)
		}).catch(function (error){

        })

}

async function VerMenu(fecha) {
  let result
  result = await TokenCat.methods.MenuDia(fecha).call()
  console.log(`Se ha hecho la transferencia de ${value} TokenCats a la dirección ${address}`)
}

async function Compra(precio, id1, id2, id3, fecha, cod, account){
	let result
	TokenCat.methods.Compra(precio, id1, id2, id3, fecha, cod).send({from: account, gas:3000000}).then(result=>{
		console.log(result)
		con.query("INSERT INTO compras (fecha, codigo) VALUES ('"+fecha+"', '"+cod+"')", function(err, result1, fields){

        	})
	}).catch(function (error){

        })
}

async function ValorarPlato(id, puntuacion, account){
	let result
		TokenCat.methods.ValorarPlato(id, puntuacion).send({from: account, gas:3000000}).then(result=>{
			console.log(result)
			con.query("INSERT INTO valoraciones (address, id) VALUES ('"+account+"', '"+id+"')", function(err, result1, fields){

        	})
		}).catch(function (error){

        })
}
async function VotarPropuesta(id, voto, res, account){
	let result
		TokenCat.methods.VotarPropuesta(id, voto).send({from: account, gas:3000000}).then(result=>{
			console.log(result)
			con.query("INSERT into votaciones (address, id) VALUES ('"+account+"', '"+id+"')", function(err, result1, fields){

			})
			res.send("Se ha votado correctamente")
		}).catch(function (error){

    })

}

async function ModificarPedido(id1, id2, id3, fecha, res, account){
	let result
		TokenCat.methods.ModificarPedido(id1, id2, id3, fecha).send({from: account, gas:3000000}).then(result=>{
			console.log(result)
			res.send("alerta")
		}).catch(function (error){

    })
}
async function EstablecerMenu(fecha, id, account, res){
  console.log("Hemos entrado en EstablecerMenu")
		TokenCat.methods.EstablecerMenu(fecha, id).send({from: account, gas:3000000}).then(result=>{
      console.log("Hemos realizado la transaccion")
			console.log(result)
		}).catch(function (error){
    })
}


var date = new Date()
var date1= ""+(date.getDate())+"0"+(date.getMonth()+1)+date.getFullYear()+""
var fecha= parseInt(date1)

//La ruta root es index.html
app.get('/', (req, res) => {

    res.sendFile(`${__dirname}/client/index.html`);
});

//Configuración de las rutas
app.get('/verAddress', (req, res) => {
    web3.eth.getAccounts().then(cuentas => { 
	res.send(cuentas[1]);
 	})
});

app.get('/verTokenCats', (req, res) => { 
	verSaldo(req.query.account).then(saldo=>{
    res.send(saldo)
	})

});
app.get('/verPrimeros', (req, res)=>{
  //console.log("Ver Primeros dice: "+req.query.fecha)
	let id= new Array();
	TokenCat.methods.MenuDia(fecha).call().then(result=>{
		con.query("SELECT * FROM menu WHERE id ='"+result+"'", function(err, result, fields){
		
		var string=JSON.stringify(result);
     	var json =  JSON.parse(string);
		id.push(json[0].ID11);
		id.push(json[0].ID12);
		con.query("SELECT * FROM primeros WHERE id ="+id[0]+" OR id ="+id[1]+"", function(err, results, fields){
  			var string=JSON.stringify(results);
     		var json =  JSON.parse(string);
     		res.send(json) ;
		});

	})
	})

});
app.get('/verPrimerosAdmin', (req, res)=>{
	let id= new Array();
	con.query("SELECT * FROM primeros", function(err, result, fields){
		
		var string=JSON.stringify(result);
     	var json =  JSON.parse(string);
     	res.send(json)
	})

});
app.get('/verSegundos', (req, res)=>{
	let id= new Array();
	TokenCat.methods.MenuDia(fecha).call().then(result=>{
		con.query("SELECT * FROM menu WHERE id ='"+result+"'", function(err, result, fields){
			var string=JSON.stringify(result);
     		var json =  JSON.parse(string);
			id.push(json[0].ID21);
			id.push(json[0].ID22);
			con.query("SELECT * FROM segundos WHERE id ="+id[0]+" OR id ="+id[1]+"", function(err, results, fields){

  				var string=JSON.stringify(results);
     			var json =  JSON.parse(string);
     			res.send(json);
			});

		})
	})
	

});
app.get('/verSegundosAdmin', (req, res)=>{
	let id= new Array();
	con.query("SELECT * FROM segundos", function(err, result, fields){
		var string=JSON.stringify(result);
     	var json =  JSON.parse(string);
     	res.send(json);
	})

});
app.get('/verPostres', (req, res)=>{
	let id= new Array();
	TokenCat.methods.MenuDia(fecha).call().then(result=>{
		con.query("SELECT * FROM menu WHERE id ='"+result+"'", function(err, result, fields){
			var string=JSON.stringify(result);
     		var json =  JSON.parse(string);
			id.push(json[0].ID31);
			id.push(json[0].ID32);
			con.query("SELECT * FROM postres WHERE id ="+id[0]+" OR id ="+id[1]+"", function(err, results, fields){
  				var string=JSON.stringify(results);
     			var json =  JSON.parse(string);
     			res.send(json);
			});

		})
	})


});
app.get('/verPostresAdmin', (req, res)=>{
	let id= new Array();
	con.query("SELECT * FROM postres", function(err, result, fields){
		var string=JSON.stringify(result);
     	var json =  JSON.parse(string);     		
     	res.send(json);
	})

});

app.get('/verValoracionesUsuario', (req, res)=>{
	let info= new Array()
		con.query("SELECT id FROM valoraciones WHERE address='"+req.query.account+"'", function(err, result, fields){
			var string=JSON.stringify(result);
			var json=JSON.parse(string);
			for (var i = 0; i < json.length; i++) {
				TokenCat.methods.Valoraciones(json[i].id, req.query.account).call().then(result1=>{
					info.push(result1)
					if(info.length==json.length){
						res.send(info)
					}
				})

			}
		})

	

});
app.get('/verIDValoracionesUsuario', (req, res)=>{
	let info=new Array()
		con.query("SELECT id FROM valoraciones WHERE address='"+req.query.account+"'", function(err, result, fields){
			var string=JSON.stringify(result);
			var json=JSON.parse(string);
			for (var i = 0; i < json.length; i++){
				con.query("SELECT descripcion FROM platos WHERE id='"+json[i].id+"'", function(err, result1, fields){
					var string1=JSON.stringify(result1);
					var json1=JSON.parse(string1);					
					info.push(json1);
					if(info.length==json.length){
						res.send(info)
					}
				})
			}
		})

	
});
app.get('/verVotacionesUsuario', (req, res)=>{
	let info= new Array()
  console.log("Hemos entrado en verVotacionesUsuario", req.query.account)
		con.query("SELECT id FROM votaciones WHERE address='"+req.query.account+"'", function(err, result, fields){
			var string=JSON.stringify(result);
			var json=JSON.parse(string);
      console.log(json)
			for (var i = 0; i < json.length; i++) {
				TokenCat.methods.Votaciones(json[i].id, req.query.account).call().then(result1=>{
					info.push(result1)
					if(info.length==json.length){
						res.send(info)
					}
				})

			}
		})
	

});
app.get('/verIDVotacionesUsuario', (req, res)=>{
	let info=new Array()
  console.log("Hemos entrado en verIDVotacionesUsuario ", req.query.account)
		con.query("SELECT id FROM votaciones WHERE address='"+req.query.account+"'", function(err, result, fields){
			var string=JSON.stringify(result);
			var json=JSON.parse(string);
      console.log(json)
			for (var i = 0; i < json.length; i++) {
				con.query("SELECT descripcion FROM propuestas WHERE id='"+json[i].id+"'", function(err, result1, fields){
					var string1=JSON.stringify(result1);
					var json1=JSON.parse(string1);					
					info.push(json1);
					if(info.length==json.length){
						res.send(info)
					}
				})
			}
		})
	
});

app.get('/verMenuAdmin', (req, res)=>{
	var menu = new Array();
	con.query("SELECT * FROM menu", function(err, result, fields){
		var string =JSON.stringify(result);
		var json= JSON.parse(string);
		for (var i = 0; i < json.length; i++) {
			info=json[i];
			con.query("SELECT descripcion FROM platos WHERE ID='"+info.ID11+"' UNION SELECT descripcion FROM platos WHERE ID='"+info.ID12+"' UNION SELECT descripcion FROM platos WHERE ID='"+info.ID21+"' UNION SELECT descripcion FROM platos WHERE ID='"+info.ID22+"' UNION SELECT descripcion FROM platos WHERE ID='"+info.ID31+"' UNION SELECT descripcion FROM platos WHERE ID='"+info.ID32+"' UNION SELECT id FROM menu WHERE ID='"+info.ID+"'", function(err, results, fields){
				var string1 =JSON.stringify(results);
				var json1= JSON.parse(string1);
				var platos={
					id:json1[6].descripcion,
					primero1: json1[0].descripcion,
					primero2:json1[1].descripcion,
					segundo1:json1[2].descripcion,
					segundo2:json1[3].descripcion,
					postre1:json1[4].descripcion,
					postre2:json1[5].descripcion
				}
				menu.push(platos)
				if (menu.length==json.length){
				res.send(menu)
				}
			})
			
		}
		
	})
});

app.get('/verMenuMes', (req, res)=>{
	var info = new Array();
	for (var i = 1; i<=31; i++) {
		var date1= ""+i+"0"+(date.getMonth()+1)+date.getFullYear()+""
		var fecha= parseInt(date1)
		TokenCat.methods.MenuDia(fecha).call().then(result=>{
			info.push(result)
			if(info.length==31){
				res.send(info)
			}
		})
	}
	

});


app.get('/verPlatos', (req,res)=>{
	con.query("SELECT descripcion FROM platos", function(error, result, fields){
		var string= JSON.stringify(result);
        var json =  JSON.parse(string);
        res.send(json)
	});
})

app.get('/verVotaciones', (req,res)=>{
	let info= new Array()
	con.query("SELECT id FROM propuestas", function(error, result, fields){
		var string= JSON.stringify(result);
        var json =  JSON.parse(string);
        for (var i = 0; i < json.length; i++) {
        	TokenCat.methods.Propuestas(json[i].id).call().then(result1=>{
        		info.push(result1)
        		if(info.length==json.length)
        		{
        			res.send(info)
        		}
        	})
        }
	});
})

app.get('/verValPrimeros', (req,res)=>{
	let info= new Array()
	con.query("SELECT id FROM primeros", function(error, result, fields){
		var string= JSON.stringify(result);
        var json =  JSON.parse(string);
        for (var i = 0; i < json.length; i++) {
        	TokenCat.methods.Platos(json[i].id).call().then(result1=>{
        		info.push(result1)
        		if(info.length==json.length)
        		{
        			res.send(info)
        		}
        	})
        }
	});
})

app.get('/verValSegundos', (req,res)=>{
	let info= new Array()
	con.query("SELECT id FROM segundos", function(error, result, fields){
		var string= JSON.stringify(result);
        var json =  JSON.parse(string);
        for (var i = 0; i < json.length; i++) {
        	TokenCat.methods.Platos(json[i].id).call().then(result1=>{
        		info.push(result1)
        		if(info.length==json.length)
        		{
        			res.send(info)
        		}
        	})
        }
	});
})

app.get('/verValPostres', (req,res)=>{
	let info= new Array()
	con.query("SELECT id FROM postres", function(error, result, fields){
		var string= JSON.stringify(result);
        var json =  JSON.parse(string);
        for (var i = 0; i < json.length; i++) {
        	TokenCat.methods.Platos(json[i].id).call().then(result1=>{
        		info.push(result1)
        		if(info.length==json.length)
        		{
        			res.send(info)
        		}
        	})
        }
	});
})

app.get('/verPedidosUsuario', (req,res)=>{
console.log("Mirando el pedido del usuario ", req.query.account)
let info = new Array()
  TokenCat.methods.Codigo(fecha, req.query.account).call().then(result1=>{
    info.push(result1)
      TokenCat.methods.Pedidos(fecha, result1).call().then(result2=>{
      con.query("SELECT descripcion from platos WHERE ID='"+result2.primero+"' UNION SELECT descripcion from platos WHERE ID='"+result2.segundo+"' UNION SELECT descripcion from platos WHERE ID='"+result2.postre+"'", function(err, result2, fields){
        var string2=JSON.stringify(result2)
        var json2=JSON.parse(string2)
        info.push(json2)
        res.send(info)
        console.log(info)
      })
    }).catch(function (error){
    })
  }).catch(function (error){
  })
})



app.post('/Compra', (req, res)=>{
//Tenemos que chekear que no se hayan hecho más compras ese mismo día, pero una vez sepamos lo de las cuentas cómo va
	cod=req.body.cod
  account=req.body.account
  console.log("Compra realizada por ", account)
	console.log(cod)
	con.query("SELECT id FROM primeros where descripcion='"+ req.body.primero +"' UNION SELECT id FROM segundos where descripcion='"+ req.body.segundo +"'UNION SELECT id FROM postres where descripcion='"+ req.body.postre +"'", function(err, results, fields){
		var string=JSON.stringify(results);
        var json =  JSON.parse(string);
        id1= json[0].id;
        id2=json[1].id;
        id3=json[2].id;
        Compra(100, id1, id2, id3, fecha, cod, account)
	})
})

app.post('/Valorar', (req, res)=>{
	con.query("SELECT id FROM platos WHERE descripcion='"+ req.body.plato +"'", function(err, result, fields){
		var string=JSON.stringify(result);
        var json =  JSON.parse(string);
        id= json[0].id;
        puntuacion= parseInt(req.body.num)
        ValorarPlato(id, puntuacion, req.body.account)
	})
})

app.post('/Modificar', (req,res)=>{
	con.query("SELECT id FROM primeros where descripcion='"+ req.body.primero +"' UNION SELECT id FROM segundos where descripcion='"+ req.body.segundo +"'UNION SELECT id FROM postres where descripcion='"+ req.body.postre +"'", function(err, results, fields){
		var string=JSON.stringify(results);
        var json =  JSON.parse(string);
        id1= json[0].id;
        id2=json[1].id;
        id3=json[2].id;
        ModificarPedido(id1, id2, id3, fecha, res, req.body.account)
	})
})
//Mostramos todas las cuentas en la web
app.get('/verCuentas', (req, res) => {

	web3.eth.getAccounts().then(cuentas => { 
	console.log(cuentas[0]);
	res.send(cuentas);
 	})
 	

});

app.get('/verPropuestas', (req,res)=>{
	con.query("SELECT * FROM propuestas", function(err, result, fields){
        var string=JSON.stringify(result);
        var json =  JSON.parse(string);
        res.send(json);
	})
})

app.get('/verPedidosDia', (req,res)=>{
	let info = new Array()
	con.query("SELECT codigo FROM compras WHERE fecha ='"+fecha+"'", function(err, result, fields){
		var string= JSON.stringify(result);
		var json=JSON.parse(string);
		for (var i = 0; i < json.length; i++) {
			TokenCat.methods.Pedidos(fecha, json[i].codigo ).call().then(result=>{
				con.query("SELECT descripcion from platos WHERE ID='"+result.primero+"' UNION SELECT descripcion from platos WHERE ID='"+result.segundo+"' UNION SELECT descripcion from platos WHERE ID='"+result.postre+"'", function(err, result1, fields){
					var string1=JSON.stringify(result1)
					var json1=JSON.parse(string1)
					info.push(json1)
					if (info.length==json.length){
						res.send(info)
					}
				})
				
			}).catch(function (error){
        	})
		}


	})

})

app.get('/verAddPedidosDia', (req,res)=>{
	con.query("SELECT codigo FROM compras where fecha='"+fecha+"'", function(err, result, fields){
		var string=JSON.stringify(result);
		var json=JSON.parse(string);
		res.send(json)
	})
})

app.post('/votarPropuesta', (req,res)=>{

	var plato=req.body.plato
	var voto=req.body.voto

	con.query("SELECT id FROM propuestas WHERE descripcion= '"+plato+"'", function(err, result, fields){
		var string=JSON.stringify(result);
        var json =  JSON.parse(string);
        var id=json[0].id;
        VotarPropuesta(id, voto, res, req.body.account)
	})
})
 
app.get('*', (req, res) => {
    res.status(404);
    res.send('Ooops... this URL does not exist');
});
//Admin
app.post('/transferTokenCat', (req, res) => {

  	con.query("SELECT Address FROM usuarios WHERE username = '"+ req.body.username +"'", function (err, result, fields) {
    		if (err) throw err;
        	var string=JSON.stringify(result);
        	var json =  JSON.parse(string);
        	var address=json[0].Address
        	console.log('Hemos entrado en transferTokenCat con un username '+address+'y un value de '+req.body.value)
        	transfer(address, req.body.value);
  	});
});
app.post('/NuevosPlatos', (req, res)=>{
	var descripcion=req.body.descripcion;
	var id=parseInt(req.body.id);
	var tipo=req.body.tipo+"s"
	con.query("SELECT * from platos WHERE id='"+id+"'", function(err, results, fields){
		if(results.length==0){
			con.query("INSERT INTO "+tipo+" (descripcion, id) VALUES ('"+descripcion+"', '"+id+"')", function(err, result, fields){
				if (err) throw err;
			})
			con.query("INSERT INTO platos (descripcion, id) VALUES ('"+descripcion+"', '"+id+"')", function(err, result, fields){
				if (err) throw err;
				console.log("Se ha añadido bien la info a la tabla platos")
			})
			res.send("Se ha añadido el plato")
		}
		else{
			res.send("Ese id ya existe para otro plato, ponga otro")
		}
	})
})

app.post('/NuevoMenu', (req, res)=>{
	var primero1=req.body.primero1;
	var	primero2=req.body.primero2;
	var	segundo1=req.body.segundo1;
	var	segundo2=req.body.segundo2;
	var	postre1=req.body.postre1;
	var	postre2=req.body.postre2;
	var	id=req.body.id;
	con.query("SELECT * from menu WHERE id='"+id+"'", function(err, result, fields){
		if(result.length==0){
			con.query("SELECT id from primeros WHERE descripcion='"+primero1+"' UNION SELECT id from primeros WHERE descripcion='"+primero2+"' UNION SELECT id from segundos WHERE descripcion='"+segundo1+"' UNION SELECT id from segundos WHERE descripcion='"+segundo2+"' UNION SELECT id from postres WHERE descripcion='"+postre1+"' UNION SELECT id from postres WHERE descripcion='"+postre2+"'", function(err, results, fields){
				var string=JSON.stringify(results);
				var json=JSON.parse(string)
				var id11=json[0].id;
				var id12=json[1].id;
				var id21=json[2].id;
				var id22=json[3].id;
				var id31=json[4].id;
				var id32=json[5].id;
				con.query("INSERT INTO menu (ID, ID11, ID12, ID21, ID22, ID31, ID32) VALUES ('"+id+"','"+id11+"', '"+id12+"','"+id21+"', '"+id22+"', '"+id31+"', '"+id32+"')", function(err, result1, fields){
					res.send("Se ha introducido el Menu correctamente")
				})
			})
		}
		else{
			res.send("EL ID de ese menú ya está asignado a otro menu")
		}
	})

})
app.post('/EstablecerMenu', (req, res)=>{
	var fecha= req.body.fecha;
	var id= req.body.id;
  var account= req.body.account;
  console.log("La cuenta es: ", account)
	EstablecerMenu(fecha, id, account, res);
})


app.post('/CrearPropuesta', (req, res)=>{
	var descripcion=req.body.descripcion;
	var id= req.body.id;
	con.query("SELECT * FROM propuestas WHERE id='"+id+"'", function(err, result, fields){
		if(result.length==0){
			con.query("INSERT INTO propuestas (descripcion, id) VALUES ('"+descripcion+"', '"+id+"')", function(err, results, fields){
				res.send("Se ha creado la propuesta")
			})
		}
		else{
			res.send("El id ya está cogido, escoja otro")
		}
	})
})



app.listen(PORT, () => {
    
    console.log(`Server runing on port ${PORT}...`);
});