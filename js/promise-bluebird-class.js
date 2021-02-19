"use strict";
let Promise = require('bluebird');
class Usuario {

    retornaDadosUsuario(callback) {
        return callback(null, { nome: 'Márcio Corrêa', id: 10 });
    };

    retornaTelefone(usuario, callback) {
        usuario.telefone = { 'idUser': usuario.id, 'numero': '(11) 9999-8888' };
        return callback(null, usuario);
    };
}
let user = new Usuario();
Promise.promisifyAll(user);
user.retornaDadosUsuarioAsync()
    .then(user.retornaTelefoneAsync)
    .then(
        (resultado) => {
            let mensagem = `
                        Usuario: ${resultado.nome},
                        Telefone: ${resultado.telefone.numero}
                       `;
            console.log(mensagem);
        },
        (erro) => {
            console.log(`deu zica!! [ ${erro} ]`);
        }
    );