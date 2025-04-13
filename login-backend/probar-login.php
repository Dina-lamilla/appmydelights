<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

include 'conexion.php';

// Datos de prueba:
$correo = 'ejemplo@correo.com';  // <-- reemplaza con un correo real que tengas en la base de datos
$contraseña = '123456';          // <-- reemplaza con la contraseña correcta según tu base

$sql = "SELECT * FROM usuarios WHERE correoElectronico = ?";
$stmt = $conexion->prepare($sql);
$stmt->bind_param("s", $correo);
$stmt->execute();
$resultado = $stmt->get_result();

if ($resultado->num_rows === 1) {
    $usuario = $resultado->fetch_assoc();

    if ($usuario["contraseña"] === $contraseña) {
        echo "✅ Usuario y contraseña correctos.";
    } else {
        echo "❌ Contraseña incorrecta.";
    }
} else {
    echo "❌ Usuario no encontrado.";
}

$stmt->close();
$conexion->close();
?>
