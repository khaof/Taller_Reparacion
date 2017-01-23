﻿var oTaller = new tallerElectromecanica;
//cerrar ventana emergente
var closeWindow = document.getElementById("cerrarVentana");
closeWindow.addEventListener("click", ocultaVentana, false);
function ocultaVentana(){
	document.getElementById("capaFondo").style.visibility="hidden";
	document.getElementById("capaVentana").style.visibility="hidden";
	var info = document.getElementById("txtMensaje");
	info.parentNode.removeChild(info);
}
//funcion abrir ventana
function openWindow(sTexto){
		var info = document.getElementById("txtMensaje");
		if(info != null){
			info.parentNode.removeChild(info);
		}
		
		var info = document.getElementById("capaVentana");
		var parrafo = document.createElement("p");
		info.appendChild(parrafo);
		parrafo.setAttribute("id", "txtMensaje");
		parrafo.appendChild(sTexto);
		
		document.getElementById("capaFondo").style.visibility="visible";
		document.getElementById("capaVentana").style.visibility="visible";	
}

//********************GESTION CLIENTE*************************************
//***ACEPTA ALTA***
var eCliente = document.getElementById("btnAltaCli");
eCliente.addEventListener("click", aceptarAltaCliente);
function aceptarAltaCliente(){
	var bValido = true;
	var arrayErrores = [];
	
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
	
		arrayErrores.push("DNI incorrecto");
		
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
	
		arrayErrores.push("Nombre incorrecto. Debe tener entre 3 y 40 caracteres");
		
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

	var oExpReg = /^[a-zA-ZñÑ\s\W]{5,60}$/;
	
	if (oExpReg.test(sApellido) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formAltaCliente.txtApellidos.focus();		
		}
	
		arrayErrores.push("Apellido incorrecto. Debe tener un tamaño entre 5 y 60");
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
	
		arrayErrores.push("Apellido incorrecto. Debe tener un tamaño entre 5 y 60");
		
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

	
	if (sDireccion.length<10 || sDireccion>60){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formAltaCliente.txtDireccion.focus();		
		}
	
		arrayErrores.push("Dirección incorrecta. Debe tener un tamaño entre 10 y 60 caracteres");
		
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

	var oExpReg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	
	if (oExpReg.test(sEmail) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formAltaCliente.txtMail.focus();		
		}
	
		arrayErrores.push("E-Mail incorrecto. Debe ser example@example.com");
		
		//Marcar error
		document.formAltaCliente.txtMail.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formAltaCliente.txtMail.className = "form-control control";	
	}


	//Resultado
	if (bValido == false){	
		//Mostrar errores
		var div = document.createElement("div");
		div.style.textAlign = "left";
		for(var i =0; i<arrayErrores.length;i++){
			div.appendChild(document.createTextNode(arrayErrores[i]));
			div.appendChild(document.createElement("br"));
		}
		openWindow(div);


	}else{
		var dni = document.formAltaCliente.txtDNI.value;
		var nombre = document.formAltaCliente.txtNombre.value;
		var apellidos = document.formAltaCliente.txtApellidos.value;
		var tlfn = document.formAltaCliente.txtTelefono.value;
		var direccion = document.formAltaCliente.txtDireccion.value;
		var email = document.formAltaCliente.txtMail.value;
			
		var oCliente = new Cliente(dni, nombre, apellidos, tlfn, direccion, email);
		var sMensaje = document.createTextNode(oTaller.altaCliente(oCliente));
		openWindow(sMensaje);
			
	}
}
//modificar datos
document.getElementById("btnAceptarModCliente").addEventListener("click", modificarDatos);
function modificarDatos(){
	var dni = document.getElementById("sltClientes").value;
	oTaller.nombreModClientes(dni);
	oTaller.apellidosModClientes(dni);
	oTaller.telefonoModClientes(dni);
	oTaller.direccionModClientes(dni);
	oTaller.mailModClientes(dni);

}
//***ACEPTA MODIFICAR***
document.formModificaCli.btnModiCli.addEventListener("click", aceptarModificaCliente);
function aceptarModificaCliente(){
	var bValido = true;
	var arrayErrores =[];
	
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
	
		arrayErrores.push("Teléfono incorrecto");
		
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
	
	if (sDireccion.length<10 || sDireccion>60){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formModificaCli.txtDireccion.focus();		
		}
	
		arrayErrores.push("Dirección incorrecta");
		
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

	var oExpReg =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	
	if (oExpReg.test(sEmail) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formModificaCli.txtMail.focus();		
		}
	
		arrayErrores.push("E-Mail incorrecto. Debe tener el formato example@example.com");
		
		//Marcar error
		document.formModificaCli.txtMail.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formModificaCli.txtMail.className = "form-control control";	
	}


	//Resultado
	if (bValido == false){
		//Mostrar errores
		var div = document.createElement("div");
		div.style.textAlign = "left";
		for(var i =0; i<arrayErrores.length;i++){
			div.appendChild(document.createTextNode(arrayErrores[i]));
			div.appendChild(document.createElement("br"));
		}
		openWindow(div);
	}else{
		var combo=document.formModificaCli.txtDNI.selectedIndex;
		var dni= document.formModificaCli.txtDNI.options[combo].value;
		var nombre = document.formModificaCli.txtNombre.value;
		var apellidos = document.formModificaCli.txtApellido.value;
		var tlfn = document.formModificaCli.txtTelefono.value;
		var direccion = document.formModificaCli.txtDireccion.value;
		var email = document.formModificaCli.txtMail.value;
			
		var oClienteMod = new Cliente(dni, nombre, apellidos, tlfn, direccion, email);
		var info = document.getElementById("txtMensaje");
		var sMensaje = document.createTextNode(oTaller.modificarCliente(oClienteMod));
		openWindow(sMensaje);
	}
}
//***ACEPTA BAJA***
document.formBajaCliente.btnBajaCliente.addEventListener("click", aceptarBajaCliente);
function aceptarBajaCliente(){
	var combo=document.formModificaCli.txtDNI.selectedIndex;
	var dniCliente= document.formModificaCli.txtDNI.options[combo].value;
	
	var info = document.getElementById("txtMensaje");
	var sMensaje = document.createTextNode(oTaller.bajaCliente(dniCliente));
	openWindow(sMensaje);
}
//********************GESTION EMPLEADO************************************
//***ACEPTA ALTA***
document.formAltaEmpleado.btnAltaEmple.addEventListener("click", aceptarAltaEmpleado);
function aceptarAltaEmpleado(){
	var bValido = true;
	var arrayErrores = [];
	// Validaciones
	//Campo dni
	var sDNIEmple = document.formAltaEmpleado.txtDNIEmple.value.trim();
	// Trim
	document.formAltaEmpleado.txtDNIEmple.value = document.formAltaEmpleado.txtDNIEmple.value.trim();

	var oExpReg = /^\d{8}[a-zA-Z]$/;
	
	if (oExpReg.test(sDNIEmple) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formAltaEmpleado.txtDNIEmple.focus();		
		}
	
		arrayErrores.push("DNI incorrecto");
		
		//Marcar error
		document.formAltaEmpleado.txtDNIEmple.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formAltaEmpleado.txtDNIEmple.className = "form-control control";	
	}

	//Campo nombre
	var sNombreEmple = document.formAltaEmpleado.txtNombreEmple.value.trim();
	// Trim
	document.formAltaEmpleado.txtNombreEmple.value = document.formAltaEmpleado.txtNombreEmple.value.trim();

	var oExpReg = /^[a-zA-Z\s]{3,40}$/;
	
	if (oExpReg.test(sNombreEmple) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formAltaEmpleado.txtNombreEmple.focus();		
		}
	
		arrayErrores.push("Nombre incorrecto");
		
		//Marcar error
		document.formAltaEmpleado.txtNombreEmple.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formAltaEmpleado.txtNombreEmple.className = "form-control control";	
	}
	
	//Campo apellido
	var sApellidoEmple = document.formAltaEmpleado.txtApellidosEmple.value.trim();
	// Trim
	document.formAltaEmpleado.txtApellidosEmple.value = document.formAltaEmpleado.txtApellidosEmple.value.trim();

	var oExpReg = /^[a-zA-Z\s]{3,40}$/;
	
	if (oExpReg.test(sApellidoEmple) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formAltaEmpleado.txtApellidosEmple.focus();		
		}
	
		arrayErrores.push("Apellido incorrecto");
		
		//Marcar error
		document.formAltaEmpleado.txtApellidosEmple.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formAltaEmpleado.txtApellidosEmple.className = "form-control control";	
	}
	//Resultado
	if (bValido == false){;
		//Mostrar errores
		var div = document.createElement("div");
		div.style.textAlign = "left";
		for(var i =0; i<arrayErrores.length;i++){
			div.appendChild(document.createTextNode(arrayErrores[i]));
			div.appendChild(document.createElement("br"));
		}
		openWindow(div);

	}else{
		var dniEmple = document.formAltaEmpleado.txtDNIEmple.value;
		var nomEmple = document.formAltaEmpleado.txtNombreEmple.value;
		var apellEmple = document.formAltaEmpleado.txtApellidosEmple.value;

		var oEmpleado = new Empleado(dniEmple, nomEmple, apellEmple);
		var info = document.getElementById("txtMensaje");
		var sMensaje = document.createTextNode(oTaller.altaEmpleado(oEmpleado));
		openWindow(sMensaje);
	}
}
//***ACEPTA BAJA***
document.formBajaEmpleado.btnBajaEmple.addEventListener("click", aceptarBajaEmpleado);
function aceptarBajaEmpleado(){
	var combo=document.formBajaEmpleado.txtDNIEmple.selectedIndex;
	var dniEmple= document.formBajaEmpleado.txtDNIEmple.options[combo].value;
	
	var info = document.getElementById("txtMensaje");
	var sMensaje = document.createTextNode(oTaller.bajaEmpleado(dniEmple));
	openWindow(sMensaje);
}
//***ACEPTA MODIFICAR***
document.formModificaEmpleado.btnModifiEmple.addEventListener("click", aceptarModEmpleado);
function aceptarModEmpleado(){
	var bValido = true;
	var arrayErrores = [];
	// Validaciones
	//Campo dni
	var sDNIEmplea = document.formModificaEmpleado.txtDNIEmplea.value.trim();
	// Trim
	document.formModificaEmpleado.txtDNIEmplea.value = document.formModificaEmpleado.txtDNIEmplea.value.trim();

	var oExpReg = /^\d{8}[a-zA-Z]$/;
	
	if (oExpReg.test(sDNIEmplea) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formModificaEmpleado.txtDNIEmplea.focus();		
		}
	
		arrayErrores.push("DNI incorrecto");
		
		//Marcar error
		document.formModificaEmpleado.txtDNIEmplea.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formModificaEmpleado.txtDNIEmplea.className = "form-control control";	
	}

	//Campo nombre
	var sNombreEmplea = document.formModificaEmpleado.txtNombreEmplea.value.trim();
	// Trim
	document.formModificaEmpleado.txtNombreEmplea.value = document.formModificaEmpleado.txtNombreEmplea.value.trim();

	var oExpReg = /^[a-zA-Z\s]{3,40}$/;
	
	if (oExpReg.test(sNombreEmplea) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formModificaEmpleado.txtNombreEmplea.focus();		
		}
	
		arrayErrores.push("Nombre incorrecto");
		
		//Marcar error
		document.formModificaEmpleado.txtNombreEmplea.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formModificaEmpleado.txtNombreEmplea.className = "form-control control";	
	}
	
	//Campo apellido
	var sApellidoEmplea = document.formModificaEmpleado.txtApellidoEmplea.value.trim();
	// Trim
	document.formModificaEmpleado.txtApellidoEmplea.value = document.formModificaEmpleado.txtApellidoEmplea.value.trim();

	var oExpReg = /^[a-zA-Z\s]{3,40}$/;
	
	if (oExpReg.test(sApellidoEmplea) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formModificaEmpleado.txtApellidoEmplea.focus();		
		}
	
		arrayErrores.push("Apellido incorrecto");
		
		//Marcar error
		document.formModificaEmpleado.txtApellidoEmplea.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formModificaEmpleado.txtApellidoEmplea.className = "form-control control";	
	}

	//Resultado
	if (bValido == false){
		//Mostrar errores
		var div = document.createElement("div");
		for(var i =0; i<arrayErrores.length;i++){
			div.appendChild(document.createTextNode(arrayErrores[i]));
			div.appendChild(document.createElement("br"));
		}
		openWindow(div);
	}else{
		var dniEmplea = document.formModificaEmpleado.txtDNIEmplea.value;
		var nomEmplea = document.formModificaEmpleado.txtNombreEmplea.value;
		var apellEmplea = document.formModificaEmpleado.txtApellidoEmplea.value;

		var oEmpleadoMod = new Empleado(dniEmplea, nomEmplea, apellEmplea);
		var info = document.getElementById("txtMensaje");
		var sMensaje = document.createTextNode(oTaller.altaEmpleado(oEmpleadoMod));
		openWindow(sMensaje);
	}
	return bValido;
}

//********************GESTION PROVEEDOR***********************************
//***ACEPTA ALTA***
document.formAltaProveedor.btnAltaProv.addEventListener("click", aceptarAltaProveedor);
function aceptarAltaProveedor(){
	var bValido = true;
	var arrayErrores = [];
	// Validaciones
	//Campo dni
	var sNif = document.formAltaProveedor.txtNifProveedor.value.trim();
	// Trim
	document.formAltaProveedor.txtNifProveedor.value = document.formAltaProveedor.txtNifProveedor.value.trim();

	var oExpReg = /^[a-z A-Z]{1}\d{8}/;
	
	if (oExpReg.test(sNif) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formAltaProveedor.txtNifProveedor.focus();		
		}
	
		 arrayErrores.push("NIF incorrecto");
		
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
	
		arrayErrores.push("Nombre incorrecto");
		
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

	var oExpReg = /^[679]*\d{9}$/;
	
	if (oExpReg.test(sTelefonoProv) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formAltaProveedor.txtTlfn.focus();		
		}
	
		arrayErrores.push("Teléfono incorrecto. Debe tener XXXXXXXXX");
		
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

	
	if (sDireccion.length<10 || sDireccion>60){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formAltaProveedor.txtDireccionProveedor.focus();		
		}
	
		arrayErrores.push("nDirección incorrecta. Debe tener entre 10 y 60 caracteres");
		
		//Marcar error
		document.formAltaProveedor.txtDireccionProveedor.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formAltaProveedor.txtDireccionProveedor.className = "form-control control";	
	}
	
		//Resultado
	if (bValido == false){
		//Mostrar errores
		var div = document.createElement("div");
		div.style.textAlign = "left";
		for(var i =0; i<arrayErrores.length;i++){
			div.appendChild(document.createTextNode(arrayErrores[i]));
			div.appendChild(document.createElement("br"));
		}
		openWindow(div);
	}else{
		var sNif = document.formAltaProveedor.txtNifProveedor.value;
		var sNombreProv = document.formAltaProveedor.txtNombreProveedor.value;
		var sTelefonoProv = document.formAltaProveedor.txtTlfn.value;
		var sDireccion = document.formAltaProveedor.txtDireccionProveedor.value;

		var oProveedor = new Proveedor(sNif, sNombreProv, sTelefonoProv, sDireccion);
		var info = document.getElementById("txtMensaje");
		var sMensaje = document.createTextNode(oTaller.altaProveedor(oProveedor));
		openWindow(sMensaje);
	}
	return bValido;	
}
//***ACEPTA BAJA***
document.formBajaProveedor.btnBajaProv.addEventListener("click", aceptarBajaProveedor);
function aceptarBajaProveedor(){
	var combo=document.formBajaProveedor.txtDNIProveedor.selectedIndex;
	var DNIProveedor= document.formBajaProveedor.txtDNIProveedor.options[combo].value;
	
	var info = document.getElementById("txtMensaje");
	var sMensaje = document.createTextNode(oTaller.bajaProveedor(DNIProveedor));
	openWindow(sMensaje);
}


//********************GESTION ELECTRODOMÉSTICO***********************************
//***ACEPTA ALTA***
document.formAltaElectrodomestico.btnAltaElect.addEventListener("click", aceptarAltaElectrodomestico);
function aceptarAltaElectrodomestico(){
	var bValido = true;
	var arrayErrores = [];
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
	
		arrayErrores.push("El numero de referencia debe ser un número");
		
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
	
		arrayErrores.push("Campo nombre incorrecto.");
		
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
	
		arrayErrores.push("Campo marca incorrecto");
		
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
	
		arrayErrores.push("Campo DNI incorrecto");
		
		//Marcar error
		document.formAltaElectrodomestico.txtDniCli.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formAltaElectrodomestico.txtDniCli.className = "form-control control";	
	}

	//Resultado
	if (bValido == false){
		//Mostrar errores
		var div = document.createElement("div");
		div.style.textAlign = "left";
		for(var i =0; i<arrayErrores.length;i++){
			div.appendChild(document.createTextNode(arrayErrores[i]));
			div.appendChild(document.createElement("br"));
		}
		openWindow(div);
	}else{
		var sNumRef = document.formAltaElectrodomestico.txtNumRef.value;
		var sNombreElec = document.formAltaElectrodomestico.txtNombreElec.value;
		var sMarca = document.formAltaElectrodomestico.txtMarca.value;
		var sDniCli = document.formAltaElectrodomestico.txtDniCli.value;

		var oElectrodomestico = new Electrodomestico(sNumRef, sNombreElec, sMarca, sDniCli);
		var info = document.getElementById("txtMensaje");
		var sMensaje = document.createTextNode(oTaller.altaElectrodomestico(oElectrodomestico));
		openWindow(sMensaje);
	}
	return bValido;
}

//***ACEPTA BAJA***
document.formBajaElectrodomestico.btnBajaElect.addEventListener("click", aceptaBajaElectrodomestico);
function aceptaBajaElectrodomestico(){
	var combo=document.formBajaElectrodomestico.txtNumElec.selectedIndex;
	var numRef= document.formBajaElectrodomestico.txtNumElec.options[combo].value;
	
	var info = document.getElementById("txtMensaje");
	var sMensaje = document.createTextNode(oTaller.bajaElectrodomestico(numRef));
	openWindow(sMensaje);
}


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
	var comboModClientes = document.getElementById("comboModClientes");
    comboModClientes.removeChild(comboModClientes.firstChild);
    comboModClientes.appendChild(oTaller.getComboClientes());
    document.getElementById("modificaCliente").style.display = "block";

});
document.getElementById("btnBajaCliente").addEventListener("click", function(){
	ocultar();
	//Muestra
    document.getElementById("bajaCliente").style.display = "block";
    var divComboBajaClientes = document.getElementById("comboBajaClientes");
    divComboBajaClientes.removeChild(divComboBajaClientes.firstChild);
    divComboBajaClientes.appendChild(oTaller.getComboClientes());
});
document.getElementById("btnVerFactura").addEventListener("click", function(){
	ocultar();
	//Muestra
	var comboFactura = document.getElementById("comboFactura");
    comboFactura.removeChild(comboFactura.firstChild);
    comboFactura.appendChild(oTaller.getComboFacturas());
	var f=new Date();
	var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
	f=f.getDate() +'/'+ meses[f.getMonth()] +'/'+ f.getFullYear();
	document.FormModificaFacturaReparacion.fecha.setAttribute("placeholder",f);
    document.getElementById("modificaFacturaReparacion").style.display = "block";
});
document.getElementById("btnListarFacturas").addEventListener("click", function(){
	ocultar();
	//Muestra
    document.getElementById("ListarFacturaReparacion").style.display = "block";
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
	var f=new Date();
	var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
	f=f.getDate() +'/'+ meses[f.getMonth()] +'/'+ f.getFullYear();
	document.formAltaAveria.fecha.setAttribute("placeholder",f);
    
    document.getElementById("altaAveria").style.display = "block";
});
document.getElementById("btnModificarAvería").addEventListener("click", function(){
	ocultar();
	//Muestra 
	var f=new Date();
	var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
	f=f.getDate() +'/'+ meses[f.getMonth()] +'/'+ f.getFullYear();
	document.formModAveria.fecha.setAttribute("placeholder",f);

    document.getElementById("modificaAveria").style.display = "block";
});
document.getElementById("btnConsultaAvería").addEventListener("click", function(){
	ocultar();
	//Muestra  
    document.getElementById("consultarAveria").style.display = "block";
});
document.getElementById("btnLineaComponente").addEventListener("click", function(){
	ocultar();
	//Muestra  
    document.getElementById("altaLineaComponente").style.display = "block";
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


document.formBajaFacturaReparacion.btnBajaFactura.addEventListener("click", validarBajaFact);
document.formConsultarProveedor.btnConsultaPro.addEventListener("click", validarconsultProv);
document.formConsultarElectro.btnConsultarElec.addEventListener("click", validarConsultaElectro);
document.formAltaAveria.btnAltaAver.addEventListener("click", validaAltaAveria);
document.formModAveria.btnModAver.addEventListener("click", validaModifAveria);
document.formAltaRecElectrodomestico.btnAltaRecam.addEventListener("click", validaAltaRecambio);
document.formBajaRecambio.btnBajaRecam.addEventListener("click", validaBajaRecambio);
document.FormListarFacturaReparacion.btnListarFacRepa.addEventListener("click",validaFecha);

function validarBajaFact(oEvento){
	var oE = oEvento || window.event;
	var bValido = true;
	var arrayErrores = []
	
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
	
		arrayErrores.push("El ID Debe ser un número");
		
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
		var div = document.createElement("div");
		for(var i =0; i<arrayErrores.length;i++){
			div.appendChild(document.createTextNode(arrayErrores[i]));
			div.appendChild(document.createElement("br"));
		}
		openWindow(div);
	}
	return bValido;
}
function validarconsultProv(oEvento){
	var oE = oEvento || window.event;
	var bValido = true;
	var arrayErrores = [];
	
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
	
		arrayErrores.push("El nif debe ser un número");
		
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
		var div = document.createElement("div");
		for(var i =0; i<arrayErrores.length;i++){
			div.appendChild(document.createTextNode(arrayErrores[i]));
			div.appendChild(document.createElement("br"));
		}
		openWindow(div);
	}
	return bValido;	
}
function validarConsultaElectro(oEvento){
	var oE = oEvento || window.event;
	var bValido = true;
	var arrayErrores = [];
	
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
	
		arrayErrores.push("El ID debe ser un número");
		
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
		var div = document.createElement("div");
		for(var i =0; i<arrayErrores.length;i++){
			div.appendChild(document.createTextNode(arrayErrores[i]));
			div.appendChild(document.createElement("br"));
		}
		openWindow(div);
	}
	return bValido;	
}
function validaFecha(oEvento){
	var oE = oEvento || window.event;
	var bValido = true;
	var arrayErrores = [];

	// Validaciones
	//Campo nif Proveedor
	var sFecha = document.FormListarFacturaReparacion.fecha.value.trim();
	// Trim
	document.FormListarFacturaReparacion.fecha.value = document.FormListarFacturaReparacion.fecha.value.trim();

	var oExpReg = /^([0][1-9]|[12][0-9]|3[01])(\/|-)([0][1-9]|[1][0-2])\2(\d{4})$/;
	
	if (oExpReg.test(sFecha) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.FormListarFacturaReparacion.fecha.focus();		
		}
	
		arrayErrores.push("Fecha incorrecta. Formato DD/MM/YY");
		
		//Marcar error
		document.FormListarFacturaReparacion.fecha.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.FormListarFacturaReparacion.fecha.className = "form-control control";	
	}
	//Resultado
	if (bValido == false){
		//Cancelar envio del formulario
		oE.preventDefault();
		//Mostrar errores
		var div = document.createElement("div");
		for(var i =0; i<arrayErrores.length;i++){
			div.appendChild(document.createTextNode(arrayErrores[i]));
			div.appendChild(document.createElement("br"));
		}
		openWindow(div);
	}
	return bValido;	
}
function validaAltaAveria(oEvento){
 	var oE = oEvento || window.event;
	var bValido = true;
	var arrayErrores = [];
	
	// Validaciones

	//Campo idAveria
	var sIdAveria = document.formAltaAveria.txtidAveria.value.trim();
	// Trim
	document.formAltaAveria.txtidAveria.value = document.formAltaAveria.txtidAveria.value.trim();

	var oExpReg = /^\d{3}[a-zA-Z]$/;
	
	if (oExpReg.test(sIdAveria) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formAltaAveria.txtidAveria.focus();		
		}
	
		arrayErrores.push("Id incorrecto");
		
		//Marcar error
		document.formAltaAveria.txtidAveria.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formAltaAveria.txtidAveria.className = "form-control control";	
	}

	//Campo descripcion
	var sDescripcionAver = document.formAltaAveria.txtDescripAveria.value.trim();
	// Trim
	document.formAltaAveria.txtDescripAveria.value = document.formAltaAveria.txtDescripAveria.value.trim();

	var oExpReg = /^[a-zA-Z\s]{3,40}$/;
	
	if (oExpReg.test(sDescripcionAver) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formAltaAveria.txtDescripAveria.focus();		
		}
	
		arrayErrores.push("Descripcion incorrecta");
		
		//Marcar error
		document.formAltaAveria.txtDescripAveria.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formAltaAveria.txtDescripAveria.className = "form-control control";	
	}

	//DNI EMPLEADO
	var sdniEmple = document.formAltaAveria.txtDNIEmplead.value.trim();
	// Trim
	document.formAltaAveria.txtDNIEmplead.value = document.formAltaAveria.txtDNIEmplead.value.trim();

	var oExpReg = /^\d{8}[a-zA-Z]$/;
	
	if (oExpReg.test(sdniEmple) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formAltaAveria.txtDNIEmplead.focus();		
		}
	
		arrayErrores.push("DNI incorrecto");
		
		//Marcar error
		document.formAltaAveria.txtDNIEmplead.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formAltaAveria.txtDNIEmplead.className = "form-control control";	
	}

	//ID ELECTRODOMESTICO
	var sIDElec = document.formAltaAveria.txtIdElectro.value.trim();
	// Trim
	document.formAltaAveria.txtIdElectro.value = document.formAltaAveria.txtIdElectro.value.trim();

	var oExpReg = /^\d{3}[a-zA-Z]$/;
	
	if (oExpReg.test(sIDElec) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formAltaAveria.txtIdElectro.focus();		
		}
	
		arrayErrores.push("ID Electrodomestico incorrecto");
		
		//Marcar error
		document.formAltaAveria.txtIdElectro.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formAltaAveria.txtIdElectro.className = "form-control control";	
	}

	//Resultado
	if (bValido == false){
		//Cancelar envio del formulario
		oE.preventDefault();
		//Mostrar errores
		var div = document.createElement("div");
		for(var i =0; i<arrayErrores.length;i++){
			div.appendChild(document.createTextNode(arrayErrores[i]));
			div.appendChild(document.createElement("br"));
		}
		openWindow(div);
	}else{
		//datos aqui
		var idAveria = document.formAltaAveria.txtidAveria.value;
		var descripcion = document.formAltaAveria.txtDescripAveria.value;
		var recambio = document.formAltaAveria.comboRecambio.value;
		var unidades = document.formAltaAveria.txtUnidades.value;
		var fecha = document.formAltaAveria.fecha.value;
		var dniEmpleado = document.formAltaAveria.txtDNIEmplead.value;
		var idElectro = document.formAltaAveria.txtIdElectro.value;

		var oAveria = new Parte_Averia(idElectro, dniEmpleado, recambio, unidades, idAveria, descripcion, fecha);
		var sMensaje = document.createTextNode(oTaller.altaParteAveria(oAveria));
		openWindow(sMensaje);
	}
	return bValido;
}
function validaModifAveria(oEvento){
	var oE = oEvento || window.event;
	var bValido = true;
	var arrayErrores = [];
	
	// Validaciones

	//Campo idAveria
	var sIdAveria = document.formModAveria.txtidAveria.value.trim();
	// Trim
	document.formModAveria.txtidAveria.value = document.formModAveria.txtidAveria.value.trim();

	var oExpReg = /^\d{3}[a-zA-Z]$/;
	
	if (oExpReg.test(sIdAveria) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formModAveria.txtidAveria.focus();		
		}
	
		arrayErrores.push("Id incorrecto");
		
		//Marcar error
		document.formModAveria.txtidAveria.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formModAveria.txtidAveria.className = "form-control control";	
	}

	//Campo descripcion
	var sDescripcionAver = document.formModAveria.txtDescripAveria.value.trim();
	// Trim
	document.formModAveria.txtDescripAveria.value = document.formModAveria.txtDescripAveria.value.trim();

	var oExpReg = /^[a-zA-Z\s]{3,40}$/;
	
	if (oExpReg.test(sDescripcionAver) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formModAveria.txtDescripAveria.focus();		
		}
	
		arrayErrores.push("Descripcion incorrecta");
		
		//Marcar error
		document.formModAveria.txtDescripAveria.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formModAveria.txtDescripAveria.className = "form-control control";	
	}

	//DNI EMPLEADO
	var sdniEmple = document.formModAveria.txtDNIEmplead.value.trim();
	// Trim
	document.formModAveria.txtDNIEmplead.value = document.formModAveria.txtDNIEmplead.value.trim();

	var oExpReg = /^\d{3}[a-zA-Z]$/;
	
	if (oExpReg.test(sdniEmple) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formModAveria.txtDNIEmplead.focus();		
		}
	
		arrayErrores.push("DNI incorrecto");
		
		//Marcar error
		document.formModAveria.txtDNIEmplead.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formModAveria.txtDNIEmplead.className = "form-control control";	
	}

	//ID ELECTRODOMESTICO
	var sIDElec = document.formModAveria.txtIdElectro.value.trim();
	// Trim
	document.formModAveria.txtIdElectro.value = document.formModAveria.txtIdElectro.value.trim();

	var oExpReg = /^\d{3}[a-zA-Z]$/;
	
	if (oExpReg.test(sIDElec) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formModAveria.txtIdElectro.focus();		
		}
	
		arrayErrores.push("ID incorrecto");
		
		//Marcar error
		document.formModAveria.txtIdElectro.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formModAveria.txtIdElectro.className = "form-control control";	
	}

	//Resultado
	if (bValido == false){
		//Cancelar envio del formulario
		oE.preventDefault();
		//Mostrar errores
		var div = document.createElement("div");
		for(var i =0; i<arrayErrores.length;i++){
			div.appendChild(document.createTextNode(arrayErrores[i]));
			div.appendChild(document.createElement("br"));
		}
		openWindow(div);
	}
	return bValido;
}
function validaAltaRecambio(oEvento){
	var oE = oEvento || window.event;
	var bValido = true;
	var arrayErrores = [];
	
	// Validaciones

	//Campo id Recaambio
	var sIdRecambio = document.formAltaRecElectrodomestico.txtIdRecambio.value.trim();
	// Trim
	document.formAltaRecElectrodomestico.txtIdRecambio.value = document.formAltaRecElectrodomestico.txtIdRecambio.value.trim();

	var oExpReg =  /^\d{3}[a-zA-Z]$/;
	
	if (oExpReg.test(sIdRecambio) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formAltaRecElectrodomestico.txtIdRecambio.focus();		
		}
	
		arrayErrores.push("Id incorrecto");
		
		//Marcar error
		document.formAltaRecElectrodomestico.txtIdRecambio.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formAltaRecElectrodomestico.txtIdRecambio.className = "form-control control";	
	}

	//Campo nombre
	var sNombreRec = document.formAltaRecElectrodomestico.txtNombreRecambio.value.trim();
	// Trim
	document.formAltaRecElectrodomestico.txtNombreRecambio.value = document.formAltaRecElectrodomestico.txtNombreRecambio.value.trim();

	var oExpReg = /^[a-zA-Z\s]{3,40}$/;
	
	if (oExpReg.test(sNombreRec) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formAltaRecElectrodomestico.txtNombreRecambio.focus();		
		}
	
		arrayErrores.push("Descripcion incorrecta");
		
		//Marcar error
		document.formAltaRecElectrodomestico.txtNombreRecambio.className = "form-control  error";
	
	}
	else {
	//Desmarcar error
	document.formAltaRecElectrodomestico.txtNombreRecambio.className = "form-control control";	
	}

	//campo precio
	var sPrecio = document.formAltaRecElectrodomestico.txtPrecio.value.trim();
	// Trim
	document.formAltaRecElectrodomestico.txtPrecio.value = document.formAltaRecElectrodomestico.txtPrecio.value.trim();

	var oExpReg =  /^\d{4}$/;
	
	if (oExpReg.test(sPrecio) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formAltaRecElectrodomestico.txtPrecio.focus();		
		}
	
		arrayErrores.push("Precio incorrecto");
		
		//Marcar error
		document.formAltaRecElectrodomestico.txtPrecio.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formAltaRecElectrodomestico.txtPrecio.className = "form-control control";	
	}

	//Nif proveedor
	var sNifProve = document.formAltaRecElectrodomestico.txtNifProv.value.trim();
	// Trim
	document.formAltaRecElectrodomestico.txtNifProv.value = document.formAltaRecElectrodomestico.txtNifProv.value.trim();

	var oExpReg = /^[a-z A-Z]{1}\d{8}/;
	
	if (oExpReg.test(sNifProve) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formAltaRecElectrodomestico.txtNifProv.focus();		
		}
	
		arrayErrores.push("Nif incorrecto");
		
		//Marcar error
		document.formAltaRecElectrodomestico.txtNifProv.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formAltaRecElectrodomestico.txtNifProv.className = "form-control control";	
	}

	//Resultado
	if (bValido == false){
		//Cancelar envio del formulario
		oE.preventDefault();
		//Mostrar errores
		var div = document.createElement("div");
		for(var i =0; i<arrayErrores.length;i++){
			div.appendChild(document.createTextNode(arrayErrores[i]));
			div.appendChild(document.createElement("br"));
		}
		openWindow(div);
	}
	return bValido;
}
function validaBajaRecambio(oEvento){
	var oE = oEvento || window.event;
	var bValido = true;
	var arrayErrores =[];
	
	// Validaciones
	//Campo id recambio
	var sIdRecam = document.formBajaRecambio.txtIdRecam.value.trim();
	// Trim
	document.formBajaRecambio.txtIdRecam.value = document.formBajaRecambio.txtIdRecam.value.trim();

	var oExpReg = /^\d{8}[a-zA-Z]$/;
	
	if (oExpReg.test(sIdRecam) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formBajaRecambio.txtIdRecam.focus();		
		}
	
		arrayErrores.push("ID incorrecto");
		
		//Marcar error
		document.formBajaRecambio.txtIdRecam.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formBajaRecambio.txtIdRecam.className = "form-control control";	
	}
	//Resultado
	if (bValido == false){
		//Cancelar envio del formulario
		oE.preventDefault();
		//Mostrar errores
		var div = document.createElement("div");
		for(var i =0; i<arrayErrores.length;i++){
			div.appendChild(document.createTextNode(arrayErrores[i]));
			div.appendChild(document.createElement("br"));
		}
		openWindow(div);
	}
	return bValido;	
}
//FIN VALIDAR