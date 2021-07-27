//promises - utilizado para operações assíncronas
//promessa - utilizada para fazer "crescer" para baixo (evitar o hadouken)
// pending: Estado inicial (pendente), ainda não foi realizada, nem rejeitada
// fulfilled: Houve sucesso na operação, a Promise está realizada.
// rejected: Houve rejeição na operação da Promise.
// settled: A Promise foi realizada ou rejeitada.

//sintaxe
const fs = require('fs');

//promise é um construtor - instanciado (new)
//estrutura da promise
const lerArquivo=file=>new Promise((resolve,reject)=>{
    fs.readFile(file,(err,contents)=> {
        if (err) {
            reject(err);
        }
        else {
            resolve(String(contents));
        }
    })
})


//consumir (utilizar,executar) a promise
//leia o arquivo de letras
lerArquivo('./letras.txt').then(contents=>{
    console.log(contents);
    lerArquivo('./nomes.txt').then(contents=>{
        console.log(contents);
        lerArquivo('./salarios.txt').then(contents=>{
            console.log(contents);
        }).catch(err=>console.log('Erro no arq.salários: ',err));
    }).catch(err=>console.log('Erro no arq.nomes: ',err));
}).catch(err=>console.log('Erro na leitura do arq. letras',err));

