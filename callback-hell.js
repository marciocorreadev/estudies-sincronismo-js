"use strict";
class Usuario {

    retornarDadosUsuario(callback) {
        setTimeout(() => {
            return callback(null, { nome: 'Márcio Corrêa', id: 123 });
        });
    };

    retornarEndereco(idUser, callback) {
        setTimeout(() => {
            return callback(null, { 'rua': 'sem nome', idUser: idUser });
        });
    };

    retornarTelefone(idUser, callback) {
        setTimeout(() => {
            return callback(null, { 'numero': '123456789', idUser: idUser });
        });
    };

    retornarVeiculo(idUser, callback) {
        setTimeout(() => {
            return callback(null, { 'carro': 'HB20', idUser: idUser });
        });
    };
}


let usuario = new Usuario();
usuario.retornarDadosUsuario((erro, dadosUsuario) => {
    let id = dadosUsuario.id;
    usuario.retornarEndereco(id, function (erro, endereco) {
        usuario.retornarTelefone(id, function (erro, telefone) {
            usuario.retornarVeiculo(id, function (erro, veiculo) {
                let user = { nome: dadosUsuario.nome, endereco, telefone, veiculo };
                console.log(user);
            });
        });
    });
});