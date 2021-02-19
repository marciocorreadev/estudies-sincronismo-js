"use strict";
//CallBack HELL
class Usuario {

    retornarDadosUsuario(callback) {
        setTimeout(() => {
            return callback(null, { nome: 'Erick Wendel', id: 123 });
        });
    };

    retornarEndereco(idUser, callback) {
        setTimeout(() => {
            return callback(null, { 'rua': 'dos bobos', idUser: idUser });
        });
    };

    retornarTelefone(idUser, callback) {
        setTimeout(() => {
            return callback(null, { 'numero': '123123123', idUser: idUser });
        });
    };

    retornarVeiculo(idUser, callback) {
        setTimeout(() => {
            return callback(null, { 'carro': 'Fuscao', idUser: idUser });
        });
    };
}



//chamada
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
/**
 * Saida
 * { nome: 'Erick Wendel',
  endereco: { rua: 'dos bobos', idUser: 123 },
  telefone: { numero: '123123123', idUser: 123 },
  veiculo: { carro: 'Fuscao', idUser: 123 } }
 */