 /*Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".*/

var nomes = ['Kaneki', 'Kazehaya', 'Karolina', 'Yoshida', 'Vegeta'];
var nomesComV = nomes.filter(nome => nome.charAt(0) == "V" );
console.log(nomesComV);
