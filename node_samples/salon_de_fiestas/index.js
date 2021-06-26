const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dummyjson = require('dummy-json');

const template = `{
    "users": [
        {{#repeat 2}}
        {
            "id": {{@index}},
            "name": "{{firstName}} {{lastName}}",
            "work": "{{company}}",
            "email": "{{email}}",
            "dob": "{{date '1900' '2000' 'YYYY'}}",
            "address": "{{int 1 100}} {{street}}",
            "city": "{{city}}",
            "optedin": {{boolean}}
        }
        {{/repeat}}
    ],
    "images": [
        {{#repeat 3}}
        "img{{@index}}.png"
        {{/repeat}}
    ],
    "coordinates": {
        "x": {{float -50 50 '0.00'}},
        "y": {{float -25 25 '0.00'}}
    },
    "price": "\${{int 0 99999 '0,0'}}"
}`;

// Create app server
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

// Connect to DB
mongoose.connect('mongodb://localhost:27017/salon_de_fiestas', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Conectado a MongoDB"))
    .catch(err => console.error("No se puede conectar", err));

// Get/create schema
const servicioSchema = new mongoose.Schema({
    nombre: String,
    costo: Number
})

// Get model
const Servicio = mongoose.model('Servicio', servicioSchema);

/************************
* Functions
************************/
async function getServicios() {
    return await Servicio.find();
}

async function getServicio(id) {
    return await Servicio.find({_id: id});
}

async function insertServicio(servicio) {
    return await servicio.save();
}

async function deleteServicio(id) {
    return await Servicio.deleteOne({_id: id});
}

async function updateServicio(id, body) {
    return await Servicio.updateOne({_id: id}, {
        $set: {
            nombre: body.nombre,
            costo: body.costo
        }
    });
}

/************************
* Routes
************************/
app.get('/api/random', async (req, res) => {
    res.set('Content-Type', 'application/json');
    res.status(200).send(dummyjson.parse(template));
});

app.get('/api/servicios', async (req, res) => {
    res.set('Content-Type', 'application/json');
    var resultado = await getServicios();
    res.status(200).send(resultado);
});

app.post('/api/servicios', async (req, res) => {
    res.set('Content-Type', 'application/json');
    const servicio = new Servicio({
        nombre: req.body.nombre,
        costo: req.body.costo
    })

    var resultado = await insertServicio(servicio);
    res.status(201).send(resultado);
});

app.get('/api/servicios/:id', async (req, res) => {
    res.set('Content-Type', 'application/json');
    var resultado = await getServicio(req.params.id);
    res.status(200).send(resultado);
});

app.delete('/api/servicios/:id', async (req, res) => {
    res.set('Content-Type', 'application/json');
    var resultado = await deleteServicio(req.params.id);
    res.status(204).send(resultado);
});

app.put('/api/servicios/:id', async (req, res) => {
    res.set('Content-Type', 'application/json');
    var resultado = await updateServicio(req.params.id, req.body);
    res.status(204).send(resultado);
});

app.listen(3000, () => console.log('Escuchando en el puerto 3000...'));