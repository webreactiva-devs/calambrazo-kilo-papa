# calambrazo-kilo-papa

##Descripción del Proyecto
Este proyecto es una juego de preguntas y respuestas que permite a los usuarios iniciar una sesión de juego, responder a una serie de preguntas y visualizar sus estadísticas de éxito al final de la sesión. El sistema calcula el porcentaje de aciertos y permite reiniciar el juego para una nueva sesión. Asimismo, se pretende conocer si la IA acierta o no con el nivel de dificultad de las preguntas que ha generado.

##Configuración del Proyecto

###Instalación

1. Clonar el repositorio.
   git clone <URL del repositorio>

2. Instalar las dependencias.
   npm install

3. Configurar el archivo .env con las variables necesarias:
   DB_URL=<URL de la base de datos MongoDB>

4. Inicializar la Base de Datos
   El proyecto contiene un script para cargar preguntas de ejemplo en la base de datos. Ejecuta:
   node src/seed/questionsSeed.js

Ejecutar el Proyecto Localmente
Acceder a http://localhost:3000 en el navegador o mediante Live Server (extensión de VSC) desde index.html

##Estructura del proyecto
El proyecto está dividido en dos partes principales:

1.  Backend

    - src/config: Configuración de la conexión a la base de datos -> databaseConnect.js

    - src/api: Contiene controladores, modelos y repositorios.

    - src/scripts -> report.js: genera un informe en la terminal mostrando el nivel, el porcentaje de éxito y si se cumplió o no la tasa esperada

    - src/services: Contiene lógica de negocio reutilizable -> updateQuestion.js: Servicio para actualizar preguntas.

    - src/utils: Utilidades del proyecto.
      calcSuccessRate.js: Calcula la tasa de éxito.
      configRates.json: Configuración de las tasas esperadas por nivel.

    - index.js: Punto de entrada del backend.

2.  Frontend

    - frontend/Components: Contiene los componentes visuales.
      buttons.js, confetti.js, question.js, restart.js, result.js, statsAndLevel.js

    - frontend/Game: Lógica de juego.
      handleAnswer.js, loadNextQuestion.js, nextQuestion.js, showTotalSuccessRate.js, startSession.js

    - frontend/Service: Servicios que manejan la comunicación con la API.
      Api.js: Maneja las solicitudes al backend.

    - index.html: Página principal de la aplicación.

    - main.js: Punto de entrada del frontend.

##Funcionalidades del Proyecto

1.  Iniciar Sesión de Juego: Botón de inicio que da paso a las preguntas.
2.  Responder Preguntas: Cada vez que el usuario responde, aparece el botón "Siguiente Pregunta".
3.  Mostrar Resultados: En la última pregunta, se muestra el porcentaje de aciertos junto con la opción de reiniciar el juego.

##Despliegue en Render

- Crear una cuenta en Render.
- Crear un nuevo servicio web.
- Conectar el repositorio del proyecto.
- Configurar las variables de entorno necesarias en Render (DB_URL).
- Realizar el despliegue.
