$("#listarEmpleado").dialog({
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
            $("#listarEmpleado").remove();
        }
    }]
});

function procesoListado(){
	var oArrayEmpleados = null;
	$.get('php/empleados/listadoEmpleados.php',null,respuestaListado,'json');
}

function respuestaListado(oArrayEmpleados, sStatus, oXHR){
	tratarRespuestaListadoEmpleados(oArrayEmpleados);
}

function tratarRespuestaListadoEmpleados(oArrayEmpleados){
        $("#listarEmpleado").empty();

        var jqTabla = $('<table class="table table-hover">');

        $('<tr><th><b>DNI<b/></th><th><b>NOMBRE</b></th><th><b>APELLIDOS</b></th></tr>').appendTo(jqTabla);
        $.each(oArrayEmpleados.resultado, function( i , elemento){
            $("<tr><td>"+elemento.dniempleado+"</td>"+
                "<td>"+elemento.nombre+"</td>"+
                "<td>"+elemento.apellidos+"</td>").appendTo(jqTabla);
        });

        jqTabla.appendTo("#listarEmpleado");

}
