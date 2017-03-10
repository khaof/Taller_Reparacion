cargarComboEmpleado();
function cargarComboEmpleado(){
	var oArrayEmple = null;
	$.get('php/empleados/listadoEmpleados.php',null,tratarcomboEmple,'json');

}

function tratarcomboEmple(oArrayEmple, sStatus, oXHR){
		rellenaComboEmple(oArrayEmple);			
}

function rellenaComboEmple(oArrayEmple){
		$("#comboEmpleados").empty();		
		
		$.each(oArrayEmple.resultado, function( i , elemento){	
			$('<option value="' + elemento.dniempleado + '" >' + elemento.dniempleado + '</option>').appendTo("#comboEmpleados");	
		});

}