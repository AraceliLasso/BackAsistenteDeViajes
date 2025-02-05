#ASISTENTE DE VIAJES

  Objetivo Principal

Crear un bot que asista a los usuarios en la planificación de un viaje, proporcionando información básica y funcionalidades mínimas.


    Objetivos segmentados

1. Flujo Multi-Agente:

Implementar al menos 2 agentes que trabajen en conjunto.
Agente 1: Experto en destinos (sugerencias, lugares populares, etc.).
Agente 2: Especialista en equipaje y clima.

2. Funcionalidades del Bot:

* Búsqueda de destinos: Permite al usuario explorar destinos con detalles básicos (nombre, ubicación, y una descripción breve).
* Sugerencias para empacar: Según el destino y la duración del viaje, el bot debe generar una lista básica de cosas para llevar.
* Consulta de clima: Obtener información del clima utilizando una API pública gratuita (por ejemplo, OpenWeatherMap) para el destino y la fecha proporcionados.

3. Manejo de Conversaciones:

* El bot debe ser capaz de gestionar hilos de conversación, permitiendo al usuario:
* Cambiar de tema (por ejemplo, de destinos a clima) sin perder el contexto.
Retomar un hilo anterior.

    Tecnologías y  librerías en consideración:

* TypeScript: Para todo el desarrollo.
* LangGraph: Para la lógica de agentes y flujos conversacionales.

    Exposición Local:

* Crea una ruta HTTP en Express.js donde se pueda probar el bot localmente.
Ejemplo: Un endpoint /api/chat que acepte un input JSON simulando una conversación y devuelva una respuesta.




    MUY EXTRA
*Integración con APIs de Vuelos o Alojamiento:
Busca vuelos u hoteles en el destino usando una API externa (como Skyscanner, Amadeus o Booking).
*Personalización del Presupuesto:
Permite al usuario ingresar un presupuesto y sugiere actividades o lugares dentro de ese rango.
*Planificación Avanzada:
Crea un itinerario diario básico para el usuario, considerando el destino y la duración del viaje.
