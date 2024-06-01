var tarefas = ['Lavar roupa', 'Lavar louca', 'Lavar banheiro', 'Lavar qiuntal', 'dar banho no cachorro']


for (var indice = 0; indice < tarefas.length; indice++) {
    console.log([indice])
}

for (var tarefa of tarefas) {
    console.log(tarefa)
}

tarefas.forEach(tarefa => {
    console.log(tarefa)
})