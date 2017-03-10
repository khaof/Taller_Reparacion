$("#listarComponentes").dialog({
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
            $("#listarComponentes").remove();
        }
    }]
});

function procesoListado(){
	var oArrayComponente = null;
	$.get('php/componentes/listadoComponentes.php',null,respuestaListado,'json');
}

function respuestaListado(oArrayComponente, sStatus, oXHR){
	tratarRespuestaListadoClientes(oArrayComponente);
}

function tratarRespuestaListadoClientes(oArrayComponente){
     $("#listarComponentes").empty();

     var jqTabla = $('<table class="table table-hover">');

     $('<tr><th><b>ID COMPONENTE<b/></th><th><b>NOMBRE</b></th><th><b>PRECIO</b></th></tr>').appendTo(jqTabla);
     $.each(oArrayComponente.resultado, function( i , elemento){
        $("<tr><td>"+elemento.idcomponente+"</td>"+
            "<td>"+elemento.nombre+"</td>"+
            "<td>"+elemento.preciocomponente+"</td></tr>").appendTo(jqTabla);
    });

     jqTabla.appendTo("#listarComponentes");

}
