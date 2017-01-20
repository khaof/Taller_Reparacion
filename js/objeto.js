//Clase factura 
function Factura(id_factura, dni_cliente, fecha_factura, id_presupuesto) {
	Presupuesto.call(this, id_presupuesto);
	Cliente.call(this, dni_cliente);
	this.id_factura = id_factura;
	this.fecha_factura = fecha_factura;
	this.pagada_factura = false;
}
Factura.prototype = Object.create(Presupuesto.prototype);
Factura.prototype = Object.create(Cliente.prototype);
Factura.prototype.constructor = Factura;
Factura.prototype.toHTMLRow = function() {
		return "<td>" + this.id_factura + "</td>" + "<td>" + this.fecha_factura + "</td>" + "<td>" + (this.pagada_factura ? "SI" : "NO") + "</td>" + "<td>" + this.id_CompaniaSeguros + "</td>" + "<td>" + this.id_presupuesto + "<td>" + this.dni_cliente + "</td>";
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

Cliente.prototype.toHTMLRow = function() {
		return "<td>" + this.dni_cliente + "</td><td>" + this.nombre_cliente + "</td><td>" + this.apellidos_cliente + "</td><td>" + this.telefono_cliente + "</td><td>" + this.direccion_cliente + "</td><td>" + this.email_cliente + "</td>";
	}
	//---------------------------------------------
	//Clase prespuesto 
function Presupuesto(id_presupuesto, total_presupuesto) {
	this.id_presupuesto = id_presupuesto;
	this.total_presupuesto = total_presupuesto;
}
Presupuesto.prototype.toHTMLRow = function() {
		return "<td>" + this.id_presupuesto + "</td><td>" + this.total_presupuesto + "</td>";
	}
	//-------------------------------------------
	//Clase Electrodomestico 
function Electrodomestico(num_Refe, nombre_Electro, marca, dni_cliente, nombre_cliente, apellidos_cliente, telefono_cliente, direccion_cliente, email_cliente) {
	Cliente.call(this, dni_cliente, nombre_cliente, apellidos_cliente, telefono_cliente, direccion_cliente, email_cliente);
	this.num_Refe = num_Refe;
	this.nombre_Electro = nombre_Electro;
	this.marca = marca;
}
Electrodomestico.prototype = Object.create(Cliente.prototype);
Electrodomestico.prototype.constructor = Electrodomestico;
Electrodomestico.prototype.toHTMLRow = function() {
		return "<td>" + this.num_Refe + "</td><td>" + this.nombre_Electro + "</td><td>" + this.marca + "</td><td>" + this.dni_cliente + "</td><td>" + this.dni_cliente + "</td>";
	}
	//-------------------------------------------------------------------
	//Claese Parte_averia 
function Parte_Averia(id_ParteAveria, descripcion_ParteAveria, fecha_ParteAveria, dni_empleado, id_electrodomestico, id_presupuesto) {
	Electrodomestico.call(this, id_electrodomestico);
	Empleado.call(this, dni_empleado);
	Presupuesto.call(this, id_presupuesto);
	this.id_ParteAveria = id_ParteAveria;
	this.descripcion_ParteAveria = descripcion_ParteAveria;
	this.fecha_ParteAveria = fecha_ParteAveria;
}
Parte_Averia.prototype = Object.create(Electrodomestico.prototype);
Parte_Averia.prototype = Object.create(Empleado.prototype);
Parte_Averia.prototype = Object.create(Presupuesto.prototype);
Parte_Averia.prototype.constructor = Parte_Averia;
Parte_Averia.prototype.toHTMLRow = function() {
		return "<td>" + this.id_ParteAveria + "</td><td>" + this.descripcion_ParteAveria + "</td><td>" + this.fecha_ParteAveria + "</td><td>" + this.id_electrodomestico + "</td><td>" + this.dni_empleado + "</td><td>" + this.id_presupuesto + "</td>";
	}
	//---------------------------------------------------------------------------------
	//Clase empleado 
function Empleado(dni_empleado, nombre_empleado, apellidos_empleado) {
	this.dni_empleado = dni_empleado;
	this.nombre_empleado = nombre_empleado;
	this.apellidos_empleado = apellidos_empleado;
}

Empleado.prototype.toHTMLRow = function() {
		return "<td>" + this.dni_empleado + "</td><td>" + this.nombre_empleado + "</td><td>" + this.apellidos_empleado + "</td><td>";
	}
	//---------------------------------------------------------------------------------------
	//Clase LineaComponente 
function LineaComponente(id_LineaComponente, id_presupuesto, id_componente, cantidad_LineaComponente) {
	Presupuesto.call(this, id_presupuesto);
	Componente.call(this, id_componente);
	this.id_LineaComponente = id_LineaComponente;
	this.cantidad_LineaComponente = cantidad_LineaComponente;
}
LineaComponente.prototype = Object.create(Presupuesto.prototype);
LineaComponente.prototype = Object.create(Componentes.prototype);
LineaComponente.prototype.constructor = LineaComponente;
LineaComponente.prototype.toHTMLRow = function() {
		return "<td>" + this.id_LineaComponente + "</td><td>" + this.cantidad_LineaComponente + "</td><td>" + this.id_presupuesto + "</td><td>" + this.id_componente + "</td>";
	}
	//--------------------------------------------------------------------------------------
	//Clase componente 
function Componentes(id_componente, nombre_componente, precio_componente, id_LineaComponente, nif_proveedor) {
	LineaComponente.call(this, id_LineaComponente);
	Proveedor.call(this, nif_proveedor);
	this.id_componente = id_componente;
	this.nombre_componente = nombre_componente;
	this.precio_componente = precio_componente;
}
Componentes.prototype = Object.create(LineaComponente.prototype);
Componentes.prototype = Object.create(Proveedor.prototype);
Componentes.prototype.constructor = Componentes;
Componentes.prototype.toHTMLRow = function() {
		return "<td>" + this.id_componente + "</td><td>" + this.nombre_componente + "</td><td>" + this.precio_componente + "</td><td>" + this.id_LineaComponente + "</td><td>" + this.nif_proveedor + "</td>";
	}
	//------------------------------------------------------------------------
	//Clase proveedor 
function Proveedor(DNI_proveedor, nombre_proveedor, direccion_proveedor, telefono_proveedor) {
	this.DNI_proveedor = DNI_proveedor;
	this.nombre_proveedor = nombre_proveedor;
	this.direccion_proveedor = direccion_proveedor;
	this.telefono_proveedor = telefono_proveedor;
}
Proveedor.prototype.toHTMLRow = function() {
		return "<td>" + this.nif_proveedor + "</td><td>" + this.nombre_proveedor + "</td><td>" + this.direccion_proveedor + "</td><td>" + this.telefono_proveedor + "</td>";
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

tallerElectromecanica.prototype.getComboClientes = function(){
	var select = document.createElement("select");
	select.setAttribute("width","100%");
	for (var i = 0; i<this.Aclientes.length; i++){
		var option = document.createElement("option");
		option.setAttribute("value", this.Aclientes[i].dni_cliente);
		var texto = document.createTextNode(this.Aclientes[i].nombre_cliente+"-"+this.Aclientes[i].dni_cliente);
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
	for (var i = 0; i < this.Afacturas; i++) {
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
		var sMensaje = "";

		while (i < this.Aclientes.length && bEnc == false) {
			if (this.Aclientes[i].dni_cliente == oDniCliente)
				bEnc = true;
			else
				i++;
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
		var bEnc = false;
		var sMensaje = "";

		while (i < this.Aclientes.length && bEnc == false) {
			if (this.Aclientes[i].dni_cliente == oClienteMod.dni_cliente)
				bEnc = true;
			else
				i++;
		}

		if (bEnc == true) {
			this.Aclientes.splice(i, 1, oClienteMod);
			sMensaje = "Cliente Modificar: OK!";
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
tallerElectromecanica.prototype.aceptarModEmpleado = function(oEmpleadoMod) {
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
			this.Aempleados.splice(i, 1, oEmpleadoMod);
			sMensaje = "Empleado Modificar: OK!";
		} else {
			sMensaje = "Empleado Modificar: No se ha encontrado el DNI";
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
			if (this.Aproveedor[i].nif_proveedor == oProveedor.nif_proveedor)
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

	if (bEnc == true) {
		this.Aproveedor.splice(i, 1);
		sMensaje = "Proveedor Baja: OK!";
	}

	return sMensaje;
}

//--------------------------------------
	//Metodo AltaElectrodomestico
tallerElectromecanica.prototype.altaElectrodomestico = function(oElectrodomestico) {
	var i = 0;
	var bClien = false;
	var bElectro = false;
	var sMensaje = "";
	//Compruebo el dni del cliente
	for (var i = 0; i < this.Aclientes.length; i++) {
		if (this.Aclientes[i].dni_cliente == oElectrodomestico.dni_cliente) {
			bClien = true;
		}
	}
	if (bClien == false) {
		sMensaje = "El DNI no existe";
	} else {
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
	}
	return sMensaje;
}
	//Metodo BajaElectrodomestico
tallerElectromecanica.prototype.bajaElectrodomestico =  function(oNumRef){
	var i = 0;
	var bEnc = false;
	var sMensaje = "";

	while (i < this.Aelectrodomesticos.length && bEnc == false) {
		if (this.Aelectrodomesticos[i].num_Refe == oNumRef)
			bEnc = true;
		else
			i++;
	}

	if (bEnc == true) {
		this.Aelectrodomesticos.splice(i, 1);
		sMensaje = "Electrodomestico Baja: OK!";
	}

	return sMensaje;
}	