document.addEventListener("DOMContentLoaded", function () {
    // calculadora basica
    if (document.getElementById("sumForm")) {
        document.getElementById("sumForm").addEventListener("submit", function (event) {
            event.preventDefault();
            calc();
        });
    }

    // calculadora IMC
    if (document.getElementById("imcForm")) {
        document.getElementById("imcForm").addEventListener("submit", function (event) {
            event.preventDefault();
            calcularIMC();
        });
    }
    // calorías
    if (document.getElementById("caloriasForm")) {
        document.getElementById("caloriasForm").addEventListener("submit", function (event) {
            event.preventDefault();
            calcularCalorias();
        });
    }
});

// calcu basica
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

// calculadora IMC
function calcularIMC() {
    let peso = parseFloat(document.getElementById("peso").value) || 0;
    let altura = parseFloat(document.getElementById("altura").value) || 1; // altura en cm

    if (peso === 0 || altura === 0) {
        document.getElementById("resultado").textContent = "Por favor ingresa valores válidos.";
        document.getElementById("clasificacion").textContent = "";
        return;
    }

    let alturaEnMetros = altura / 100;

    let imc = (peso / (alturaEnMetros * alturaEnMetros)).toFixed(2);
    document.getElementById("resultado").textContent = imc;
    document.getElementById("clasificacion").textContent = clasificarIMC(imc);
}

function clasificarIMC(imc) {
    if (imc < 18.5) return "Bajo peso";
    if (imc < 24.9) return "Peso normal";
    if (imc < 29.9) return "Sobrepeso";
    return "Obesidad";
}

// Calcular calorías
function calcularCalorias() {
    let genero = document.getElementById("genero").value;
    let edad = parseInt(document.getElementById("edad").value) || 0;
    let peso = parseFloat(document.getElementById("pesoCalorias").value) || 0;
    let altura = parseFloat(document.getElementById("alturaCalorias").value) || 0;
    let actividad = parseFloat(document.getElementById("actividad").value) || 1;

    if (genero === "" || edad <= 0 || peso <= 0 || altura <= 0 || actividad === 1) {
        document.getElementById("caloriasResultado").textContent = "Por favor ingresa todos los datos correctamente.";
        return;
    }

    let tmb = 0;
    if (genero === "masculino") {
        tmb = 88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * edad);
    } else if (genero === "femenino") {
        tmb = 447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * edad);
    }

    let caloriasDiarias = (tmb * actividad).toFixed(0);
    document.getElementById("caloriasResultado").textContent = caloriasDiarias;
}
