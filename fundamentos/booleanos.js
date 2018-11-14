let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //Duas exclamações tornam verdadeiro, uma falso

/*
  (!true) = falso
  (!!true) = verdadeiro
  (!false) = verdadeiro
  (!!false) = falso
 */

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' ')) //correto por ter um valor verdadeiro
console.log('' || null || 0 || 'certo') //retorna o primeiro valor verdadeiro
console.log('' || null || 0 || 'teste' || 'certo') //retorna o primeiro valor verdadeiro

let nome = ''
let nome2 = 'Renato'
console.log(nome || 'Desconhecido') //Aparece desconhecido por ser falso
console.log(nome2 || 'Desconhecido') //Aparece o nome por ser valor válido