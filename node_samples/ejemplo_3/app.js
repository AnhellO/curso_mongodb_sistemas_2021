const http = require('http');
const faker = require('faker');

faker.seed(123);

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hola');
        res.end();
    }
    
    if (req.url === '/api/lista') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
    
    if (req.url === '/api/random') {
        res.write(JSON.stringify(faker.datatype.json));
        res.end();
    }
});

server.listen(3000);
console.log('Escuchando en el puerto 3000...');