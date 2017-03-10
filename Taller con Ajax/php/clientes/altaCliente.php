<?php

$oCliente = json_decode($_POST['data']);

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

$sql = "INSERT INTO clientes (dnicliente, nombre, apellidos, direccion, email) VALUES ( '$oCliente->dni', '$oCliente->nombre', '$oCliente->apellidos', '$oCliente->direccion', '$oCliente->email')";

if ($conn->query($sql) === TRUE) {
    $resultado =  "Alta de cliente correcta";
    $error = FALSE;
} else {
    $resultado = "Ese cliente ya existe";
    $error = TRUE;
}

// Creo un "objeto" php creando un array asociativo
$objeto_salida = array ( "mensaje" => "Alta de cliente" , "resultado" => $resultado, "accion" => 100, "error" => $error );

$json_salida = json_encode($objeto_salida);

echo $json_salida;

$conn->close();
?>