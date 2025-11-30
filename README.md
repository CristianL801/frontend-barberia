Proyecto Barbería - Evaluación 2:
Hola, este es mi proyecto para la segunda evaluación de Desarrollo Web. Básicamente, tomé el frontend de la entrega anterior y lo conecté a una API real hecha con Laravel 11. Ya no usa datos falsos en memoria, ahora todo se guarda de verdad en una base de datos SQLite.

¿Qué tecnologías usé?
Backend: Laravel 11 (API REST) + SQLite.
Frontend: React + Vite (Consumo de API con Fetch).
Extras: Seeders para cargar datos de prueba y validaciones en el servidor.

Guía de Instalación (Paso a Paso)
Sigue estos pasos para dejarlo corriendo en local.
1. Configurar el Backend (Laravel)
Entra a la carpeta del servidor:

Bash:
cd backend-barberia

Instala las dependencias de PHP:

Bash:
composer install

Configura el archivo .env y genera la llave de seguridad:

Bash:
cp .env.example .env
php artisan key:generate

Paso Clave: Crea la base de datos SQLite vacía (Comando para PowerShell):

PowerShell
$null > database/database.sqlite

Ejecuta las migraciones y carga los datos de ejemplo (Cortes Bronze, Gold, etc.):

Bash
php artisan migrate:fresh --seed

Enciende el servidor:

Bash
php artisan serve

(El backend quedará escuchando en http://127.0.0.1:8000)

2. Configurar el Frontend (React)
Abre una nueva terminal y entra a la carpeta de la interfaz:

Bash
cd barberia-frontend

Instala las librerías de Node:

Bash
npm install

Levanta la página web:

Bash
npm run dev
(Debería abrirse en http://localhost:5173)

¿Cómo probar la página?
La app tiene dos modos integrados en la misma pantalla:

Modo Cliente (viene por defecto):
Puedes ver las tarjetas con los servicios.
Si haces clic en "Reservar", el formulario envía los datos al Backend y quedan guardados.

Modo Admin:
Haz clic en el botón "⋮" (los tres puntitos) para activar el modo administrador.
Aparecerán opciones para Crear, Editar y Eliminar servicios (todo conectado a la BD).
Al final de la página verás el panel de "Reservas guardadas" traídas desde el servidor.