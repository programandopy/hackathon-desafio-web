# Desafío: Guía Turística Interactiva de Encarnación

## Objetivo
Desarrollar una plataforma web full stack utilizando el stack MERN (MongoDB, Express.js, React.js, Node.js) que sirva como guía turística interactiva para la ciudad de Encarnación, Paraguay.

## Descripción del Problema
Encarnación, conocida como la "Perla del Sur", es una ciudad con gran potencial turístico. Sin embargo, muchos visitantes encuentran dificultades para descubrir todos los atractivos que ofrece la ciudad. Se necesita una solución tecnológica que permita a los turistas explorar Encarnación de manera eficiente y personalizada.

## Requerimientos Funcionales
1. **Autenticación de Usuarios**
   - Implementar un sistema de registro y login de usuarios. **El código para el login de usuario será proporcionado.

2. **Listado de Categorías**
   - En la pantalla de inicio, se deben listar las categorías de los lugares con el nombre y una imagen ilustrativa de los mismos. Estas categorías deben ser almacenadas previamente en la base de datos(por ejemplo: restaurantes, hoteles, atracciones, etc).

3. **Listado de Lugares**
    - Obtener y mostrar lugares de interés turístico de Encarnación de acuerdo a la categoría seleccionada en la pantalla principal, se debe mostrar el nombre y la imagen de cada lugar.
   - La lista de lugares y toda su información, incluyendo imágenes, deben ser extraídas de la API de Google Maps. Solo es necesario mostrar los primeros 20 resultados, no es necesaria la implementación de paginación.

4. **Detalles del Lugar**
   - Obtener y mostrar información detallada del lugar seleccionado por el usuario (esta información debe ser obtenida de la API de Google Maps). En esta pantalla se deben mostrar datos como, el nombre del lugar, una imagen, dirección, link de Google Maps.
   - Además, se debe mostrar el promedio de calificaciones de las reseñas añadidas por los usuarios de la aplicación, mostrando estrellas y el porcentaje de cada puntuación.
   - Crear un sistema de reseñas, este debe tener los siguientes campos, calificación (deben ser del 1 al 5), comentario y nombre de usuario (este debe ser el del usuario logueado). Esta información debe ser almacenada en la base de datos y ser utilizadas para implementar el punto anterior y el siguiente.
   - Mostrar un listado de las reseñas añadidas por los usuarios, solo se deben mostrar las reseñas del lugar que se muestra en pantalla y debe estar ordenada de las más reciente a las más antigua. Cada ítem del listado debe mostrar el nombre de usuario, la calificación con estrellas y el comentario.

5. **Armado de Itinerario**
   - Permitir al usuario crear y listar itinerarios.
   - Los itinerarios se componen por un listado de lugares con la hora, de manera agrupada por día.
   - La información de cada itinerario debe ser almacenada en la base de datos.

## Requerimientos Técnicos
1. **Backend**
   - Utilizar Node.js con Express.js para crear el servidor.
   - Implementar una base de datos MongoDB para almacenar información de usuarios, reseñas, itinerarios y categorías.
   - Crear APIs RESTful para la comunicación entre el frontend y el backend.
   - Manejar la autenticación de usuarios de forma segura.
   - Consumir la API de Google Maps desde el backend para obtener información necesaria de los lugares.

2. **Frontend**
   - Desarrollar la interfaz de usuario utilizando React.js.
   - Implementar un diseño intuitivo.
   - Utilizar bibliotecas de componentes de React para mejorar la interfaz de usuario (opcional).

3. **Integración**
   - Consumir las APIs del backend desde el frontend utilizando fetch o axios.
   - Implementar manejo de estados en el frontend para una experiencia de usuario fluida.

## Codigo Base:
1. **Frontend**
   - El proyecto cuenta con una estructura base de carpetas y el html no funcional de la ventana Login, ya configurado en el ruteador para abrirse por defecto al levantar el proyecto.
   - Cuenta con la configuración de:
     - Tailwind (Estilos Css)
     - Vite (Herramienta de compilación)
     - React Router (Librería para Navegación entre pantallas)
   - Instrucciones de instalación:
     - Clonar el proyecto del repositorio
     - Instalar las librerías con el comando “npm install”
     - Correr el proyecto con el comando “npm start”

2. **Backend**
    - Se proporciona un proyecto en Next.js con una base de código para el manejo de autenticación, creación y lista de usuarios, y la implementación de una de las API Text Search de Google Maps.
    - Proveeremos la API Key para la API de Google Maps.
    - La base de datos MongoBD puede ser ejecutada o se puede utilizar una instancia en la nube con MongoDB Cloud.
    - Para la instalación de dependencias se debe ejecutar el comando "npm install".
    - Para la ejecución del proyecto se debe ejecutar el comando "npm run dev".
    - El proyecto cuenta con un archivo .env donde se almacenan las variables de entorno necesarias para ejecutar el proyecto.
    - En la carpeta raíz de proyecto se encuentra una colección de postman con los endpoints del proyecto.
```
GOOGLE_MAPS_API_KEY=
MONGO_DB_URL=
``` 

## Documentación básica de Google Maps API
### Text Search (necesaria para listar los lugares por categoría)
Text Search muestra información sobre un conjunto de lugares en función de una cadena; por ejemplo, "pizza en Buenos Aires", "tiendas de zapatos cerca de Santiago" o "Calle principal 123". El servicio responde con una lista de lugares que coinciden con la cadena de texto y con cualquier sesgo de ubicación que se haya establecido.

Curl de la petición:
```
curl -X POST -d '{
  "textQuery" : "Spicy Vegetarian Food in Sydney, Australia"
}' \
-H 'Content-Type: application/json' -H 'X-Goog-Api-Key: API_KEY' \
-H 'X-Goog-FieldMask: places.displayName,places.formattedAddress,places.priceLevel' \
'https://places.googleapis.com/v1/places:searchText'
```
Text Search (nueva) muestra un objeto JSON como respuesta. En la respuesta, figura lo siguiente:
- El array places contiene todos los lugares que coinciden.
- Cada lugar del array está representado por un objeto Place. 
- El objeto Place contiene información detallada sobre un solo lugar.
- La FieldMask pasada en la solicitud especifica la lista de campos que se muestran en el objeto Place.

El objeto JSON completo tiene el siguiente formato:
```
{
  "places": [
    {
      object (Place)
    }
  ]
}
```

Parámetros obligatorios:

- FieldMask: Especifica la lista de campos que se debe mostrar en la respuesta; para ello, crea una máscara de campo de respuesta. Pasa la máscara de campo de respuesta al método mediante el encabezado HTTP X-Goog-FieldMask. No hay una lista predeterminada de los campos mostrados en la respuesta. Si omites la máscara de campo, el método mostrará un error.
  Especifíca uno o más de los siguientes campos: places.attributions, places.id, places.name, nextPageToken (para más información sobre los campos, mirar la sección de recursos).
```
X-Goog-FieldMask: places.displayName,places.formattedAddress,places.priceLevel
```
- textQuery: Es la cadena de texto en la que se busca, por ejemplo: "restaurante", "calle principal 123" o "mejor lugar para visitar en San Francisco". La API muestra posibles coincidencias en función de esta cadena y ordena los resultados según la relevancia percibida.
```
{
  "textQuery" : "Spicy Vegetarian Food in Sydney, Australia"
}
```

### Place Details (necesaria para obtener detalles de un lugar)
Una vez que tengas un ID de lugar, puedes solicitar más detalles sobre un establecimiento o un lugar de interés en particular si inicias una solicitud de Place Details. Una solicitud de Place Details (nuevo) muestra información más completa sobre el lugar indicado, como la dirección completa, el número de teléfono y las calificaciones y opiniones de los usuarios.

Curl de la petición:
```
curl -X GET -H 'Content-Type: application/json' \
-H "X-Goog-Api-Key: API_KEY" \
-H "X-Goog-FieldMask: id,displayName" \
https://places.googleapis.com/v1/places/ChIJj61dQgK6j4AR4GeTYWZsKWw
```

Place Details muestra un objeto JSON como respuesta. En la respuesta, figura lo siguiente:
   - La respuesta se representa con un objeto Place. El objeto Place contiene información detallada sobre el lugar.
   - La FieldMask pasada en la solicitud especifica la lista de campos que se muestran en el objeto Place.

El objeto JSON completo tiene el siguiente formato:
```
{
  "name": "places/ChIJkR8FdQNB0VQRm64T_lv1g1g",
  "id": "ChIJkR8FdQNB0VQRm64T_lv1g1g",
  "displayName": {
    "text": "Trinidad"
  }
  ...
}
```

Parámetros obligatorios:

   - FieldMask: Especifica la lista de campos que se debe mostrar en la respuesta; para ello, crea una máscara de campo de respuesta. Pasa la máscara de campo de respuesta al método mediante el encabezado HTTP X-Goog-FieldMask. No hay una lista predeterminada de los campos mostrados en la respuesta. Si omites la máscara de campo, el método mostrará un error.
     Especifíca uno o más de los siguientes campos: attributions, id, name, photos (para más información sobre los campos, mirar la sección de recursos). 
```
X-Goog-FieldMask: places.displayName,places.formattedAddress,places.priceLevel
```
   - placeId: Es un identificador textual que identifica un lugar de forma exclusiva y que se muestra a partir de Text Search.
```
https://places.googleapis.com/v1/places/ChIJj61dQgK6j4AR4GeTYWZsKWw
```

### Foto del lugar (necesaria para obtener fotos del lugar)
El servicio Place Photo es una API de solo lectura que te permite agregar contenido fotográfico de alta calidad a tu aplicación. El servicio Place Photos te brinda acceso a las millones de fotos almacenadas en la base de datos de Places.

Curl de la petición:
```
https://places.googleapis.com/v1/NAME/media?key=API_KEY&PARAMETERS
```

Se requieren los siguientes parámetros:
   - NAME contiene el nombre del recurso de la foto.
   - API_KEY contiene la clave de API.
   - PARAMETERS contiene el parámetro maxHeightPx, el parámetro maxWidthPx o ambos.
```
https://places.googleapis.com/v1/places/ChIJbeVYM8GVV5QR1Suorpbforo/photos/AUc7tXU5cR6HGOuPqcvC_DbvMaLIAcbN4ZMtOIqZN2oVT8e7FeNhLjG-fx9k2zkAW207ZUFv4I5wLME5-dxitaqgb3ADXbqIciUrsJMK-dxVHbAfTIRWHfRYpedyhliYt2XLn8AU0rdeKVhUfMtFxuOoWpDLIum55vpdwd9f/media?key=API_KEY&maxHeightPx=480&maxWidthPx=858
```


## Entregables
- Código fuente del proyecto (frontend y backend) en un repositorio GitHub.
- Instrucciones detalladas para la instalación y ejecución del proyecto.

# Recursos:

### Next.js
* [Documentación de Next.js](https://nextjs.org/docs)

### JWT
* [Documentación de jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

### MongoDB
* [Documentación de MongoDB](https://www.mongodb.com/docs/)

### Google Maps API
* [Text Search](https://developers.google.com/maps/documentation/places/web-service/text-search?hl=es-419)
* [Place Details](https://developers.google.com/maps/documentation/places/web-service/place-details?hl=es-419)
* [Foto del lugar](https://developers.google.com/maps/documentation/places/web-service/place-photos?hl=es-419)

## ¡Buena suerte a todos los participantes!
