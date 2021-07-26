const produtos = [
  {nome: 'Smart TV', preco: 1000, qualidade: 8, status: true},
  {nome: 'Notebook', preco: 3000, qualidade: 7, status: true},
  {nome: 'Geladeira', preco: 4000, qualidade: 5, status: true},
  {nome: 'Fogão', preco: 1500, qualidade: 7, status: true}
]

let carrinho = [];

function formatarPreco(preco){
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

function calcularTotal() {
  let total = carrinho.reduce((acumulador, produto) => {
    return acumulador += produto.preco;
  }, 0)

  return formatarPreco(total)
}

function filtrarProdutos(precoMinimo, precoMaximo, qualidade) {
  const filtroPrecos = filtrarPrecos(precoMinimo, precoMaximo, produtos);
  
  if(!filtroPrecos.length >= 1)
    return console.log('Nenhum produto se encaixa nessa faixa de preço '+precoMinimo+' à '+precoMaximo);
  
  const filtroQualidade = filtrarQualidade(produtos, qualidade);

  if(!filtroQualidade.length >= 1)
    return console.log('Nenhum produto tem a qualidade maior que '+(qualidade -1));

  const filtroStatus = filtrarStatus(produtos);

  if(!filtroStatus.length >= 1)
    return console.log('Nenhum produto em estoque');

  carrinho = filtroStatus;

  carrinho.forEach(produto => {
    console.log(produto.nome, formatarPreco(produto.preco));
  })
  console.log('TOTAL: ',calcularTotal());
}

function filtrarPrecos(minimo, maximo, produtos) {
  return produtos.filter(produto => {
    if(produto.preco >= minimo && produto.preco <= maximo) {
      return produto;
    }
  })
}

function filtrarQualidade(produtos, qualidade) {
  return produtos.filter(produto => produto.qualidade >= qualidade);
}

function filtrarStatus(produtos) {
  return produtos.filter(produto => produto.status === true);
}

filtrarProdutos(800, 3000, 5);