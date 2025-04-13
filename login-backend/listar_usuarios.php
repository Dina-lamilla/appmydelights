<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include("conexion.php");

$sql = "SELECT * FROM usuarios";
$resultado = $conexion->query($sql);

$usuarios = [];

if ($resultado && $resultado->num_rows > 0) {
    while ($fila = $resultado->fetch_assoc()) {
        $usuarios[] = $fila;
    }
    echo json_encode($usuarios);
} else {
    echo json_encode([]);
}

$conexion->close();
