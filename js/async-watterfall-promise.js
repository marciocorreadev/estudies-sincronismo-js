"use strict";
let async = require('async');

class Usuario {
    retornarDadosUsuario(callback) {
        return callback(null, { 'nome': 'Márcio Corrêa' });
    }

    retornarTelefone(usuario, callback) {
        setTimeout(() => {
            usuario.telefone = { 'numero': 40028922 };
            return callback(null, usuario);
        }, 2000);
    }

    retornarVeiculo(usuario, callback) {
        setTimeout(() => {
            usuario.veiculo = { 'carro': 'Fuscão Turbo' };
            return callback(null, usuario);
        }, 1000);
    }
}

let usuario = new Usuario();
async.waterfall([
    usuario.retornarDadosUsuario,
    usuario.retornarTelefone,
    usuario.retornarVeiculo

], (erros, resultados) => {
    console.log(erros || resultados);
});