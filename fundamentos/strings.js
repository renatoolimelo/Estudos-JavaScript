const escola = "Cod3r"

console.log(escola.charAt(4)) //retorna o caractere da palavra sempre sendo a primeira 0
console.log(escola.charAt(5)) //js não vai retornar erro
console.log(escola.charCodeAt(3)) //retorna o valor da letra na tabela Unicode
//retorna a posição do caractere na String sempre sendo a primeira 0
console.log(escola.indexOf('d'))
console.log(escola.substring(1)) //Começa a mostrar a String através de um caractere definido
console.log(escola.substring(1,3)) //Mostra aonde começa e aonde termina a leiutra da String

console.log('Escola '.concat(escola).concat('!')) //Concatenar as Strings e variaveis
console.log('Escola ' + escola +'!') //Outro concatenar
console.log(escola.replace(3,'e')) //Trocar a letra de uma determinada posição na String

console.log('Ana,Maria,Pedro'.split(',')) //Usa um determinado valor para separar a String