/*Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;*/

function aplicarDesconto(desconto, valor){
    return (valor - (valor*(desconto/100)))
}

function aplicarJuros(valor, juros){
    return(valor =(valor(juros/100)))
}

const valorEtiqueta = 250;
const formaPagamento = 'C';

if(formaPagamento === 'A'){
    console.log(aplicarDesconto - (valorEtiqueta * 10))
}else if(formaPagamento === 'B'){
    console.log(aplicarDesconto - (valorEtiqueta * 15))
}else if (formaPagamento === 'C'){
    console.log(valorEtiqueta)
}else{
    console.log(aplicarJuros + (valorEtiqueta * 10))
}
