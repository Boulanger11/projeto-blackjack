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
if (confirm(`Bem vindo ao jogo de BlackJack!
Quer iniciar uma nova rodada?`)){
      const userCard1 = comprarCarta()
      const userCard2 = comprarCarta()
      const pontuaçãoUser = userCard1.valor + userCard2.valor   
      
      const computerCard1 = comprarCarta()
      const computerCard2 = comprarCarta()
      const pontuaçãoComputer = computerCard1.valor + computerCard2.valor

      console.log(`Usuário - cartas: ${userCard1.texto} ${userCard2.texto} - pontuação ${pontuaçãoUser}`)
      console.log(`Computador - cartas: ${computerCard1.texto} ${computerCard2.texto} - pontuação ${pontuaçãoComputer}`)

if (pontuaçãoUser > pontuaçãoComputer){
   console.log(`Usuário VENCEU`)
} else if (pontuaçãoComputer > pontuaçãoUser) {
   console.log(`Computador VENCEU`)
} else {
   console.log(`EMPATE`)
}

} else {
   console.log(`O jogo acabou.`)
}