//ler o arquivo json
//fs
const fs= require('fs');

let dadosLidosJson= fs.readFileSync('./dados.json','utf-8');
// console.log(dadosLidosJson);

let dadosLidosObjeto=JSON.parse(dadosLidosJson);
// console.log(dadosLidosObjeto);

console.log("Funcionário: ",dadosLidosObjeto[1].funcionario.toUpperCase(),"\nIdade: ",dadosLidosObjeto[1].idade);