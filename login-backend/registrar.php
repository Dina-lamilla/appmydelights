<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Permitir solicitudes desde cualquier origen (para desarrollo)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

// Responder a la preflight request (OPTIONS)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Incluir archivo de conexión
include("conexion.php");

// Leer los datos enviados en formato JSON
$input = file_get_contents("php://input");
$datos = json_decode($input, true);

// Validar que se recibió JSON válido
if (is_null($datos)) {
    http_response_code(400);
    echo json_encode(["estado" => "error", "mensaje" => "JSON inválido"]);
    exit();
}

// Verificar que se recibieron todos los campos necesarios
if (
    isset($datos["nombreUsuario"]) &&
    isset($datos["numeroCedula"]) &&
    isset($datos["genero"]) &&
    isset($datos["fechaNacimiento"]) &&
    isset($datos["direccionResidencia"]) &&
    isset($datos["telefonoCelular"]) &&
    isset($datos["correoElectronico"]) &&
    isset($datos["contrasena"])
) {
    // Limpiar y asignar variables
    $nombreUsuario = $datos["nombreUsuario"];
    $numeroCedula = $datos["numeroCedula"];
    $genero = $datos["genero"];
    $fechaNacimiento = $datos["fechaNacimiento"];
    $direccionResidencia = $datos["direccionResidencia"];
    $telefonoCelular = $datos["telefonoCelular"];
    $correoElectronico = $datos["correoElectronico"];
    $contrasena = $datos["contrasena"];

    // Validación del correo electrónico
    if (!filter_var($correoElectronico, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["estado" => "error", "mensaje" => "Correo electrónico no válido"]);
        exit();
    }

    // Validación del teléfono (10 dígitos)
    $phoneRegex = "/^[0-9]{10}$/";
    if (!preg_match($phoneRegex, $telefonoCelular)) {
        echo json_encode(["estado" => "error", "mensaje" => "Teléfono no válido. Debe tener 10 dígitos."]);
        exit();
    }

    // Cifrar la contraseña
    $contrasena = $datos["contrasena"]; // Ya NO usamos password_hash

    // Preparar consulta para evitar inyección SQL
    $sql = "INSERT INTO usuarios (nombreUsuario, numeroCedula, genero, fechaNacimiento, direccionResidencia, telefonoCelular, correoElectronico, contrasena)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conexion->prepare($sql);

    if ($stmt) {
        $stmt->bind_param("ssssssss", $nombreUsuario, $numeroCedula, $genero, $fechaNacimiento, $direccionResidencia, $telefonoCelular, $correoElectronico, $contrasena);

        if ($stmt->execute()) {
            http_response_code(200); // OK
            echo json_encode(["estado" => "ok", "mensaje" => "Usuario registrado correctamente"]);
        } else {
            http_response_code(500); // Internal Server Error
            echo json_encode(["estado" => "error", "mensaje" => "Error al registrar el usuario"]);
        }

        $stmt->close();
    } else {
        http_response_code(500); // Internal Server Error
        echo json_encode(["estado" => "error", "mensaje" => "Error al preparar la consulta"]);
    }

    $conexion->close();
} else {
    http_response_code(400); // Bad Request
    echo json_encode(["estado" => "error", "mensaje" => "Faltan datos obligatorios"]);
    exit();
}
