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
document.formBajaFacturaReparacion.btnBajaFactura.addEventListener("click", validarBajaFact);
document.formAltaElectrodomestico.btnAltaElect.addEventListener("click", validarAltaElect);
document.formBajaElectrodomestico.btnBajaElect.addEventListener("click", validarBajaElect);
document.formAltaProveedor.btnAltaProv.addEventListener("click", validarAltaProv);
document.formConsultarProveedor.btnConsultaPro.addEventListener("click", validarconsultProv);
document.formBajaProveedor.btnBajaProv.addEventListener("click", validarbajaProv);
document.formConsultarElectro.btnConsultarElec.addEventListener("click", validarConsultaElectro);
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
function validarBajaFact(oEvento){
	var oE = oEvento || window.event;
	var bValido = true;
	var sErrores = "";
	
	// Validaciones
	//Campo idFactura
	var sIdFactura = document.formBajaFacturaReparacion.txtIdFactura.value.trim();
	// Trim
	document.formBajaFacturaReparacion.txtIdFactura.value = document.formBajaFacturaReparacion.txtIdFactura.value.trim();

	var oExpReg = /^[0-9]$/;
	
	if (oExpReg.test(sIdFactura) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formBajaFacturaReparacion.txtIdFactura.focus();		
		}
	
		sErrores += "\nEl ID Debe ser un número";
		
		//Marcar error
		document.formBajaFacturaReparacion.txtIdFactura.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formBajaFacturaReparacion.txtIdFactura.className = "form-control control";	
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
function validarAltaElect(oEvento){
	var oE = oEvento || window.event;
	var bValido = true;
	var sErrores = "";
	
	//Validaciones
	//Campo numRefElectrodomestico
	var sNumRefElec = document.formAltaElectrodomestico.txtNumRef.value.trim();
	// Trim
	document.formAltaElectrodomestico.txtNumRef.value = document.formAltaElectrodomestico.txtNumRef.value.trim();

	var oExpReg = /^[0-9]$/;
	
	if (oExpReg.test(sNumRefElec) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formAltaElectrodomestico.txtNumRef.focus();		
		}
	
		sErrores += "\nEl numero de referencia debe ser un número";
		
		//Marcar error
		document.formAltaElectrodomestico.txtNumRef.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formAltaElectrodomestico.txtNumRef.className = "form-control control";	
	}
	//Campo nombre
	var sNombreElectr = document.formAltaElectrodomestico.txtNombreElec.value.trim();
	// Trim
	document.formAltaElectrodomestico.txtNombreElec.value = document.formAltaElectrodomestico.txtNombreElec.value.trim();

	var oExpReg = /^[a-zA-Z\s]{3,40}$/;
	
	if (oExpReg.test(sNombreElectr) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formAltaElectrodomestico.txtNombreElec.focus();		
		}
	
		sErrores += "\nCampo nombre incorrecto";
		
		//Marcar error
		document.formAltaElectrodomestico.txtNombreElec.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formAltaElectrodomestico.txtNombreElec.className = "form-control control";	
	}

	//Campo marca 
	var smarcaElectr = document.formAltaElectrodomestico.txtMarca.value.trim();
	// Trim
	document.formAltaElectrodomestico.txtMarca.value = document.formAltaElectrodomestico.txtMarca.value.trim();

	var oExpReg = /^[a-zA-Z\s]{3,40}$/;
	
	if (oExpReg.test(smarcaElectr) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formAltaElectrodomestico.txtMarca.focus();		
		}
	
		sErrores += "\nCampo marca incorrecto";
		
		//Marcar error
		document.formAltaElectrodomestico.txtMarca.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formAltaElectrodomestico.txtMarca.className = "form-control control";	
	}

	//Campo dni
	var sDNICli = document.formAltaElectrodomestico.txtDniCli.value.trim();
	// Trim
	document.formAltaElectrodomestico.txtDniCli.value = document.formAltaElectrodomestico.txtDniCli.value.trim();

	var oExpReg = /^\d{8}[a-zA-Z]$/;
	
	if (oExpReg.test(sDNICli) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formAltaElectrodomestico.txtDniCli.focus();		
		}
	
		sErrores += "\nCampo DNI incorrecto";
		
		//Marcar error
		document.formAltaElectrodomestico.txtDniCli.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formAltaElectrodomestico.txtDniCli.className = "form-control control";	
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
function validarBajaElect(oEvento){
	var oE = oEvento || window.event;
	var bValido = true;
	var sErrores = "";
	
	// Validaciones
	//Campo numRefElectrodomestico
	var sNumElec = document.formBajaElectrodomestico.txtNumElec.value.trim();
	// Trim
	document.formBajaElectrodomestico.txtNumElec.value = document.formBajaElectrodomestico.txtNumElec.value.trim();

	var oExpReg = /^[0-9]$/;
	
	if (oExpReg.test(sNumElec) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formBajaElectrodomestico.txtNumElec.focus();		
		}
	
		sErrores += "\nEl ID Debe ser un número";
		
		//Marcar error
		document.formBajaElectrodomestico.txtNumElec.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formBajaElectrodomestico.txtNumElec.className = "form-control control";	
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
function validarAltaProv(oEvento){
	var oE = oEvento || window.event;
	var bValido = true;
	var sErrores = "";
	
	// Validaciones

	//Campo dni
	var sNif = document.formAltaProveedor.txtNifProveedor.value.trim();
	// Trim
	document.formAltaProveedor.txtNifProveedor.value = document.formAltaProveedor.txtNifProveedor.value.trim();

	var oExpReg = /^\d{8}[a-zA-Z]$/;
	
	if (oExpReg.test(sNif) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formAltaProveedor.txtNifProveedor.focus();		
		}
	
		sErrores += "\nDNI incorrecto";
		
		//Marcar error
		document.formAltaProveedor.txtNifProveedor.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formAltaProveedor.txtNifProveedor.className = "form-control control";	
	}

	//Campo nombre
	var sNombreProv = document.formAltaProveedor.txtNombreProveedor.value.trim();
	// Trim
	document.formAltaProveedor.txtNombreProveedor.value = document.formAltaProveedor.txtNombreProveedor.value.trim();

	var oExpReg = /^[a-zA-Z\s]{3,40}$/;
	
	if (oExpReg.test(sNombreProv) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formAltaProveedor.txtNombreProveedor.focus();		
		}
	
		sErrores += "\nNombre incorrecto";
		
		//Marcar error
		document.formAltaProveedor.txtNombreProveedor.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formAltaProveedor.txtNombreProveedor.className = "form-control control";	
	}

	//Campo telefono
	var sTelefonoProv = document.formAltaProveedor.txtTlfn.value.trim();
	// Trim
	document.formAltaProveedor.txtTlfn.value = document.formAltaProveedor.txtTlfn.value.trim();

	var oExpReg = /^[679]*\d{8}$/;
	
	if (oExpReg.test(sTelefonoProv) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formAltaProveedor.txtTlfn.focus();		
		}
	
		sErrores += "\nTeléfono incorrecto";
		
		//Marcar error
		document.formAltaProveedor.txtTlfn.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formAltaProveedor.txtTlfn.className = "form-control control";	
	}

	//Campo direccion
	var sDireccion = document.formAltaProveedor.txtDireccionProveedor.value.trim();
	// Trim
	document.formAltaProveedor.txtDireccionProveedor.value = document.formAltaProveedor.txtDireccionProveedor.value.trim();

	var oExpReg =  /^[a-zA-Z\s]{3,60}$/;
	
	if (oExpReg.test(sDireccion) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formAltaProveedor.txtDireccionProveedor.focus();		
		}
	
		sErrores += "\nDirección incorrecta";
		
		//Marcar error
		document.formAltaProveedor.txtDireccionProveedor.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formAltaProveedor.txtDireccionProveedor.className = "form-control control";	
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
function validarconsultProv(oEvento){
	var oE = oEvento || window.event;
	var bValido = true;
	var sErrores = "";
	
	// Validaciones
	//Campo nif Proveedor
	var sNifProveedor = document.formConsultarProveedor.txtConsultaProve.value.trim();
	// Trim
	document.formConsultarProveedor.txtConsultaProve.value = document.formConsultarProveedor.txtConsultaProve.value.trim();

	var oExpReg = /^[0-9]$/;
	
	if (oExpReg.test(sNifProveedor) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formConsultarProveedor.txtConsultaProve.focus();		
		}
	
		sErrores += "\nEl nif debe ser un número";
		
		//Marcar error
		document.formConsultarProveedor.txtConsultaProve.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formConsultarProveedor.txtConsultaProve.className = "form-control control";	
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
function validarbajaProv(oEvento){
	var oE = oEvento || window.event;
	var bValido = true;
	var sErrores = "";
	
	// Validaciones
	//Campo nif Proveedor
	var sNifProv = document.formBajaProveedor.txtBajaProveedor.value.trim();
	// Trim
	document.formBajaProveedor.txtBajaProveedor.value = document.formBajaProveedor.txtBajaProveedor.value.trim();

	var oExpReg = /^[0-9]$/;
	
	if (oExpReg.test(sNifProv) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formBajaProveedor.txtBajaProveedor.focus();		
		}
	
		sErrores += "\nEl nif debe ser un número";
		
		//Marcar error
		document.formBajaProveedor.txtBajaProveedor.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formBajaProveedor.txtBajaProveedor.className = "form-control control";	
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
function validarConsultaElectro(oEvento){
	var oE = oEvento || window.event;
	var bValido = true;
	var sErrores = "";
	
	// Validaciones
	//Campo nif Proveedor
	var sNifProv = document.formConsultarElectro.txtConsultaElec.value.trim();
	// Trim
	document.formConsultarElectro.txtConsultaElec.value = document.formConsultarElectro.txtConsultaElec.value.trim();

	var oExpReg = /^[0-9]$/;
	
	if (oExpReg.test(sNifProv) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formConsultarElectro.txtConsultaElec.focus();		
		}
	
		sErrores += "\nEl ID debe ser un número";
		
		//Marcar error
		document.formConsultarElectro.txtConsultaElec.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formConsultarElectro.txtConsultaElec.className = "form-control control";	
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

//FIN VALIDAR

//Cerrar ventana emergente
var closeWindow = document.getElementById("cerrarVentana");
closeWindow.addEventListener("click", ocultaVentana, false);
function ocultaVentana(){
	document.getElementById("capaFondo").style.visibility="hidden";
	document.getElementById("capaVentana").style.visibility="hidden";
}