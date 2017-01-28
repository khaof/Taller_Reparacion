var oTaller = new tallerElectromecanica;

//LECTURA DEL XML
/*function loadXMLDoc(filename){
    if (window.XMLHttpRequest)
    {
        xhttp = new XMLHttpRequest();
    } else // code for IE5 and IE6
    {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET", filename, false);

    xhttp.send();

    return xhttp.responseXML;
}

var oXML = loadXMLDoc("taller.xml");

var oClientes = oXML.getElementsByTagName("cliente");
var oElectrodomesticos = oXML.getElementsByTagName("electrodomestico");
var oPartesAverias = oXML.getElementsByTagName("parteAveria");
var oEmpleados = oXML.getElementsByTagName("empleado");
var oPresupuestos = oXML.getElementsByTagName("presupuesto");
var oFacturas = oXML.getElementsByTagName("factura");
var oProveedores = oXML.getElementsByTagName("prove");
var oComponentes = oXML.getElementsByTagName("com");

for (var j = 0; j < oClientes.length; j++) {
	var dniXML = oClientes[j].childNodes[1].innerHTML;
	var nombreXML = oClientes[j].childNodes[3].innerHTML;
	var apellidosXML = oClientes[j].childNodes[5].innerHTML;
	var tlfnXML = oClientes[j].childNodes[7].innerHTML;
	var direccionXML = oClientes[j].childNodes[9].innerHTML;
	var emailXML = oClientes[j].childNodes[11].innerHTML;

	var oCliente = new Cliente(dniXML, nombreXML, apellidosXML, tlfnXML, direccionXML, emailXML);
	oTaller.altaCliente(oCliente);
}
for (var i= 0; i < oElectrodomesticos.length; i++) {
	var idXML = oElectrodomesticos[i].childNodes[1].innerHTML;
	var nombreXML = oElectrodomesticos[i].childNodes[3].innerHTML;
	var marcaXML = oElectrodomesticos[i].childNodes[5].innerHTML;
	var dniXML = oElectrodomesticos[i].childNodes[7].innerHTML;

	var clienteXML=null;
		for(var a=0; a<oClientes.length; a++){
			var dniClienteXML = oClientes[a].childNodes[1].innerHTML;	
			console.log("DNI CLIENTE "+dniClienteXML);
			console.log("Cliente de electrodomestico "+dniXML);		
			if(dniClienteXML==dniXML){
				console.log("Esto es un cliente "+oClientes[a]);
				clienteXML=oClientes[a];
			}
		}	
	if(clienteXML!=null){
		var oElectrodomestico = new Electrodomestico(idXML, nombreXML, marcaXML, clienteXML);
		oTaller.altaElectrodomestico(oElectrodomestico);
	}
}
for (var z= 0; z < oEmpleados.length; z++) {
	var dniEmpleadoXML = oEmpleados[z].childNodes[1].innerHTML;
	var nombreEXML = oEmpleados[z].childNodes[3].innerHTML;
	var apellidosEXML = oEmpleados[z].childNodes[5].innerHTML;
	
	var oEmpleado = new Empleado(dniEmpleadoXML, nombreEXML, apellidosEXML);
	oTaller.altaEmpleado(oEmpleado);
} 
for (var c = 0; c < oProveedores.length; c++) {
	var nifproXML = oProveedores[c].childNodes[1].innerHTML;
	var nombreproXML = oProveedores[c].childNodes[3].innerHTML;
	var direccionproXML = oProveedores[c].childNodes[5].innerHTML;
	var telefonoproXML = oProveedores[c].childNodes[7].innerHTML;

	var oProveedor = new Proveedor(nifproXML, nombreproXML, direccionproXML, telefonoproXML);
	oTaller.altaProveedor(oProveedor);
}
for (var x = 0; x < oComponentes.length; x++) {
	var idComXML = oComponentes[x].childNodes[1].innerHTML;
	var nombreComXML = oComponentes[x].childNodes[3].innerHTML;
	var precioComXML = oComponentes[x].childNodes[5].innerHTML;;
	var nifProveXML = oComponentes[x].childNodes[7].innerHTML;
	
	var oComponente = new Componentes(idComXML, nombreComXML, precioComXML, nifProveXML);
	oTaller.altaRecambio(oComponente);
}*/

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
		document.formAltaCliente.reset();	
	}
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
		var combo=document.formModificaCli.SelectCliente.selectedIndex;
		var dni= document.formModificaCli.SelectCliente.options[combo].value;
		var nombre = document.formModificaCli.txtNombre.value;
		var apellidos = document.formModificaCli.txtApellido.value;
		var tlfn = document.formModificaCli.txtTelefono.value;
		var direccion = document.formModificaCli.txtDireccion.value;
		var email = document.formModificaCli.txtMail.value;
			
		var oClienteMod = new Cliente(dni, nombre, apellidos, tlfn, direccion, email);
		var info = document.getElementById("txtMensaje");
		var sMensaje = document.createTextNode(oTaller.modificarCliente(oClienteMod));
		openWindow(sMensaje);
		document.formModificaCli.reset();		
	}
}
//***ACEPTA BAJA***
document.formBajaCliente.btnBajaCliente.addEventListener("click", aceptarBajaCliente);
function aceptarBajaCliente(){
	var combo=document.formBajaCliente.SelectCliente.selectedIndex;
	var dniCliente= document.formBajaCliente.SelectCliente.options[combo].value;
	
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
		document.formAltaEmpleado.reset();
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
	//COMBO
	var comboDniEmple=document.formModificaEmpleado.SelectEmpleado.selectedIndex;
	if(comboDniEmple==0){
		arrayErrores.push("Debe elegir un DNI");
	}

	//Campo nombre
	var sNombreEmplea = document.formModificaEmpleado.txtNombreEmplea.value.trim();
	var oExpReg = /^[a-zA-ZáéíóúÁÉÍÓÚ\s]{3,40}$/;	
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
		var combo=document.formModificaEmpleado.SelectEmpleado.selectedIndex;
		var dniEmpleado= document.formModificaEmpleado.SelectEmpleado.options[combo].value;

		var nomEmpleado = document.formModificaEmpleado.txtNombreEmplea.value;
		var apellEmpleado = document.formModificaEmpleado.txtApellidoEmplea.value;

		var oEmpleadoMod = new Empleado(dniEmpleado, nomEmpleado, apellEmpleado);
		var info = document.getElementById("txtMensaje");
		var sMensaje = document.createTextNode(oTaller.modificarEmpleado(oEmpleadoMod));
		openWindow(sMensaje);
		
		document.formModificaEmpleado.reset();
		var apellido = document.formModificaEmpleado.txtApellidoEmplea;
		apellido.setAttribute("value", "");
		var nombre = document.formModificaEmpleado.txtNombreEmplea;
		nombre.setAttribute("value", "");
	}
	return bValido;
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

	var oExpReg = /^[a-zA-Z\s]{3}[0-9]{4}$/;
	
	if (oExpReg.test(sNumRefElec) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formAltaElectrodomestico.txtNumRef.focus();		
		}
	
		arrayErrores.push("El codigo de referencia erroneo. Example ref1");
		
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

	var oExpReg = /^[a-zA-Z\s\d]{3,40}$/;
	
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
		var combo=document.formAltaElectrodomestico.SelectCliente.selectedIndex;
		var sDniCli= document.formAltaElectrodomestico.SelectCliente.options[combo].value;
		
		var cliente=null;
		for(var i=0; i<oTaller.Aclientes.length; i++){
			if(oTaller.Aclientes[i].dni_cliente==sDniCli){
				cliente=oTaller.Aclientes[i];
			}
		}	
		if(cliente!=null){
			var oElectrodomestico = new Electrodomestico(sNumRef, sNombreElec, sMarca, cliente);
			var info = document.getElementById("txtMensaje");
			var sMensaje = document.createTextNode(oTaller.altaElectrodomestico(oElectrodomestico));
			openWindow(sMensaje);
			document.formAltaElectrodomestico.reset();
		}

		
	}
	return bValido;
}
//***ACEPTA CONSULTAR***


//***********RECAMBIOS**************
//***ACEPTA ALTA***
document.formAltaRecElectrodomestico.btnAltaRecam.addEventListener("click", aceptaAltaRecambio);
function aceptaAltaRecambio(){
	var bValido = true;
	var arrayErrores = [];
	
	// Validaciones
	//Campo id Recaambio
	var sIdRecambio = document.formAltaRecElectrodomestico.txtIdRecambio.value.trim();
	// Trim
	document.formAltaRecElectrodomestico.txtIdRecambio.value = document.formAltaRecElectrodomestico.txtIdRecambio.value.trim();

	var oExpReg =  /^[a-zA-Z\s]{3}[0-9]{4}$/;
	
	if (oExpReg.test(sIdRecambio) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formAltaRecElectrodomestico.txtIdRecambio.focus();		
		}
	
		arrayErrores.push("ID incorrecto. Ejemplo Rec0001");
		
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

	var oExpReg =  /^([0-9])*$/;
	
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
		var sIdRecambio = document.formAltaRecElectrodomestico.txtIdRecambio.value.trim();
		var sNombreRec = document.formAltaRecElectrodomestico.txtNombreRecambio.value.trim();
		var sPrecio = document.formAltaRecElectrodomestico.txtPrecio.value.trim();
		var combo=document.formAltaRecElectrodomestico.SelectProveedor.selectedIndex;
		var nifProveedor= document.formAltaRecElectrodomestico.SelectProveedor.options[combo].value;

		var proveedor=null;
		for(var i=0; i<oTaller.Aproveedor.length; i++){
			if(oTaller.Aproveedor[i].DNI_proveedor==nifProveedor){
				proveedor=oTaller.Aproveedor[i];
			}
		}	
		var oRecambio = new Componentes(sIdRecambio, sNombreRec, sPrecio, proveedor);
		var info = document.getElementById("txtMensaje");
		var sMensaje = document.createTextNode(oTaller.altaRecambio(oRecambio));
		openWindow(sMensaje);
		document.formAltaRecElectrodomestico.reset();
	}
	return bValido;
}
//***ACEPTA CONSULTAR***

//***ACEPTA BAJA***

//***********PROVEEDOR**************
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

	var oExpReg = /^\d{8}[a-zA-Z]$/;
	
	if (oExpReg.test(sNif) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formAltaProveedor.txtNifProveedor.focus();		
		}
	
		 arrayErrores.push("Nif incorrecto. Example 12345678A");
		
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
		document.formAltaProveedor.reset();
	}
	return bValido;	
}
//***ACEPTA BAJA***
document.formBajaProveedor.btnBajaProv.addEventListener("click", aceptarBajaProveedor);
function aceptarBajaProveedor(){
	var combo=document.formBajaProveedor.SelectProveedor.selectedIndex;
	var DNIProveedor= document.formBajaProveedor.SelectProveedor.options[combo].value;
	
	var info = document.getElementById("txtMensaje");
	var sMensaje = document.createTextNode(oTaller.bajaProveedor(DNIProveedor));
	openWindow(sMensaje);
}
//***ACEPTA CONSULTAR***

//******************************GESTION AVERIA**************************
//ACEPTAR ALTA
function validaAltaAveria(oEvento){
	var bValido = true;
	var arrayErrores = [];
	
	// Validaciones

	//Campo idAveria
	var sIdAveria = document.formAltaAveria.txtidAveria.value.trim();
	

	var oExpReg = /^[a-zA-Z]{3}\d{4}/;
	
	if (oExpReg.test(sIdAveria) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formAltaAveria.txtidAveria.focus();		
		}
	
		arrayErrores.push("Id incorrecto: avr0000");
		
		//Marcar error
		document.formAltaAveria.txtidAveria.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formAltaAveria.txtidAveria.className = "form-control control";	
	}

	//Campo descripcion
	var sDescripcionAver = document.formAltaAveria.txtDescripAveria.value.trim();

	var oExpReg = /^((\w{1,20})\s?){2,50}$/;
	
	if (oExpReg.test(sDescripcionAver) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formAltaAveria.txtDescripAveria.focus();		
		}
	
		arrayErrores.push("Descripcion incorrecta: 10 a 100 palabras");
		
		//Marcar error
		document.formAltaAveria.txtDescripAveria.className = "form-control  error";
	
	}else {
		//Desmarcar error
		document.formAltaAveria.txtDescripAveria.className = "form-control control";	


	}

	//campo unidades
	var sUnidades = document.formAltaAveria.txtUnidades.value.trim();
	var oExpReg = /^\d{1,2}$/;
	if(oExpReg.test(sUnidades)==false){
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formAltaAveria.txtUnidades.focus();		
		}
	
		arrayErrores.push("Unidades incorrecta: Hasta 99 unidades");
		
		//Marcar error
		document.formAltaAveria.txtUnidades.className = "form-control  error";
	}else{
		//Desmarcar error
		document.formAltaAveria.txtUnidades.className = "form-control control";
	}

	//campo fecha
	var sFecha = document.formAltaAveria.fecha.value.trim();
	var oExpReg = /^([0][1-9]|[12][0-9]|3[01])(\/|-)([0][1-9]|[1][0-2])\2(\d{4})$/;
	
	if (oExpReg.test(sFecha) == false){
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formAltaAveria.fecha.focus();		
		}
		arrayErrores.push("Fecha incorrecta. Formato DD/MM/YY");
		//Marcar error
		document.formAltaAveria.fecha.className = "form-control  error";
	}
	else {
		//Desmarcar error
		document.formAltaAveria.fecha.className = "form-control control";	
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
		//aqui
		var id_ParteAveria = document.formAltaAveria.txtidAveria.value;
		var descripcion_ParteAveria = document.formAltaAveria.txtDescripAveria.value;
		var unidades = document.formAltaAveria.txtUnidades.value;
		var fecha_ParteAveria = document.formAltaAveria.fecha.value;
		
		var comboRecambio=document.formAltaAveria.SelectRecambios.selectedIndex;
		var nomRecambio= document.formAltaAveria.SelectRecambios.options[comboRecambio].value;
		var recambio=null;
		for(var i=0; i<oTaller.Acomponentes.length; i++){
			if(oTaller.Acomponentes[i].id_componente==nomRecambio){
				recambio=oTaller.Acomponentes[i];
			}
		}	

		var comboEmpleado=document.formAltaAveria.SelectEmpleado.selectedIndex;
		var dniEmpleado= document.formAltaAveria.SelectEmpleado.options[comboEmpleado].value;
		var empleado=null;
		for(var i=0; i<oTaller.Aempleados.length; i++){
			if(oTaller.Aempleados[i].dni_empleado==dniEmpleado){
				empleado=oTaller.Aempleados[i];
			}
		}	

		var comboElectro=document.formAltaAveria.SelectElectrodomestico.selectedIndex;
		var idElectrodomestico= document.formAltaAveria.SelectElectrodomestico.options[comboElectro].value;
		var electrodomestico=null;
		for(var i=0; i<oTaller.Aelectrodomesticos.length; i++){
			if(oTaller.Aelectrodomesticos[i].num_Refe==idElectrodomestico){
				electrodomestico=oTaller.Aelectrodomesticos[i];
			}
		}	

		var oAveria = new Parte_Averia(id_ParteAveria, descripcion_ParteAveria, unidades, fecha_ParteAveria,  electrodomestico, empleado, recambio);
		var sMensaje = document.createTextNode(oTaller.altaParteAveria(oAveria));
		openWindow(sMensaje);
		document.formAltaAveria.reset();
	}
	return bValido;
}


//******************************MUESTRA DATOS ***************************
function mostrarDatosCliente(){
	var combo=document.formModificaCli.SelectCliente.selectedIndex;
	var dniClienteSeleccionado= document.formModificaCli.SelectCliente.options[combo].value;
	oTaller.cargadatosCliente(dniClienteSeleccionado);
}
function mostrarDatosEmpleados(){
	var combo=document.formModificaEmpleado.SelectEmpleado.selectedIndex;	
	var dniEmpleadoSeleccionado= document.formModificaEmpleado.SelectEmpleado.options[combo].value;
	
	if(dniEmpleadoSeleccionado==0){
		var apellido = document.formModificaEmpleado.txtApellidoEmplea;
		apellido.setAttribute("value", "");
		var nombre = document.formModificaEmpleado.txtNombreEmplea;
		nombre.setAttribute("value", "");
	}else{
		oTaller.cargadatosEmpleado(dniEmpleadoSeleccionado);
	}
}
function mostrarDatosFact(){
	var combo=document.FormModificaFacturaReparacion.SelectFactura.selectedIndex;
	var idFacturaSeleccionada= document.formModificaCli.SelectFactura.options[combo].value;
	oTaller.cargadatosFactura(idFacturaSeleccionada);
}
function mostrarDatosProveedor(){
	var combo=document.formBajaProveedor.SelectProveedor.selectedIndex;
	var idProveedorSeleccionado= document.formBajaProveedor.SelectProveedor.options[combo].value;
	oTaller.cargadatosFactura(idProveedorSeleccionado);
}
function mostrarDatosAver(){
	var combo=document.FormAltaPresupuesto.selectIdAverias.selectedIndex;
	var idAveriaSeleccionada= document.FormAltaPresupuesto.selectIdAverias.options[combo].value;
	oTaller.cargaDatosAveria(idAveriaSeleccionada);
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
    
    var divComboBajaClientes = document.getElementById("comboBajaClientes");
    divComboBajaClientes.removeChild(divComboBajaClientes.firstChild);
    divComboBajaClientes.appendChild(oTaller.getComboClientes());
    document.getElementById("bajaCliente").style.display = "block";
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
	var comboBajaFactura = document.getElementById("comboBajaFactura");
    comboBajaFactura.removeChild(comboBajaFactura.firstChild);
    comboBajaFactura.appendChild(oTaller.getComboFacturas());
    document.getElementById("bajaFacturaReparación").style.display = "block";
});
document.getElementById("btnAltaElectrodomestico").addEventListener("click", function(){
	ocultar();
	//Muestra 
	var comboClientes = document.getElementById("comboClientes");
	comboClientes.removeChild(comboClientes.firstChild);
    comboClientes.appendChild(oTaller.getComboClientes());

    document.getElementById("altaElectrodomestico").style.display = "block";
});
document.getElementById("btnAltaRecambio").addEventListener("click", function(){
	ocultar();
	//Muestra 
	var comboProveedorA = document.getElementById("comboProveedorA");
	comboProveedorA.removeChild(comboProveedorA.firstChild);
    comboProveedorA.appendChild(oTaller.getComboProveedor());
    document.getElementById("altaRecambio").style.display = "block";
});
document.getElementById("btnConsultaRecambio").addEventListener("click", function(){
	ocultar();
	//Muestra 
    document.getElementById("consultarRecambio").style.display = "block";
});
document.getElementById("btnBajaRecambio").addEventListener("click", function(){
	ocultar();
	var comboBajaRecambio = document.getElementById("comboBajaRecambios");
	comboBajaRecambio.removeChild(comboBajaRecambio.firstChild);
    comboBajaRecambio.appendChild(oTaller.getComboRecambios());
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
	var comboProveedor = document.getElementById("comboProveedor");
	comboProveedor.removeChild(comboProveedor.firstChild);
    comboProveedor.appendChild(oTaller.getComboProveedor());
    document.getElementById("consultarProveedor").style.display = "block";
});
document.getElementById("btnBajaProveedor").addEventListener("click", function(){
	ocultar();
	//Muestra 
	var comboBajaProveedor = document.getElementById("comboBajaProveedor");
	comboBajaProveedor.removeChild(comboBajaProveedor.firstChild);
    comboBajaProveedor.appendChild(oTaller.getComboProveedor());
    document.getElementById("bajaProveedor").style.display = "block";
});
document.getElementById("btnConsultaElctrodomesticos").addEventListener("click", function(){
	ocultar();
	//Muestra 
	var comboElectrodomesticos = document.getElementById("comboElectrodomesticos");
	comboElectrodomesticos.removeChild(comboElectrodomesticos.firstChild);
    comboElectrodomesticos.appendChild(oTaller.getComboElectrodomestico());
    
    document.getElementById("consultarElectrodomesticos").style.display = "block";
});
document.getElementById("btnAltaAvería").addEventListener("click", function(){
	ocultar();
	//Muestra 
	var f=new Date();
	var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
	f=f.getDate() +'/'+ meses[f.getMonth()] +'/'+ f.getFullYear();
	document.formAltaAveria.fecha.setAttribute("placeholder",f);

	//combo empleado para alta averia
    var divComboEmpleado = document.getElementById("comboAveriaEmpleados");
    divComboEmpleado.removeChild(divComboEmpleado.firstChild);
    divComboEmpleado.appendChild(oTaller.getComboEmpleados());
    //combo electrodomesticos para alta averia
    var divComboElectro = document.getElementById("comboAveriaElectro");
    divComboElectro.removeChild(divComboElectro.firstChild);
    divComboElectro.appendChild(oTaller.getComboElectrodomestico());
    //combo remcabios para alta averia
    var divComboRecambios = document.getElementById("comboAveriaRecambios");
    divComboRecambios.removeChild(divComboRecambios.firstChild);
    divComboRecambios.appendChild(oTaller.getComboRecambios());
    
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
	var comboIdAverias = document.getElementById("comboIdAverias");
	comboIdAverias.removeChild(comboIdAverias.firstChild);
    comboIdAverias.appendChild(oTaller.getcomboIdAverias());
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
	var divComboBajaEmpleado = document.getElementById("comboBajaEmpleados");
    divComboBajaEmpleado.removeChild(divComboBajaEmpleado.firstChild);
    divComboBajaEmpleado.appendChild(oTaller.getComboEmpleados());
    document.getElementById("bajaEmpleado").style.display = "block";
});
document.getElementById("btnModificaEmpleado").addEventListener("click", function(){
	ocultar();
	//Muestra  
	var divComboEmpleado = document.getElementById("comboModEmpleados");
    divComboEmpleado.removeChild(divComboEmpleado.firstChild);
    divComboEmpleado.appendChild(oTaller.getComboEmpleados());
    document.getElementById("modificaEmpleado").style.display = "block";
});
//FIN OCULTAR FORMULARIOS
//VALIDAR FORMULARIO





document.formAltaAveria.btnAltaAver.addEventListener("click", validaAltaAveria);
document.formModAveria.btnModAver.addEventListener("click", validaModifAveria);
document.formBajaRecambio.btnBajaRecam.addEventListener("click", validaBajaRecambio);
document.FormListarFacturaReparacion.btnListarFacRepa.addEventListener("click",validaFecha);



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

	var oExpReg = /^\d{8}[a-zA-Z]$/;
	
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


	