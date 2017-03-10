cargarComboCli();
function cargarComboCli(){
	var oArrayCli = null;
	$.get('php/clientes/listadoCliente.php',null,tratarComboCli,'json');
}

function tratarComboCli(oArrayCli, sStatus, oXHR){
		rellenaComboCli(oArrayCli);			
}

function rellenaComboCli(oArrayCli){
		$("#comboDniCli").empty();		
		
		$.each(oArrayCli.resultado, function( i , elemento){	
			$('<option value="' + elemento.dnicliente + '" >' + elemento.nombre +" "+ elemento.apellidos + '</option>').appendTo("#comboDniCli");	
		});

}