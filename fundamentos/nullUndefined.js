let valor //undefined por não ter sido inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)
//console.log(valor.toString()) - não pode usar toString em uma variável null

const produto = {}
console.log(produto.preco) //undenined objeto já declarado
console.log(produto)

produto.preco = 3.5
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)