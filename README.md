RICK AND MORTY 

Características:

- Utiliza ReactJS como biblioteca de JavaScript para la construcción de la interfaz de usuario.
- Utiliza la API de Rick and Morty (https://rickandmortyapi.com/) para obtener información sobre los personajes.
- Muestra una lista de personajes en un grid lateral con sus nombres e imágenes.
- Permite hacer clic en el nombre del personaje para ver una vista detallada con más información sobre ese personaje, como su imagen, especie, género, estado, etc.
- Proporciona filtros de búsqueda en la lista de personajes por status, especie y género para permitir a los usuarios encontrar personajes específicos.
- Es responsive y se adapta a diferentes tamaños de pantalla, como dispositivos móviles y tabletas.
- Implementa una interfaz de usuario atractiva y fácil de usar con un diseño limpio y moderno.

Tecnologías utilizadas:

-ReactJS como biblioteca de JavaScript para la construcción de la interfaz de usuario.
- Axios para realizar las llamadas a la API de Rick and Morty y obtener datos de los personajes.
- React Router para manejar la navegación y las rutas de la aplicación.
- Redux para gestionar el estado global de la aplicación y manejar la lógica de los filtros de búsqueda.
- Module CSS para estilizar la aplicación y hacerla atractiva visualmente.

Esta aplicación en ReactJS consulta la API de Rick and Morty, muestra información de los personajes en un grid lateral con opción de vista detallada, y permite realizar búsquedas por status, especie y género. Además, es responsive y funcional, ofreciendo una experiencia de usuario atractiva y fácil de usar.

Requisitos Previos

Estos son los requisitos previos que se debe cumplir para ejecutar la aplicación

Node.js y npm

Dependencias: @reduxjs/toolkit, classnames, react, axios, react-router-domy redux


Instalación

Paso 1: Verificar Node.js y npm
Asegúrate de tener Node.js y npm instalados en tu sistema. 

Paso 2: : Instalar las dependencias

Ejecuta cada uno de los comandos para instalar las dependencias en el directorio de la aplicacion "rick-morty-site"

npm install @reduxjs/toolkit
npm install classnames
npm install react
npm install axios
npm install react-router-dom
npm install redux


Ejecución

Paso 1: Navegar al directorio de la aplicación en este caso "/rick-morty-site" y abre una terminal en la ubicación donde esta creada la aplicación React.

Paso 2: Iniciar el servidor de desarrollo ejecutando el siguiente comando para iniciar el servidor de desarrollo de React:

npm start

Esto iniciará la aplicación React en un servidor de desarrollo local y abrirá automáticamente un navegador con la aplicación en ejecución.

Paso 3: Acceder a la aplicación en el navegador (El anterior paso resumira este paso en una sola ejecucion, pero sino encuentras ese acceso, puedes realizar este paso)

Abre tu navegador web y navega a la siguiente URL: http://localhost:3000/
Verás la aplicación React en funcionamiento en el navegador.

Paso 4: Interactuar con la aplicación

Utiliza los componentes, funciones y características de las bibliotecas mencionadas en la aplicación para interactuar con ella. se puede realizar búsquedas, filtrar por estado, especie y género, y visualizar información detallada de los personajes de Rick and Morty en el grid lateral y en la vista detallada cuando hagas clic en el nombre del personaje.

Paso 5: Si deseas finalizar o Detener el servidor de desarrollo

Regresa a la terminal y presiona Ctrl+C para interrumpir el proceso.


Uso de la API

1. Obtener la lista de personajes:

    Endpoint: /character
    Método: GET
    Parámetros aceptados:
        page: número de página para obtener resultados paginados (opcional, valor por defecto: 1)
    Respuesta esperada:
        Un objeto JSON con la información de los personajes, incluyendo su nombre, especie, género, estado, ubicación, entre otros.
        Ejemplo de uso con Axios en React:
        
![image](https://user-images.githubusercontent.com/70772803/229958517-22787673-3a86-4ed7-acf3-0bac458d2899.png)

2. Obtener información de un personaje específico:
    
    Endpoint: /character/{id}
    Método: GET
    Parámetros aceptados:
        id: identificador único del personaje (obligatorio)
    Respuesta esperada:
        Un objeto JSON con la información detallada del personaje, incluyendo su nombre, especie, género, estado, ubicación, entre otros.
        Ejemplo de uso con Axios en React:

![image](https://user-images.githubusercontent.com/70772803/229958720-284d46f7-4fda-4221-87b1-fe825583aea6.png)

3. Buscar personajes por nombre:
    
    Endpoint: /character/?name={nombre}
    Método: GET
    Parámetros aceptados:
        name: nombre del personaje para realizar la búsqueda (obligatorio)
    Respuesta esperada:
        Un objeto JSON con la lista de personajes que coinciden con el nombre proporcionado.
        Ejemplo de uso con Axios en React:

![image](https://user-images.githubusercontent.com/70772803/229958907-f7e40eeb-52c7-4d08-8801-6577a8779b80.png)

4. Filtrar personajes por estado, especie y género:
    
    Endpoint: /character/?status={status}&species={species}&gender={gender}
    Método: GET
    Parámetros aceptados:
        status: estado del personaje (opcional)
        species: especie del personaje (opcional)
        gender: género del personaje (opcional)
    Respuesta esperada:
    Un objeto JSON con la lista de personajes que coinciden con los filtros proporcionados.
    Ejemplo de uso con Axios en React:
    
![image](https://user-images.githubusercontent.com/70772803/229959103-48a7a608-5ff0-4f0c-a1a7-c895cdc97a29.png)

