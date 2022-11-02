/*Faça um programa que receba a média de um aluno.
// Caso a média seja < 5 imprima "Reprovado"
// Caso a média seja >= 5 e < 7 imprima "Recuperação"
// Caso a média seja >= 7 imprima "Aprovado"

//     Exemplo:
//         Entrada:
//             5.5
//         Saída:
//             Recuperação*/

var nota1 = 4;
var nota2 = 1;
var nota3 = 2;
var nota4 = 7;
var media = ((nota1 + nota2 + nota3 + nota4) / 4)

if(media <5){
    console.log('Reprovado')
}else if(media >=5 && media < 7) {
    console.log("Recuperação")
}else{
    console.log("Aprovado")
}
