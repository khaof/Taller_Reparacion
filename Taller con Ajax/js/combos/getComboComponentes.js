cargarComboComponente();
function cargarComboComponente(){
	var oArrayComponente = null;
		$.get('php/componentes/listadoComponentes.php',null,tratarComboComponentes,'json');

}

function tratarComboComponentes(oArrayComponente, sStatus, oXHR){
		rellenaComboComponentes(oArrayComponente);			
}

function rellenaComboComponentes(oArrayComponente){
		$("#comboComponentes").empty();		
		
		$.each(oArrayComponente.resultado, function( i , elemento){	
			$('<option value="' + elemento.idcomponente + '" >' + elemento.idcomponente + '</option>').appendTo("#comboComponentes");	
		});

}


cargarDatosComponentes();

function cargarDatosComponentes(){
	$.get('php/componentes/listadoComponentes.php',null,tratarDatosComponentes,'json');
}

function tratarDatosComponentes(oComponente, sStatus, oXHR){
		rellenaCamposModComponentes(oComponente);			
}
//relleno los campos con el metodo change de jquery
function rellenaCamposModComponentes(oComponente){
	
	$('#comboComponentes').on('change', function() {
		
	  		$.each(oComponente.resultado, function( i , elemento){
	  			//si el valor del selct de dni coincide con lo que hay en el array en la posicion de i te mete los valores de cada campo
	  			if($("#comboComponentes").val() == elemento.idcomponente){
	
	  				$("#formModComponente input[name=txtNombreComponente]").val(elemento.nombre);
	  				$("#formModComponente input[name=txtPrecio]").val(elemento.preciocomponente);

	  			}

			});
	});
}