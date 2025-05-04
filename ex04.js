/* 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada. */

const prompt = require('prompt-sync')()

let opcao
let notaA = 5.5 , notaB = 6.0, notaC = 7.1

console.log('##################################################')

do{
    console.log('## Quiz ##\nTemos os alunos A, B e C com notas 5.5, 6.0 e 7.1\nrespectivamente, escolha uma das alternativas;')
    console.log('-------------------------------------------------')
    console.log('>> Digite \'1\' - Para saber a média das notas;')
    console.log('>> Digite \'2\' - Para saber a maior nota;')
    console.log('>> Digite \'3\' - Para saber a menor nota;')
    console.log('>> Digite \'0\' - Para SAIR;')
    console.log('#################################################')
    opcao = prompt('Opção escolhida..: ')
    
    switch (opcao) {
        case '1': console.log('Resposta: A MEDIA entre as notas é', soma(notaA, notaB, notaC).toFixed(1))
        console.log('#################################################')
        break
        case '2': console.log('Resposta: A MAIOR nota é', maior(notaA, notaB, notaC).toFixed(1))
        console.log('#################################################')
        break
        case '3': console.log('Resposta: A MENOR nota é', menor(notaA, notaB, notaC).toFixed(1) )
        console.log('#################################################')
        break
        case '0': console.log('Programa encerrado...')
        break
        default: console.log('Opção inválida, tente novamente!!!')
        console.log('#################################################')
        break
    }
}while(opcao !== '0')




//--------- BEGIN---FUNCTION
function soma(notaA, notaB, notaC){
    return (notaA + notaB + notaC)/3;
}
function maior(notaA, notaB, notaC){
    if(notaA > notaB && notaA > notaC){
        return notaA
    }else if(notaB > notaC){
        return notaB
    }else{
        return notaC
    }
}
function menor(notaA, notaB, notaC){
    if(notaA < notaB && notaA < notaC){
        return notaA
    }else if(notaB < notaC){
        return notaB
    }else{
        return notaC
    }
}
//--------- END---FUNCTION