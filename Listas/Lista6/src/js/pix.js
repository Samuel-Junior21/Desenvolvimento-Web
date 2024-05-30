var pix = {
    chavePix: "(11) 4002-8922",
    valorTransferencia: 50.00,
    dataTransacao: '21/01/2024',
    descricaoPagamento: "Pagamento Uniforme",
    pagador: {
        nome: "Samuel Junior",
        rg: "12.456.789-0"
    },
    recebedor: {
        nome: "Victor Ferreira",
        rg: "98.765.432-1"
    },

    historicoTransacoes: [
        {
            data: "01/01/2024",
            valor: 206.39,
            descricao: "Conta de Água"
        },
        {
            data: "02/02/2024",
            valor: 150.18,
            descricao: "Conta de Luz"
        },
        {
            data: "02/02/2024",
            valor: 99.99,
            descricao: "Botijão de Gás"
        },
    ]
};

console.log(pix);