// /*Promise All*/
"use strict";
function retornarUsuarioBanco1() {
    return new Promise((resolve, reject) => {
        const usuarioBancoOracle = { 'nome': 'Márcio Corrêa' };
        return resolve(usuarioBancoOracle);
    });
}

function retornarUsuarioBanco2() {
    return new Promise((resolve, reject) => {
        const usuarioBancoMySql = { 'nome': 'Zeca Urubu' };
        return resolve(usuarioBancoMySql);
    });
}

function retornarUsuarioBanco3() {
    return new Promise((resolve, reject) => {
        const usuarioBancoSqlServer = { 'nome': 'Zé love' };
        return resolve(usuarioBancoSqlServer);
    });
}

Promise.all([
    retornarUsuarioBanco1(),
    retornarUsuarioBanco2(),
    retornarUsuarioBanco3()
]).then(
    (resultados) => {

        let usuarioOracle = resultados[0];
        let usuarioMySql = resultados[1];
        let usuarioSqlServer = resultados[2];
        let mensagem = `
        Oracle: ${usuarioOracle.nome},
        MySQL: ${usuarioMySql.nome},
        SQLServer: ${usuarioSqlServer.nome}
        `;

        console.log(mensagem);
    },
    (erro) => {
        console.log(`deu zica!! [ ${erro} ]`);
    });