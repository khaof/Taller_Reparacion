$("#listarElectro").dialog({
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
            $("#listarElectro").remove();
        }
    }]
});

function procesoListado(){
	var oArrayElec = null;
	$.get('php/electrodomesticos/listadoElectrodomestico.php',null,respuestaListado,'json');
}

function respuestaListado(oArrayElec, sStatus, oXHR){
	tratarRespuestaListadoElectrodomesticos(oArrayElec);
}

function tratarRespuestaListadoElectrodomesticos(oArrayElec){
        $("#listarElectro").empty();

        var jqTabla = $('<table class="table table-hover">');

        $('<tr><th><b>N.REF<b/></th><th><b>NOMBRE</b></th><th><b>MARCA</b></th><th><b>DNI CLIENTE</b></th></tr>').appendTo(jqTabla);
        $.each(oArrayElec.resultado, function( i , elemento){
            $("<tr><td>"+elemento.numref+"</td>"+
                "<td>"+elemento.nombre+"</td>"+
                "<td>"+elemento.marca+"</td>"+
                "<td>"+elemento.dnicliente+"</td></tr>").appendTo(jqTabla);
        });

        jqTabla.appendTo("#listarElectro");

}
