function imprimirNome (nome, fcb1, fcb2) {
    console.log(nome)

    fcb1()
    fcb2(imprimirSobrenome)
}

function imprimirSobrenome(sobrenome) {
    console.log(sobrenome)
}

imprimirSobrenome('Miguel',
     () =>{
    console.log('Ribeiro')
}, (cb) => {
    cb('teste')
})
