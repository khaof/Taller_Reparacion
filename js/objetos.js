//Clase factura 
function Factura(id_factura, dni_cliente, fecha_factura, id_presupuesto){
	Presupuesto.call(this, id_presupuesto);
	Cliente.call(this, dni_cliente);
	this.id_factura = id_factura;
	this.fecha_factura = fecha_factura;
	this.pagada_factura = false;
}
Factura.prototype = Object.create(Presupuesto.prototype);
Factura.prototype = Object.create(Cliente.prototype);
Factura.prototype.constructor = Factura;
Factura.prototype.toHTMLRow = function(){
	return "<td>"+this.id_factura+"</td>"+"<td>"+this.fecha_factura+"</td>"+"<td>"+(this.pagada_factura?"SI":"NO")+"</td>"+"<td>"+this.id_CompaniaSeguros+"</td>"+"<td>"+this.id_presupuesto+"<td>"+this.dni_cliente+"</td>";
}
//--------------------------------------
//Clase cliente 
function Cliente(dni_cliente, nombre_cliente, apellidos_cliente, telefono_cliente, direccion_cliente, email_cliente){
	this.dni_cliente = dni_cliente;
	this.nombre_cliente = nombre_cliente;
	this.apellidos_cliente = apellidos_cliente;
	this.telefono_cliente = telefono_cliente;
	this.direccion_cliente = direccion_cliente;
	this.email_cliente = email_cliente;
}

Cliente.prototype.toHTMLRow = function(){
	return "<td>"+this.dni_cliente+"</td><td>"+this.nombre_cliente+"</td><td>"+this.apellidos_cliente+"</td><td>"+this.telefono_cliente+"</td><td>"+this.direccion_cliente+"</td><td>"+this.email_cliente+"</td>";
}
//---------------------------------------------
//Clase prespuesto 
function Presupuesto(id_presupuesto,total_presupuesto){
	this.id_presupuesto = id_presupuesto;
	this.total_presupuesto = total_presupuesto;
}
Presupuesto.prototype.toHTMLRow = function(){
	return "<td>"+this.id_presupuesto+"</td><td>"+this.total_presupuesto+"</td>";	
}
//-------------------------------------------
//Clase Electrodomestico 
function Electrodomestico(nombre_electrodomestico, marca_electrodomestico, id_electrodomestico, dni_cliente, id_ParteAveria){
	Cliente.call(this, dni_cliente);
	Parte_Averia.call(this, id_ParteAveria);
	this.id_electrodomestico = id_electrodomestico;
	this.nombre_electrodomestico = nombre_electrodomestico;
	this.marca_electrodomestico = marca_electrodomestico;

}
Electrodomestico.prototype = Object.create(Cliente.prototype);
Electrodomestico.prototype = Object.create(Parte_Averia.prototype);
Electrodomestico.prototype.constructor = Electrodomestico;
Electrodomestico.prototype.toHTMLRow = function(){
	return "<td>"+this.id_electrodomestico+"</td><td>"+this.nombre_electrodomestico+"</td><td>"+this.marca_electrodomestico+"</td><td>"+this.dni_cliente+"</td><td>"+this.id_ParteAveria+"</td>";
}
//-------------------------------------------------------------------
//Claese Parte_averia 
function Parte_Averia(id_ParteAveria, descripcion_ParteAveria, fecha_ParteAveria, dni_empleado,id_electrodomestico, id_presupuesto){
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
Parte_Averia.prototype.toHTMLRow = function(){
	return "<td>"+this.id_ParteAveria+"</td><td>"+this.descripcion_ParteAveria+"</td><td>"+this.fecha_ParteAveria+"</td><td>"+this.id_electrodomestico+"</td><td>"+this.dni_empleado+"</td><td>"+this.id_presupuesto+"</td>";
}
//---------------------------------------------------------------------------------
//Clase empleado 
function Empleado(dni_empleado, nombre_empleado, apellidos_empleado){
	this.dni_empleado = dni_empleado;
	this.nombre_empleado = nombre_empleado;
	this.apellidos_empleado = apellidos_empleado;
}

Empleado.prototype.toHTMLRow = function(){
	return "<td>"+this.dni_empleado+"</td><td>"+this.nombre_empleado+"</td><td>"+this.apellidos_empleado+"</td><td>";
}
//---------------------------------------------------------------------------------------
//Clase LineaComponente 
function LineaComponente(id_LineaComponente, id_presupuesto, id_componente, cantidad_LineaComponente){
	Presupuesto.call(this, id_presupuesto);
	Componente.call(this, id_componente);
	this.id_LineaComponente = id_LineaComponente;
	this.cantidad_LineaComponente = cantidad_LineaComponente;
}
LineaComponente.prototype = Object.create(Presupuesto.prototype);
LineaComponente.prototype = Object.create(Componentes.prototype);
LineaComponente.prototype.constructor = LineaComponente;
LineaComponente.prototype.toHTMLRow = function(){
	return "<td>"+this.id_LineaComponente+"</td><td>"+this.cantidad_LineaComponente+"</td><td>"+this.id_presupuesto+"</td><td>"+this.id_componente+"</td>";
}
//--------------------------------------------------------------------------------------
//Clase componente 
function Componentes(id_componente, nombre_componente, precio_componente, id_LineaComponente, nif_proveedor){
	LineaComponente.call(this, id_LineaComponente);
	Proveedor.call(this, nif_proveedor);
	this.id_componente = id_componente;
	this.nombre_componente = nombre_componente;
	this.precio_componente = precio_componente;
}
Componentes.prototype = Object.create(LineaComponente.prototype);
Componentes.prototype = Object.create(Proveedor.prototype);
Componentes.prototype.constructor = Componentes;
Componentes.prototype.toHTMLRow = function(){
	return "<td>"+this.id_componente+"</td><td>"+this.nombre_componente+"</td><td>"+this.precio_componente+"</td><td>"+this.id_LineaComponente+"</td><td>"+this.nif_proveedor+"</td>";
}
//------------------------------------------------------------------------
//Clase proveedor 
function Proveedor(nif_proveedor, nombre_proveedor, direccion_proveedor, telefono_proveedor){
	this.nif_proveedor = nif_proveedor;
	this.nombre_proveedor = nombre_proveedor;
	this.direccion_proveedor = direccion_proveedor;
	this.telefono_proveedor = telefono_proveedor;
}
Proveedor.prototype.toHTMLRow = function(){
	return "<td>"+this.nif_proveedor+"</td><td>"+this.nombre_proveedor+"</td><td>"+this.direccion_proveedor+"</td><td>"+this.telefono_proveedor+"</td>";
}
//--------------------------------------------------------------------------
//Arrays de clases
function tallerElectromecanica(){
	this.Afacturas = [ ];
	this.Aclientes = [ ];
	this.Aelectrodomesticos = [ ];
	this.Apresupuestos = [ ];
	this.AlineaComponente = [ ];
	this.Aempleados = [ ];
	this.AparteAveria = [ ];
	this.Acomponentes = [ ];
	this.Aproveedor = [ ];
}
//Metodo altaCliente
tallerElectromecanica.prototype.altaCliente = function(oClientes){
	var i=0;
	var bEnc = false;
	var sMensaje = "";
	
	while (i < this.Aclientes.length && bEnc == false){
		if(this.Aclientes[i].dni_cliente == oClientes.dni_cliente)
			bEnc = true;
		else
		i++;
	}

	if(bEnc==true){
		sMensaje = "Este cliente ya está registrado";
	}else{
		this.Aclientes.push(oClientes);
		sMensaje = "Cliente Alta: OK!";
	}
		
	return sMensaje;
}
//----------------------------------
//Metodo baja Cliente
tallerElectromecanica.prototype.bajaCliente = function(dniCliente){
	var i=0;
	var bEnc = false;
	var sMensaje = "";
	
	while (i < this.Aclientes.length && bEnc == false){
		if(this.Aclientes[i].dni_cliente == dniCliente)
			bEnc = true;
		else
		i++;
	}

	if(bEnc==true){
		this.Aclientes.splice(i, 1);
		sMensaje = "Cliente Baja: OK!";
	}
		
	return sMensaje;
}
//----------------------------------
//Metodo modificarCliente
tallerElectromecanica.prototype.modificarCliente = function(oCliente){
	var i=0;
	var bEnc = false;
	var sMensaje = "";
	
	while (i < this.Aclientes.length && bEnc == false){
		if(this.Aclientes[i].dni_cliente == oClientes.dni_cliente)
			bEnc = true;
		else
		i++;
	}

	if(bEnc==true){
		this.Aclientes.splice(i, 1, oEmpleado);
		sMensaje = "Cliente Modificar: OK!";
	}
		
	return sMensaje;
}
//--------------------------------------
//Metodo altaEmpleado
tallerElectromecanica.prototype.altaEmpleado = function(oEmpleado){
	var i=0;
	var bEnc = false;
	var sMensaje = "";
	
	while (i < this.Aempleados.length && bEnc == false){
		if(this.Aempleados[i].dni_empleado == oEmpleado.dni_empleado)
			bEnc = true;
		else
		i++;
	}

	if(bEnc==true){
		sMensaje = "Este Empleado ya está registrado";
	}else{
		this.Aempleados.push(oEmpleado);
		sMensaje = "Empleado Alta: OK!";
	}
		
	return sMensaje;
}
//--------------------------------------
//Metodo altaProveedor
tallerElectromecanica.prototype.altaProveedor = function(oProveedor){
	var i=0;
	var bEnc = false;
	var sMensaje = "";
	
	while (i < this.Aproveedor.length && bEnc == false){
		if(this.Aproveedor[i].nif_proveedor == oProveedor.nif_proveedor)
			bEnc = true;
		else
		i++;
	}

	if(bEnc==true){
		sMensaje = "Este proveedor ya está registrado";
	}else{
		this.Aproveedor.push(oProveedor);
		sMensaje = "Proveedor Alta: OK!";
	}
		
	return sMensaje;
}