//var web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/f78d36b565844549a8234497b3d0f875"));
//var Web3 = require('web3');

if (typeof web3 !== 'undefined') {
    window.web3 = new Web3(web3.currentProvider);
    console.log("Estamos con el current provider")
} else {
    window.web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/f78d36b565844549a8234497b3d0f875'));
}

$(document).ready(function(){
	tipoNuevosPlatos()
	verPrimeros()
	verValPrimeros()
	verSegundos()
	verValSegundos()
	verPostres()
	verValPostres()
	verMenuAdmin()
	fecha()
	listarPropuestas()
	verPedidosDia()
	verAddPedidosDia()
	verMenuMes()
	verVotaciones()
})

/*if (typeof window.web3 === 'undefined') {
    // no web3, use fallback
    	console.error("Please use a web3 browser");
  	}
else {
    web3.eth.getAccounts(function (error,accounts){
    	var account= accounts[0];
    	console.log("Hemos llegado aquíiii", accounts[0]);
    })
  	}*/
web3.eth.getAccounts(function (error,accounts){
    	var account= accounts[0];
    	console.log(account);
    })
function tipoNuevosPlatos(){
	$("#tipoNuevoPlato").append("<option>"+"primero"+"</option>");
	$("#tipoNuevoPlato").append("<option>"+"segundo"+"</option>");
	$("#tipoNuevoPlato").append("<option>"+"postre"+"</option>");
	
}
function fecha(){
	var d = new Date();
	let calendario=$("#calendario")
	calendario.html(d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear());
	for (var i = 1; i <=31; i++) {
		if (i==d.getDate()) {
		$("#dia").append("<option selected>"+i+"</option>");
		}
		else{
		$("#dia").append("<option>"+i+"</option>");
		}
	}
	for (var i = 1; i <=12; i++) {
		if (i==(d.getMonth()+1)) {
		$("#Mes").append("<option selected>"+i+"</option>");
		}
		else{
		$("#Mes").append("<option>"+i+"</option>");
		}
	}
	for (var i =d.getFullYear(); i <=(d.getFullYear()+1); i++) {
		if (i==d.getFullYear()) {
		$("#Year").append("<option selected>"+i+"</option>");
		}
		else{
		$("#Year").append("<option>"+i+"</option>");
		}
	}
}
function verPrimeros(){
	$.ajax({
		type: 'GET',
		url: 'verPrimerosAdmin'
	}).done(function(data){
		for (var i =0; i<data.length; i++) {
			$("#primero1").append("<option>"+data[i].descripcion+"</option>");
			$("#primero2").append("<option>"+data[i].descripcion+"</option>");
			$("#idListaPrimeros").append(data[i].descripcion+" ID: '"+data[i].id+"'</br>")
		}

	})
}
function verSegundos(){
	$.ajax({
		type: 'GET',
		url: 'verSegundosAdmin'
	}).done(function(data){
		for (var i =0; i<data.length; i++) {
			$("#segundo1").append("<option>"+data[i].descripcion+"</option>");
			$("#segundo2").append("<option>"+data[i].descripcion+"</option>");
			$("#idListaSegundos").append(data[i].descripcion+" ID: '"+data[i].ID+"'</br>")		
		}

	})
}
function verPostres(){
	$.ajax({
		type: 'GET',
		url: 'verPostresAdmin'
	}).done(function(data){
		for (var i =0; i<data.length; i++) {
			$("#postre1").append("<option>"+data[i].descripcion+"</option>");
			$("#postre2").append("<option>"+data[i].descripcion+"</option>");
			$("#idListaPostres").append(data[i].descripcion+" ID: '"+data[i].ID+"'</br>")		
		}


	})
}
function verPedidosDia(){
	$.ajax({
		type: 'GET',
		url: 'verPedidosDia'
	}).done(function(data){
		for (var i = 0; i < data.length; i++) {
			$('#pedidosDia').append(data[i][0].descripcion+'  '+data[i][1].descripcion+'  '+data[i][2].descripcion+'<br>')
		}
	})
}
function verAddPedidosDia(){
	$.ajax({
		type: 'GET',
		url: 'verAddPedidosDia'
	}).done(function(data){
		console.log(data)
		for (var i = 0; i < data.length; i++) {
			$('#AddpedidosDia').append(data[i].codigo);
		}
	})
}
function verMenuAdmin(){
	$.ajax({
		type: 'GET',
		url: 'verMenuAdmin'
	}).done(function(data){
		for (var i =0; i<data.length; i++) {
			$("#idTodoMenus").append("<br>Menu ID: '"+data[i].id+"' ");
			$("#idTodoMenus").append(data[i].primero1+" ")
			$("#idTodoMenus").append(data[i].primero2+" ")
			$("#idTodoMenus").append(data[i].segundo1+" ")
			$("#idTodoMenus").append(data[i].segundo2+" ")
			$("#idTodoMenus").append(data[i].postre1+" ")
			$("#idTodoMenus").append(data[i].postre2+" ")
			$("#idTodoMenus").append("<br> </br>")
			$("#idMenuFecha").append("<option>"+data[i].id+"</option>")
		}
	})
}

function verMenuMes(){
	$.ajax({
		type: 'GET',
		url: 'verMenuMes'
	}).done(function(data){
		for (var i = 0; i < data.length; i++) {
			if(data[i]>=1){
				$('#idMenuMes').append("Día "+(i+1)+" ID del menú: "+data[i]+"<br>")
			}
			else{
				$('#idMenuMes').append("Para el día "+(i+1)+" no se ha especificado ningún menú <br>")
			}
		}

	})
}


function listarPropuestas(){
	$.ajax({
		type: 'GET',
		url: 'verPropuestas'
	}).done(function(data){
		for (var i = 0; i < data.length; i++) {
			$('#listaPropuestas').append(data[i].descripcion+" ID: '"+data[i].id+"'</br>")
		}
	})
}
function verVotaciones(){
	$.ajax({
		type: 'GET',
		url: 'verVotaciones'
	}).done(function(data){
		for (var i = 0; i < data.length; i++) {
			$('#VotoPropuestas').append("Votos Si: "+data[i].VotosSi+" Votos No: "+(data[i].NumVotos-data[i].VotosSi)+"</br>")
		}
		
	})
}
function verValPrimeros(){
	$.ajax({
		type: 'GET',
		url: 'verValPrimeros'
	}).done(function(data){
		for (var i = 0; i < data.length; i++) {
			if(data[i].contadorPuntuacion>0){
				$('#idInfoPrimeros').append("Ha sido elegido: "+data[i].contador+" veces. Valoración media: "+(data[i].puntuacion/data[i].contadorPuntuacion)+"</br>")

			}
			else{
				$('#idInfoPrimeros').append("Ha sido elegido: "+data[i].contador+" veces. Valoración media: No ha recibido niguna valoración </br>")
			}
		}
	})	
}
function verValSegundos(){
	$.ajax({
		type: 'GET',
		url: 'verValSegundos'
	}).done(function(data){
		for (var i = 0; i < data.length; i++) {
			if(data[i].contadorPuntuacion>0){
				$('#idInfoSegundos').append("Ha sido elegido: "+data[i].contador+" veces. Valoración media: "+(data[i].puntuacion/data[i].contadorPuntuacion)+"</br>")

			}
			else{
				$('#idInfoSegundos').append("Ha sido elegido: "+data[i].contador+" veces. Valoración media: No ha recibido niguna valoración </br>")
			}
		}
	})	
}

function verValPostres(){
	$.ajax({
		type: 'GET',
		url: 'verValPostres'
	}).done(function(data){
		for (var i = 0; i < data.length; i++) {
			if(data[i].contadorPuntuacion>0){
				$('#idInfoPostres').append("Ha sido elegido: "+data[i].contador+" veces. Valoración media: "+(data[i].puntuacion/data[i].contadorPuntuacion)+"</br>")

			}
			else{
				$('#idInfoPostres').append("Ha sido elegido: "+data[i].contador+" veces. Valoración media: No ha recibido niguna valoración </br>")
			}
		}
	})	
}



$(document).ready(function(){
	$('#IDtransfer').submit(function(e){
		var info= {
			username: $('#username').val(),
			value: $('#value').val()
		};
	    $.ajax({
	        type: 'POST',
	        url: 'transferTokenCat',
	        data: info
	        }).done(function(data){
	           		
	        })
	});
	$('#idNuevosPlatos').submit(function(e){
		var info= {
			descripcion: $('#descripcion').val(),
			id: $('#id').val(),
			tipo: $('#tipoNuevoPlato').val()
		};
	    $.ajax({
	           type: 'POST',
	           url: 'NuevosPlatos',
	           data: info
	           }).done(function(data){
	           		alert(data)
	           })
	});
	$('#idNuevoMenu').submit(function(e){
		var info= {
			primero1: $('#primero1').val(),
			primero2: $('#primero2').val(),
			segundo1: $('#segundo1').val(),
			segundo2: $('#segundo2').val(),
			postre1: $('#postre1').val(),
			postre2: $('#postre2').val(),
			id: $('#idNuevoMenuID').val()
		};
	    $.ajax({
	           type: 'POST',
	           url: 'NuevoMenu',
	           data: info
	           }).done(function(data){
	           	alert(data)
	           })
	});
	$('#idEstablecerMenu').submit(function(e){
		alert("Se ha establecido el menú")
		web3.eth.getAccounts(function (error,accounts){
    		var account= accounts[0];
			var fecha1= ""+$('#dia').val()+"0"+$('#Mes').val()+$('#Year').val()+""
			var fecha= parseInt(fecha1)
			var info= {
				fecha: fecha,
				id: $('#idMenuFecha').val(),
				account: account
			};
			
	    $.ajax({
	           type: 'POST',
	           url: 'EstablecerMenu',
	           data: info
	           }).done(function(data){
	           })
       })
       
	});
	$('#Propuesta').submit(function(e){
		var descripcion= $('#desPropuesta').val()
		var id= $('#idPropuesta').val()
		var data= {
			descripcion: descripcion,
			id: id
		};
	    $.ajax({
	           type: 'POST',
	           url: 'CrearPropuesta',
	           data: data
	           }).done(function(data){
	           	alert(data)
	           })
	});

})