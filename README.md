# calambrazo-kilo-papa

##Descripción  
Robotito Mentiroso es un juego que presenta preguntas con dos opciones de respuesta, obtenidas desde una base de datos en MongoDB. Las respuestas correctas se validan en el backend para evitar que puedan ser descubiertas fácilmente al inspeccionar el frontend. Este proyecto utiliza HTML, CSS y JavaScript en el frontend, y Node.js (Express y Mongoose) en el backend.

##Instalación y configuración

1. Clonar el respositorio - git clone https://github.com/webreactiva-devs/calambrazo-kilo-papa.git
2. Instalar dependencias en backend - npm install
3. Iniciar servidor en backend - node index.js (servidor iniciará en http://localhost:3000)
4. Inyectar datos en base de datos - npm run seed
5. Iniciar frontend con Live Server (extensión de Visual Studio Code)

Desde terminal de Backend: Informe de preguntas + nivel + aciertos en la terminal - npm run report

##Estructura
#Directorios y archivos principales

1. backend/: Contiene todo el código relacionado con el servidor.

   - src/api/controllers/getQuestions.js: Controlador para manejar las preguntas.
   - src/api/models/questions.js: Esquema de Mongoose para almacenar los datos y tipos de datos
   - src/api/routes/routes.js: Define las rutas de la API.
   - src/seed/dbQuestions.js: Script que permite inyección de datos iniciales en base de datos.
   - index.js: Archivo principal del backend, donde se inicializa el servidor.

2. frontend/: Contiene todo el código del cliente.

   - Components/: Subcarpeta con componentes del frontend como gameLogic.js, buttons.js y result.js.
   - index.html: Archivo principal del juego.
   - index.css: Estilos del juego.
   - main.js: Archivo principal donde se organiza e importa la lógica de los componentes.

3. .gitignore: Archivo para excluir node_modules y otros archivos no necesarios para el repositorio.

##Tecnologías utilizadas
#Frontend - HTML5, CSS3, JAVASCRIPT
#Backend - Node.js, Express, Mongoose y MongoDB
#Otras herramientas - CORS (para habilitar comunicación entre frontend y backend)

##API del backend

1. Obtener preguntas
   Ruta: `GET /api/questions`
   Respuesta: Se obtiene una lista de preguntas sin las respuestas
2. Validar respuesta
   Ruta: `POST /api/validate`
