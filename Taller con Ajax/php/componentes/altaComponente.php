<?php

$oComponente = json_decode($_POST['datos']);

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

$sql = "INSERT INTO componentes (idcomponente, preciocomponente, nombre) VALUES ( '$oComponente->sIdRecambio' , '$oComponente->sPrecio' ,'$oComponente->sNombreRec')";

if ($conn->query($sql) === TRUE) {
    $resultado =  "Alta de componente correcta";
    $error = FALSE;
} else {
    $resultado = "Error: " . $sql . "<br>" . $conn->error;
    $error = TRUE;
}

// Creo un "objeto" php creando un array asociativo
$objeto_salida = array ( "mensaje" => "Alta de componente" , "resultado" => $resultado, "accion" => 100, "error" => $error );

$json_salida = json_encode($objeto_salida);

echo $json_salida;

$conn->close();
?>