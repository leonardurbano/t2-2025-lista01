/* Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.

    IMC < 18.5kg/m2: baixo peso.
    IMC > 18.5 até 24.9kg/m2: peso adequado.
    IMC ≥ 25 até 29.9kg/m2: sobrepeso.
    IMC de 30.0 até 34.9kg/m2: obesidade grau I.
    IMC de 35.0 até 39.9kg/m2: obesidade grau II.
    IMC ≥ 40.0kg/m2: obesidade grau III. 
    link da informação: https://nav.dasa.com.br/blog/calcular-imc/?utm_source=google&utm_medium=cpc&utm_campaign=G_250&utm_content=laboratorioexame&gad_source=1&gbraid=0AAAAACeu7VO9sAvqTLodu_voWXk9g3da_&gclid=Cj0KCQjw_dbABhC5ARIsAAh2Z-QO_wNx8BOWheHJvUt1BHPKAn8ipzK2f2xOdYhmUaFDyLwFu_yjhOQaAiwcEALw_wcB 
    
*/

const prompt = require("prompt-sync")()

let peso, altura, mensagem


console.log('########### CALCULADORA IMC ###########')
altura = prompt('Digite Altura em Metros: ')
altura = Number(altura.replace(",","."))
peso = prompt('Digite Peso em Kilogramas: ')
peso = Number(peso.replace(",","."))
console.log("#######################################")

let IMC = peso / (altura * altura)

if(IMC < 18.5){
    mensagem = '\'Baixo Peso\''
}else if(IMC > 18.5 && IMC <= 24.9){
    mensagem = '\'Peso Normal\''
}else if(IMC >=25 && IMC <= 29.9){
    mensagem = '\'Sobrepeso\''
}else{
    mensagem = '\'Obesidade\''
}

console.log(`Resultado: IMC de ${IMC.toFixed(1)}\nStatus:`, mensagem)
console.log("#######################################")







