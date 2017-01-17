function ocultar(){
	var estolado = document.querySelectorAll('.formulario');
	for(var i=0;i<estolado.length;i++){
    	estolado[i].style.display = "none";
	}
}
document.getElementById("btnAltaCliente").addEventListener("click", function(){
	ocultar();
	//Muestra
    document.getElementById("altaCliente").style.display = "block";
});
document.getElementById("btnModificaCliente").addEventListener("click", function(){
	ocultar();
	//Muestra
    document.getElementById("modificaCliente").style.display = "block";
});
document.getElementById("btnVerFactura").addEventListener("click", function(){
	ocultar();
	//Muestra
    document.getElementById("modificaFacturaReparacion").style.display = "block";
});
document.getElementById("BtnBajaFactura").addEventListener("click", function(){
	ocultar();
	//Muestra
    document.getElementById("bajaFacturaReparación").style.display = "block";
});
document.getElementById("btnAltaElectrodomestico").addEventListener("click", function(){
	ocultar();
	//Muestra 
    document.getElementById("altaElectrodomestico").style.display = "block";
});
document.getElementById("btnBajaElectrodomestico").addEventListener("click", function(){
	ocultar();
	//Muestra 
    document.getElementById("bajaElectrodomestico").style.display = "block";
});
document.getElementById("btnAltaRecambio").addEventListener("click", function(){
	ocultar();
	//Muestra 
    document.getElementById("altaRecambio").style.display = "block";
});
document.getElementById("btnConsultaRecambio").addEventListener("click", function(){
	ocultar();
	//Muestra 
    document.getElementById("consultarRecambio").style.display = "block";
});
document.getElementById("btnBajaRecambio").addEventListener("click", function(){
	ocultar();
	//Muestra 
    document.getElementById("bajaRecambio").style.display = "block";
});
document.getElementById("btnAltaProveedor").addEventListener("click", function(){
	ocultar();
	//Muestra 
    document.getElementById("altaProveedor").style.display = "block";
});
document.getElementById("btnConsultaProveedor").addEventListener("click", function(){
 	ocultar();
	//Muestra 
    document.getElementById("consultarProveedor").style.display = "block";
});
document.getElementById("btnBajaProveedor").addEventListener("click", function(){
	ocultar();
	//Muestra 
    document.getElementById("bajaProveedor").style.display = "block";
});
document.getElementById("btnConsultaElctrodomesticos").addEventListener("click", function(){
	ocultar();
	//Muestra 
    document.getElementById("consultarElectrodomesticos").style.display = "block";
});
document.getElementById("btnAltaAvería").addEventListener("click", function(){
	ocultar();
	//Muestra 
    document.getElementById("altaAveria").style.display = "block";
});
document.getElementById("btnModificarAvería").addEventListener("click", function(){
	ocultar();
	//Muestra 
    document.getElementById("modificaAveria").style.display = "block";
});
document.getElementById("btnConsultaAvería").addEventListener("click", function(){
	ocultar();
	//Muestra  
    document.getElementById("consultarAveria").style.display = "block";
});
document.getElementById("btnAltaPresupuesto").addEventListener("click", function(){
	ocultar();
	//Muestra  
    document.getElementById("altaPresupuesto").style.display = "block";
});
document.getElementById("btnModificaPresupuesto").addEventListener("click", function(){
	ocultar();
	//Muestra  
    document.getElementById("modificaPresupuesto").style.display = "block";
});
document.getElementById("btnAltaEmpleado").addEventListener("click", function(){
	ocultar();
	//Muestra  
    document.getElementById("altaEmpleado").style.display = "block";
});
document.getElementById("btnBajaEmpleado").addEventListener("click", function(){
	ocultar();
	//Muestra  
    document.getElementById("bajaEmpleado").style.display = "block";
});
document.getElementById("btnModificaEmpleado").addEventListener("click", function(){
	ocultar();
	//Muestra  
    document.getElementById("modificaEmpleado").style.display = "block";
});
//FIN OCULTAR FORMULARIOS

//VALIDAR FORMULARIO
document.formAltaCliente.btnAltaCli.addEventListener("click", validarAltaCli);
document.formModificaCli.btnModiCli.addEventListener("click", validarModiCli);
//document.FormModificaFacturaReparacion.btnModiFacRepa.addEventListener("click", validarModiFacRepa);

function validarAltaCli(oEvento){
	var oE = oEvento || window.event;
	var bValido = true;
	var sErrores = "";
	
	// Validaciones

	//Campo dni
	var sDNI = document.formAltaCliente.txtDNI.value.trim();
	// Trim
	document.formAltaCliente.txtDNI.value = document.formAltaCliente.txtDNI.value.trim();

	var oExpReg = /^\d{8}[a-zA-Z]$/;
	
	if (oExpReg.test(sDNI) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formAltaCliente.txtDNI.focus();		
		}
	
		sErrores += "\nDNI incorrecto";
		
		//Marcar error
		document.formAltaCliente.txtDNI.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formAltaCliente.txtDNI.className = "form-control control";	
	}

	//Campo nombre
	var sNombre = document.formAltaCliente.txtNombre.value.trim();
	// Trim
	document.formAltaCliente.txtNombre.value = document.formAltaCliente.txtNombre.value.trim();

	var oExpReg = /^[a-zA-Z\s]{3,40}$/;
	
	if (oExpReg.test(sNombre) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formAltaCliente.txtNombre.focus();		
		}
	
		sErrores += "\nNombre incorrecto";
		
		//Marcar error
		document.formAltaCliente.txtNombre.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formAltaCliente.txtNombre.className = "form-control control";	
	}
	
	//Campo apellido
	var sApellido = document.formAltaCliente.txtApellidos.value.trim();
	// Trim
	document.formAltaCliente.txtApellidos.value = document.formAltaCliente.txtApellidos.value.trim();

	var oExpReg = /^[a-zA-Z\s]{3,40}$/;
	
	if (oExpReg.test(sApellido) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formAltaCliente.txtApellidos.focus();		
		}
	
		sErrores += "\nApellido incorrecto";
		
		//Marcar error
		document.formAltaCliente.txtApellidos.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formAltaCliente.txtApellidos.className = "form-control control";	
	}

	//Campo telefono
	var sTelefono = document.formAltaCliente.txtTelefono.value.trim();
	// Trim
	document.formAltaCliente.txtTelefono.value = document.formAltaCliente.txtTelefono.value.trim();

	var oExpReg = /^[679]*\d{8}$/;
	
	if (oExpReg.test(sTelefono) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formAltaCliente.txtTelefono.focus();		
		}
	
		sErrores += "\nTeléfono incorrecto";
		
		//Marcar error
		document.formAltaCliente.txtTelefono.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formAltaCliente.txtTelefono.className = "form-control control";	
	}

	//Campo direccion
	var sDireccion = document.formAltaCliente.txtDireccion.value.trim();
	// Trim
	document.formAltaCliente.txtDireccion.value = document.formAltaCliente.txtDireccion.value.trim();

	var oExpReg =  /^[a-zA-Z\s]{3,60}$/;
	
	if (oExpReg.test(sDireccion) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formAltaCliente.txtDireccion.focus();		
		}
	
		sErrores += "\nDirección incorrecta";
		
		//Marcar error
		document.formAltaCliente.txtDireccion.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formAltaCliente.txtDireccion.className = "form-control control";	
	}

	//Campo e-mail
	var sEmail = document.formAltaCliente.txtMail.value.trim();
	// Trim
	document.formAltaCliente.txtMail.value = document.formAltaCliente.txtMail.value.trim();

	var oExpReg =  /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
	
	if (oExpReg.test(sDireccion) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formAltaCliente.txtMail.focus();		
		}
	
		sErrores += "\nE-Mail incorrecto";
		
		//Marcar error
		document.formAltaCliente.txtMail.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formAltaCliente.txtMail.className = "form-control control";	
	}


	//Resultado
	if (bValido == false){
		//Cancelar envio del formulario
		oE.preventDefault();
		//Mostrar errores
		alert(sErrores);
	}
	return bValido;
}
function validarModiCli(oEvento){
	var oE = oEvento || window.event;
	var bValido = true;
	var sErrores = "";
	
	// Validaciones
	//Campo telefono
	var sTelefono = document.formModificaCli.txtTelefono.value.trim();
	// Trim
	document.formModificaCli.txtTelefono.value = document.formModificaCli.txtTelefono.value.trim();

	var oExpReg = /^[679]*\d{8}$/;
	
	if (oExpReg.test(sTelefono) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formModificaCli.txtTelefono.focus();		
		}
	
		sErrores += "\nTeléfono incorrecto";
		
		//Marcar error
		document.formModificaCli.txtTelefono.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formModificaCli.txtTelefono.className = "form-control control";	
	}

	//Campo direccion
	var sDireccion = document.formModificaCli.txtDireccion.value.trim();
	// Trim
	document.formModificaCli.txtDireccion.value = document.formModificaCli.txtDireccion.value.trim();

	var oExpReg =  /^[a-zA-Z\s]{3,60}$/;
	
	if (oExpReg.test(sDireccion) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formModificaCli.txtDireccion.focus();		
		}
	
		sErrores += "\nDirección incorrecta";
		
		//Marcar error
		document.formModificaCli.txtDireccion.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formModificaCli.txtDireccion.className = "form-control control";	
	}

	//Campo e-mail
	var sEmail = document.formModificaCli.txtMail.value.trim();
	// Trim
	document.formModificaCli.txtMail.value = document.formModificaCli.txtMail.value.trim();

	var oExpReg =  /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
	
	if (oExpReg.test(sDireccion) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formModificaCli.txtMail.focus();		
		}
	
		sErrores += "\nE-Mail incorrecto";
		
		//Marcar error
		document.formModificaCli.txtMail.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formModificaCli.txtMail.className = "form-control control";	
	}


	//Resultado
	if (bValido == false){
		//Cancelar envio del formulario
		oE.preventDefault();
		//Mostrar errores
		alert(sErrores);
	}
	return bValido;
}
/*function validarModiFacRepa(oEvento){
	var oE = oEvento || window.event;
	var bValido = true;
	var sErrores = "";
	
	// Validaciones
	//Campo telefono
	var sPagada = document.FormModificaFacturaReparacion.txtFacPaga.value.trim();
	// Trim
	document.FormModificaFacturaReparacion.txtFacPaga.value = document.FormModificaFacturaReparacion.txtFacPaga.value.trim();

	var oExpReg = /^[Si-No]*\d{8}$/;
	
	if (oExpReg.test(sTelefono) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.FormModificaFacturaReparacion.txtFacPaga.focus();		
		}
	
		sErrores += "\nTeléfono incorrecto";
		
		//Marcar error
		document.FormModificaFacturaReparacion.txtFacPaga.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.FormModificaFacturaReparacion.txtFacPaga.className = "form-control control";	
	}


	

	//Resultado
	if (bValido == false){
		//Cancelar envio del formulario
		oE.preventDefault();
		//Mostrar errores
		alert(sErrores);
	}
	return bValido;
}*/


//FIN VALIDAR

var closeWindow = document.getElementById("cerrarVentana");
closeWindow.addEventListener("click", ocultaVentana, false);
function ocultaVentana(){
	document.getElementById("capaFondo").style.visibility="hidden";
	document.getElementById("capaVentana").style.visibility="hidden";
}