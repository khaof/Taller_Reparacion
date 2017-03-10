<?php
// Cabecera para indicar que vamos a enviar datos JSON y que no haga cacheo de los datos. NO HACE FALTA EN POST
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');

// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "taller";
$usuario   = "root";
$password  = "";

// Creamos la conexión al servidor.
$conexion = mysql_connect($servidor, $usuario, $password) or die(mysql_error());
mysql_query("SET NAMES 'utf8'", $conexion);

// Seleccionar la base de datos en esa conexion.
mysql_select_db($basedatos, $conexion) or die(mysql_error());

// Consulta SQL para obtener los datos de los centros.
$sql = "select * from lineacomponentes";
$resultados = mysql_query($sql, $conexion) or die(mysql_error());
while ($fila = mysql_fetch_array($resultados, MYSQL_ASSOC)) {
    // Almacenamos en un array cada una de las filas que vamos leyendo del recordset.
    $datos[] = $fila;
}

// Creo un "objeto" php creando un array asociativo
$objeto_salida = array ( "mensaje" => "Listado de linea componentes" , "resultado" => $datos, "accion" => 400, "error" => FALSE );



echo json_encode($objeto_salida); 
mysql_close($conexion);

?> 