let Promise = require('bluebird');

function retornaDadosUsuario(callback) {
    return callback(null, { nome: 'Erick Wendel', id: 10 });
};

let retornaDadosUsuarioAsync = Promise.promisify(retornaDadosUsuario);
retornaDadosUsuarioAsync().then(console.log);