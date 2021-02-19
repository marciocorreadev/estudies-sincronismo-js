"use strict";
let _async = require('async');

class Usuario {
    retornarUsuarioBanco1(callback) {
        return callback(null, { 'nome': 'Márcio Corrêa' });
    }

    retornarUsuarioBanco2(callback) {
        setTimeout(() => {
            return callback(null, { 'nome': 'Zina da Silva' });
        }, 2000);
    }

    retornarUsuarioBanco3(callback) {
        setTimeout(() => {
            return callback(null, { 'nome': 'Xuxa de Souza' });
        }, 1000);
    }
}

let usuario = new Usuario();
_async.series([
    usuario.retornarUsuarioBanco2,
    usuario.retornarUsuarioBanco1,
    usuario.retornarUsuarioBanco3
], (erros, resultados) => console.log(erros || resultados));


let usuario2 = new Usuario();
_async.parallel([
    usuario2.retornarUsuarioBanco2,
    usuario2.retornarUsuarioBanco1,
    usuario2.retornarUsuarioBanco3
], (erros, resultados) => {
    console.log(erros || resultados);
});