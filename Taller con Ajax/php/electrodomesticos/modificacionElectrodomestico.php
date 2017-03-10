<?php

$oElectro = json_decode($_POST['datos']);

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

$sql = "UPDATE electrodomesticos SET nombre = '$oElectro->sNombreElec', marca = '$oElectro->sMarca' , dnicliente = '$oElectro->sDniCli' WHERE numref = '$oElectro->sNumRef'";

if ($conn->query($sql) === TRUE) {
    $resultado =  "Modificacion de electrodomesticos correcta";
    $error = FALSE;
} else {
    $resultado = "Error: " . $sql . "<br>" . $conn->error;
    $error = TRUE;
}

// Creo un "objeto" php creando un array asociativo
$objeto_salida = array ( "mensaje" => "Modificacion de electrodomesticos" , "resultado" => $resultado, "accion" => 200, "error" => $error );

$json_salida = json_encode($objeto_salida);

echo $json_salida;

$conn->close();
?>