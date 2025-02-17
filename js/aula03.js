// let numeroSorteado = parseInt(Math.random()*100)
// let numeroSorteado2 = parseInt(Math.random()*100)
// console.log(`numero sorteado = ${numeroSorteado}`)

// if(numeroSorteado % 2 === 0){
//     console.log('O número é par')
// }else {
//     console.log('O número é impar')
// }

// let proximoNumero = numeroSorteado+1
// let anteriorNumero = numeroSorteado -1
// console.log(`Próximo número = ${proximoNumero}`)
// console.log(`Número anterior = ${anteriorNumero}`)


// numeroSorteado++
// console.log (`Nv número = ${numeroSorteado}`)

// numeroSorteado--
// console.log (`Nv número = ${numeroSorteado}`)

// numeroSorteado+=10
// console.log (`Nv número = ${numeroSorteado}`)

// numeroSorteado-=10
// console.log (`Nv número = ${numeroSorteado}`)

// // sortear dois numeros exibir o mais deles

// console.log(numeroSorteado, numeroSorteado2);

// if (numeroSorteado > numeroSorteado2){
//     console.log(`Maior numero = ${numeroSorteado}`);
    
// }else if(numeroSorteado2 > numeroSorteado) {
//     console.log(`Maior numero = ${numeroSorteado2}`);
    
// }else{
//     console.log(`os numeros são iguais`);
    
// }

 let valor = parseInt(Math.random()*10001)
 let rendimento = 0
 let  valorTotal= 0
if (valor <2001){
 rendimento = valor * 0.05
 valorTotal = valor + rendimento
}
else if (valor <4001){
    rendimento = valor * 0.10
    valorTotal = valor + rendimento
   }
   else if (valor <6001){
    rendimento = valor * 0.15
    valorTotal = valor + rendimento
   }
   else if (valor <8001){
    rendimento = valor * 0.20
    valorTotal = valor + rendimento
   }
    else{
    rendimento = valor * 0.25
    valorTotal = valor + rendimento
   }

   console.log (`Valor inicial = ${valor.toFixed(2)}`)
   console.log(`valor do rendimento= ${rendimento.toFixed(2)}`)
   console.log(`valor Total = ${valorTotal.toFixed(2)}`)