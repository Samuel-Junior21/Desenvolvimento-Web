// Objetos literais em Javascript

//var pessoa = ['Fulano', 10, 'Rua XPTO', 30, 'Analista', 'Maria']

var pessoa = {

    nome: "Fulano",
    idade: 10,
    endereco: 'Rua XPTO',
    numeroCasa: 30,
    cargo: 'Analista', 
    conjuge: 'Maria',
    ehMaiorIdade: true,
    telefone: ["11934345454", "11935350808", "1140028922"],
    filhos: [
        {
            nome: "Joaozinho",
            idade:10
        },
        {
            nome: "Luizinha",
            idade: 5
        }
    ],
}

console.log(pessoa)