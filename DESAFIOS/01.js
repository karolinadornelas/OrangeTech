/* Faça um programa para caucular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:

1 - Preço Etanol;
2 - Preço Gasolina;
3 - Tipo de combustível que está no carro;
4 - Gasto medio de combustível do carro por Km;
5 - Distancia em Km da viagem;

*/

const precoEtanol = 5.79;
const precoGasolina = 4.99;
const tipoCombustivel = 'Gasolina';
const gastoPorKM = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / gastoPorKM;

if (tipoCombustivel === 'Etanol') {
    const totalGasto = litrosConsumidos * precoEtanol;
  console.log(totalGasto.toFixed(2));
} else {
    const totalGasto = litrosConsumidos * precoGasolina;
  console.log(totalGasto.toFixed(2));
}
