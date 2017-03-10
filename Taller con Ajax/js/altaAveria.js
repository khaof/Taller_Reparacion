$("#formAltaAveria").dialog({
	autoOpen: false,
    height: 520,
    width: 550,
    modal: true, 
	buttons: [{text: "Aceptar",click: AltaAveria}, {text: "AgregarComponente",click: altaComponentes}, {text: "Cerrar",click: function() {$("#formAltaAveria").dialog("close");}
    }]
});

function altaComponentes(){
	//validacion
	var bValido = true;
	var arrayErrores = [];
	//Campo idAveria
	var idAveria = document.formAltaAveria.txtIdParteAveria.value.trim();
	// Trim
	document.formAltaAveria.txtIdParteAveria.value = document.formAltaAveria.txtIdParteAveria.value.trim();

	var oExpReg = /^[a-zA-Z\s]{3}[0-9]{1}$/;
	
	if (oExpReg.test(idAveria) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formAltaAveria.txtIdParteAveria.focus();		
		}
	
		arrayErrores.push("El ID debe estar relleno y con este formato: ave1");
		
		//Marcar error
		document.formAltaAveria.txtIdParteAveria.className = "form-control  error";
	
	}else{
	//Desmarcar error
	document.formAltaAveria.txtIdParteAveria.className = "form-control control";	
	}
	//campo precio
	var sUnidades = document.formAltaAveria.txtUnidades.value.trim();
	// Trim
	document.formAltaAveria.txtUnidades.value = document.formAltaAveria.txtUnidades.value.trim();

	var oExpReg =  /^([0-9])*$/;
	
	if (oExpReg.test(sUnidades) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formAltaAveria.txtUnidades.focus();		
		}
	
		arrayErrores.push("Unidades incorrectas");
		
		//Marcar error
		document.formAltaAveria.txtUnidades.className = "form-control  error";
	
	}else {
		//Desmarcar error
		document.formAltaAveria.txtUnidades.className = "form-control control";	
	}

	//campo precio
	var sPrecio = document.formAltaAveria.txtPrecioCompo.value.trim();
	// Trim
	document.formAltaAveria.txtPrecioCompo.value = document.formAltaAveria.txtPrecioCompo.value.trim();

	var oExpReg =  /^([0-9])*$/;
	
	if (oExpReg.test(sPrecio) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formAltaAveria.txtPrecioCompo.focus();		
		}
	
		arrayErrores.push("Precio incorrecto");
		
		//Marcar error
		document.formAltaAveria.txtPrecioCompo.className = "form-control  error";
	
	}else {
		//Desmarcar error
		document.formAltaAveria.txtPrecioCompo.className = "form-control control";	
	}

	if (bValido == false){
		//Mostrar errores
		for(var i =0; i<arrayErrores.length;i++){
			$("#divMensajes").append(arrayErrores[i]+"<br>");	
		}
		$("#divMensajes").dialog("open");
	}else{
	comboComponentes = document.formAltaAveria.comboComponente.selectedIndex;

		var oLineaComponente = {
			idAveria : document.formAltaAveria.txtIdParteAveria.value.trim(),
			unidades : document.formAltaAveria.txtUnidades.value.trim(),	
			comboComp : document.formAltaAveria.comboComponente.options[comboComponentes].value.trim(),
			precio : document.formAltaAveria.txtPrecioCompo.value.trim()
		}	
		sURL = "php/lineacomponentes/altaLinea.php";
		sParametros = "datos="+JSON.stringify(oLineaComponente);
		peticionAjax(sURL, sParametros);

	}
}



function AltaAveria(){
	// //validacion
	var bValido = true;
	var arrayErrores = [];
	
	// Validaciones
	//Campo nombre
	var idAveria = document.formAltaAveria.txtIdParteAveria.value.trim();
	// Trim
	document.formAltaAveria.txtIdParteAveria.value = document.formAltaAveria.txtIdParteAveria.value.trim();

	var oExpReg = /^[a-zA-Z\s]{3}[0-9]{1}$/;
	
	if (oExpReg.test(idAveria) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formAltaAveria.txtIdParteAveria.focus();		
		}
	
		arrayErrores.push("ID incorrecta ave1");
		
		//Marcar error
		document.formAltaAveria.txtIdParteAveria.className = "form-control  error";
	
	}
	else {
	//Desmarcar error
	document.formAltaAveria.txtIdParteAveria.className = "form-control control";	
	}
	//Resultado
	if (bValido == false){
		//Mostrar errores
		for(var i =0; i<arrayErrores.length;i++){
			$("#divMensajes").append(arrayErrores[i]+"<br>");	
		}
		$("#divMensajes").dialog("open");
	}else{

		comboElectrodomesticos = document.formAltaAveria.comboElectrodomestico.selectedIndex;
		comboEmpleado = document.formAltaAveria.comboEmpleados.selectedIndex;
		comboComponentes = document.formAltaAveria.comboComponente.selectedIndex;
		
		var oIdAveria = {
			idAveria : document.formAltaAveria.txtIdParteAveria.value.trim(),
			fecha : $("#datepicker").val(),
			comboElec : document.formAltaAveria.comboElectrodomestico.options[comboElectrodomesticos].value.trim(),
			comboEmpl : $("#comboEmpleados").val(),
			comboComp : document.formAltaAveria.comboComponente.options[comboComponentes].value.trim(),
		}
		
		sURL = "php/partesaverias/altaAveria.php";
		sParametros = "datos="+JSON.stringify(oIdAveria);
		peticionAjax(sURL, sParametros);		
		
	}
}
$("#datepicker").datepicker({dateFormat: 'dd/mm/yy'});	