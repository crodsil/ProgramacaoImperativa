//até hoje fazíamos assim ....
// function somaNum() {
//     //síncrono
//     let result = 1+1;
//     if (result==2) {
//         sucessoCallback();
//     }
//     else {
//         erroCallback();
//     }
// }

// function sucessoCallback() {
//     console.log("Ok - número 2!!!");
// }

// function erroCallback() {
//     console.log("Erro não é o número 2!!!");
// }

// somaNum();

//TRANSFORMANDO A FUNÇÃO ACIMA EM PROMISE
//Criando a estrutura da promise
const p = new Promise ((resolve,reject)=>{
    let result = 1+1;
    if (result==2) {
        resolve('Ok - número 2!!!');
    }
    else {
        reject('Erro não é o número 2!!!');
    }
})

//utilizando (consumindo) a promise
p.then(message=>console.log(message)).catch(err=>console.log(err));