$(document).ready(function(){
    $(".menu-icon").on("click", function(){
        $(this).toggleClass("open");
        $(".container").toggleClass("nav-open");
        $("nav ul li").toggleClass("animate");	
        //ocultamo el formulario del cliente
        $("#form1").hide();  
        //ocultamo el formulario del electrodomestico
        $("#form2").hide();        
        //ocultamos el formulario empleados
        $("#form3").hide();
        //ocultar el formulario de modificar empleado cargado de html
    	$("#modEmpleado").hide();
       	//oculta el formulario de alta empleado cargado de html
        $("#altaEmpleado").hide();       
        //ocultamos el menu del parte de averia
    	$("#form4").hide(); 
    	//ocultamos el menu de componentes
    	$("#form5").hide();     
    });
    //Gestion ciente
    $(".icon-cliente").on("click", function(){  
    	//ocultar el formulario de modificar empleado cargado de html
    	$("#modEmpleado").hide();
    	//ocultamos el formulario de altaEmpleado cargado del html
    	$("#altaEmpleado").hide();
    	//ocultamos el formulario empleados
        $("#form3").hide();
    	//ocultamos el menu del electrdomestico
    	$("#form2").hide();   
    	//ocultamos el menu del parte de averia
    	$("#form4").hide(); 
    		//ocultamos el menu de componentes
    	$("#form5").hide();
    	
    	//mostramos el menu del cliente
    	$("#form1").show();  
    	if($('#alta').length==0){
	    	$("<p id='alta'>Alta Cliente</p>").appendTo("#form1");
	    	$("#alta").css({'margin-left': 100, 'font-size': 30, 'float': 'left', 'width': 200});
	    	$("#alta").on("click", function(){
	    		oDlgAltaCliente.dialog("open"); 
	    	});

	    	$("<p id='listar'>Listar Clientes</p>").appendTo("#form1");
	    	$("#listar").css({'margin-left': 50, 'font-size': 30, 'float': 'left', 'width': 200});
	    	$("#listar").on("click", function(){
	    		 if($("#listarClientes").size() == 0){
	    			$('#listadosClientes').load("html/listadoClientes.html", function(){ $.getScript("js/listarClientes.js")});
	    		}else{
	    			$("#listarClientes").dialog("open"); 
	    		}

	    	});

	    	$("<p id='modificar'>Modificar Cliente</p>").appendTo("#form1");
	    	$("#modificar").css({'margin-left': 100, 'font-size': 30, 'float': 'left', 'width': 240});    	
	    	$("#modificar").on("click", function(){
	    		oDlgModCliente.dialog("open");
	    	})	
   		}
    });  

    //Gestion electrodomestico
    $(".icon-electrodomestico").on("click", function(){  
    	//ocultar el formulario de modificar empleado cargado de html
    	$("#modEmpleado").hide();
    	//ocultamos el formulario de altaEmpleado cargado del html
    	$("#altaEmpleado").hide();
    	//ocultamos el menu del cliente
    	$("#form1").hide(); 
    	//ocultamos el formulario empleados
        $("#form3").hide();
        //ocultamos el menu del parte de averia
    	$("#form4").hide(); 
    		//ocultamos el menu de componentes
    	$("#form5").hide();
    	//mostramos el menu del electrodomestico
    	
    	$("#form2").show();  
    	if($('#altaE').length==0){
	    	$("<p id='altaE'>Alta Electrodoméstico</p>").appendTo("#form2");
	    	$("#altaE").css({'margin-left': 100, 'font-size': 30, 'float': 'left', 'width': 200});
	    	$("#altaE").on("click", function(){
	    		oDlgAltaElectrodomestico.dialog("open"); 
	    	});

	    	$("<p id='listarE'>Listar Electrodoméstico</p>").appendTo("#form2");
	    	$("#listarE").css({'margin-left': 100, 'font-size': 30, 'float': 'left', 'width': 200});
	    	$("#listarE").on("click", function(){
	    		 if($("#listarElectro").size() == 0){
	    			$('#listadosElectrodomesticos').load("html/listadoElectrodomesticos.html", function(){ $.getScript("js/listarElectrodomesticos.js")});
	    		}else{
	    			$("#listarElectro").dialog("open"); 
	    		}

	    	});

	    	$("<p id='modificarE'>Modificar Electrodoméstico</p>").appendTo("#form2");
	    	$("#modificarE").css({'margin-left': 100, 'font-size': 30, 'float': 'left', 'width': 200});    	
	    	$("#modificarE").on("click", function(){
	    		oDlgModElectrodomestico.dialog("open");
	    	})	
   		}
    });  

    //Gestion Empleados
    $(".icon-empleado").on("click", function(){
    	//ocultar el formulario de modificar empleado cargado de html
    	$("#modEmpleado").hide();
    	//ocultamos el formulario de altaEmpleado cargado del html
    	$("#altaEmpleado").hide();
    	//ocultamos el menu del cliente
    	$("#form1").hide(); 
    	//ocultamos el formulario electrodomestico 
        $("#form2").hide();
        //ocultamos el menu del parte de averia
    	$("#form4").hide(); 
    	//ocultamos el menu de componentes
    	$("#form5").hide();
    	
    	//mostramos el menu del empleados
    	$("#form3").show();  
    	if($("#altaEm").length == 0){
    		$("<p id='altaEm'>Alta Empleados</p>").appendTo("#form3");
	    	$("#altaEm").css({'margin-left': 100, 'font-size': 30, 'float': 'left', 'width': 200});
	    	$("#altaEm").on("click", function(){
	    		//verifico si se ha cargado el formulario antes
	    		if($("#formAltaEmpleado").size() == 0){
	    			$('<div title="Alta Empleados" id="formAltaEmpleado"></div>').appendTo("#form3").load("html/altaEmpleadoPrueba.html", function(){
	    				$.getScript("js/altaEmpleado.js")
	    			});
	    		}else{
	    			//lo abro si esta cerrado
	    			$('#formAltaEmpleado').dialog("open");
	    		}
	    	});

	    	$("<p id='listarEm'>Listar Empleados</p>").appendTo("#form3");
	    	$("#listarEm").css({'margin-left': 100, 'font-size': 30, 'float': 'left', 'width': 200});
	    	$("#listarEm").on("click", function(){
	    		 if($("#listarEmpleado").size() == 0){
	    			$('#listadoEmpleados').load("html/listadoEmpleados.html", function(){ $.getScript("js/listarEmpleados.js")});
	    		}else{
	    			$("#listarEmpleado").dialog("open"); 
	    		}
	    	});

	    	$("<p id='modificarEm'>Modificar Empleados</p>").appendTo("#form3");
	    	$("#modificarEm").css({'margin-left': 100, 'font-size': 30, 'float': 'left', 'width': 200});    	
	    	$("#modificarEm").on("click", function(){
	    		if($("#formModEmpleado").size() == 0){
	    			$('<div title="Modificar Empleados" id="formModEmpleado"></div>').appendTo("#form3").load("html/modificarEmpleado.html", function(){
	    				$.getScript("js/modEmpleado.js")
	    			});
	    		}else{
	    			//lo abro si esta cerrado
	    			$('#formModEmpleado').dialog("open");
	    		}			
	    	})	
    	}
    });

    //Gestion Parte de averia
    $(".icon-parteAveria").on("click", function(){
    	//ocultar el formulario de modificar empleado cargado de html
    	$("#modEmpleado").hide();
    	//ocultamos el formulario de altaEmpleado cargado del html
    	$("#altaEmpleado").hide();
    	//ocultamos el menu del cliente
    	$("#form1").hide(); 
    	//ocultamos el formulario electrodomestico 
        $("#form2").hide();
    	//ocultamos el menu del empleados
    	$("#form3").hide();
    	//ocultamos el menu de componentes
    	$("#form5").hide();
    	//mostramos el menu del parte de averia
    	$("#form4").show();
    	if($("#altaPA").length==0){
    		$("<p id='altaPA'>Alta Parte de Averia</p>").appendTo("#form4");
	    	$("#altaPA").css({'margin-left': 100, 'font-size': 30, 'float': 'left', 'width': 400});
	    	$("#altaPA").on("click", function(){
	    		//cargamos el formulario de alta de averia
	    		if($("#formAltaAveria").size() == 0){
	    			$('<div title="Alta Averia" id="formAltaAveria"></div>').appendTo("#form4").load("html/altaAveria.html", function(){
	    				$.getScript("js/altaAveria.js")
	    			});
	    		}else{
	    			//lo abro si esta cerrado
	    			$('#formAltaAveria').dialog("open");
	    		}				    		
	    	});	

	    	$("<p id='obtFac'>Obtener Factura</p>").appendTo("#form4");
	    	$("#obtFac").css({'margin-left': 100, 'font-size': 30, 'float': 'left', 'width': 400});
	    	$("#obtFac").on("click", function(){
	    		 if($("#obtenerFactura").size() == 0){
	    			$('#factura').load("html/factura.html", function(){ $.getScript("js/mostrarFactura.js")});
	    		}else{
	    			$("#obtenerFactura").dialog("open"); 
	    		}
	    	});
    	} 

    });

    //Gestion componentes
    $(".icon-componentes").on("click", function(){
    	//ocultar el formulario de modificar empleado cargado de html
    	$("#modEmpleado").hide();
    	//ocultamos el formulario de altaEmpleado cargado del html
    	$("#altaEmpleado").hide();
    	//ocultamos el menu del cliente
    	$("#form1").hide(); 
    	//ocultamos el formulario electrodomestico 
        $("#form2").hide();
    	//ocultamos el menu del empleados
    	$("#form3").hide();
    	//ocultamos el menu del parte de averia
    	$("#form4").hide();
    	
    	//mostramos el menu de componentes
    	$("#form5").show();
    	if($("#altaCO").length==0){
    		$("<p id='altaCO'>Alta Componente</p>").appendTo("#form5");
	    	$("#altaCO").css({'margin-left': 100, 'font-size': 30, 'float': 'left', 'width': 200});
	    	$("#altaCO").on("click", function(){
	    		//carga formulario
	    		oDlgAltaComponentes.dialog("open"); 
	    	});	

	    	$("<p id='listarCO'>Listar Componentes</p>").appendTo("#form5");
	    	$("#listarCO").css({'margin-left': 100, 'font-size': 30, 'float': 'left', 'width': 200});
	    	$("#listarCO").on("click", function(){
	    		 if($("#listarComponentes").size() == 0){
	    			$('#listadoComponentes').load("html/listadoComponentes.html", function(){ $.getScript("js/listarComponentes.js")});
	    		}else{
	    			$("#listarComponentes").dialog("open"); 
	    		}
	    	});

	    	$("<p id='modCO'>Modificar Componente</p>").appendTo("#form5");
	    	$("#modCO").css({'margin-left': 100, 'font-size': 30, 'float': 'left', 'width': 200});    	
	    	$("#modCO").on("click", function(){
				//carga formulario
				oDlgModComponentes.dialog("open"); 
	    	})	
    	}
    });

    //Gestion componentes
    $(".icon-componentes").on("click", function(){
    	//ocultar el formulario de modificar empleado cargado de html
    	$("#modEmpleado").hide();
    	//ocultamos el formulario de altaEmpleado cargado del html
    	$("#altaEmpleado").hide();
    	//ocultamos el menu del cliente
    	$("#form1").hide(); 
    	//ocultamos el formulario electrodomestico 
        $("#form2").hide();
    	//ocultamos el menu del empleados
    	$("#form3").hide();
    	//ocultamos el menu del parte de averia
    	$("#form4").hide();
    	
    	//mostramos el menu de componentes
    	$("#form5").show();
    	if($("#altaCO").length==0){
    		$("<p id='altaCO'>Alta Componente</p>").appendTo("#form5");
	    	$("#altaCO").css({'margin-left': 100, 'font-size': 30, 'float': 'left', 'width': 200});
	    	$("#altaCO").on("click", function(){
	    		//carga formulario
	    		oDlgAltaComponentes.dialog("open"); 

	    	});	

	    	$("<p id='listarCO'>Listar Componentes</p>").appendTo("#form5");
	    	$("#listarCO").css({'margin-left': 100, 'font-size': 30, 'float': 'left', 'width': 200});

	    	$("<p id='modCO'>Modificar Componente</p>").appendTo("#form5");
	    	$("#modCO").css({'margin-left': 100, 'font-size': 30, 'float': 'left', 'width': 200});    	
	    	$("#modCO").on("click", function(){
				//carga formulario
				oDlgModComponentes.dialog("open"); 

	    	})	
    	}
    });


var oDlgMensaje = $("#divMensajes").dialog({
	autoOpen: false,
    height: "auto",
    width: "auto",
    modal: true,
	buttons: {
        "Cerrar": function() {
        	$("#divMensajes").dialog( "close" );
        	$("#divMensajes").empty();
        } 			   
	}
});
// Creacion de dialogo Altacliente
oDlgAltaCliente = $("#formAltaCliente").dialog({
    autoOpen: false,
    height: 400,
    width: 500,
    modal: true,
    overflow: "hide",
	buttons: {
        "Alta": altaCliente,
        "Cancelar": function() {
        	oDlgAltaCliente.dialog( "close" );
        	document.formAltaCliente.reset();
        } 			   
	}
});
function altaCliente(){
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
	
	}else {
		//Desmarcar error
		document.formAltaCliente.txtMail.className = "form-control control";	
	}


	//Resultado
	if (bValido == false){	
		//Mostrar errores
		for(var i =0; i<arrayErrores.length;i++){
			$("#divMensajes").append(arrayErrores[i]+"<br>");	
		}
		$("#divMensajes").dialog("open");
		
	}else{

		var oCliente = {
			dni : document.formAltaCliente.txtDNI.value.trim(),
			nombre : document.formAltaCliente.txtNombre.value.trim(),
			apellidos : document.formAltaCliente.txtApellidos.value.trim(),
			direccion : document.formAltaCliente.txtDireccion.value.trim(),
			email : document.formAltaCliente.txtMail.value.trim()
		}
		
		sURL = "php/clientes/altaCliente.php";
		sParametros = "datos="+JSON.stringify(oCliente);
		peticionAjax(sURL, sParametros);		
			
		document.formAltaCliente.reset();	
	}
}

//creacion del dialogo ModificarCliente
oDlgModCliente = $("#formModificaCli").dialog({
	autoOpen: false,
    height: 400,
    width: 500,
    modal: true,
    
	buttons: {
        "Modificar": modCliente,
        "Cancelar": function() {
        	oDlgModCliente.dialog( "close" );
        	document.formModificaCli.reset();
        } 			   
	}
})
function modCliente(){
	var bValido = true;
	var arrayErrores =[];
	
	// Validaciones
	//Campo nombre
	var sNombre = document.formModificaCli.txtNombre.value.trim();
	// Trim
	document.formModificaCli.txtNombre.value = document.formModificaCli.txtNombre.value.trim();

	var oExpReg = /^[a-zA-Z\s]{3,40}$/;
	
	if (oExpReg.test(sNombre) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formModificaCli.txtNombre.focus();		
		}
	
		arrayErrores.push("Nombre incorrecto. Debe tener entre 3 y 40 caracteres");
		
		//Marcar error
		document.formModificaCli.txtNombre.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formModificaCli.txtNombre.className = "form-control control";	
	}
	
	//Campo apellido
	var sApellido = document.formModificaCli.txtApellidos.value.trim();
	// Trim
	document.formModificaCli.txtApellidos.value = document.formModificaCli.txtApellidos.value.trim();

	var oExpReg = /^[a-zA-ZñÑ\s\W]{5,60}$/;
	
	if (oExpReg.test(sApellido) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formModificaCli.txtApellidos.focus();		
		}
	
		arrayErrores.push("Apellido incorrecto. Debe tener un tamaño entre 5 y 60");
		//Marcar error
		document.formModificaCli.txtApellidos.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formModificaCli.txtApellidos.className = "form-control control";	
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
		for(var i =0; i<arrayErrores.length;i++){
			$("#divMensajes").append(arrayErrores[i]+"<br>");	
		}
		$("#divMensajes").dialog("open");
		
	}else{

		var combo = document.formModificaCli.comboDniClientes.selectedIndex;
		var oCliente ={
			dni : document.formModificaCli.comboDniClientes.options[combo].value.trim(),
			nombre : document.formModificaCli.txtNombre.value.trim(),
			apellidos : document.formModificaCli.txtApellidos.value.trim(),
			direccion : document.formModificaCli.txtDireccion.value.trim(),
			email : document.formModificaCli.txtMail.value.trim()
		}
		
		sURL = "php/clientes/modificacionCliente.php";
		sParametros = "datos=" +JSON.stringify(oCliente);
		peticionAjax(sURL, sParametros);

		document.formModificaCli.reset();		
	}
}

/**************************************************************************/
// Creacion de dialogo Alta Electrodomestico
oDlgAltaElectrodomestico = $("#formAltaElectrodomestico").dialog({
	autoOpen: false,
    height: 400,
    width: 500,
    modal: true,
    
	buttons: {
        "Alta": altaElectrodomestico,
        "Cancelar": function() {
        	oDlgAltaElectrodomestico.dialog( "close" );
        	document.formAltaElectrodomestico.reset();
        } 			   
	}
})
function altaElectrodomestico(){
	var bValido = true;
	var arrayErrores = [];
	//Validaciones
	//Campo numRefElectrodomestico
	var sNumRefElec = document.formAltaElectrodomestico.txtNumRef.value.trim();
	// Trim
	document.formAltaElectrodomestico.txtNumRef.value = document.formAltaElectrodomestico.txtNumRef.value.trim();

	var oExpReg = /^[a-zA-Z\s]{3}[0-9]{1}$/;
	
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
		for(var i =0; i<arrayErrores.length;i++){
			$("#divMensajes").append(arrayErrores[i]+"<br>");	
		}
		$("#divMensajes").dialog("open");
		
	}else{
		// var cliente=null;
		// for(var i=0; i<oTaller.Aclientes.length; i++){
		// 	if(oTaller.Aclientes[i].dni_cliente==sDniCli){
		// 		cliente=oTaller.Aclientes[i];
		// 	}
		// }	
		
		combo = document.formAltaElectrodomestico.getComboAltaElecClientes.selectedIndex;
		
		var oElectrodomestico = {
			sNumRef : document.formAltaElectrodomestico.txtNumRef.value.trim(),
		 	sNombreElec : document.formAltaElectrodomestico.txtNombreElec.value.trim(),
		 	sMarca : document.formAltaElectrodomestico.txtMarca.value.trim(),
		 	sDniCli: document.formAltaElectrodomestico.getComboAltaElecClientes.options[combo].value.trim()
		};
			sURL = "php/electrodomesticos/altaElectrodomestico.php";
			sParametros = "datos=" + JSON.stringify(oElectrodomestico);
			peticionAjax(sURL,sParametros);
	
			document.formAltaElectrodomestico.reset();
	}

	return bValido;
}

// Creacion de dialogo Modificar Electrodomestico
oDlgModElectrodomestico = $("#formModElectrodomestico").dialog({
	autoOpen: false,
    height: 400,
    width: 500,
    modal: true,
    
	buttons: {
        "Alta": modElectrodomestico,
        "Cancelar": function() {
        	oDlgModElectrodomestico.dialog( "close" );
        	document.formModElectrodomestico.reset();
        } 			   
	}
})
function modElectrodomestico(){
	var bValido = true;
	var arrayErrores = [];
	//Validaciones
	//Campo nombre
	var sNombreElectr = document.formModElectrodomestico.txtNombreElec.value.trim();
	// Trim
	document.formModElectrodomestico.txtNombreElec.value = document.formModElectrodomestico.txtNombreElec.value.trim();

	var oExpReg = /^[a-zA-Z\s\d]{3,40}$/;
	
	if (oExpReg.test(sNombreElectr) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formModElectrodomestico.txtNombreElec.focus();		
		}
	
		arrayErrores.push("Campo nombre incorrecto.");
		
		//Marcar error
		document.formModElectrodomestico.txtNombreElec.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formModElectrodomestico.txtNombreElec.className = "form-control control";	
	}

	//Campo marca 
	var smarcaElectr = document.formModElectrodomestico.txtMarca.value.trim();
	// trim
	document.formModElectrodomestico.txtMarca.value = document.formModElectrodomestico.txtMarca.value.trim();

	var oExpReg = /^[a-zA-Z\s]{3,40}$/;
	
	if (oExpReg.test(smarcaElectr) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formModElectrodomestico.txtMarca.focus();		
		}
	
		arrayErrores.push("Campo marca incorrecto");
		
		//Marcar error
		document.formModElectrodomestico.txtMarca.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formModElectrodomestico.txtMarca.className = "form-control control";	
	}

	//Resultado
	if (bValido == false){
		//Mostrar errores
		for(var i =0; i<arrayErrores.length;i++){
			$("#divMensajes").append(arrayErrores[i]+"<br>");	
		}
		$("#divMensajes").dialog("open");
		
	}else{
		// var cliente=null;
		// for(var i=0; i<oTaller.Aclientes.length; i++){
		// 	if(oTaller.Aclientes[i].dni_cliente==sDniCli){
		// 		cliente=oTaller.Aclientes[i];
		// 	}
		// }	
		comboCliente = document.formModElectrodomestico.comboModElecDniClientes.selectedIndex;
		comboNumRef = document.formModElectrodomestico.comboModElecRef.selectedIndex;
		
		var oElectrodomestico = {
			sNumRef : document.formModElectrodomestico.comboModElecRef.options[comboNumRef].value.trim(),
		 	sNombreElec : document.formModElectrodomestico.txtNombreElec.value.trim(),
		 	sMarca : document.formModElectrodomestico.txtMarca.value.trim(),
		 	sDniCli: document.formModElectrodomestico.comboModElecDniClientes.options[comboCliente].value.trim()
		};
			sURL = "php/electrodomesticos/modificacionElectrodomestico.php";
			sParametros = "datos=" + JSON.stringify(oElectrodomestico);
			peticionAjax(sURL,sParametros);
	
			document.formModElectrodomestico.reset();
	}

	return bValido;
}


/*************************************************************************/
//creacion del dialogo alta componentes
oDlgAltaComponentes = $("#formAltaComponente").dialog({
	autoOpen: false,
    height: 400,
    width: 500,
    modal: false,
    
	buttons: {
        "Alta": altaComponente,
        "Cancelar": function() {
        	oDlgAltaComponentes.dialog( "close" );
        	document.formAltaComponente.reset();
        } 			   
	}
})
function altaComponente(){
	//validacion
	var bValido = true;
	var arrayErrores = [];
	
	// Validaciones
	//Campo id Recaambio
	var sIdRecambio = document.formAltaComponente.txtIdComponente.value.trim();
	// Trim
	document.formAltaComponente.txtIdComponente.value = document.formAltaComponente.txtIdComponente.value.trim();

	var oExpReg =  /^[a-zA-Z\s]{3}[0-9]{1}$/;
	
	if (oExpReg.test(sIdRecambio) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formAltaComponente.txtIdComponente.focus();		
		}
	
		arrayErrores.push("ID incorrecto. Ejemplo Rec0");
		
		//Marcar error
		document.formAltaComponente.txtIdComponente.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formAltaComponente.txtIdComponente.className = "form-control control";	
	}

	//Campo nombre
	var sNombreRec = document.formAltaComponente.txtNombreComponente.value.trim();
	// Trim
	document.formAltaComponente.txtNombreComponente.value = document.formAltaComponente.txtNombreComponente.value.trim();

	var oExpReg = /^((\w{1,20})\s?){2,30}$/;
	
	if (oExpReg.test(sNombreRec) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formAltaComponente.txtNombreComponente.focus();		
		}
	
		arrayErrores.push("Descripcion incorrecta");
		
		//Marcar error
		document.formAltaComponente.txtNombreComponente.className = "form-control  error";
	
	}
	else {
	//Desmarcar error
	document.formAltaComponente.txtNombreComponente.className = "form-control control";	
	}

	//campo precio
	var sPrecio = document.formAltaComponente.txtPrecio.value.trim();
	// Trim
	document.formAltaComponente.txtPrecio.value = document.formAltaComponente.txtPrecio.value.trim();

	var oExpReg =  /^([0-9])*$/;
	
	if (oExpReg.test(sPrecio) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formAltaComponente.txtPrecio.focus();		
		}
	
		arrayErrores.push("Precio incorrecto");
		
		//Marcar error
		document.formAltaComponente.txtPrecio.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formAltaComponente.txtPrecio.className = "form-control control";	
	}

	//Resultado
	if (bValido == false){
		for(var i =0; i<arrayErrores.length;i++){
			$("#divMensajes").append(arrayErrores[i]+"<br>");	
		}
		$("#divMensajes").dialog("open");
	}else{
		
		var oComponente = {
			sIdRecambio : document.formAltaComponente.txtIdComponente.value.trim(),
			sNombreRec : document.formAltaComponente.txtNombreComponente.value.trim(),
			sPrecio : document.formAltaComponente.txtPrecio.value.trim()
		}
		

		// var proveedor=null;
		// for(var i=0; i<oTaller.Aproveedor.length; i++){
		// 	if(oTaller.Aproveedor[i].DNI_proveedor==nifProveedor){
		// 		proveedor=oTaller.Aproveedor[i];
		// 	}
		// }

			sURL = "php/componentes/altaComponente.php";
			sParametros = "datos=" + JSON.stringify(oComponente);
			peticionAjax(sURL,sParametros);	
			document.formAltaComponente.reset();
	}
	return bValido;
}

oDlgModComponentes = $("#formModComponente").dialog({
	autoOpen: false,
    height: 400,
    width: 500,
    modal: true,
    
	buttons: {
        "Modificar": modComponente,
        "Cancelar": function() {
        	oDlgModComponentes.dialog( "close" );
        	document.formModComponente.reset();
        } 			   
	}
})
function modComponente(){
	//validacion
	var bValido = true;
	var arrayErrores = [];
	
	// Validaciones
	//Campo nombre
	var sNombreRec = document.formModComponente.txtNombreComponente.value.trim();
	// Trim
	document.formModComponente.txtNombreComponente.value = document.formModComponente.txtNombreComponente.value.trim();

	var oExpReg = /^((\w{1,20})\s?){2,30}$/;
	
	if (oExpReg.test(sNombreRec) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formModComponente.txtNombreComponente.focus();		
		}
	
		arrayErrores.push("Descripcion incorrecta");
		
		//Marcar error
		document.formModComponente.txtNombreComponente.className = "form-control  error";
	
	}
	else {
	//Desmarcar error
	document.formModComponente.txtNombreComponente.className = "form-control control";	
	}

	//campo precio
	var sPrecio = document.formModComponente.txtPrecio.value.trim();
	// Trim
	document.formModComponente.txtPrecio.value = document.formModComponente.txtPrecio.value.trim();

	var oExpReg =  /^([0-9])*$/;
	
	if (oExpReg.test(sPrecio) == false){
	
		if(bValido == true){
			bValido = false;		
			//Este campo obtiene el foco
			document.formModComponente.txtPrecio.focus();		
		}
	
		arrayErrores.push("Precio incorrecto");
		
		//Marcar error
		document.formModComponente.txtPrecio.className = "form-control  error";
	
	}
	else {
		//Desmarcar error
		document.formModComponente.txtPrecio.className = "form-control control";	
	}

	//Resultado
	if (bValido == false){
		//Mostrar errores
		for(var i =0; i<arrayErrores.length;i++){
			$("#divMensajes").append(arrayErrores[i]+"<br>");	
		}
		$("#divMensajes").dialog("open");
		
	}else{
		combo = document.formModComponente.comboComponentes.selectedIndex;

		var oComponente = {
			sIdRecambio : document.formModComponente.comboComponentes.options[combo].value.trim(),
			sNombreRec : document.formModComponente.txtNombreComponente.value.trim(),
			sPrecio : document.formModComponente.txtPrecio.value.trim(),
		}
		

		// var proveedor=null;
		// for(var i=0; i<oTaller.Aproveedor.length; i++){
		// 	if(oTaller.Aproveedor[i].DNI_proveedor==nifProveedor){
		// 		proveedor=oTaller.Aproveedor[i];
		// 	}
		// }	
			sURL = "php/componentes/modificacionComponente.php";
			sParametros = "datos=" + JSON.stringify(oComponente);
			peticionAjax(sURL,sParametros);	
			document.formModComponente.reset();
	}
	return bValido;
}




});	
