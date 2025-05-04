/* 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra. */

const prompt = require('prompt-sync')()

console.log('##### TABELA PROMOCIONAL DAS FRUTAS #####')

let quantMacas = prompt('Informe a quantidade de Maças: ')

let valorNormal = (quantMacas * 0.3).toFixed(2);
let valorPromocao = (quantMacas * 0.25).toFixed(2)
let desconto = quantMacas >= 12 ? true : false

if(desconto){
    console.log('Valor a pagar R$', valorPromocao)
    console.log('-----------------------------------------')
    console.log('Desconto aplicado: R$ ' + (valorNormal - valorPromocao).toFixed(2))
}else{
    console.log('Valor a pagar R$', valorNormal)
}

console.log('#########################################')