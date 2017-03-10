cargarComboCompo();
function cargarComboCompo(){
	var oArrayCompo = null;
		$.get('php/componentes/listadoComponentes.php',null,tratarComboCompo,'json');

}

function tratarComboCompo(oArrayCompo, sStatus, oXHR){
		rellenaComboCompo(oArrayCompo);			
}

function rellenaComboCompo(oArrayCompo){
		$("#comboComponente").empty();		
		
		$.each(oArrayCompo.resultado, function( i , elemento){	
			$('<option value="' + elemento.idcomponente + '" >' + elemento.nombre + '</option>').appendTo("#comboComponente");	
		});

}