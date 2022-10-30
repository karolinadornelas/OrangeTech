/* Fazer um programa que indique se o número informado é PAR ou ÍMPAR*/

const numero = 5;
const numeroPar = (numero % 2) === 0;

if (numeroPar) {
    console.log ('PAR');
} else {
    console.log ('IMPAR');
}
