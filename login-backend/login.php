<?php
// Permitir solicitudes desde cualquier origen (para desarrollo)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

// Incluir archivo de conexión
include("conexion.php");

// Leer datos enviados desde el frontend en formato JSON
$datos = json_decode(file_get_contents("php://input"), true);

// Verificar que se recibieron los campos requeridos
if (isset($datos["correoElectronico"]) && isset($datos["contrasena"])) {
    $correoElectronico = $datos["correoElectronico"];
    $contrasena = $datos["contrasena"];

    // Buscar el usuario por su correo
    $sql = "SELECT usuarioID, nombreUsuario, contrasena FROM usuarios WHERE correoElectronico = ?";
    $stmt = $conexion->prepare($sql);

    if ($stmt) {
        $stmt->bind_param("s", $correoElectronico);
        $stmt->execute();
        $resultado = $stmt->get_result();

        if ($resultado->num_rows === 1) {
            $fila = $resultado->fetch_assoc();
            $contrasena_en_bd = $fila["contrasena"];

            // Comparar directamente las contraseñas (sin password_verify)
            if ($contrasena === $contrasena_en_bd) {
                echo json_encode([
                    "estado" => "ok",
                    "mensaje" => "Inicio de sesión exitoso",
                    "nombreUsuario" => $fila["nombreUsuario"],
                    "usuarioID" => $fila["usuarioID"]
                ]);
            } else {
                echo json_encode(["estado" => "error", "mensaje" => "Contraseña incorrecta"]);
            }
        } else {
            echo json_encode(["estado" => "error", "mensaje" => "Usuario no encontrado"]);
        }

        $stmt->close();
    } else {
        echo json_encode(["estado" => "error", "mensaje" => "Error al preparar la consulta"]);
    }

    $conexion->close();
} else {
    echo json_encode(["estado" => "error", "mensaje" => "Faltan datos obligatorios"]);
}
