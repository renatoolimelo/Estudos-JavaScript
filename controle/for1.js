let contador = 1;

while (contador <= 10) {
    console.log(contador)
    contador++
}

console.log("Em for")

for (contador = 1; contador <= 10; contador++) {
    console.log(contador)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i = 0; i < notas.length; i++){
    console.log(`notas = ${notas[i]}`)
}