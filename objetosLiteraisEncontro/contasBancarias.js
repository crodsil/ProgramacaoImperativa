function Conta(numeroDaConta, nomeDoTitular, saldo) {
  this.numeroDaConta = numeroDaConta;
  this.nomeDoTitular = nomeDoTitular;
  this.saldo = saldo;
  this.deposito = function(dinheiro) {
    this.saldo += dinheiro;

    console.log('Você realizou um deposito de '+ dinheiro + ' e agora o seu saldo é ' + this.saldo)
  };

  this.saque = function(dinheiro) {
    if(dinheiro > this.saldo) {
      console.log('Fundos insuficientes');
    } else {
      this.saldo -= dinheiro;
      console.log('Valor do seu saque é '+dinheiro+ ' e agora o seu saldo é '+ this.saldo);
    }
  }
}

let conta = new Conta(2, 'Rafael', 1000);
conta.deposito(200);
conta.saque(200);

let conta2 = {
  numeroDaConta: '222324',
  nomeDoTitular: 'Rafael Rodrigues',
  saldo: 0,
  deposito: function(dinheiro){
    this.saldo += dinheiro;

    console.log('Você realizou um deposito de '+ dinheiro + ' e agora o seu saldo é ' + this.saldo);
  },
  saque: function(dinheiro) {
    if(dinheiro > this.saldo) {
      console.log('Fundos insuficientes');
    } else {
      saldo -= dinheiro;
      console.log('Valor do seu saque é '+dinheiro+ ' e agora o seu saldo é '+ this.saldo);
    }
  }
}

conta2.saque(500)
conta2.deposito(1500)
