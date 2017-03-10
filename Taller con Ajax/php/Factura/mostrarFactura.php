<?php
// Cabecera para indicar que vamos a enviar datos JSON y que no haga cacheo de los datos. NO HACE FALTA EN POST
header('Content-Type: text/xml');
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');

$cliente =$_REQUEST['dni'];

// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "taller";
$usuario   = "root";
$password  = "";

// Creamos la conexión al servidor.
$conexion = new mysqli($servidor, $usuario, $password, $basedatos);
$conexion->query("SET NAMES 'utf8'");


// Consulta SQL para obtener los datos de los centros.
$sql = "SELECT DISTINCT p.idaveria, p.fecha, e.nombre as nombreempleado, c.nombre as nombrecomponente, lc.preciocomponente, lc.cantidad, (lc.cantidad*lc.preciocomponente) AS TOTAL FROM partesaverias p, electrodomesticos e, componentes c, lineacomponentes lc WHERE lc.idcomponente=c.idcomponente AND p.idaveria=lc.idparteaveria AND p.idelectrodomestico=e.numref AND e.dnicliente = '12345678A' ORDER BY p.fecha ASC ";
$resultados = $conexion->query($sql);
$respuesta="<?xml version='1.0' encoding='UTF-8'?><taller>";
while($fila=mysqli_fetch_assoc($resultados)){
    // Almacenamos en un array cada una de las filas que vamos leyendo del recordset.
     $respuesta.="<factura>";
        $respuesta.="<idaveria>".$fila['idaveria']."</idaveria>";
        $respuesta.="<fecha>".$fila['fecha']."</fecha>";
        $respuesta.="<nombreEmpleado>".$fila['nombreempleado']."</nombreEmpleado>";
        $respuesta.="<componente>".$fila['nombrecomponente']."</componente>";
        $respuesta.="<preciocomponente>".$fila['preciocomponente']."</preciocomponente>";
        $respuesta.="<cantidad>".$fila['cantidad']."</cantidad>";
        $respuesta.="<total>".$fila['TOTAL']."</total>";
    $respuesta.="</factura>";
}
$respuesta.="</taller>";
// Creo un "objeto" php creando un array asociativo
echo $respuesta; 
mysqli_close($conexion);

?> 