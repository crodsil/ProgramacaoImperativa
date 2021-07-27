function Restaurant(name, menu) {
  this.name = name;
  this.menu = menu;
  this.entrada = function() {
    return 'Olá bem-vindo ao restaurante '+ this.name + ' este é o nosso cardapio '+ this.menu;
  };
}

let response = new Restaurant('Fogo de Chão', ['Arroz', 'Feijão', 'Batata']);
console.log(response.entrada());