# Curso MongoDB - Facultad de Sistemas

Assets de un curso de `MongoDB` impartido en la Facultad de Sistemas por el ingeniero Urbano Flores durante el semetre de Enero-Junio 2021.

## Clase 1

- No relacional
- Orientada a documentos
  - NoSQL, no se tiene el concepto de relacional
  - Flexible y adaptable
- Historia
  - Primera versión de
- Documentos tipo JSON (Javascript Object Notation)
  - Un documento es similar a un registro en la BD
- BSON (Binary JSON)
  - Serialización binario de documentos
  - Permite referencias
  - La estructura embebida de objetos reduce la necesidad de JOINS
  - Metas
    - Ligero
    - Eficiente
    - Traversable
- Consultas eficientes
- Indexado
- Replicación
- Balanceo
- Colecciones
  - Conjuntos de documentos
  - Similas a las tablas en SQL
- Comandos
  - `show dbs`: muestra las bases de datos
  - `use nombredb`: me permite cambiarme de base de datos
  - `db`: indica en que base de datos me encuentro
  - `db.createCollection("personas")`: crea una colección de manera explícita
  - `db.dropDatabase()`: borra una base de datos (hay que teclear `use` antes)
  - `show collections`: muestra las colecciones disponibles en la DB
  - `db.collection.insertOne()`: Inserta un documento en la colección (si la colección no existe entonces la crea)
  - `db.personas.find()`: Devuelvo todos los documentos en la colección
  - `db.personas.find().pretty()`: Devuelvo todos los documentos en la colección pero impresos de manera indentada
  - `db.createCollection("personas", {capped: true, size: 1000000, max: 5})`: colecciones de tamaño fijo
    - `size`: tamaño en bytes
    - `max`: número de documentos
  - `ObjectId`: identificador único del documento, se genera uno por cada "registro" de la colección
  - `db.collection.insertMany([...])`: Inserta múltiples documentos
  - ``
- Ejercicio: Salón de Fiestas
  - Entidades
    - Clientes
    - Contratos
    - Salones
    - Paquetes
    - Servicios
    - Transacciones
- Búsquedas
  - `.find({...})`: Pasar el criterio de búsqueda como JSON
  - Operadores de comparación
    - Sintáxis clásica `db.collection.find({campo: {$operator: "Valor"}})`
    - `$eq`: "Equals" o "igual a"
    - `$gt`: "Greater than" o "Mayor que"
    - `$gte`: "Greater than or equals" o "Mayor o igual que"
    - `$lt`: "Lower than" o "Menor que"
    - `$lte`: "Lower than or equals" o "Menor o igual que"
    - `$in`: "In" o "Entre"
    - `$nin`: "Not in" o "No entre"
  - Operadores lógicos
    - Permiten combinar varios criterios de búsqueda
    - Sintáxis clásica `db.collection.find({$or: [{$operator1: "Valor1"}, {$operator2: "Valor2"}]})`
    - `$or`: OR lógico
    - `$and`: AND lógico
    - `$not`: NOT lógico

## Clase 2

- Ordenamiento
- Proyecciones
- Limitar resultados
- Convertir a un array
- `count()` y `size()`
- `$elemMatch`
- Modelado de datos
  - Documentos referenciados
  - Documentos embebidos
- Modelado de datos
  - Relaciones 1-1, 1-Muchos, Muchos-Muchos
- Ejercicio: Salón de Fiestas
  - Entidades
    - Clientes
      - Campos
        - _id
        - nombres
        - apellidos
        - domicilio
          - calle
          - número
          - colonia
          - ciudad
          - estado
          - telefono
          - email
      - Relaciones
        - Tiene 0 o más contratos
    - Contratos
      - Relaciones
        - Tiene 1 salón
        - Tiene 0 o más paquetes
        - Tiene 0 o más servicios
        - Tiene 1 o más transacciones
    - Salones
    - Paquetes
      - Relaciones
        - Tiene 1 o más servicios
    - Servicios
      - Relaciones
        - Puede pertenecer a 0 o más contratos
    - Transacciones

## Clase 3

- Ejercicio: Salón de Fiestas
- Referencias
  - Manuales
  - DBRefs
    - No todos los drivers tienen soporte
- Eliminar documentos y colecciones
- Actualizar documentos
  - `$set`
  - `$unset`
- Operadores lógicos
- Documentos embebidos
  - Consultas a documentos embebidos
- Operador `$where`
- Índices

## Clase 4

- Tipos de Datos
  - BSON
  - ObjectId
  - Date
  - NumberInt
  - NumberLong
  - NumberDecimal
- Esquemas
  - Validaciones
- Vistas
- Agregaciones
- Expresiones Lógicas
- Agrupado
- Crear colecciones a partir de una consulta
- Joins
- Node
  - Instalación
  - Ejemplos básicos
  - Módulos
  - Servidor HTTP

## Clase 5

- NPM
  - Uso de paquetes
  - Instalación de paquetes
- Servicios REST
  - GET, POST, PUT, DELETE
- Paquetes
  - `express`: <https://www.npmjs.com/package/express>
  - `mongoose`: <https://www.npmjs.com/package/mongoose>
  - `cors`: <https://www.npmjs.com/package/cors>
  - `faker`: <https://www.npmjs.com/package/faker>
  - `dummy-json`: <https://www.npmjs.com/package/dummy-json>