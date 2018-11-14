// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa // criando novas variáveis
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa // com true a informação não retorna undefined
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

const { endereco } = pessoa
console.log(endereco)