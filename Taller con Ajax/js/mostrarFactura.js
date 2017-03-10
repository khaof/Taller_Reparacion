$("#obtenerFactura").dialog({
    autoOpen: true, 
    modal: true, 
    hide: "fold",
    show: "fold",
    height:"auto",
    width:650,
    resizable:false,
    buttons: [{
        text: "Pedir Factura",
        click: procesoFactura
    }, {
        text: "Cerrar",
        click: function() {
            $(this).dialog("close");
            $("#listado").remove();
        }
    }]
});

function procesoFactura(){
	var oXML = null;

    
    var comboDNI = $("#comboDniCli").val();
    var sParametroGET = encodeURI("dni="+comboDNI);
    var sURL = encodeURI("php/Factura/mostrarFactura.php?");
   
	$.get(sURL,sParametroGET,respuestaFactura,'xml');
}
function respuestaFactura(oXML, sStatus, oXHR){
	procesaXMLfactura(oXML);
}

function procesaXMLfactura(oXML){

    //borrar tabla si habia
    $("#listado").remove();

    var jqTabla = $('<table id="listado" border="1" class="table table-hover">');

    var fTotal=0.0;

    var oFactura = oXML.getElementsByTagName("factura");
   
    for(var i=0;i<oFactura.length;i++){
        $('<tr>' +
        	'<td><b>IDAVERIA</b></td>'+
            '<td>'+oFactura[i].getElementsByTagName('idaveria')[0].textContent+'</td>' +
            '<td><b>FECHA</b></td>'+
            '<td>'+oFactura[i].getElementsByTagName('fecha')[0].textContent+'</td>' +
          '</tr><tr>'+
          	'<td><b>ELECTRODOMESTICO</b></td>'+
            '<td colspan=3>'+oFactura[i].getElementsByTagName('nombreEmpleado')[0].textContent+'</td>' +
           '</tr><tr>'+
            '<td>'+oFactura[i].getElementsByTagName('componente')[0].textContent+'</td>' +
            '<td>'+oFactura[i].getElementsByTagName('preciocomponente')[0].textContent+'</td>' +
            '<td>'+oFactura[i].getElementsByTagName('cantidad')[0].textContent+'</td>' +
           '</tr><tr>'+
           	'<td><b>TOTAL</b></td>'+
            '<td colspan=3>'+oFactura[i].getElementsByTagName('total')[0].textContent+'</td>' +
           '</tr>').appendTo(jqTabla);
    }

    jqTabla.appendTo("#muestrafactura");

}
