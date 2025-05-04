/* 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for. */

let numA = 0, numB = 1, numC
let geral = ''

for(let i = 0; i <= 10; i++){
    geral += numA + ' '
    geral += numB + ' '
    numC = numA + numB
    numA = numC
    numB += numA
}
console.log('-----------------------------------------------------------------------------')
console.log(`Sequência de Fibonacci, os 10 primeiros números:\n[ ${geral}]`)
console.log('-----------------------------------------------------------------------------')