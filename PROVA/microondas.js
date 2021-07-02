let tempoPrato = {  
    pipoca: 10,
    macarrao: 8,
    carne: 15,
    feijao: 12,
    brigadeiro: 8,
  };
  
  function microondas(prato, tempoMicroondas) {
    let tempoPreparo = tempoPrato[prato];

    if (tempoMicroondas >=3*tempoPreparo) {
        return "KABUMMM!!!";
      } else if (tempoMicroondas >=2*tempoPreparo) {
        return "Comida queimada!";
      } else if (tempoMicroondas <tempoPreparo) {
        return "Tempo insuficiente";
      } else if (prato!== 'pipoca' && prato!=='macarrao' && prato!=='carne' && prato!=='feijao'&& prato!=='brigadeiro')  {
        return "Prato inexistente!!!";
      } else {
        return "Prato pronto, bom apetite!!!";
      }
    }console.log(microondas("pipoca",10));