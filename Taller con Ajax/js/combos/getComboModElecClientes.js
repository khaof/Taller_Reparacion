cargarComboDniModElec();
function cargarComboDniModElec(){
	var oArrayDni = null;
		$.get('php/clientes/listadoCliente.php',null,tratarComboDniModElectro,'json');
}

function tratarComboDniModElectro(oArrayDni, sStatus, oXHR){
		rellenaComboModElectro(oArrayDni);		
}

function rellenaComboModElectro(oArrayDni){
		$("#comboModElecDniClientes").empty();		
		
		$.each(oArrayDni.resultado, function( i , elemento){	
			$('<option value="' + elemento.dnicliente + '" >' + elemento.dnicliente + '</option>').appendTo("#comboModElecDniClientes");	
		});

}
