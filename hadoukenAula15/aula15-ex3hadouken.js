//callback hell

// function teste(a,b,c,d) {
//     if (a===1){
//         if (b===1) {
//             if (c===1) {
//                 if (d===1) {
//                     console.log('Ok');
//                 }
//                 else {
//                     console.log('Erro em d');
//                 }
//             }
//             else {
//                 console.log('Erro em c');
//             }
//         }
//         else {
//             console.log('Erro em b');
//         }
//     }
//     else {
//         console.log('Erro em a');
//         }
//     }

// teste(1,2,1,1);


// refatorando para tirar a complexidade
//técnica inverter o if para reduzir o aninhamento 

function teste(a,b,c,d) {
    if (a!==1){
        console.log('Erro em a');
        return;
    }
    if (b!==1) {
        console.log('Erro em b');
        return;
    }
    if (c!==1) {
        console.log('Erro em c');
        return;
    }
    if (d!==1) {
        console.log('Erro em d');
        return;
    }
    console.log('Ok');
}

teste(10,1,1,2);
