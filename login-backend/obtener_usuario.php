<?php
// Encabezados CORS
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Conexión a la base de datos
$host = "localhost";
$dbname = "mydelights";
$username = "root";
$password = "";

$conexion = new mysqli($host, $username, $password, $dbname);

if ($conexion->connect_error) {
    die(json_encode(["error" => "Conexión fallida: " . $conexion->connect_error]));
}

// Verificar si se pasó el ID por GET
if (isset($_GET['id'])) {
    $usuarioID = $_GET['id'];

    $sql = "SELECT * FROM usuarios WHERE usuarioID = ?";
    $stmt = $conexion->prepare($sql);
    $stmt->bind_param("i", $usuarioID);
    $stmt->execute();
    $resultado = $stmt->get_result();

    if ($resultado->num_rows > 0) {
        $usuario = $resultado->fetch_assoc();
        echo json_encode($usuario);
    } else {
        echo json_encode(["error" => "Usuario no encontrado"]);
    }

    $stmt->close();
} else {
    echo json_encode(["error" => "No se proporcionó un ID"]);
}

$conexion->close();
?>
