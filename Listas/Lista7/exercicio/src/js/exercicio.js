var produtos = [

    {
    nome: "Produto 1",
    descricao: "Produto Profissional!",
    imagem: "https://via.placeholder.com/150",
    valor: "R$ 479.99"
    },
    {
    nome: "Produto 2",
    descricao: "Produto usado em treinos!",
    imagem: "https://via.placeholder.com/150",
    valor: "R$ 249,99"
    },
    {
    nome: "Produto 3",
    descricao: "Produto Amador!",
    imagem: "https://via.placeholder.com/150",
    valor: "R$ 139.99"
    },
    {
    nome: "Produto 4",
    descricao: "Produto Semi-Profissional!",
    imagem: "https://via.placeholder.com/150",
    valor: "R$ 248.99"
    },
    {
    nome: "Produto 5",
    descricao: "Produto Sem Validade!",
    imagem: "https://via.placeholder.com/150",
    valor: "R$ 345.99"
    },
    {
    nome: "Produto 6",
    descricao: "Produto Semi-Usado!",
    imagem: "https://via.placeholder.com/150",
    valor: "R$ 26.99"
    },
    {
    nome: "Produto 7",
    descricao: "Produto Zerado!",
    imagem: "https://via.placeholder.com/150",
    valor: "R$ 147.99"
    },
    {
    nome: "Produto 8",
    descricao: "Produto Anatômico!",
    imagem: "https://via.placeholder.com/150",
    valor: "R$ 210.99"
    },
    {
    nome: "Produto 9",
    descricao: "Produto para uso Infantil!",
    imagem: "https://via.placeholder.com/150",
    valor: "R$ 247.99"
    },
    {
    nome: "Produto 10",
    descricao: "Produto para traduzir brainly!",
    imagem: "https://via.placeholder.com/150",
    valor: "R$ 24.99"
    },
    {
    nome: "Produto 11",
    descricao: "Produto para uso Adulto!",
    imagem: "https://via.placeholder.com/150",
    valor: "R$ 28.99"
    },
    {
    nome: "Produto 12",
    descricao: "Produto Velho!",
    imagem: "https://via.placeholder.com/150",
    valor: "R$ 248.99"
    },
];

var conteudoPrincipal = document.getElementById('conteudo-principal');

for (var produto of produtos) {
    
    var conteudoProduto = document.createElement('div')
    conteudoProduto.className = "conteudo-produto"
    
    var nomeProduto = document.createElement('h2')
    nomeProduto.textContent = produto.nome
    conteudoProduto.appendChild(nomeProduto)

    
    var imagem = document.createElement('img')
    imagem.src = produto.imagem
    conteudoProduto.appendChild(imagem)
    
    var descricaoProduto = document.createElement('p')
    descricaoProduto.textContent = produto.descricao
    conteudoProduto.appendChild(descricaoProduto)

    var valorProduto = document.createElement('p')
    valorProduto.textContent = produto.valor
    conteudoProduto.appendChild(valorProduto)
 
 
    var botoes = document.createElement('div')
    botoes.className = "btn"
    conteudoProduto.appendChild(botoes)
 
    var botaoComprar = document.createElement('button')
    botaoComprar.textContent = "Comprar"
    botoes.appendChild(botaoComprar)
 
 
    conteudoProduto.appendChild(botoes)
 
    conteudoPrincipal.appendChild(conteudoProduto)
 }