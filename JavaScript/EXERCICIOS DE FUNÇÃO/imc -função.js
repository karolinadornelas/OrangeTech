function calcularImc(peso, altura){
    return peso / (altura * altura)
}

function classificarImc(IMC){
    if (IMC < 18.5){
        return ('Abaixo do peso')
    }else if (IMC >=18.5 && IMC <=25) {
        return  ('Peso normal')
    }else if (IMC >=25 && IMC <=30){
        return ('Acima do peso')
    }else if (IMC >=30 && IMC <=40){
        return ('Obeso')
    }else if (IMC >40){
        return ('Obesidade Grave')
    }
}

function main(){
    const peso = 52;
    const altura = 1.59;
    const IMC = calcularImc(peso, altura);
    console.log (classificarImc(IMC))

}
main()

