let dadosObjeto={funcionario : "Joaquim Moreira",idade: 50, salario : 5850.90, valeTransporte : false, filiacao: ["Miguel","Rosa"]};
let dadosObjeto1={funcionario : "Miguel Pereira",idade: 40, salario : 15850.90, valeTransporte : false, filiacao: ["Maria","Jose"]};
//console.log(dadosObjeto);

//transformar objeto literal em json 
//serialização ->  JSON.stringify()
let arrayObjetos= [dadosObjeto,dadosObjeto1];
// console.log(arrayObjetos);
let arrayJson=JSON.stringify(arrayObjetos);
// console.log(arrayJson);
//array de objetos 
//console.log(dadosJson);

//síncrono
//file system  - biblioteca nativa 

const fs = require('fs');
fs.writeFileSync('./dados.json',arrayJson); //sobrescreve o conteúdo

