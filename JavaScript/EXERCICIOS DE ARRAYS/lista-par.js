/*Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.*/

const numeros = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
for (let i = 0; i < numeros.length; i++) {
    const numerosPares = numeros[i];
    if(numerosPares %2 === 0){
        console.log(numerosPares);
    }
}
