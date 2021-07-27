//leitura de arquivos - síncrona - fs readFileSync()
const fs=require('fs');
// const arq= fs.readFileSync('./letras.txt','utf-8');
// console.log(arq);
// console.log(2);
// console.log(3);

//leitura assíncrona - fs  readFile()
console.log(1);                       //callback
const arq=fs.readFile('./letras.txt',(err,contents)=>{
    console.log(4);
    console.log('Conteúdo: ',String(contents));
    console.log('Erro: ',err);
    console.log(2) });
console.log(3);