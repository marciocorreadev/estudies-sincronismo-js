"use strict";

function retornarDadosUsuario() {
    return new Promise((resolve, reject) => resolve({ 'nome': 'Márcio Corrêa', 'id': 10 }))
};

function retornarEndereco(usuario) {
    return new Promise((resolve, reject) => {
        usuario.endereco = [{ 'userId': usuario.id, 'descricao': 'Sem nome, 1' }];
        return resolve(usuario);
    });
};
function retornarTelefone(usuario) {
    return new Promise((resolve, reject) => {
        usuario.telefone = [{ 'userId': usuario.id, 'numero': '(11) 9999-9999' }];
        return resolve(usuario);
    });
};

function retornarVeiculo(usuario) {
    return new Promise((resolve, reject) => {
        usuario.veiculo = { 'userId': usuario.id, 'descricao': 'Opala Turbo' };
        return resolve(usuario);
    });
};


retornarDadosUsuario()
    .then(retornarEndereco)
    .then(retornarTelefone)
    .then(retornarVeiculo)
    .then(
        resultados => console.log(`
                                Usuario: ${resultados.nome},
                                Endereco: ${resultados.endereco[0].descricao}
                                Telefone: ${resultados.telefone[0].numero}
                                Veiculo: ${resultados.veiculo.descricao}
                        `),
        error => console.log
    )