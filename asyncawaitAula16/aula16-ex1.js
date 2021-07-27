//promise.all / promise.race
//frete empresa1
const p1=new Promise(function(resolve,reject){
    setTimeout(resolve,2000,'p1: frete 100');
})
//frete empresa2
const p2=new Promise((resolve,reject)=>{
    setTimeout(resolve,1500,'p2: frete 500');
})

//consumindo as promises
//promise.all 
//retorna somente quando todas as promises forem executadas
Promise.all([p1,p2]).then(function(value){
    console.log('Todas as promises foram executadas',value);

}).catch()

//retorna a primeira promise que foi executada e encerrada
// Promise.race([p1,p2]).then (function(value) {
//     console.log('A empresa mais rápida foi: ',value);
// })