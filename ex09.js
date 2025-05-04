/* 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
utilizando um loop for. */

const prompt = require('prompt-sync')()
let num = '';

console.log('######### CONTADOR REGRESSIVO ##########')

for (let i = 10; i >= 1; i--) {
    if(i != 1){
        num += i + ', '
    }else{
        num += i
    }
}

console.log(`Números: [${num}]`)
console.log('########################################')