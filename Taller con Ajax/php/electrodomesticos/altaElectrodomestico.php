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

$sql = "INSERT INTO electrodomesticos (numref, dnicliente, nombre, marca) VALUES ( '$oElectro->sNumRef', '$oElectro->sDniCli' ,'$oElectro->sNombreElec', '$oElectro->sMarca')";

if ($conn->query($sql) === TRUE) {
    $resultado =  "Alta de electrodomestico correcta";
    $error = FALSE;
} else {
    $resultado = "Error: " . $sql . "<br>" . $conn->error;
    $error = TRUE;
}

// Creo un "objeto" php creando un array asociativo
$objeto_salida = array ( "mensaje" => "Alta de electrodomestico" , "resultado" => $resultado, "accion" => 100, "error" => $error );

$json_salida = json_encode($objeto_salida);

echo $json_salida;

$conn->close();
?>