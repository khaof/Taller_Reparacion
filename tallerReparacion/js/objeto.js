//Clase factura 
function Factura(id_factura, precioTotal, fecha_factura, presupuesto) {
	this.presupuesto = presupuesto;
	this.id_factura = id_factura;
	this.fecha_factura = fecha_factura;
	this.precioTotal = precioTotal;
	this.pagada_factura = false;
}
//--------------------------------------
	//Clase cliente 
function Cliente(dni_cliente, nombre_cliente, apellidos_cliente, telefono_cliente, direccion_cliente, email_cliente) {
	this.dni_cliente = dni_cliente;
	this.nombre_cliente = nombre_cliente;
	this.apellidos_cliente = apellidos_cliente;
	this.telefono_cliente = telefono_cliente;
	this.direccion_cliente = direccion_cliente;
	this.email_cliente = email_cliente;
}
//---------------------------------------------
	//Clase prespuesto 
function Presupuesto(id_presupuesto, total_presupuesto, parteAveria) {
	this.parteAveria = parteAveria;
	this.id_presupuesto = id_presupuesto;
	this.total_presupuesto = total_presupuesto;
}
//-------------------------------------------
	//Clase Electrodomestico 
function Electrodomestico(num_Refe, nombre_Electro, marca, cliente) {
	this.cliente = cliente;
	this.num_Refe = num_Refe;
	this.nombre_Electro = nombre_Electro;
	this.marca = marca;
}
//-------------------------------------------------------------------
	//Claese Parte_averia 
function Parte_Averia(id_ParteAveria, descripcion_ParteAveria, unidades, fecha_ParteAveria,  electrodomestico, empleado, recambio) {
	this.electrodomestico = electrodomestico;
	this.empleado = empleado;
	this.recambio = recambio;
	this.id_ParteAveria = id_ParteAveria;
	this.descripcion_ParteAveria = descripcion_ParteAveria;
	this.unidades = unidades;
	this.fecha_ParteAveria = fecha_ParteAveria;

}


//---------------------------------------------------------------------------------
	//Clase empleado 
function Empleado(dni_empleado, nombre_empleado, apellidos_empleado) {
	this.dni_empleado = dni_empleado;
	this.nombre_empleado = nombre_empleado;
	this.apellidos_empleado = apellidos_empleado;
}

//---------------------------------------------------------------------------------------
	//Clase LineaComponente 
function LineaComponente(id_LineaComponente, id_presupuesto, id_componente, cantidad_LineaComponente) {
	Presupuesto.call(this, id_presupuesto);
	Componentes.call(this, id_componente);
	this.id_LineaComponente = id_LineaComponente;
	this.cantidad_LineaComponente = cantidad_LineaComponente;
}


//--------------------------------------------------------------------------------------
	//Clase componente 
function Componentes(id_componente, nombre_componente, precio_componente, proveedor) {
	this.proveedor=proveedor;
	this.id_componente = id_componente;
	this.nombre_componente = nombre_componente;
	this.precio_componente = precio_componente;
}

//------------------------------------------------------------------------
	//Clase proveedor 
function Proveedor(DNI_proveedor, nombre_proveedor, direccion_proveedor, telefono_proveedor) {
	this.DNI_proveedor = DNI_proveedor;
	this.nombre_proveedor = nombre_proveedor;
	this.direccion_proveedor = direccion_proveedor;
	this.telefono_proveedor = telefono_proveedor;
}

	//--------------------------------------------------------------------------
	//Arrays de clases
function tallerElectromecanica() {
	this.Afacturas = [];
	this.Aclientes = [];
	this.Aelectrodomesticos = [];
	this.Apresupuestos = [];
	this.AlineaComponente = [];
	this.Aempleados = [];
	this.AparteAveria = [];
	this.Acomponentes = [];
	this.Aproveedor = [];
}

tallerElectromecanica.prototype.getComboAverias = function(){
	var select = document.createElement("select");
	select.setAttribute("width","100%");
	select.setAttribute("name","SelectAverias");
	select.setAttribute("onchange", "mostrarDatosModAveria()");

	var option = document.createElement("option");
	option.setAttribute("value", "0");
	var texto = document.createTextNode("---Elija una Averia---");
	option.appendChild(texto);
	select.appendChild(option);
	for (var i = 0; i<this.AparteAveria.length; i++){
		var option = document.createElement("option");
		option.setAttribute("value", this.AparteAveria[i].id_ParteAveria);
		var texto = document.createTextNode(this.AparteAveria[i].id_ParteAveria);
		option.appendChild(texto);
		select.appendChild(option);
	}

	if(this.AparteAveria.length<=0){
		var option = document.createElement("option");
		var texto = document.createTextNode("No existen Averias");
		option.appendChild(texto);
		select.appendChild(option);
	}
	select.className = "form-control";
	return select;
}
tallerElectromecanica.prototype.getComboRecambios = function(){
	var select = document.createElement("select");
	select.setAttribute("width","100%");
	select.setAttribute("name","SelectRecambios");
	for (var i = 0; i<this.Acomponentes.length; i++){
		var option = document.createElement("option");
		option.setAttribute("value", this.Acomponentes[i].id_componente);
		var texto = document.createTextNode(this.Acomponentes[i].nombre_componente);
		option.appendChild(texto);
		select.appendChild(option);
	}

	if(this.Acomponentes.length<=0){
		var option = document.createElement("option");
		var texto = document.createTextNode("No existen Recambios");
		option.appendChild(texto);
		select.appendChild(option);
	}
	select.className = "form-control";
	return select;
}
tallerElectromecanica.prototype.getComboEmpleados = function(){
	var select = document.createElement("select");
	select.setAttribute("width","100%");
	select.setAttribute("name","SelectEmpleado");
	select.setAttribute("onclick", "mostrarDatosEmpleados()");
	var option = document.createElement("option");
	option.setAttribute("value", "0");
	var texto = document.createTextNode("---Elija un DNI---");
	option.appendChild(texto);
	select.appendChild(option);
	for (var i = 0; i<this.Aempleados.length; i++){
		var option = document.createElement("option");
		option.setAttribute("value", "Elija un DNI");
		option.setAttribute("value", this.Aempleados[i].dni_empleado);
		var texto = document.createTextNode(this.Aempleados[i].dni_empleado);
		option.appendChild(texto);
		select.appendChild(option);
	}

	if(this.Aempleados.length<=0){
		var option = document.createElement("option");
		var texto = document.createTextNode("No existen Empleados");
		option.appendChild(texto);
		select.appendChild(option);
	}
	select.className = "form-control";
	return select;
}
//MODIFIACION MARIO 31/01
tallerElectromecanica.prototype.getComboClientes = function(){
	var select = document.createElement("select");
	select.setAttribute("width","100%");
	select.setAttribute("name","SelectCliente");
	select.setAttribute("onchange", "mostrarDatosCliente()");
	var option = document.createElement("option");
	option.setAttribute("value", "0");
	var texto = document.createTextNode("---Elija un DNI---");
	option.appendChild(texto);
	select.appendChild(option);
	for (var i = 0; i<this.Aclientes.length; i++){
		var option = document.createElement("option");
		option.setAttribute("value", "Elija un DNI");
		option.setAttribute("value", this.Aclientes[i].dni_cliente);
		var texto = document.createTextNode(this.Aclientes[i].dni_cliente);
		option.appendChild(texto);
		select.appendChild(option);
	}

	if(this.Aclientes.length<=0){
		var option = document.createElement("option");
		var texto = document.createTextNode("No existen clientes");
		option.appendChild(texto);
		select.appendChild(option);
	}
	select.className = "form-control";
	return select;
}
tallerElectromecanica.prototype.getComboFacturas = function(){
	var selectFac = document.createElement("select");
	selectFac.setAttribute("width","100%");
	selectFac.setAttribute("name","SelectFactura");
	selectFac.setAttribute("onclick", "mostrarDatosFact()");
	for (var i = 0; i < this.Afacturas.length; i++) {
		var option = document.createElement("option");
		option.setAttribute("value", this.Afacturas[i].id_factura);
		var texto = document.createTextNode(this.Afacturas[i].id_factura);
		option.appendChild(texto);
		selectFac.appendChild(option);
	}
	if(this.Afacturas.length<=0){
		var option = document.createElement("option");
		var texto = document.createTextNode("No existen facturas");
		option.appendChild(texto);
		selectFac.appendChild(option);
	}
	selectFac.className = "form-control";
	return selectFac;
}
tallerElectromecanica.prototype.getComboElectrodomestico = function(){
	var selectElect = document.createElement("select");
	selectElect.setAttribute("width","100%");
	selectElect.setAttribute("name","SelectElectrodomestico");
	for (var i = 0; i < this.Aelectrodomesticos.length; i++) {
		var option = document.createElement("option");
		option.setAttribute("value", this.Aelectrodomesticos[i].num_Refe);
		var texto = document.createTextNode(this.Aelectrodomesticos[i].num_Refe);
		option.appendChild(texto);
		selectElect.appendChild(option);
	}
	if(this.Aelectrodomesticos.length<=0){
		var option = document.createElement("option");
		var texto = document.createTextNode("No existen Electrodomésticos");
		option.appendChild(texto);
		selectElect.appendChild(option);
	}
	selectElect.className = "form-control";
	return selectElect;
}
tallerElectromecanica.prototype.getComboProveedor = function(){
	var select = document.createElement("select");
	select.setAttribute("width","100%");
	select.setAttribute("name","SelectProveedor");
	var option = document.createElement("option");
	option.setAttribute("value", "0");
	var texto = document.createTextNode("---Elija un DNI---");
	option.appendChild(texto);
	select.appendChild(option);
	for (var i = 0; i<this.Aproveedor.length; i++){
		var option = document.createElement("option");
		option.setAttribute("value", this.Aproveedor[i].DNI_proveedor);
		var texto = document.createTextNode(this.Aproveedor[i].DNI_proveedor);
		option.appendChild(texto);
		select.appendChild(option);
	}

	if(this.Aproveedor.length<=0){
		var option = document.createElement("option");
		var texto = document.createTextNode("No existen proveedores");
		option.appendChild(texto);
		select.appendChild(option);
	}
	select.className = "form-control";
	return select;
}
tallerElectromecanica.prototype.getcomboIdAverias = function(){
	var selectAver = document.createElement("select");
	selectAver.setAttribute("width","100%");
	selectAver.setAttribute("name","selectIdAverias");
	selectAver.setAttribute("onclick", "mostrarDatosAver()");
	for (var i = 0; i < this.AparteAveria.length; i++) {
		var option = document.createElement("option");
		option.setAttribute("value", this.AparteAveria[i].id_ParteAveria);
		var texto = document.createTextNode(this.AparteAveria[i].id_ParteAveria);
		option.appendChild(texto);
		selectAver.appendChild(option);
	}
	if(this.AparteAveria.length<=0){
		var option = document.createElement("option");
		var texto = document.createTextNode("No existen averías");
		option.appendChild(texto);
		selectAver.appendChild(option);
	}
	selectAver.className = "form-control";
	return selectAver;
}
tallerElectromecanica.prototype.getComboPresupuestos = function(){
	var selectpres = document.createElement("select");
	selectpres.setAttribute("width","100%");
	selectpres.setAttribute("name","selectPresupuestoLinea");
	selectpres.setAttribute("onclick","mostrarDatosPresupuesto()");
	for (var i = 0; i < this.Apresupuestos.length; i++) {
		var option = document.createElement("option");
		option.setAttribute("value", this.Apresupuestos[i].id_presupuesto);
		var texto = document.createTextNode(this.Apresupuestos[i].id_presupuesto);
		option.appendChild(texto);
		selectpres.appendChild(option);
	}
	if(this.Apresupuestos.length<=0){
		var option = document.createElement("option");
		var texto = document.createTextNode("No existen presupuestos");
		option.appendChild(texto);
		selectpres.appendChild(option);
	}
	selectpres.className = "form-control";
	return selectpres;
}

//-------------------------------------------------------------------------
tallerElectromecanica.prototype.cargadatosCliente = function(dniClienteSeleccionado){
	var i = 0;
	var bEnc = false;
	while (i < this.Aclientes.length && bEnc == false) {
		if (this.Aclientes[i].dni_cliente == dniClienteSeleccionado)
			bEnc = true;
		else
			i++;
	}
	if(bEnc){

		var mail = document.formModificaCli.txtMail;
		mail.setAttribute("value", this.Aclientes[i].email_cliente);
		var direc = document.formModificaCli.txtDireccion;
		direc.setAttribute("value", this.Aclientes[i].direccion_cliente);
		var tlfn = document.formModificaCli.txtTelefono;
		tlfn.setAttribute("value", this.Aclientes[i].telefono_cliente);
		var apeliido = document.formModificaCli.txtApellido;
		apeliido.setAttribute("value", this.Aclientes[i].apellidos_cliente);
		var nombre = document.formModificaCli.txtNombre;
		nombre.setAttribute("value", this.Aclientes[i].nombre_cliente);
	}
}
tallerElectromecanica.prototype.cargadatosEmpleado = function (dniEmpleadoSeleccionado){
	var i = 0;
	var bEnc = false;
	while (i < this.Aempleados.length && bEnc == false) {
		if (this.Aempleados[i].dni_empleado == dniEmpleadoSeleccionado)
			bEnc = true;
		else
			i++;
	}
	if(bEnc){		
		var apellido = document.formModificaEmpleado.txtApellidoEmplea;
		apellido.setAttribute("value", this.Aempleados[i].apellidos_empleado);
		var nombre = document.formModificaEmpleado.txtNombreEmplea;
		nombre.setAttribute("value", this.Aempleados[i].nombre_empleado);
	}	
}
tallerElectromecanica.prototype.cargadatosFactura = function(idFacturaSeleccionada){
	var i = 0;
	var bEnc = false;
	while (i < this.Afacturas.length && bEnc == false) {
		if (this.Afacturas[i].id_factura == idFacturaSeleccionada)
			bEnc = true;
		else
			i++;
	}
	if(bEnc){

		var dniCli = document.FormModificaFacturaReparacion.txtDNIClie;		
		var precio = document.FormModificaFacturaReparacion.txtPrecio;
		var fecha = document.FormModificaFacturaReparacion.fecha;
		var facPagadaSi = document.FormModificaFacturaReparacion.facPagadas;
		var facPagadaNo = document.FormModificaFacturaReparacion.facPagadan;

		var pagada_factura = this.Afacturas[i].pagada_factura;
		if(pagada_factura==false){
			facPagadaNo.setAttribute("checked", "checked");
			facPagadaSi.removeAttribute("checked", "checked");
		}else{
			facPagadaSi.setAttribute("checked", "checked");
			facPagadaNo.removeAttribute("checked", "checked");
		}

		precio.setAttribute("value", this.Afacturas[i].precioTotal);
		dniCli.setAttribute("value", this.Afacturas[i].presupuesto.electrodomestico.cliente.dni_cliente);
		fecha.setAttribute("value", this.Afacturas[i].fecha_factura);
	}
}
tallerElectromecanica.prototype.cargadatosModAveria = function(idParteAveriaSeleccionado){
	var i = 0;
	var bEnc = false;
	while (i < this.AparteAveria.length && bEnc == false) {
		if (this.AparteAveria[i].id_ParteAveria == idParteAveriaSeleccionado)
			bEnc = true;
		else
			i++;
	}
	if(bEnc){

		var descripcion = document.formModAveria.txtDescripAveria;
		var valorDescripcion = document.createTextNode(this.AparteAveria[i].descripcion_ParteAveria);
		descripcion.appendChild(valorDescripcion);
		var unidades = document.formModAveria.txtUnidades;
		unidades.setAttribute("value", this.AparteAveria[i].unidades);
		var fecha = document.formModAveria.fecha;
		fecha.setAttribute("value", this.AparteAveria[i].fecha_ParteAveria);
		
	}
}
tallerElectromecanica.prototype.cargaDatosAveria = function(idAveriaSeleccionada){
	var i = 0;
	var bEnc = false;
	while (i < this.AparteAveria.length && bEnc == false) {
		if (this.AparteAveria[i].id_ParteAveria == idAveriaSeleccionada)
			bEnc = true;
		else
			i++;
	}
	if(bEnc){
		var precio = this.AparteAveria[i].recambio.precio_componente;
		var unidades = this.AparteAveria[i].unidades;

		var precioTotal = (precio*unidades);
		var total = document.FormAltaPresupuesto.txtTotalPresu;
		total.setAttribute("value", precioTotal);		
	}
}
tallerElectromecanica.prototype.cargaDatosPresupuesto = function(idPresupuestoSeleccionado){
	var i = 0;
	var bEnc = false;
	while (i < this.Apresupuestos.length && bEnc == false) {
		if (this.Apresupuestos[i].id_presupuesto == idPresupuestoSeleccionado)
			bEnc = true;
		else
			i++;
	}
	if(bEnc){
		var DNI = this.Apresupuestos[i].parteAveria.electrodomestico.cliente.dni_cliente;
		var nombre = this.Apresupuestos[i].parteAveria.electrodomestico.cliente.nombre_cliente;
		var apellidos = this.Apresupuestos[i].parteAveria.electrodomestico.cliente.apellidos_cliente;

		var DNICliente = document.formaltaLineaComponente.txtDNICliente;
		var nombreYapellidos = document.formaltaLineaComponente.txtNombreYApellidos;
		DNICliente.setAttribute("value", DNI);
		nombreYapellidos.setAttribute("value", nombre+" "+apellidos);		
	}
}

//--------------------------------------------------------------------------
	//Metodo altaCliente
tallerElectromecanica.prototype.altaCliente = function(oClientes) {
		var i = 0;
		var bEnc = false;
		var sMensaje = "";

		while (i < this.Aclientes.length && bEnc == false) {
			if (this.Aclientes[i].dni_cliente == oClientes.dni_cliente)
				bEnc = true;
			else
				i++;
		}

		if (bEnc == true) {
			sMensaje = "Este cliente ya está registrado";
		} else {
			this.Aclientes.push(oClientes);
			sMensaje = "Cliente Alta: OK!";
		}

		return sMensaje;
}
	//Metodo baja Cliente
tallerElectromecanica.prototype.bajaCliente = function(oDniCliente) {
		var i = 0;
		var bEnc = false;
		var z = 0;
		var sMensaje = "";

		while (i < this.Aclientes.length && bEnc == false) {
			if (this.Aclientes[i].dni_cliente == oDniCliente)
				bEnc = true;
			else
				i++;
		}
		while (z < this.Aelectrodomesticos.length){
			if(this.Aelectrodomesticos[z].cliente.dni_cliente == oDniCliente){
				this.Aelectrodomesticos.splice(z, 1);				
			}else{
				z++;	
			}			
		}

		if (bEnc == true) {
			this.Aclientes.splice(i, 1);
			sMensaje = "Cliente Baja: OK!";
		}

		return sMensaje;
}
	//Metodo modificarCliente
tallerElectromecanica.prototype.modificarCliente = function(oClienteMod) {
		var i = 0;
		var z = 0;
		var bEnc = false;
		var sMensaje = "";

		while (i < this.Aclientes.length && bEnc == false) {
			if (this.Aclientes[i].dni_cliente == oClienteMod.dni_cliente)
				bEnc = true;
			else
				i++;
		}

		while (z < this.Aelectrodomesticos.length){
			if(this.Aelectrodomesticos[z].cliente.dni_cliente == oClienteMod.dni_cliente){
				this.Aelectrodomesticos[z].cliente = oClienteMod;			
			}else{
				z++;	
			}			
		}

		if (bEnc == true) {
			this.Aclientes.splice(i, 1, oClienteMod);
			sMensaje = "Cliente Modificar: OK!";
			mostrarDatosCliente();

		} else {
			sMensaje = "Cliente Modificar: No se ha encontrado el DNI";
		}
		return sMensaje;
}

//------------------------------------------------------------------------
	//Metodo altaEmpleado
tallerElectromecanica.prototype.altaEmpleado = function(oEmpleado) {
		var i = 0;
		var bEnc = false;
		var sMensaje = "";

		while (i < this.Aempleados.length && bEnc == false) {
			if (this.Aempleados[i].dni_empleado == oEmpleado.dni_empleado)
				bEnc = true;
			else
				i++;
		}

		if (bEnc == true) {
			sMensaje = "Este Empleado ya está registrado";
		} else {
			this.Aempleados.push(oEmpleado);
			sMensaje = "Empleado Alta: OK!";
		}

		return sMensaje;
}
	//Metodo bajaEmpleado
tallerElectromecanica.prototype.bajaEmpleado = function(oDNIEmpleado){
	var i = 0;
	var bEnc = false;
	var sMensaje = "";

	while (i < this.Aempleados.length && bEnc == false) {
		if (this.Aempleados[i].dni_empleado == oDNIEmpleado)
			bEnc = true;
		else
			i++;
	}

	if (bEnc == true) {
		this.Aempleados.splice(i, 1);
		sMensaje = "Empleado Baja: OK!";
	}

	return sMensaje;
}
	//Metodo modificarEmpleado
tallerElectromecanica.prototype.modificarEmpleado = function(oEmpleadoMod) {
	var i = 0;
	var bEnc = false;
	var sMensaje = "";

	while (i < this.Aempleados.length && bEnc == false) {
		if (this.Aempleados[i].dni_empleado == oEmpleadoMod.dni_empleado)
			bEnc = true;
		else
			i++;
	}

	if (bEnc == true) {			
		bEmpleadoMod = false;
		for(var z=0; z < this.Aempleados.length; z++){
			if(this.Aempleados[z].nombre_empleado!=oEmpleadoMod.nombre_empleado || this.Aempleados[z].apellidos_empleado!=oEmpleadoMod.apellidos_empleado){
				bEmpleadoMod = true;
			}	
		}
		if(bEmpleadoMod==false){
			sMensaje = "No ha hecho ningun cambio";
		}else{
			this.Aempleados.splice(i, 1, oEmpleadoMod);
			sMensaje = "Empleado Modificar: OK!";	
		}		
	} else {
		sMensaje = "Empleado Modificar: No se ha encontrado el DNI";
	}
	return sMensaje;
}

//--------------------------------------
	//Metodo AltaElectrodomestico
tallerElectromecanica.prototype.altaElectrodomestico = function(oElectrodomestico) {
	var bElectro = false;
	var sMensaje = "";
		for (var z = 0; z < this.Aelectrodomesticos.length; z++) {
			if (this.Aelectrodomesticos[z].num_Refe == oElectrodomestico.num_Refe) {
				bElectro = true;
			}
		}

		if (bElectro == false) {
			this.Aelectrodomesticos.push(oElectrodomestico);
			sMensaje = "Electrodoméstico Alta: OK!";
		} else {
			sMensaje = "Electrodoméstico dado ya de alta";
		}
	
	return sMensaje;
}


//-----------------------------------------------------------------------
	//Metodo altaRecambio
tallerElectromecanica.prototype.altaRecambio = function(oRecambio){
	var i = 0;
	var bEnc = false;
	var sMensaje = "";

	while (i < this.Acomponentes.length && bEnc == false) {
		if (this.Acomponentes[i].id_componente == oRecambio.id_componente)
			bEnc = true;
		else
			i++;
	}

	if (bEnc == true) {
		sMensaje = "Este recambio ya está registrado";
	} else {
		this.Acomponentes.push(oRecambio);	
		sMensaje = "Componente Alta: OK!";
	}

	return sMensaje;
}
//Metodo baja recambio
tallerElectromecanica.prototype.bajaRecambio = function(idRecambio){
	var i = 0;
	var bEnc = false;
	var sMensaje = "";

	while (i < this.Acomponentes.length && bEnc == false) {
		if (this.Acomponentes[i].id_componente == idRecambio)
			bEnc = true;
		else
			i++;
	}

	if (bEnc == true) {
		this.Acomponentes.splice(i, 1);
		sMensaje = "Recambio Baja: OK!";
	}

	return sMensaje;
}

//------------------------------------------------------------------------
	//Metodo altaProveedor
tallerElectromecanica.prototype.altaProveedor = function(oProveedor) {
		var i = 0;
		var bEnc = false;
		var sMensaje = "";

		while (i < this.Aproveedor.length && bEnc == false) {
			if (this.Aproveedor[i].DNI_proveedor == oProveedor.DNI_proveedor)
				bEnc = true;
			else
				i++;
		}

		if (bEnc == true) {
			sMensaje = "Este proveedor ya está registrado";
		} else {
			this.Aproveedor.push(oProveedor);
			sMensaje = "Proveedor Alta: OK!";
		}

		return sMensaje;
}
	//Metodo BajaProveedor
tallerElectromecanica.prototype.bajaProveedor = function(oDNIProveedor){
	var i = 0;
	var bEnc = false;
	var sMensaje = "";

	while (i < this.Aproveedor.length && bEnc == false) {
		if (this.Aproveedor[i].DNI_proveedor == oDNIProveedor)
			bEnc = true;
		else
			i++;
	}

	while (z < this.Acomponentes.length){
			if(this.Acomponentes[z].DNI_proveedor == oDNIProveedor){
				this.Acomponentes.splice(z, 1);				
			}else{
				z++;	
			}			
	}

	if (bEnc == true) {
		this.Aproveedor.splice(i, 1);
		sMensaje = "Proveedor Baja: OK!";
	}

	return sMensaje;
}
//------------------------------------------------------------------------
	//alta parte_averia
tallerElectromecanica.prototype.altaParteAveria = function(oAveria){
	var i = 0;
	var bEnc = false;
	var sMensaje = "";

	while (i < this.AparteAveria.length && bEnc == false) {
		if (this.AparteAveria[i].id_ParteAveria == oAveria.id_ParteAveria)
			bEnc = true;
		else
			i++;
	}


	if (bEnc == true) {
		sMensaje = "Parte de Averia registrado";
	} else {
		this.AparteAveria.push(oAveria);
		sMensaje = "Alta Parte de Averia: OK!";
	}

	return sMensaje;
}
	//Metodo baja Parte Averia
tallerElectromecanica.prototype.bajaParteAveria = function(idAveria){
	var i = 0;
	var bEnc = false;
	var sMensaje = "";

	while (i < this.AparteAveria.length && bEnc == false) {
		if (this.AparteAveria[i].id_ParteAveria == idAveria)
			bEnc = true;
		else
			i++;
	}

	if (bEnc == true) {
		this.AparteAveria.splice(i, 1);
		sMensaje = "Parte Averia Baja: OK!";
	}

	return sMensaje;
}
	//metodo para modificar averia
tallerElectromecanica.prototype.modificarParteAveria = function(oAveria) {
	var i = 0;
	var bEnc = false;
	var sMensaje = "";

	while (i < this.AparteAveria.length && bEnc == false) {
		if (this.AparteAveria[i].id_ParteAveria == oAveria.id_ParteAveria)
			bEnc = true;
		else
			i++;
	}

		if (bEnc == true) {
			this.AparteAveria.splice(i, 1, oAveria);
			sMensaje = "Parte Averia Modificar: OK!";

		} else {
			sMensaje = "No se ha podido modificar Parte Averia";
		}
		return sMensaje;
}
//------------------------------------------------------------------------
	//altaPresupuesto
tallerElectromecanica.prototype.altaPresupuesto = function (oPresupuesto){
	var i = 0;
	var bEnc = false;
	var sMensaje = "";

	while (i < this.Apresupuestos.length && bEnc == false) {
		if (this.Apresupuestos[i].id_presupuesto == oPresupuesto.id_presupuesto && 
			this.Apresupuestos[i].parteAveria.id_ParteAveria == oPresupuesto.parteAveria.id_parteAveria){
			bEnc = true;
		}else{
			i++;
		}
	}

	if (bEnc == false) {
		this.Apresupuestos.push(oPresupuesto);
		sMensaje = "Factura generada!";
	}else{
		sMensaje = "Esa factura ya ha sido generada";
	}

	return sMensaje;
}

//------------------------------------------------------------------------
/*MODIFICACION MARIO Y JUANJO 29/01/2017*/
	//mostrar linea de componente
tallerElectromecanica.prototype.mostrarLineaPresupuesto = function (idPresupuestito){	
	var div = document.getElementById("tablaLineaComponente");
	//cabecera
	var oTabla = document.createElement('table');
	oTabla.setAttribute("class","table table-hover");
	var thead = oTabla.createTHead();
	var cab = ["CANTIDAD", "DESCRIPCION", "IMPORTE"];

	for (var i = 0; i < cab.length; i++) {		
		th = document.createElement('th');
		texto = document.createTextNode(cab[i]);
		th.appendChild(texto);
		thead.appendChild(th);
	}
	oTabla.appendChild(thead);
	var tbody = oTabla.createTBody();
	for(var z=0;z<this.Apresupuestos.length;z++){
		if(this.Apresupuestos[z].id_presupuesto==idPresupuestito){
			
			var fila = tbody.insertRow(-1);
			
			if(z%2 != 0){
				color="warning";
			}else{
				color="info";
			}

			fila.setAttribute("class", color);
			var celda = fila.insertCell(-1);
			var texto = document.createTextNode(this.Apresupuestos[z].parteAveria.unidades);
			celda.appendChild(texto);	

            var celda = fila.insertCell(-1);
            var texto = document.createTextNode(this.Apresupuestos[z].parteAveria.recambio.nombre_componente);
            celda.appendChild(texto);	

            var celda = fila.insertCell(-1);
            var texto = document.createTextNode(this.Apresupuestos[z].parteAveria.recambio.precio_componente);
            celda.appendChild(texto);	
			div.appendChild(oTabla);
		}
	}
	return div;
}

tallerElectromecanica.prototype.altaFactura = function (oFactura){
	var i = 0;
	var bEnc = false;
	var sMensaje = "";

	while (i < this.Afacturas.length && bEnc == false) {
		if (this.Afacturas[i].id_factura == oFactura.id_factura){
			bEnc = true;
		}else{
			i++;
		}
	}
	if (bEnc == false) {
		this.Afacturas.push(oFactura);
	}
	return sMensaje;
}

//modificacion juanjo 30/01/2017
//Listado de todo cllientes
tallerElectromecanica.prototype.listadoClientes = function(){
	var div = document.getElementById("tablaMostrarClientes");
	//cabecera
	var oTabla = document.createElement('table');
	oTabla.setAttribute("class","table table-hover");
	var thead = oTabla.createTHead();
	var cab = ["DNI", "NOMBRE", "APELLIDOS", "TELÉFONO", "DIRECCIÓN", "EMAIL"];

	for (var i = 0; i < cab.length; i++) {		
		th = document.createElement('th');
		texto = document.createTextNode(cab[i]);
		th.appendChild(texto);
		thead.appendChild(th);
	}
	oTabla.appendChild(thead);
	var tbody = oTabla.createTBody();
	var color="";
	for(var i=0; i<this.Aclientes.length;i++){
		var fila = tbody.insertRow(-1);
		if(i%2 != 0){
			color="warning";
		}else{
			color="info";
		}
		fila.setAttribute("class", color);
		//DNI cliente
		var celda = fila.insertCell(-1);
		var texto = document.createTextNode(this.Aclientes[i].dni_cliente);
		celda.appendChild(texto);
		//nombre cliente
		var celda = fila.insertCell(-1);
		var texto = document.createTextNode(this.Aclientes[i].nombre_cliente);
		celda.appendChild(texto);
		//apellido clientes
		var celda = fila.insertCell(-1);
		var texto = document.createTextNode(this.Aclientes[i].apellidos_cliente);
		celda.appendChild(texto);
		//telefono clientes
		var celda = fila.insertCell(-1);
		var texto = document.createTextNode(this.Aclientes[i].telefono_cliente);
		celda.appendChild(texto);
		//direccion clientes
		var celda = fila.insertCell(-1);
		var texto = document.createTextNode(this.Aclientes[i].direccion_cliente);
		celda.appendChild(texto);
		//email cliente
		var celda = fila.insertCell(-1);
		var texto = document.createTextNode(this.Aclientes[i].email_cliente);
		celda.appendChild(texto);
	}
	div.appendChild(oTabla);
	return div;
}
//Listado de todo empleados
tallerElectromecanica.prototype.listadoEmpleados = function(){
	var div = document.getElementById("tablaMostrarEmpleados");
	//cabecera
	var oTabla = document.createElement('table');
	oTabla.setAttribute("class","table table-hover");
	var thead = oTabla.createTHead();
	var cab = ["DNI", "NOMBRE", "APELLIDOS"];

	for (var i = 0; i < cab.length; i++) {		
		th = document.createElement('th');
		texto = document.createTextNode(cab[i]);
		th.appendChild(texto);
		thead.appendChild(th);
	}
	oTabla.appendChild(thead);
	var tbody = oTabla.createTBody();
	var color="";
	for(var i=0; i<this.Aempleados.length;i++){
		var fila = tbody.insertRow(-1);
		if(i%2 != 0){
			color="warning";
		}else{
			color="info";
		}
		fila.setAttribute("class", color);
		//DNI empleado
		var celda = fila.insertCell(-1);
		var texto = document.createTextNode(this.Aempleados[i].dni_empleado);
		celda.appendChild(texto);
		//nombre empleado
		var celda = fila.insertCell(-1);
		var texto = document.createTextNode(this.Aempleados[i].nombre_empleado);
		celda.appendChild(texto);
		//apellido empleado
		var celda = fila.insertCell(-1);
		var texto = document.createTextNode(this.Aempleados[i].apellidos_empleado);
		celda.appendChild(texto);
	}
	div.appendChild(oTabla);
	return div;
}

//mostrar compones por proveedor
tallerElectromecanica.prototype.mostrarComponentesProveedor = function (idProveedor){	
	var div = document.getElementById("tablaMostrarComProveedor");
	//cabecera
	var oTabla = document.createElement('table');
	oTabla.setAttribute("class","table table-hover");
	var thead = oTabla.createTHead();
	var cab = ["ID COMPONENTE", "NOMBRE", "PRECIO", "NIF PROVEEDOR"];

	for (var i = 0; i < cab.length; i++) {		
		th = document.createElement('th');
		texto = document.createTextNode(cab[i]);
		th.appendChild(texto);
		thead.appendChild(th);
	}
	oTabla.appendChild(thead);
	var tbody = oTabla.createTBody();
	for(var z=0; z<this.Acomponentes.length;z++){
		if(this.Acomponentes[z].proveedor.DNI_proveedor == idProveedor){		
				var fila = tbody.insertRow(-1);
				if(z%2 != 0){
					color="warning";
				}else{
					color="info";
				}
				fila.setAttribute("class", color);
				//DNI empleado
				var celda = fila.insertCell(-1);
				var texto = document.createTextNode(this.Acomponentes[z].id_componente);
				celda.appendChild(texto);
				//nombre empleado
				var celda = fila.insertCell(-1);
				var texto = document.createTextNode(this.Acomponentes[z].nombre_componente);
				celda.appendChild(texto);
				//apellido empleado
				var celda = fila.insertCell(-1);
				var texto = document.createTextNode(this.Acomponentes[z].precio_componente);
				celda.appendChild(texto);
				//apellido empleado
				var celda = fila.insertCell(-1);
				var texto = document.createTextNode(this.Acomponentes[z].proveedor.DNI_proveedor);
				celda.appendChild(texto);
				div.appendChild(oTabla);
		}
	}
	return div;
}	

//mostrar proveedor
tallerElectromecanica.prototype.mostrarProveedorSeleccionado = function (idProveedor){	
	var div = document.getElementById("tablaMostrarProveedor");
	//cabecera
	var oTabla = document.createElement('table');
	oTabla.setAttribute("class","table table-hover");
	var thead = oTabla.createTHead();
	var cab = ["NIF", "NOMBRE", "DIRECCIÓN", "TELÉFONO"];

	for (var i = 0; i < cab.length; i++) {		
		th = document.createElement('th');
		texto = document.createTextNode(cab[i]);
		th.appendChild(texto);
		thead.appendChild(th);
	}
	oTabla.appendChild(thead);
	var tbody = oTabla.createTBody();
	for(var z=0; z<this.Acomponentes.length;z++){
		if(this.Aproveedor[z].DNI_proveedor == idProveedor){
				var fila = tbody.insertRow(-1);
				if(z%2 != 0){
					color="warning";
				}else{
					color="info";
				}
				fila.setAttribute("class", color);
				//DNI empleado
				var celda = fila.insertCell(-1);
				var texto = document.createTextNode(this.Aproveedor[z].DNI_proveedor);
				celda.appendChild(texto);
				//nombre empleado
				var celda = fila.insertCell(-1);
				var texto = document.createTextNode(this.Aproveedor[z].nombre_proveedor);
				celda.appendChild(texto);
				//apellido empleado
				var celda = fila.insertCell(-1);
				var texto = document.createTextNode(this.Aproveedor[z].direccion_proveedor);
				celda.appendChild(texto);
				//apellido empleado
				var celda = fila.insertCell(-1);
				var texto = document.createTextNode(this.Aproveedor[z].telefono_proveedor);
				celda.appendChild(texto);
				div.appendChild(oTabla);
		}
	}
	return div;
}	

//mostrar electrodomesticos por clientes
tallerElectromecanica.prototype.mostrarElecClientes = function (dni){
	var div = document.getElementById("tablaElecCliente");
	//cabecera
	var oTabla = document.createElement('table');
	oTabla.setAttribute("class","table table-hover");
	var thead = oTabla.createTHead();
	var cab = ["Nº REFERENCIA", "NOMBRE", "MARCA", "DNI CLIENTE"];

	for (var i = 0; i < cab.length; i++) {		
		th = document.createElement('th');
		texto = document.createTextNode(cab[i]);
		th.appendChild(texto);
		thead.appendChild(th);
	}
	oTabla.appendChild(thead);
	var tbody = oTabla.createTBody();	
	for(var z=0; z<this.Aelectrodomesticos.length;z++){
		if(this.Aelectrodomesticos[z].cliente.dni_cliente == dni){
			var fila = tbody.insertRow(-1);
			if(z%2 != 0){
				color="warning";
			}else{
				color="info";
			}
			fila.setAttribute("class", color);
			//num ref
			var celda = fila.insertCell(-1);
			var texto = document.createTextNode(this.Aelectrodomesticos[z].num_Refe);
			celda.appendChild(texto);
			//nombre 
			var celda = fila.insertCell(-1);
			var texto = document.createTextNode(this.Aelectrodomesticos[z].nombre_Electro);
			celda.appendChild(texto);
			//marca
			var celda = fila.insertCell(-1);
			var texto = document.createTextNode(this.Aelectrodomesticos[z].marca);
			celda.appendChild(texto);
			//cliente
			var celda = fila.insertCell(-1);
			var texto = document.createTextNode(this.Aelectrodomesticos[z].cliente.dni_cliente);
			celda.appendChild(texto);
			div.appendChild(oTabla);
		}
	}
	return div;
}	
//mostrar electrodomesticos por clientes
tallerElectromecanica.prototype.mostrarAveriasEmpleados = function (dniEm){
	var div = document.getElementById("tablasAveriasEmpleados");
	//cabecera
	var oTabla = document.createElement('table');
	oTabla.setAttribute("class","table table-hover");
	var thead = oTabla.createTHead();
	var cab = ["ID AVERIA", "DESCRIPCIÓN", "RECAMBIO", "UNIDADES", "FECHA", "ELECTRODOMÉSTICO", "DNI CLIENTE"];

	for (var i = 0; i < cab.length; i++) {		
		th = document.createElement('th');
		texto = document.createTextNode(cab[i]);
		th.appendChild(texto);
		thead.appendChild(th);
	}
	oTabla.appendChild(thead);
	var tbody = oTabla.createTBody();	
	for(var z=0; z<this.AparteAveria.length;z++){
		if(this.AparteAveria[z].empleado.dni_empleado == dniEm){
			var fila = tbody.insertRow(-1);
			if(z%2 != 0){
				color="warning";
			}else{
				color="info";
			}
			fila.setAttribute("class", color);
			//id averia
			var celda = fila.insertCell(-1);
			var texto = document.createTextNode(this.AparteAveria[z].id_ParteAveria);
			celda.appendChild(texto);
			//descricion
			var celda = fila.insertCell(-1);
			var texto = document.createTextNode(this.AparteAveria[z].descripcion_ParteAveria);
			celda.appendChild(texto);
			//componente
			var celda = fila.insertCell(-1);
			var texto = document.createTextNode(this.AparteAveria[z].recambio.nombre_componente);
			celda.appendChild(texto);
			//unidades
			var celda = fila.insertCell(-1);
			var texto = document.createTextNode(this.AparteAveria[z].unidades);
			celda.appendChild(texto);
			//fecha
			var celda = fila.insertCell(-1);
			var texto = document.createTextNode(this.AparteAveria[z].fecha_ParteAveria);
			celda.appendChild(texto);
			//electrodomestico
			var celda = fila.insertCell(-1);
			var texto = document.createTextNode(this.AparteAveria[z].electrodomestico.nombre_Electro);
			celda.appendChild(texto);
			//apellido empleado
			var celda = fila.insertCell(-1);
			var texto = document.createTextNode(this.AparteAveria[z].electrodomestico.cliente.dni_cliente);
			celda.appendChild(texto);

			div.appendChild(oTabla);
		}
	}
	return div;
}	
