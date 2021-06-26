db.clientes.insertMany([
    {
        nombres: "Angel",
        apellidos: "Jaime",
        domicilio: {
            calle: "Polonia",
            numero: "345",
            colonia: "Oceanía",
            ciudad: "Saltillo",
            estado: "Coahuila",
            codigo_postal: "50000"
        },
        contacto: {
            telefono: "844-206-66-69",
            email: "ajaime@test.com"
        }
    },
    {
        nombres: "Karla",
        apellidos: "Berlanga",
        domicilio: {
            calle: "Francisco Cerda",
            numero: "387",
            colonia: "Arteaga Centro",
            ciudad: "Arteaga",
            estado: "Coahuila",
            codigo_postal: "50001"
        },
        contacto: {
            telefono: "844-444-55-66",
            email: "kberlanga@test.com"
        }
    },
    {
        nombres: "César",
        apellidos: "Zavala",
        domicilio: {
            calle: "Puerto Tamaulipas",
            numero: "828",
            colonia: "Bonanza",
            ciudad: "Saltillo",
            estado: "Coahuila",
            codigo_postal: "50002"
        },
        contacto: {
            telefono: "844-111-22-33",
            email: "cjaime@test.com"
        }
    }
])

db.maestros.insertOne({
    nombre: "Brenda",
    apellido: "Rodríguez",
    titulo: "Dr.",
    grados: [
        "licenciatura",
        "maestría",
        "doctorado",
    ]
})

db.maestros.updateOne(
    {
        _id : ObjectId("60d1373234b9550bff028221")
    },
    {
        $set: {
            grados: ["licenciatura", "maestría"]
        }
    }
)

db.maestros.find({
    $or: [
        {nombres: "Angel"},
        {grados: {$in: ["doctorado"]}}
    ]
})

db.servicios.insertMany([
    {
        nombre: "DJ",
        costo: 1000
    },
    {
        nombre: "Seguridad",
        costo: 100
    },
    {
        nombre: "Valet Parking",
        costo: 1000
    },
    {
        nombre: "Mariachi",
        costo: 5000
    }
])

db.contratos.insertMany([
    {
        folio: "A1",
        cliente_id: ObjectId("60d1339d34b9550bff02821e"),
        fecha_contrato: ISODate("2021-06-20T10:00:15.171Z"),
        fecha_evento: ISODate("2021-07-10T15:00:00.171Z"),
        festejados: ["luis marines"],
        piñata: "mariachi",
        pastel: "toy story",
        observaciones: "prueba",
        servicios: [
            {
                nombre: "Mariachi",
                costo: 5000
            },
            {
                nombre: "Valet Parking",
                costo: 1000
            },
        ]
    },
    {
        folio: "A2",
        cliente_id: ObjectId("60d1339d34b9550bff02821f"),
        fecha_contrato: ISODate("2021-06-20T10:00:15.171Z"),
        fecha_evento: ISODate("2022-01-15T15:00:00.171Z"),
        festejados: ["juanita pérez", "adalberto lópez"],
        piñata: "blue demon",
        pastel: "buscando a nemo",
        observaciones: "prueba 2",
        servicios: [
            {
                nombre: "Seguridad",
                costo: 100
            }
        ]
    }
])

db.servicios.updateOne(
    {
        nombre: "Seguridad"
    },
    {
        $set: {
            nombre: "Cuerpos de Seguridad",
            costo: 500
        }
    }
)

db.servicios.update(
    {
        _id: ObjectId("60d3bb30f748d2e5af4d3f11")
    },
    {
        $set: {
            nombre: "Pastel",
            costo: 200
        }
    },
    {
        upsert: true
    }
)

db.maestros.updateOne(
    {
        _id : ObjectId("60d1373234b9550bff028221")
    },
    {
        $pull: {
            grados: "licenciatura"
        }
    }
)

db.maestros.updateOne(
    {
        _id : ObjectId("60d1373234b9550bff028221")
    },
    {
        $push: {
            grados: {
                $each: ["licenciatura"],
                $position: 0
            }
        }
    }
)

db.alumnos.insertMany([
    {
        nombre: "Luis",
        domicilio: {
            calle: "Hidalgo",
            numero: 123,
            colonia: "Centro"
        }
    },
    {
        nombre: "Juan",
        domicilio: {
            calle: "Hidalgo",
            numero: 333,
            colonia: "Centro"
        }
    },
    {
        nombre: "Maria",
        domicilio: {
            calle: "Carranza",
            numero: 111,
            colonia: "Republica"
        }
    }
])

db.alumnos.insertOne({
    nombre: "Sergio",
    domicilio: {
        calle: "Aldama",
        numero: 669,
        colonia: "Centro"
    }
})

db.alumnos.find({ "domicilio.calle": { $not: /H/ } })
db.alumnos.find({ $nor: [{"domicilio.calle": { $regex: /h/i }}] })
db.alumnos.find({ $nor: [{ "domicilio.calle": { $regex: /h/i }}, { "domicilio.colonia": { $ne: "Centro" } }] })
db.alumnos.find({ $where: function() { return this.domicilio.colonia == "Centro" } })

db.servicios.insert({
    nombre: "Show de Luces",
    costo: 300
})

db.servicios.deleteOne({ nombre: "Show de Luces" })

db.personas.insertMany([
    { "_id": ObjectId("5063114bd386d8fadbd6b004"), "nombre": "angel", "apellido": "jaime", "edad": 28 },
    { "_id": ObjectId("5063114bd386d8fadbd6b005"), "nombre": "karla", "apellido": "berlanga", "edad": 23 },
    { "_id": ObjectId("5063114bd386d8fadbd6b006"), "nombre": "lupita", "apellido": "jaime", "edad": 24 },
    { "_id": ObjectId("5063114bd386d8fadbd6b007"), "nombre": "yisus", "apellido": "rodríguez", "edad": 24 }
])

db.personas.createIndex({nombre: 1}, {
    collation: {
        locale: "es",
        strength: 1
    }
})

db.personas.find({nombre: "Angel"})
db.personas.find({nombre: "Angel"}).collation({ locale: "es", strength: 1 })

db.personas.createIndex({
    nombre: "text",
    apellido: "text"
})

db.personas.find({
    $text: {
        $search: "Karla",
        $caseSensitive: false
    }
})

db.alumnos.drop()

db.createCollection("alumnos", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["matricula", "nombre"],
            properties: {
                matricula: {
                    bsonType: "number",
                    description: "Matrícula del alumno"
                },
                nombre: {
                    bsonType: "string",
                    description: "Nombre del alumno"
                }
            }
        }
    }
})

db.alumnos.insertMany([
    {
        matricula: 17041266,
        nombre: "Luis",
        carrera: "ISC",
        sexo: "M",
        domicilio: {
            calle: "Hidalgo",
            numero: 123,
            colonia: "Centro"
        }
    },
    {
        matricula: 17041267,
        nombre: "Juan",
        carrera: "IEC",
        sexo: "M",
        domicilio: {
            calle: "Hidalgo",
            numero: 333,
            colonia: "Centro"
        }
    },
    {
        matricula: 17041268,
        nombre: "Maria",
        carrera: "IIS",
        sexo: "F",
        domicilio: {
            calle: "Carranza",
            numero: 111,
            colonia: "Republica"
        }
    },
    {
        matricula: 17041269,
        nombre: "Sergio",
        carrera: "ISC",
        sexo: "M",
        domicilio: {
            calle: "Aldama",
            numero: 669,
            colonia: "Centro"
        }
    },
    {
        matricula: 17041270,
        nombre: "María",
        carrera: "ITIC",
        sexo: "F",
        domicilio: {
            calle: "Gonzalitoz",
            numero: 1029,
            colonia: "Cumbres"
        }
    }
])

db.createView("vistaMasculinos", "alumnos", [
    {
        $match: {
            sexo: "M"
        }
    }
])

db.alumnos.aggregate([
    {
        "$match": {
            $and: [
                { sexo: "F" },
                { carrera: "ISC" },
                { edad: { $gte: 23 } },
                { edad: { $lte: 28 } }
            ]
        }
    }
])

db.estados.insertMany([
    {
        _id: 1,
        nombre: "Coahuila"
    },
    {
        _id: 2,
        nombre: "Zacatecas"
    },
    {
        _id: 3,
        nombre: "CDMX"
    },
    {
        _id: 4,
        nombre: "Yucatán"
    },
    {
        _id: 5,
        nombre: "Chihuahua"
    }
])

db.ciudades.insertMany([
    {
        nombre: "Saltillo",
        id_estado: 1
    },
    {
        nombre: "Piedras Negras",
        id_estado: 1
    },
    {
        nombre: "Arteaga",
        id_estado: 1
    },
    {
        nombre: "Zacatecas",
        id_estado: 2
    },
    {
        nombre: "Concha del Oro",
        id_estado: 2
    },
    {
        nombre: "Azcapotzalco",
        id_estado: 3
    },
    {
        nombre: "Álvaro Obregón",
        id_estado: 3
    },
    {
        nombre: "Mérida",
        id_estado: 4
    },
    {
        nombre: "Chihuahua",
        id_estado: 5
    },
    {
        nombre: "Ciudad Juárez",
        id_estado: 5
    }
])

db.ciudades.aggregate([
    {
        $lookup: {
            from: "estados",
            localField: "id_estado",
            foreignField: "_id",
            as: "ciudad_estado"
        }
    },
    {
        $project: {
            nombre_ciudad: "$nombre",
            nombre_estado: {
                $arrayElemAt: ["$ciudad_estado.nombre", 0]
            }
        }
    }
])