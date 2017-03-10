cargarComboNumRef();
function cargarComboNumRef(){
	var oArrayNumRef = null;
		$.get('php/electrodomesticos/listadoElectrodomestico.php',null,tratarComboNumRef,'json');

}

function tratarComboNumRef(oArrayNumRef, sStatus, oXHR){
		rellenaComboNumRef(oArrayNumRef);			
}

function rellenaComboNumRef(oArrayNumRef){
		$("#comboModElecRef").empty();		
		
		$.each(oArrayNumRef.resultado, function( i , elemento){	
			$('<option value="' + elemento.numref + '" >' + elemento.numref + '</option>').appendTo("#comboModElecRef");	
		});

}


cargarDatosElectrodomesticos();

function cargarDatosElectrodomesticos(){
	$.get('php/electrodomesticos/listadoElectrodomestico.php',null,tratarDatosElectrodomesticos,'json');
}

function tratarDatosElectrodomesticos(oElectro, sStatus, oXHR){
		rellenaCamposModElectrodomesticos(oElectro);			
}
//relleno los campos con el metodo change de jquery
function rellenaCamposModElectrodomesticos(oElectro){
	
	$('#comboModElecRef').on('change', function() {
		
	  		$.each(oElectro.resultado, function( i , elemento){
	  			//si el valor del selct de dni coincide con lo que hay en el array en la posicion de i te mete los valores de cada campo
	  			if($("#comboModElecRef").val() == elemento.numref){
	
	  				$("#formModElectrodomestico input[name=txtNombreElec]").val(elemento.nombre);
	  				$("#formModElectrodomestico input[name=txtMarca]").val(elemento.marca);
	  				$("#formModElectrodomestico #comboModElecDniClientes").val(elemento.dnicliente);

	  			}

			});
	});
}