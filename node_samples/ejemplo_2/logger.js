var url = 'http://mylogger.io/log';

function log(mensaje) {
    console.log(mensaje);
}

module.exports.log = log;
module.exports.endPoint = url;