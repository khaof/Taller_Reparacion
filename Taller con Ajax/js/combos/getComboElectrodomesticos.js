cargarComboElec();
function cargarComboElec(){
	var oArrayElect = null;
		$.get('php/electrodomesticos/listadoElectrodomestico.php',null,tratarComboElec,'json');
}

function tratarComboElec(oArrayElect, sStatus, oXHR){
		rellenaComboElec(oArrayElect);		
}

function rellenaComboElec(oArrayElect){
		$("#comboElectrodomestico").empty();		
		
		$.each(oArrayElect.resultado, function( i , elementos){	
			$('<option value="' + elementos.numref + '" >' + elementos.numref + '</option>').appendTo("#comboElectrodomestico");	
		});

}
