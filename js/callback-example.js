'use strict';

class Usuario {
    retornarDadosUsuario(callback) {
        setTimeout(() => {
            return callback({ nome: 'Márcio Corrêa' })
        })
    }
}
let usuario = new Usuario().retornarDadosUsuario(console.log)

function retornarDadosUsuario(callback) {
    setTimeout(() => {
        callback({ nome: 'Márcio Corrêa' })
    });
}

function callbackDados(usuario) {
    console.log(usuario)
}

retornarDadosUsuario(callbackDados)


function retornarDadosUsuario2(callback) {
    setTimeout(() => {
        try {
            callback(null, { nome: 'Márcio Corrêa' })
        } catch (error) {
            callback(new Error('Erro interno da aplicação'), null)
        }
    })
}

function callbackDados2(erro, resultados) {
    console.log(erro || resultados)
}

retornarDadosUsuario3(callbackDados3)
function retornarDadosUsuario3(callback) {
    setTimeout(() => {
        try {
            return callback(null, { nome: 'Márcio Corrêa' })
        } catch (error) {
            return callback(new Error('Erro interno da aplicação'), null)
        }
        callback(new Error('Erro interno da aplicação'), null)
    })
}

function callbackDados3(erro, resultados) {
    console.log(erro || resultados)
}

retornarDadosUsuario3(callbackDados3)