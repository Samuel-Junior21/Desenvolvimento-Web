//Arrays/Listas/Vetores
// Arrays se assemelham a um banco de dados
// Um array deve ser capaz de: Adicionar, Remover, Buscar/Listar, Atualizar

var nome = 'Fulano' // variavel simples

var nomes = ['Miguel', 'Mateus', 'Monica']
var idades = new Array()

console.log(nomes)
console.log(nomes[0]) // acessa posicao 0 - Miguel
console.log(nomes[1]) // acessa posicao 1 - Mateus
console.log(nomes[2]) // acessa posicao 2 - Monica

nomes.push('Davi' , 'Fulano' , 'Ciclano') // adiciona elemento no array

console.log(nomes) // imprime quando adicionar outro elemento

console.log(nomes.length) // Tamanho do Array

nomes.pop() // remove o último  elemento do array
console.log(nomes)

nomes.reverse() // inverte o array
console.log(nomes)

nomes.shift() // remove o primeiro elemento do array
console.log(nomes)
 

nomes.sort() // ordena o array
console.log(nomes)

nomes.push('Fulano')
console.log(nomes)

nomes.pop('Fulano')
console.log(nomes)

var posicaoFulano = nomes.indexOf('Fulano') // Busca por indice o elemento do parametro

nomes[posicaoFulano] = 'Ciclano'
console.log(nomes)

nomes.splice(posicaoFulano,1) // primeiro parametro é a posicao do item a ser removido, o segundo é a posicao do item que vai ser removido
console.log(nomes)

var array = [true, 'Teste', 10, undefined, , , , , 'teste2']

console.log(array)
console.log(array[1000])





