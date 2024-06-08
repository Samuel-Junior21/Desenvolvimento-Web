var numero1 = document.getElementById('n1')
var numero2 = document.getElementById('n2')

function compararValores() {
    if (Number(numero1.value) === Number(numero2.value)) {
        console.log(true)
        alert('Os valores são iguais!');
    } else {
        console.log(false)
        alert('Os valores são diferentes!');  
    }

    
}

// -------------------------------------------------------------//

function Somar() {
   var resultado = Number(numero1.value) + Number(numero2.value)
    alert(`O resultado é: ${resultado}`);
}

var res = document.getElementById('resultado')
res.textContent = resultado;

