//Clase factura 
function Factura(id_factura, dni_cliente, fecha_factura, id_presupuesto) {
	Presupuesto.call(this, id_presupuesto);
	Cliente.call(this, dni_cliente);
	this.id_factura = id_factura;
	this.fecha_factura = fecha_factura;
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
function Presupuesto(id_presupuesto, total_presupuesto) {
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
	var option = document.createElement("option");
	option.setAttribute("value", "0");
	var texto = document.createTextNode("---Elija un recambio---");
	option.appendChild(texto);
	select.appendChild(option);
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
	select.setAttribute("onchange", "mostrarDatosEmpleados()");
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
tallerElectromecanica.prototype.getComboClientes = function(){
	var select = document.createElement("select");
	select.setAttribute("width","100%");
	select.setAttribute("name","SelectCliente");
	select.setAttribute("onchange", "mostrarDatosCliente()");

	for (var i = 0; i<this.Aclientes.length; i++){
		var option = document.createElement("option");
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
	selectFac.setAttribute("onchange", "mostrarDatosFact()");
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
	var option = document.createElement("option");
	option.setAttribute("value", "0");
	var texto = document.createTextNode("---Elija un id---");
	option.appendChild(texto);
	selectElect.appendChild(option);
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
	var texto = document.createTextNode("---Elija un NIF---");
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
	selectAver.setAttribute("onchange", "mostrarDatosAver()");
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
		dniCli.setAttribute("value", this.Afacturas[i].dni_cliente);
		var precio = document.FormModificaFacturaReparacion.txtPrecio;
		precio.setAttribute("value", this.Afacturas[i].direccion_cliente);
		var fecha = document.FormModificaFacturaReparacion.fecha;
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
/*
		var precio = this.AparteAveria[i].recambio.precio_componente;
		var unidades = this.AparteAveria[i].unidades;
		alert(precio);
		alert(unidades);

		var precioTotal = (precio*unidades);
		var total = document.FormAltaPresupuesto.txtTotalPresu;
		total.setAttribute("value", precioTotal);		
	}
}*/
		var descripcion = document.formModAveria.txtDescripAveria;
		var valorDescripcion = document.createTextNode(this.AparteAveria[i].descripcion_ParteAveria);
		descripcion.appendChild(valorDescripcion);
		var unidades = document.formModAveria.txtUnidades;
		unidades.setAttribute("value", this.AparteAveria[i].unidades);
		var fecha = document.formModAveria.fecha;
		fecha.setAttribute("value", this.AparteAveria[i].fecha_ParteAveria);
		
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

