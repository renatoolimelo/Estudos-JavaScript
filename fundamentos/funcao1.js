// Função sem retorno
function imprimirSoma(numero1, numero2) {
    console.log(numero1 + numero2)
}

imprimirSoma(5, 4)
imprimirSoma(2) //retorna not a number
imprimirSoma(1,2,3,4,5,6,7,8) //usará os dois primeiros digitos
imprimirSoma() //retorna not a number

// Função com retorno
function soma(numero1, numero2 = 0){
    return numero1 + numero2
}

console.log(soma(2,3))
console.log(soma(2)) //usa o valor padrão da variável
console.log(soma())//retorna not a number