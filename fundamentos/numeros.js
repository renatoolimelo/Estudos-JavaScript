const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(typeof peso1, typeof peso2)
console.log(Number.isInteger(peso1)) //Verificar se é um valor inteiro
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = (avaliacao1 * peso1) + (avaliacao2 * peso2)
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))//Quantidade de casas decimais desejada.
console.log(Number.isInteger(media))

console.log(media.toString()) //Passar número para String
console.log(media.toString(2)) //Transforma número em binario
console.log(typeof media)
console.log(typeof Number)
//Number N maiusculo e função number n minusculo é tipo da variável