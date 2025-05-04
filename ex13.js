/* 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números. */

const prompt = require('prompt-sync')()

let num = 0.0, soma = 0.0, sequencial = 0

console.log('##### VAMOS SOMAR NÚMEROS ####')
console.log('Digite e precione \'ENTER\' ou')
console.log('Digite 0 (zero) para \'SAIR\'')
console.log('##############################')

do{
    num = Number(prompt())
    soma += num
    sequencial++
}while(num != 0)

console.log('------------------------------')
console.log(`A soma dos número é ${soma}`)