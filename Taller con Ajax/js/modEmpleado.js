//creo el dialogo
$( "#formModEmpleado" ).dialog({
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
            $("#formModEmpleado").dialog("close");
        }
    }]
});

function validarEmpleado(){
	var bValido = true;
	var arrayErrores = [];

	//Campo nombre
	var sNombre = document.formModEmpleado.txtNombreEmple.value.trim();
	// Trim
	document.formModEmpleado.txtNombreEmple.value = document.formModEmpleado.txtNombreEmple.value.trim();

	var oExpReg = /^[a-zA-Z\s]{3,40}$/;
	
	if (oExpReg.test(sNombre) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formModEmpleado.txtNombreEmple.focus();		
		}
	
		arrayErrores.push("Nombre incorrecto. Debe tener entre 3 y 40 caracteres");
		
		//Marcar error
		document.formModEmpleado.txtNombreEmple.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formModEmpleado.txtNombreEmple.className = "form-control control";	
	}
	
	//Campo apellido
	var sApellido = document.formModEmpleado.txtApellidosEmple.value.trim();
	// Trim
	document.formModEmpleado.txtApellidosEmple.value = document.formModEmpleado.txtApellidosEmple.value.trim();

	var oExpReg = /^[a-zA-ZñÑ\s\W]{5,60}$/;
	
	if (oExpReg.test(sApellido) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formModEmpleado.txtApellidosEmple.focus();		
		}
	
		arrayErrores.push("Apellido incorrecto. Debe tener un tamaño entre 5 y 60");
		//Marcar error
		document.formModEmpleado.txtApellidosEmple.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formModEmpleado.txtApellidosEmple.className = "form-control control";	
	}

	//Resultado
	if (bValido == false){	
		//Mostrar errores
		for(var i =0; i<arrayErrores.length;i++){
			$("#divMensajes").append(arrayErrores[i]+"<br>");	
		}
		$("#divMensajes").dialog("open");
		
	}else{
		var combo = document.formModEmpleado.comboDniEmpleados.selectedIndex;
		var oEmpleado = {
			dni : document.formModEmpleado.comboDniEmpleados[combo].value.trim(),
			nombre : document.formModEmpleado.txtNombreEmple.value.trim(),
			apellidos : document.formModEmpleado.txtApellidosEmple.value.trim(),
		}
		
		sURL = "php/empleados/modificacionEmpleados.php";
		sParametros = "datos="+JSON.stringify(oEmpleado);
		peticionAjax(sURL, sParametros);		
			
		document.formModEmpleado.reset();
	}
}
