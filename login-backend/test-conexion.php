<?php
// Mostrar todos los errores (por si hay algún fallo)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Conectamos a la base de datos
$conexion = new mysqli("localhost", "root", "", "mydelights");

// Verificamos si hubo un error
if ($conexion->connect_error) {
    die("❌ Error de conexión: " . $conexion->connect_error);
}

// Si todo va bien
echo "✅ Conexión exitosa a la base de datos";
?>
