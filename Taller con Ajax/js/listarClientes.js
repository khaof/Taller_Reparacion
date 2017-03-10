$("#listarClientes").dialog({
    autoOpen: true, 
    modal: true, 
    hide: "fold",
    show: "fold",
    height:"auto",
    width:650,
    resizable:false,
    buttons: [{
        text: "Pedir listado",
        click: procesoListado
    }, {
        text: "Cerrar",
        click: function() {
            $(this).dialog("close");
            $("#listarClientes").remove();
        }
    }]
});

function procesoListado(){
	var oXML = null;
	$.get('php/clientes/mostrarTodosClientes.php',null,respuestaListado,'xml');
}

function respuestaListado(oXML, sStatus, oXHR){
	tratarRespuestaListadoClientes(oXML);
}

function tratarRespuestaListadoClientes(oXML){
       $("#listarClientes").empty();

        var jqTabla = $('<table class="table table-hover">');

        var oClientes = oXML.getElementsByTagName("clientes");
        $('<tr><th><b>DNI<b/></th><th><b>NOMBRE</b></th><th><b>APELLIDOS</b></th><th><b>DIRECCION</b></th><th><b>EMAIL</b></th></tr>').appendTo(jqTabla);
        for(var i=0;i<oClientes.length;i++){
            $('<tr>' +
                '<td>'+oClientes[i].getElementsByTagName('dni')[0].textContent+'</td>' +
                '<td>'+oClientes[i].getElementsByTagName('nombre')[0].textContent+'</td>' +
                '<td>'+oClientes[i].getElementsByTagName('apellidos')[0].textContent+'</td>' +
                '<td>'+oClientes[i].getElementsByTagName('direccion')[0].textContent+'</td>' +
                '<td>'+oClientes[i].getElementsByTagName('email')[0].textContent+'</td>' +
               '</tr>').appendTo(jqTabla);
        }

        jqTabla.appendTo("#listarClientes");

}
