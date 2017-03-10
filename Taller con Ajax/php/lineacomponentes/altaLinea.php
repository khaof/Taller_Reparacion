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

$sql = "INSERT INTO lineacomponentes (`idparteaveria`, `idcomponente`, `preciocomponente`, `cantidad`) VALUES ( '$oLinea->idAveria' , '$oLinea->comboComp' ,'$oLinea->precio', '$oLinea->unidades')";

if ($conn->query($sql) === TRUE) {
    $resultado =  "Componente Agregado";
    $error = FALSE;
} else {
    $resultado = "Error: " . $sql . "<br>" . $conn->error;
    $error = TRUE;
}

// Creo un "objeto" php creando un array asociativo
$objeto_salida = array ( "mensaje" => "Componente Agregado" , "resultado" => $resultado, "accion" => 100, "error" => $error );

$json_salida = json_encode($objeto_salida);

echo $json_salida;

$conn->close();
?>