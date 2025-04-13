<?php
// Permitir solicitudes desde cualquier origen (para desarrollo)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: DELETE, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

// Incluir archivo de conexión
include("conexion.php");

// Leer los datos enviados desde el frontend (puede ser método DELETE o POST)
$datos = json_decode(file_get_contents("php://input"), true);

// Verificar que se recibió el ID del usuario
if (isset($datos["usuarioID"])) {
    $usuarioID = $datos["usuarioID"];

    // Consulta para eliminar al usuario
    $sql = "DELETE FROM usuarios WHERE usuarioID = ?";
    $stmt = $conexion->prepare($sql);

    if ($stmt) {
        $stmt->bind_param("i", $usuarioID);
        if ($stmt->execute()) {
            echo json_encode(["estado" => "ok", "mensaje" => "Usuario eliminado correctamente"]);
        } else {
            echo json_encode(["estado" => "error", "mensaje" => "No se pudo eliminar el usuario"]);
        }
        $stmt->close();
    } else {
        echo json_encode(["estado" => "error", "mensaje" => "Error al preparar la consulta"]);
    }

    $conexion->close();
} else {
    echo json_encode(["estado" => "error", "mensaje" => "No se recibió el ID del usuario"]);
}
