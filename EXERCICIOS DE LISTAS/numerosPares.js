/* Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50; */

const numeros = [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    if(numero %2 === 0){
        console.log(numero)
    }    
}

