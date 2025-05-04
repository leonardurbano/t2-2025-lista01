/* 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if. */

const prompt = require('prompt-sync')()

if(prompt('Digite um número: ') % 2 == 0){
    console.log("O número digitado é PAR")
}else{
    console.log("O número digitado é IMPAR")
}