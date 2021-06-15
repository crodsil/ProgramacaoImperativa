//Caso na string esteja escrito “Verão”, 
//deve exibir no console a mensagem: “Que calor hein?!”.

//Caso na string esteja escrito “Inverno”, 
//deve exibir no console a mensagem: “Frio dms!”.

//Caso na string esteja escrito “Outono”, 
//deve exibir no console a mensagem: “É a estação em que as folhas caem”.

//Caso na string esteja escrito “Primavera”, 
//deve exibir no console a mensagem: “O momento em que as flores crescem”.

//Caso não se aplique nenhuma das opções acima, 
//deve exibir no console a mensagem: “Ops, estação inválida”.


let estacao = "outono"

if(estacao == "verao") {
    console.log("Que calor hein?!")
}  else if(estacao == "inverno" ) {
    console.log("Frio demais!")
} else if(estacao == "outono") {
    console.log("É a estação em que as folhas caem")
} else if(estacao == "primavera") {
    console.log("O momento em que as flores crescem")
} else {
    console.log("Ops, estação inválida")
}