/* 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes. */

const prompt = require('prompt-sync')()

console.log('############ BEGIN ############')
let num = prompt('Digite um número: ')
num = num.replace(',','.')
num = Number(num).toFixed(0)
for (let i = 1; i <= 10; i++) {
    console.log(`${num}`)   
}
console.log('############# END #############')