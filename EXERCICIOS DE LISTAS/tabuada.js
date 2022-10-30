/*Crie um programa que dado um número imprima a sua tabuada.*/

const tabuadaTres = [];

    for (let i = 0; i <= 31; i++) {
        const numeroDivisor = i % 3 === 0;
        if (numeroDivisor) {
            tabuadaTres.push(i);
        }
    }

    console.log(tabuadaTres);
