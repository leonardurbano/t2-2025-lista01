/* 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente. */

const prompt = require('prompt-sync')()

let numA, numB, validador = true

console.log('##### ORDENAÇÃO DE NUMEROS #####')

numA = prompt('Informe o 1º Número: ')
numB = prompt('Informe o 2º Número: ')

while(validador){
    if(numB == numA){
        console.log('>>Número idêntico, tente novamente.')
        numB = prompt('Informe o 2º Número: ')
    }else{
        validador = false
    }
}

if(numA < numB){
    console.log(`Ordenando números: [${numA}, ${numB}]`)
}else{
    console.log(`Ordenando números: [${numB}, ${numA}]`)
}

console.log('---------------------------------')