/* 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if. */

const prompt = require('prompt-sync')()

console.log('###### Classificação de Notas ######')
let nota = prompt('Digite sua nota entre (0.0 à 10.0): ')

if(nota >= 7.0){
    console.log('Aluno APROVADO')
}else if(nota < 7.0 && nota > 5.0){
    console.log('Aluno EM RECUPERAÇÃO')
}else{
    console.log('Aluno REPROVADO')
}