/*Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustivel.
Crie um metodo que dado a quantidade de km e o preço
do gasto em reais para realizar este percurso.
*/


class Carro {
    marca;
    cor;
    gastoMedioPorKM;

    constructor(marca, cor, gastoMedioPorKM){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKM = gastoMedioPorKM;
    }

calcularGastoPorPercurso(distanciaEmKm, precoCombustivel) {
    return distanciaEmKm * this.gastoMedioPorKM * precoCombustivel;
    }
}

const kwid = new Carro('Renault', 'Preto', 1/10);
console.log(kwid.calcularGastoPorPercurso(70/5))