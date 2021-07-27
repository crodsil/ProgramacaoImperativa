//vamos ler assincronamente 3 arq.
const fs= require('fs');

console.log(1);
fs.readFile('./letras.txt',(err,contents)=>{
    fs.readFile('./nomes.txt',(err1,contents1)=>{
        fs.readFile('./salarios.txt',(err2,contents2)=> {
            console.log(4);
            //imprimir o conteúdo letras.txt
            console.log('Letras.txt: ',String(contents));
            console.log('Erro em letras.txt: ',err);
            //imprimir o conteúdo nomes.txt
            console.log('Nomes.txt: ',String(contents1));
            console.log('Erro em nomes.txt: ',err1);
            //imprimir o conteúdo salarios.txt
            console.log('Salarios.txt: ',String(contents2));
            console.log('Erro em salarios.txt: ',err2);

        })
    })
})
console.log(2);
console.log(3);