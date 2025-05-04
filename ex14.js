/* 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while. */

const prompt = require('prompt-sync')()

console.log('---------------------------------------------')
let fatorial = 1
let num = Number(prompt('Digite um número para calcular o fatorial: '))

for(let i = num; i >= 1; i--){
    fatorial *= i
}

console.log(`O fatorial de !${num} = `, fatorial)
console.log('---------------------------------------------')