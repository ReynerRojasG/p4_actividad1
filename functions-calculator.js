document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("sumForm").addEventListener("submit", function (event) {
        event.preventDefault();
        calc();
    });
});

function calc() {
    let num1 = parseFloat(document.getElementById("num1").value) || 0;
    let num2 = parseFloat(document.getElementById("num2").value) || 0;
    let operacion = document.getElementById("operacion").value;
    let resultado = 0;

    switch (operacion) {
        case "sumar":
            resultado = sum(num1, num2);
            break;
        case "restar":
            resultado = restar(num1, num2);
            break;
        case "multiplicar":
            resultado = multiplicar(num1, num2);
            break;
        case "dividir":
            resultado = dividir(num1, num2);
            break;
        default:
            resultado = "Operación no válida";
    }

    document.getElementById("resultado").textContent = resultado;
}

function sum(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return b !== 0 ? (a / b).toFixed(2) : "Error: División por 0";
}


