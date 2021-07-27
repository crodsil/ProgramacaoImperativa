//variável para forçar o erro em f1
let falhou=false;    //na função f1
let falhou2=true;    //na função f2
//promise 1
function f1(x) {
    return new Promise((resolve,reject)=>{
        if (!falhou) {
            //setTimeout(()=>...)
            setTimeout(_=> resolve (77+x),1000); } //retornou 87
        else {
            reject('f1 gerou erro!');
        }
    })
}
//promise 2
function f2(x) {    //x=87
    return new Promise((resolve,reject)=>{
        if (!falhou2) {
           setTimeout(_=> resolve(22+x),1000);  }// 109
        else {
           reject('f2 gerou erro!');
        }
    })
}
//promise 3
function f3(x) {
    return new Promise(resolve=> {
        setTimeout(_=> resolve(14*x),1000);  //1526
    })
}

//consumindo as promises
//async / await
//async  = função assíncrona ==> comporta-se como promise, não utiliza return
//await = função deve aguardar
//não vamos utilizar .then() / .catch() substituídos por try/catch
//try -> tentar
async function executar(num) {
    try {
        let numero = await f1(num);
        console.log(numero);   //87
        console.log('Olá');
        numero = await f2(numero);
        console.log(numero);   //109
        console.log('Javascript');
        numero = await f3(numero);   //1526
        console.log('Resultado: ',numero);
    }
    catch(err) {
        console.log("Erro: ",err);
    }

}

executar(10);

