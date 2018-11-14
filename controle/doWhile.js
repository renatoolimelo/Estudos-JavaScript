function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0;
let i = 1;

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`O valor gerado foi ${opcao} - tentativa ${i}.`)
    i++;
}
while (opcao != -1)

console.log("Fim do programa!")