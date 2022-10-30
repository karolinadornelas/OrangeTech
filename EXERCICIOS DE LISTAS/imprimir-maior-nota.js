/*Dado uma lista com as notas tiradas pelos alunos.
imprima a maior nota.
Ex de lista de notas = [2, 7, 3, 8, 10, 4]*/

var notas = [2,7,3,8,10,4];
var maiorNota= notas[0];
for (var i = 0; i < notas.length; i++) {
    if (maiorNota < notas[i]){
        maiorNota = notas[i];
    }
}
console.log(maiorNota)
