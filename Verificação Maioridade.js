function idadeJS() {
    let numeroJS = 15;

    document.getElementById('numero-js').innerHTML = `<strong>Idade inserida no JavaScript:</strong> ${numeroJS}`;
    let resultado = document.getElementById('validacao-js');

    validar(numeroJS, resultado);
}

function idadeUsuario() {
    let numeroUsuario = document.getElementById('numero-usuario').value;

    let resultado = document.getElementById('validacao-usuario');

    validar(numeroUsuario, resultado);    
}

function validar(numero, resultado) {
    if(numero < 18 && numero >= 0) {
        resultado.innerHTML = `A idade de ${numero} anos é considerada menor de idade.`;
    } else if (numero >= 18) {
        resultado.innerHTML = `A idade de ${numero} anos é considerada maior de idade.`;
    } else {
        resultado.innerHTML = `A idade de ${numero} anos é inválida.`;
    }
}

