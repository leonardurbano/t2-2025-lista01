/* 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else. */

const prompt = require('prompt-sync')()

let idade = prompt("Digite uma idade: ")

if(idade > 0 && idade <= 11){
    console.log('Categoria: CRIANÇA')
}else if(idade > 11 && idade < 18){
    console.log('Categoria: ADOLECENTE')
}else if(idade > 17 && idade <= 60){
    console.log('Categoria: ADULTO')
}else if(idade > 60){
    console.log('Categoria: IDOSO')
}else{
    console.log('Erro ao informar idade.')
}


