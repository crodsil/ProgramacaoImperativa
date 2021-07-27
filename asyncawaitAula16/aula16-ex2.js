//promise 1
function f1(x) {
    return new Promise(resolve=>{
        //setTimeout(()=>...)
        setTimeout(_=> resolve (77+x),1000);  //retornou 87
    })
}
//promise 2
function f2(x) {    //x=87
    return new Promise(resolve=>{
        setTimeout(_=> resolve(22+x),1000);  // 109
    })
}
//promise 3
function f3(x) {
    return new Promise(resolve=> {
        setTimeout(_=> resolve(14*x),1000);  //1526
    })
}

//consumindo as promises - MUITO COMPLEXO
f1(10).then(x=>{
    console.log('Olá');
    return f2(x);
}).then(y=>{
    console.log('Javascript');
    return f3(y);
}).then (result=>console.log(result));