//modificacion juanjo 06/03/17
cargarComboDniEmpleado();
function cargarComboDniEmpleado(){
	var oArrayEmpleado = null;
	$.get('php/empleados/listadoEmpleados.php',null,tratarComboDniEmpleado,'json');

}

function tratarComboDniEmpleado(oArrayEmpleado, sStatus, oXHR){
		rellenaComboEmpleado(oArrayEmpleado);			
}

function rellenaComboEmpleado(oArrayEmpleado){
		$("#comboDniEmpleados").empty();		
		
		$.each(oArrayEmpleado.resultado, function( i , elemento){	
			$('<option value="' + elemento.dniempleado + '" >' + elemento.dniempleado + '</option>').appendTo("#comboDniEmpleados");	
		});

}

cargarDatosEmpleados();
//hago una peticion get para volver a obtener los datos de empleado
function cargarDatosEmpleados(){
	$.get('php/empleados/listadoEmpleados.php',null,tratarDatosEmpleados,'json');
}

function tratarDatosEmpleados(oEmpleado, sStatus, oXHR){
		rellenaCamposModEmpleado(oEmpleado);			
}
//relleno los campos con el metodo change de jquery
function rellenaCamposModEmpleado(oEmpleado){
	
	$('#comboDniEmpleados').on('change', function() {
		
	  		$.each(oEmpleado.resultado, function( i , elemento){
	  			//si el valor del selct de dni coincide con lo que hay en el array en la posicion de i te mete los valores de cada campo
	  			if($("#comboDniEmpleados").val() == elemento.dniempleado){
	
	  				$("#formModEmpleado input[name=txtNombreEmple]").val(elemento.nombre);
	  				$("#formModEmpleado input[name=txtApellidosEmple]").val(elemento.apellidos);
	  			}

			});
	});
}