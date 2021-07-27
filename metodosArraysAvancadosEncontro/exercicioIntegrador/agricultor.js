let produtos = [
  {nome: 'Banana', precoCompra: 3.00, precoVendido: 3.75 ,qtdVendida: 10},
  {nome: 'Mamão', precoCompra: 2.50, precoVendido: 3.12 ,qtdVendida: 5},
  {nome: 'Abacate', precoCompra: 4.50, precoVendido: 5.62 ,qtdVendida: 3},
  {nome: 'Maracujá', precoCompra: 1.50, precoVendido: 2.50 ,qtdVendida: 7},
];

//Calcula o lucro do produto
function calcularLucro(produto) {
  const lucro = (produto.precoVendido - produto.precoCompra) * produto.qtdVendida;
    return {
      nomeProduto: produto.nome,
      lucroTotal: lucro.toFixed(2)
    }
}

//Calcula o lucro de todos os produto
function calcularLucroDeTodosProdutos(produtos) {
  return produtos.map(produto => {
    return calcularLucro(produto)
  })
}
console.log(calcularLucroDeTodosProdutos(produtos))

//Pesquisa por um produto e calcular seu lucro. OPCIONAL(inserir um novo valor ao produto).
function pesquisarProduto(nomeProduto, novoValor){
  const produto = produtos.find(produto => produto.nome == nomeProduto);

  if(!produto) return 'Infelizmente o produto não foi encontrado!';

  if(!novoValor) return calcularLucro(produto)
  
  produto.precoVendido = novoValor

  return {
    produto: produto.nome,
    novoValor: produto.precoVendido
  }
}
console.log(pesquisarProduto('Maracujá'));

//Filtrar quais produtos venderam acima de X quantidade
function quantidadeVendida(quantidade){
  const produto = produtos.filter(produto => produto.qtdVendida > quantidade);

  if(produto.length >= 1){
    return produto.map(produto => {
      return {
        nome: produto.nome,
        qtdVendida: produto.qtdVendida
      }
    })
  }

  return 'Nenhum produto vendeu mais que essa quantidade: ' + quantidade
}
console.log(quantidadeVendida(6));

//Calcula o lucro liquido 
function impostos() {
  const lucroProdutos = calcularLucroDeTodosProdutos(produtos);

  const lucroBruto = lucroProdutos.reduce((acumulador, produto) => {
    return acumulador += parseFloat(produto.lucroTotal)
  }, 0)

  const lucroLiquido =  lucroBruto - (lucroBruto * 0.45);
  return 'Seu lucro total é de ' + lucroLiquido.toFixed(2);
}

console.log(impostos());

