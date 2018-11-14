const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) //valor indefinido por não existe indice 4 no array

valores[4] = 10
console.log(valores)

console.log(valores.length) //Mostra a quantidade de itens dentro do array

valores.push({ id: 3 }, false, null, 'teste') //Array pode mesclar variaveis mas é uma pessima pratica
console.log(valores)

console.log(valores.pop()) //deleta último valor do array
delete valores[0] //deleta o valor selecionado do array
console.log(valores)

valores[10] = 100
console.log(valores) //Reconhece os valores intermediarios como vazio

console.log(typeof valores)