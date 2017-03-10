//creo el dialogo
  $( "#formAltaEmpleado" ).dialog({
   	resizable : false,
   	modal : true,
   	width : 550,
   	heigth : 550,
   	open: function (event, ui) {
   		$(this).css('overflow', 'hidden')
   		$(this).closest(".ui-dialog")
   		.find(".ui-dialog-titlebar-close")
   		.removeClass("ui-dialog-titlebar-close")
   		.html("<span class='ui-button-icon-primary ui-icon ui-icon-closethick'></span>");
   	},
   	hide: {
   		effect: "explode",
   		duration: 1000
   	},
    buttons: [{
        text: "Aceptar",
        click: validarEmpleado
    }, {
        text: "Cerrar",
        click: function() {
            $("#formAltaEmpleado").dialog("close");
        }
    }]
   });

//funcion ajax con datos serializados
function altaEmpleado(){
    var oEmpleado =  $("#formuAltaEmpleado").serialize();
   	$.ajax({ 
          url : "php/empleados/altaEmpleados.php",
          data: oEmpleado,
          async: true, // Valor por defecto
          dataType :'json',
          method: "POST",
          cache: false, // ya por defecto es false para POST
          success: tratarRespuestaAltaEmpleado,
          error :tratarErrorAltaEmpleado
   	});

}
function tratarRespuestaAltaEmpleado(oArrayRespuesta,sStatus,oXHR){
      if (oArrayRespuesta[0] == true){
         //alert("Error : " + oArrayRespuesta[1]);
         $("#divMensajes").append("Error al insertar el empleado");
         $("#divMensajes").dialog("open");
      } else {
         $("#divMensajes").append("Empleado insertado correctamente");
         $("#divMensajes").dialog("open");
      }
}

function tratarErrorAltaEmpleado(oXHR,sStatus,sError){
   $("#divMensajes").append("sStatus: "+sStatus+" / sError: "+sError);
   $("#divMensajes").dialog("open");
}

//Validad campos
function validarEmpleado(){
	var bValido = true;
	var arrayErrores = [];
	// Validaciones
	//Campo dni
	var sDNI = document.formAltaEmpleado.dni.value.trim();
	// Trim
	document.formAltaEmpleado.dni.value = document.formAltaEmpleado.dni.value.trim();

	var oExpReg = /^\d{8}[a-zA-Z]$/;
	
	if (oExpReg.test(sDNI) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formAltaEmpleado.dni.focus();		
		}
	
		arrayErrores.push("DNI incorrecto");
		
		//Marcar error
		document.formAltaEmpleado.dni.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formAltaEmpleado.dni.className = "form-control control";	
	}

	//Campo nombre
	var sNombre = document.formAltaEmpleado.nombre.value.trim();
	// Trim
	document.formAltaEmpleado.nombre.value = document.formAltaEmpleado.nombre.value.trim();

	var oExpReg = /^[a-zA-Z\s]{3,40}$/;
	
	if (oExpReg.test(sNombre) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formAltaEmpleado.nombre.focus();		
		}
	
		arrayErrores.push("Nombre incorrecto. Debe tener entre 3 y 40 caracteres");
		
		//Marcar error
		document.formAltaEmpleado.nombre.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formAltaEmpleado.nombre.className = "form-control control";	
	}
	
	//Campo apellido
	var sApellido = document.formAltaEmpleado.apellidos.value.trim();
	// Trim
	document.formAltaEmpleado.apellidos.value = document.formAltaEmpleado.apellidos.value.trim();

	var oExpReg = /^[a-zA-ZñÑ\s\W]{5,60}$/;
	
	if (oExpReg.test(sApellido) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formAltaEmpleado.apellidos.focus();		
		}
	
		arrayErrores.push("Apellido incorrecto. Debe tener un tamaño entre 5 y 60");
		//Marcar error
		document.formAltaEmpleado.apellidos.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formAltaEmpleado.apellidos.className = "form-control control";	
	}

	//Resultado
	if (bValido == false){	
		//Mostrar errores
		for(var i =0; i<arrayErrores.length;i++){
			$("#divMensajes").append(arrayErrores[i]+"<br>");	
		}
		$("#divMensajes").dialog("open");
		
	}else{
		altaEmpleado();
	}
}