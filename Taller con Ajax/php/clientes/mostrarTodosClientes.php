<?php
// Cabecera para indicar que vamos a enviar datos JSON y que no haga cacheo de los datos. NO HACE FALTA EN POST
header('Content-Type: application/xml');
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');

// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "taller";
$usuario   = "root";
$password  = "";

// Creamos la conexión al servidor.
$conexion = new mysqli($servidor, $usuario, $password, $basedatos);
if ($conexion->connect_error) {
    die("Conexion fallida: " . $conexion->connect_error);
}

// Consulta SQL para obtener los datos de los centros.
$sql = "SELECT * FROM clientes";
$resultados = $conexion->query($sql);
$respuesta="<?xml version='1.0' encoding='UTF-8'?><taller>";
while($fila=mysqli_fetch_assoc($resultados)){
    $respuesta.="<clientes>";
        $respuesta.="<dni>".$fila['dnicliente']."</dni>";
        $respuesta.="<nombre>".$fila['nombre']."</nombre>";
        $respuesta.="<apellidos>".$fila['apellidos']."</apellidos>";
        $respuesta.="<direccion>".$fila['direccion']."</direccion>";
        $respuesta.="<email>".$fila['email']."</email>";
    $respuesta.="</clientes>";
}
$respuesta.="</taller>";
echo $respuesta;

mysqli_close($conexion);

?> 