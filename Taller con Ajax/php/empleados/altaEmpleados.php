<?php

//$oEmpleado = json_decode($_POST['data']);
$dni=$_REQUEST['dni'];
$nombre=$_REQUEST['nombre'];
$apellidos=$_REQUEST['apellidos'];


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "taller";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Conexion fallida: " . $conn->connect_error);
}

$sql = "INSERT INTO empleados (dniempleado, nombre, apellidos) VALUES ( '$dni' , '$nombre' ,'$apellidos')";

if ($conn->query($sql) === TRUE) {
    $resultado =  "Alta de empleado correcta";
    $error = FALSE;
} else {
    $resultado = "Error: " . $sql . "<br>" . $conn->error;
    $error = TRUE;
}

// Creo un "objeto" php creando un array asociativo
$objeto_salida = array ( "mensaje" => "Alta de empleado" , "resultado" => $resultado, "accion" => 100, "error" => $error );

$json_salida = json_encode($objeto_salida);

echo $json_salida;

$conn->close();
?>