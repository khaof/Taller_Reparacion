<?php

$oLinea = json_decode($_POST['datos']);

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

$sql = "UPDATE lineacomponentes SET cantidad = $oLinea->cantidad WHERE idlinea = '$oLinea->idlinea'";

if ($conn->query($sql) === TRUE) {
    $resultado =  "Modificacion de linea componentes correcta";
    $error = FALSE;
} else {
    $resultado = "Error: " . $sql . "<br>" . $conn->error;
    $error = TRUE;
}

// Creo un "objeto" php creando un array asociativo
$objeto_salida = array ( "mensaje" => "Modificacion de linea componentes" , "resultado" => $resultado, "accion" => 300, "error" => $error );

$json_salida = json_encode($objeto_salida);

echo $json_salida;

$conn->close();
?>