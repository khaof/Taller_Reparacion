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
$conexion = new mysqli($servidor, $usuario, $password, $basedatos);
$conexion->query("SET NAMES 'utf8'");


// Consulta SQL para obtener los datos de los centros.
$sql = "SELECT * FROM empleados";
$resultados = $conexion->query($sql);
while ($fila = mysqli_fetch_assoc($resultados)) {
    // Almacenamos en un array cada una de las filas que vamos leyendo del recordset.
    $datos[] = $fila;
}

// Creo un "objeto" php creando un array asociativo
$objeto_salida = array ( "mensaje" => "Listado de empleados" , "resultado" => $datos, "accion" => 400, "error" => FALSE );



echo json_encode($objeto_salida); 
mysqli_close($conexion);

?> 