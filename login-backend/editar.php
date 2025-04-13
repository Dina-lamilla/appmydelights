<?php
// Encabezados CORS para permitir solicitudes desde tu frontend
header("Access-Control-Allow-Origin: http://localhost:3000"); // Permitir solicitudes desde localhost:3000
header("Access-Control-Allow-Methods: POST, GET, OPTIONS"); // Métodos permitidos
header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Encabezados permitidos
header("Content-Type: application/json");

// Manejar solicitud OPTIONS (preflight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Conexión a la base de datos
$host = "localhost";
$dbname = "mydelights";
$username = "root";
$password = "";

$conexion = new mysqli($host, $username, $password, $dbname);

// Verificar conexión
if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);
}

// Obtener los datos enviados desde React
$data = json_decode(file_get_contents("php://input"), true);

// Extraer datos del JSON
$usuarioID = $data['usuarioID']; // Cambié 'id' a 'usuarioID'
$nombreUsuario = $data['nombreUsuario'];
$numeroCedula = $data['numeroCedula'];
$genero = $data['genero'];
$fechaNacimiento = $data['fechaNacimiento'];
$direccionResidencia = $data['direccionResidencia'];
$telefonoCelular = $data['telefonoCelular'];
$correoElectronico = $data['correoElectronico'];
$contrasena = isset($data['contrasena']) ? $data['contrasena'] : '';  // Verificar si 'contrasena' existe
$tipoCliente = $data['tipoCliente'];

// Verificar que los datos no estén vacíos
if (empty($usuarioID) || empty($nombreUsuario) || empty($numeroCedula) || empty($genero) || empty($fechaNacimiento) || empty($direccionResidencia) || empty($telefonoCelular) || empty($correoElectronico) || empty($tipoCliente)) {
    echo json_encode(["estado" => "error", "mensaje" => "Todos los campos son obligatorios."]);
    exit();
}

// Preparar la consulta de actualización
if (!empty($contrasena)) {
    // Si contrasena no está vacía, actualizarla
    $sql = "UPDATE usuarios SET 
                nombreUsuario = ?, 
                numeroCedula = ?, 
                genero = ?, 
                fechaNacimiento = ?, 
                direccionResidencia = ?, 
                telefonoCelular = ?, 
                correoElectronico = ?, 
                contrasena = ?,
                tipoCliente = ? 
            WHERE usuarioID = ?"; // Cambié 'id' a 'usuarioID'
    $stmt = $conexion->prepare($sql);
    $stmt->bind_param("sssssssssi", $nombreUsuario, $numeroCedula, $genero, $fechaNacimiento, $direccionResidencia, $telefonoCelular, $correoElectronico, $contrasena, $tipoCliente, $usuarioID);
} else {
    // Si contrasena está vacía, no actualizarla
    $sql = "UPDATE usuarios SET 
                nombreUsuario = ?, 
                numeroCedula = ?, 
                genero = ?, 
                fechaNacimiento = ?, 
                direccionResidencia = ?, 
                telefonoCelular = ?, 
                correoElectronico = ?, 
                tipoCliente = ? 
            WHERE usuarioID = ?"; // Cambié 'id' a 'usuarioID'
    $stmt = $conexion->prepare($sql);
    $stmt->bind_param("ssssssssi", $nombreUsuario, $numeroCedula, $genero, $fechaNacimiento, $direccionResidencia, $telefonoCelular, $correoElectronico, $tipoCliente, $usuarioID);
}

if ($stmt->execute()) {
    echo json_encode(["estado" => "ok", "mensaje" => "Usuario actualizado con éxito."]);
} else {
    echo json_encode(["estado" => "error", "mensaje" => "Error al actualizar usuario: " . $stmt->error]);
}

$stmt->close();
$conexion->close();
?>
