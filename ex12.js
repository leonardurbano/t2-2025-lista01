/* 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
10) utilizando um loop for. */

const prompt = require('prompt-sync')()
let num = prompt('>>>Digite um número para a listar a tabuada: ')

console.log('##### TABUADA #####')
for (let i = 1; i <= 10; i++) {
    console.log(` ${num}x${i} \t=`, num * i)
}
console.log('####### FIM #######')