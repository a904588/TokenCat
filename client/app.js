//Calendario
$(document).ready(function(){
fecha()
verAddress()
verPrimeros()
verSegundos()
verPostres()
verSaldo()
verPlatos()
verPropuestas()
verPedidosUsuario()
verValoracionesUsuario()
verIDValoracionesUsuario()
verVotacionesUsuario()
verIDVotacionesUsuario()
});

function fecha(){
	var d = new Date();
	let calendario=$("#calendario")
	calendario.html(d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear());
	/*for (var i = 1; i <=31; i++) {
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
	}*/
}

function verAddress(){
web3.eth.getAccounts(function (error,accounts){
	$("#verAddress").html(accounts[0]);
})
}
function verPedidosUsuario(){
web3.eth.getAccounts(function (error,accounts){
	var data={
		account: accounts[0]
	}
	$.ajax({
		type: 'GET',
		url: 'verPedidosUsuario',
		data: data
	})
	.done(function(data){
		$('#idHistorialPedidos').append(data[0]+' '+data[1][0].descripcion+' '+data[1][1].descripcion+' '+data[1][2].descripcion+'<br>')
	})
})
}
function verValoracionesUsuario(){
web3.eth.getAccounts(function (error,accounts){
	var data={
		account: accounts[0]
	}	
	$.ajax({
		type: 'GET',
		url: 'verValoracionesUsuario',
		data: data
	})
	.done(function(data){
		for (var i = 0; i < data.length; i++) {
			$('#idHistorialValoraciones').append(data[i].val+'<br>')
		}
		
	})
})
}
function verIDValoracionesUsuario(){
	web3.eth.getAccounts(function (error,accounts){
	var data={
		account: accounts[0]
	}
	$.ajax({
		type: 'GET',
		url: 'verIDValoracionesUsuario',
		data: data
	})
	.done(function(data){
		for (var i = 0; i < data.length; i++) {
			$('#PlatosValorados').append(data[i][0].descripcion+'<br>');
		}
		
	})
})
}
function verVotacionesUsuario(){
	web3.eth.getAccounts(function (error,accounts){
	var data={
		account: accounts[0]
	}
	//console.log("verVotacionesUsuario account ", data)
	$.ajax({
		type: 'GET',
		url: 'verVotacionesUsuario',
		data: data
	})
	.done(function(data){
		for (var i = 0; i < data.length; i++) {
			if (data[i].voto=1) {
			$('#idHistorialVotaciones').append('SI <br>')	
			}
			else{
			$('#idHistorialVotaciones').append('NO <br>')	

			}
		}
		
	})
})
}
function verIDVotacionesUsuario(){
	web3.eth.getAccounts(function (error,accounts){
	var data={
		account: accounts[0]
	}
		//console.log("verIDVotacionesUsuario account ", data)
	$.ajax({
		type: 'GET',
		url: 'verIDVotacionesUsuario',
		data: data
	})
	.done(function(data){
		for (var i = 0; i < data.length; i++) {
			$('#PropuestasVotadas').append(data[i][0].descripcion+'<br>');
		}
	})
})
}
function verPrimeros(){
	var data={
		fecha: "MensajeenviadodesdeVerPrimeros()"
	}
	$.ajax({
		type: 'GET',
		url: 'verPrimeros',
		data: data
	}).done(function(data){
		for (var i =0; i<data.length; i++) {
			$("#primero").append("<option>"+data[i].descripcion+"</option>");
			$("#Mprimero").append("<option>"+data[i].descripcion+"</option>");		
		}

	})
}
function verSegundos(){
	$.ajax({
		type: 'GET',
		url: 'verSegundos'
	}).done(function(data){
		for (var i =0; i<data.length; i++) {
			$("#segundo").append("<option>"+data[i].descripcion+"</option>");
			$("#Msegundo").append("<option>"+data[i].descripcion+"</option>");		
		}

	})
}
function verPostres(){
	$.ajax({
		type: 'GET',
		url: 'verPostres'
	}).done(function(data){
		for (var i =0; i<data.length; i++) {
			$("#postre").append("<option>"+data[i].descripcion+"</option>");
			$("#Mpostre").append("<option>"+data[i].descripcion+"</option>");		
		}


	})
}
function verSaldo(){
	web3.eth.getAccounts(function (error,accounts){
	var data={
		account: accounts[0]
	}
	$.ajax({
		type: 'GET',
		url: 'verTokenCats',
		data: data

	})
	.done(function(data){
		$('#saldo').html(data);
	})
})
}
function verPlatos(){
	$.ajax({
		type: 'GET',
		url: 'verPlatos'
	}).done(function(data){
		for (var i =0; i<data.length; i++) {
			$("#valoraciones").append("<option>"+data[i].descripcion+"</option>");		
		}
		for (var i = 0; i <=5; i++) {
			$("#numValoracion").append("<option>"+i+"</option>");
		}
	})
}
function verPropuestas(){
	$.ajax({
		type: 'GET',
		url: 'verPropuestas'
	}).done(function(data){
		for (var i =0; i<data.length; i++) {
			$("#propuestas").append("<option>"+data[i].descripcion+"</option>");		
		}
	})
}


// this is the id of the form

$(document).ready(function(){
$('#CompraID').submit(function(e){
	alert("Se ha realizado la compra")
	web3.eth.getAccounts(function (error,accounts){
	codigo=Math.floor(Math.random()*100000)
	console.log(codigo)
	var menu= {
		primero: $('#primero').val(),
		segundo: $('#segundo').val(),
		postre: $('#postre').val(),
		cod: codigo,
		account: accounts[0]
	};
    $.ajax({
           type: 'POST',
           url: 'Compra',
           data: menu
           })
           .done(function(data){
           		
           })
    })       
});

$('#ValoracionID').submit(function(e){
	alert("Se ha valorado correctamente")
	web3.eth.getAccounts(function (error,accounts){
	var plato={
		plato: $('#valoraciones').val(),
		num: $('#numValoracion').val(),
		account: accounts[0]
	};
    $.ajax({
           type: 'POST',
           url: 'Valorar',
           data: plato
           })
           .done(function(data){
           		
           })
    })       
});

$("#idSi" ).click(function() {
	alert("Se ha votado correctamente")
	web3.eth.getAccounts(function (error,accounts){
  		var data={
  			plato: $('#propuestas').val(),
  			voto: 1,
  			account: accounts[0]
  		}
  		console.log(data)
  		$.ajax({
  			type: 'POST',
  			url: 'votarPropuesta',
  			data: data
  		}).done(function(data){
  			alert(data)
  		})
  	})
});
$("#idNo" ).click(function() {
	alert("Se ha votado correctamente")
	web3.eth.getAccounts(function (error,accounts){
    var data={
  	plato: $('#propuestas').val(),
  	voto: 0,
  	account: accounts[0]
  	}
  $.ajax({
  	type: 'POST',
  	url: 'votarPropuesta',
  	data: data
  }).done(function(data){
  	alert(data)
  })
  })
});

$('#ModificarID').submit(function(e){
	alert("Se ha modificado el pedido")
	web3.eth.getAccounts(function (error,accounts){
	var menu= {
		primero: $('#Mprimero').val(),
		segundo: $('#Msegundo').val(),
		postre: $('#Mpostre').val(),
		account: accounts[0]
	};
    $.ajax({
        type: 'POST',
        url: 'Modificar',
        data: menu
        }).done(function(data){
           		alert(data)
           })
    })
});
});

