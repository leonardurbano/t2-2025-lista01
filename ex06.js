/* 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.

    Isósceles: Se possui dois lados com a mesma medida.
    Equilátero: Se todos os seus lados têm a mesma medida.
    Escaleno: Se todos os seus lados têm medidas diferentes.


    Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
    Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
    Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
    Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)



*/

const prompt = require("prompt-sync")()

let triangulo, ladoA, ladoB, ladoC

console.log('##### INFORME O TAMANHO DOS LADOS DE UM TRIANGULO #####')
ladoA = prompt('Tamanho do Lado A: ')
ladoA = Number(ladoA.replace(',','.'))
ladoB = prompt('Tamanho do Lado B: ')
ladoB = Number(ladoB.replace(',','.'))
ladoC = prompt('Tamanho do Lado C: ')
ladoC = Number(ladoC.replace(',','.'))

if(ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB){
    if(ladoA == ladoB && ladoA == ladoC){
        triangulo = 'Equilátero'
    }else if(ladoB == ladoC || ladoA == ladoC){
        triangulo = 'Isósceles'
    }else{
        triangulo = 'Escaleno'
    }
    console.log('Com base nas dimensões: O Triangulo é', triangulo)
}else{
    console.log('Com base nas dimensões, não é um TRIANGULO')
}
