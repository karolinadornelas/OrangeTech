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
