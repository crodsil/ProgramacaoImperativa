//Após isso, crie duas funções: andar() – deve exibir uma mensagem dizendo 
//que o carro está andando – e parar() – deve exibir uma mensagem dizendo 
//que o carro parou.

//Execute ambas as ações utilizando a função acaoCarro(), 
//passando suas ações como callbacks.

const acaoCarro=(acaoCarro)=>acaoCarro();

const andarCarro=()=>console.log('O carro está andando');
const pararCarro=()=>console.log('O carro parou');

acaoCarro(andarCarro);  
acaoCarro(pararCarro);