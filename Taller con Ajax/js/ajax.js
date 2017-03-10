var oAjax = inicializa_xhr();

function peticionAjax(sURL,sParametros){

	// PRIMERO: configuracion de la peticion
	oAjax = inicializa_xhr();

	oAjax.open("POST",sURL,true);
	
	oAjax.addEventListener("readystatechange",procesarRespuesta,false);	

	oAjax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	
	// SEGUNDO : hacer la peticion
	oAjax.send(sParametros);	
}
function inicializa_xhr() {
	if (window.XMLHttpRequest) {
		return new XMLHttpRequest(); 
	} else if (window.ActiveXObject) {
		return new ActiveXObject("Microsoft.XMLHTTP"); 
	} 
}

function procesarRespuesta(){
	// TERCERO: procesar respuesta cuando llega
	if (oAjax.readyState == 4 && oAjax.status == 200){
		 var oObjeto = JSON.parse(oAjax.responseText);
		 
		 switch(oObjeto.accion){
		 	case 100: // Altas
		 	case 200: // modificacion
		 		$("#divMensajes").dialog("option","title", oObjeto.mensaje);
		 		$("#divMensajes").text(oObjeto.resultado);

				$("#divMensajes").dialog("open");	 
				break;	
		 }
	}
}  