//modificacion juanjo 06/03/17
cargarComboDni();
function cargarComboDni(){
	var oArrayDni = null;
	// Existe en almacenamiento local
	if(localStorage["dni"] != null){
		oArrayDni = JSON.parse(localStorage["dni"]);
		rellenaCombo(oArrayDni);
	} else {
		$.get('php/clientes/listadoCliente.php',null,tratarComboDni,'json');
	}
}

function tratarComboDni(oArrayDni, sStatus, oXHR){
		rellenaCombo(oArrayDni);		
		// Guardar en localStorage
		localStorage["dni"] = JSON.stringify(oArrayDni);		
}

function rellenaCombo(oArrayDni){
		$("#comboDniClientes").empty();		
		
		$.each(oArrayDni.resultado, function( i , elemento){	
			$('<option value="' + elemento.dnicliente + '" >' + elemento.dnicliente + '</option>').appendTo("#comboDniClientes");	
		});

}


//cargo dlos datos del cliente
cargarDatosClientes();
//hago una peticion get para volver a obtener los datos de clientes
function cargarDatosClientes(){
	$.get('php/clientes/listadoCliente.php',null,tratarDatosClientes,'json');
}

function tratarDatosClientes(oClientes, sStatus, oXHR){
		rellenaCamposModCliente(oClientes);			
}
//relleno los campos con el metodo change de jquery
function rellenaCamposModCliente(oClientes){
	
	$('#comboDniClientes').on('change', function() {
		
	  		$.each(oClientes.resultado, function( i , elemento){
	  			//si el valor del selct de dni coincide con lo que hay en el array en la posicion de i te mete los valores de cada campo
	  			if($("#comboDniClientes").val() == elemento.dnicliente){
	
	  				$("#formModificaCli input[name=txtNombre]").val(elemento.nombre);
	  				$("#formModificaCli input[name=txtApellidos]").val(elemento.apellidos);
	  				$("#formModificaCli input[name=txtDireccion]").val(elemento.direccion);
	  				$("#formModificaCli input[name=txtMail]").val(elemento.email);

	  			}

			});
	});
}