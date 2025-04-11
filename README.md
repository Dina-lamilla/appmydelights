# 🧁 MyDelights - Sistema Web

Este es un sistema web desarrollado con React para la gestión de un restaurante, permitiendo a los usuarios visualizar el menú, realizar cotizaciones, hacer compras y acceder a otros servicios.

## 🚀 Tecnologías utilizadas

- React
- React Router
- Bootstrap
- PHP (backend para login)
- MySQL
- AppServ 9.3.0 (entorno de servidor local)

## 🖥️ Entorno de desarrollo

El desarrollo del backend se realizó utilizando **AppServ 9.3.0**, una plataforma que integra Apache, PHP y MySQL.  
La carpeta `login-backend/` fue ubicada en:

http://localhost/login-backend/login.php


La base de datos `mydelights` fue creada desde **phpMyAdmin** que provee AppServ, utilizando el usuario `root` sin contraseña.


El sistema cuenta con una pantalla de login conectada a una base de datos MySQL a través de un backend en PHP.


La autenticación se realiza con PHP y conexión a MySQL.  
Los archivos del backend están en la carpeta `login-backend/`.

### Archivos importantes:

- `login.php`: Recibe el JSON desde React, valida usuario y contraseña.
- `conexion.php`: Conexión a la base de datos MySQL.
- `debug.txt`: Se utiliza para registrar los datos que llegan desde el frontend durante pruebas.

## 🌳 Árbol de directorios (backend)

login-backend/ │ ├── conexion.php ├── login.php ├── debug.txt └── debug-login.txt


---

*DINA LAMILLA GONZÁLEZ*  
Estudiante de Desarrollo de Software UNAD  
Proyecto académico – 2025
