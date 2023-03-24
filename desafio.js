/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
    
   if(confirm(`Bem vindo ao jogo de BlackJack!
    Quer iniciar uma nova rodada?`)){

         
// INICIANDO O JOGO
let cartasUsuario = []
let cartasUsuario1 = comprarCarta()
cartasUsuario.push(cartasUsuario1.texto)
let cartasUsuario2 = comprarCarta()
cartasUsuario.push(cartasUsuario2.texto)

let pontuacaoUsuario = cartasUsuario1.valor + cartasUsuario2.valor

let cartasComputador = []
let cartasComputador1 = comprarCarta()
cartasComputador.push(cartasComputador1.texto)
let cartasComputador2 = comprarCarta()
cartasComputador.push(cartasComputador2.texto)
let pontuacaoComputador = cartasComputador1.valor + cartasComputador2.valor

cartasCompradas = ``

const resposta = confirm(`Suas cartas são ${cartasUsuario1.texto} ${cartasUsuario2.texto} - ${pontuacaoUsuario}. A carta revelada do computador é ${cartasComputador1.texto}.
Deseja comprar mais uma carta?`)

//COMPRAR CARTAS USUÁRIO
while(resposta === true){
   let novaCarta = comprarCarta()
   cartasUsuario.push(novaCarta.texto)
   for(let carta of cartasUsuario){
      cartasCompradas = cartasCompradas + carta + ` `
   }
   pontuacaoUsuario += novaCarta.valor

      /* confirm(`Suas cartas são ${cartasCompradas} - ${pontuacaoUsuario}. A carta revelada do computador é ${cartasComputador1.texto}.
Deseja comprar mais uma carta?`) */

// SE A CARTA DO USUÁRIO FOR SUPERIOR A 21 = DERROTA, OU SE FOR =21 É BLACKJACK
   if (pontuacaoUsuario > 21) {
   alert(`Suas cartas são ${cartasCompradas} - ${pontuacaoUsuario}. A carta revelada do computador é ${cartasComputador}. O computador venceu!`)
   resposta = false
   break
 } else if (pontuacaoUsuario === 21) {
   alert(`Suas cartas são ${cartasCompradas} - ${pontuacaoUsuario}. A carta revelada do computador é ${cartasComputador}. BlackJack! Você ganhou!`)
   resposta = false
   break
 }  
}
// BLACKJACK NATURAL
if (pontuacaoUsuario === 2 * "A") {
   alert("Fim do Jogo!")
}
// VEZ DO COMPUTADOR COMPRAR CARTAS
while (pontuacaoComputador < pontuacaoUsuario && pontuacaoUsuario <= 21) {
 let novaCarta = comprarCarta();
 cartasComputador.push(novaCarta.texto);
   for (let carta of cartasComputador){
      cartasCompradas = cartasCompradas + carta + ` `
   }
 pontuacaoComputador += novaCarta.valor;
 }

 // VERIFICANDO O VENCEDOR
 if (pontuacaoUsuario > 21) {
   alert(`Suas cartas são ${cartasCompradas} - ${pontuacaoUsuario}. A carta revelada do computador é ${cartasComputador}. Você perdeu! Sua pontuação foi superior à 21.`)
 } else if (pontuacaoComputador > 21) {
   alert(`Suas cartas são ${cartasCompradas} - ${pontuacaoUsuario}. As cartas do computador são ${cartasComputador}. A pontuação do computador foi superior à 21. Você ganhou!`)
 } else if (pontuacaoUsuario > pontuacaoComputador) {
   alert(`Suas cartas são ${cartasCompradas} - ${pontuacaoUsuario}. As cartas do computador são ${cartasComputador}. A pontuação do computador é ${pontuacaoComputador}. Você ganhou!`)
 } else if (pontuacaoUsuario < pontuacaoComputador) {
   alert(`Suas cartas são ${cartasCompradas} - ${pontuacaoUsuario}. As cartas do computador são ${cartasComputador}. A pontuação do computador é ${pontuacaoComputador}. Você perdeu!`)
 } else {
   alert(`Suas cartas são ${cartasCompradas} - ${pontuacaoUsuario}. As cartas do computador são ${cartasComputador}. A pontuação do computador é ${pontuacaoComputador}. Empate! As pontuações são iguais.`)
 }
  
 console.log(alert(`O jogo acabou!`))}   