/* Fazer um programa que indique se o número informado é PAR ou ÍMPAR*/

const numero = 5;
const numeroPar = (numero % 2) === 0;

if (numeroPar) {
    console.log ('PAR');
} else {
    console.log ('IMPAR');
}

/* Verificar as informações de username e password do usuário em uma estrutura condicional */

var username = "PandaBalofo";
var password = "123456";

if (username == "PandaBaolofo" && password == "123456") {
    console.log("Usuário autenticado");
} else {
    console.log("Login e/ou senha incorrretos");
}