//modificacion juanjo 06/03/17
cargarComboDniAltaElec();
function cargarComboDniAltaElec(){
	var oArrayDni = null;
	// Existe en almacenamiento local
	//if(localStorage["dni"] != null){
		//oArrayDni = JSON.parse(localStorage["dni"]);
		//rellenaCombo(oArrayDni);
	//} else {
		$.get('php/clientes/listadoCliente.php',null,tratarComboDniAltaElectro,'json');
	//}
}

function tratarComboDniAltaElectro(oArrayDni, sStatus, oXHR){
		rellenaComboAltaElectro(oArrayDni);		
		// Guardar en localStorage
		//localStorage["dni"] = JSON.stringify(oArrayDni);		
}

function rellenaComboAltaElectro(oArrayDni){
		$("#getComboAltaElecClientes").empty();		
		
		$.each(oArrayDni.resultado, function( i , elemento){	
			$('<option value="' + elemento.dnicliente + '" >' + elemento.dnicliente + '</option>').appendTo("#getComboAltaElecClientes");	
		});

}


//cargo dlos datos del cliente
//cargarDatosClientes();
//hago una peticion get para volver a obtener los datos de clientes
/*function cargarDatosClientes(){
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
	});}*/
