'use strict';

// Usando callback

class Usuario {
    retornarDadosUsuario(callback) {
        setTimeout(() => {
            return callback({ nome: 'Márcio Corrêa' })
        })
    }
}
let usuario = new Usuario().retornarDadosUsuario(console.log)

// Boas práticas em callbacks
//1. Use funções nomeadas como argumentos pata manipulação de callbacks

function retornarDadosUsuario(callback) {
    setTimeout(() => {
        callback({ nome: 'Márcio Corrêa' })
    });
}

function callbackDados(usuario) {
    console.log(usuario)
}

retornarDadosUsuario(callbackDados)

// 2. Envie parâmentos em callbacks, por convenção
// Em primeiro argumento será o erro, e no segundo o valor

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

// Ao fim da operação, sempre retorne a chamada da função de callback
// Isso evitará provlemas na continuação da aplicação 

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