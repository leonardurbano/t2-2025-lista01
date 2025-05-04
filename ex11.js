/* 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for. */

const prompt = require('prompt-sync')()

let soma = 0

console.log('##### VAMOS SOMAR NÚMEROS ####')
for(let i = 1; i <= 5 ; i++){
    soma += Number(prompt(`Digite o ${i}º Número: `))
}
console.log('------------------------------')
console.log(`A soma dos número é ${soma}`)
