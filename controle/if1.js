function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo() // undefinied falso
seForVerdadeEuFalo(null) //falso
seForVerdadeEuFalo(undefined) //falso
seForVerdadeEuFalo(NaN) //falso
seForVerdadeEuFalo('') // falso
seForVerdadeEuFalo(0) // falso
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})