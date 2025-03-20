document.addEventListener("DOMContentLoaded", function () {
    // calculadora basica
    if (document.getElementById("sumForm")) {
        document.getElementById("sumForm").addEventListener("submit", function (event) {
            event.preventDefault();
            calc();
        });
    }

     // calculadora de fracciones
     if (document.getElementById("fracForm")) {
        document.getElementById("fracForm").addEventListener("submit", function (event) {
            event.preventDefault();
            calcularFracciones();
        });
    }

    // conversor de unidades
    if (document.getElementById("conversorForm")) {
        document.getElementById("conversorForm").addEventListener("submit", function (event) {
            event.preventDefault();
            convertirUnidades();
        });

        // Cargar unidades para el conversor
        document.getElementById("tipoConversion").addEventListener("change", actualizarUnidades);
        actualizarUnidades();
    }

    // Calculadora de Interés Compuesto
    if (document.getElementById("interesForm")) {
        document.getElementById("interesForm").addEventListener("submit", function (event) {
            event.preventDefault();
            calcularInteres();         
        });
    }

    // Calculadora de Préstamos e Hipotecas
    if (document.getElementById("prestamoForm")) {
        document.getElementById("prestamoForm").addEventListener("submit", function (event) {
            event.preventDefault();
            calcularPrestamo();
        });
    }

    // Calculadora de Ahorro e Inversión
    if (document.getElementById("ahorroForm")) {
        document.getElementById("ahorroForm").addEventListener("submit", function (event) {
            event.preventDefault();
            calcularAhorro();
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
    // Calculadora de Ritmo Cardíaco Ideal
    if (document.getElementById("ritmoCardiacoForm")) {
        document.getElementById("ritmoCardiacoForm").addEventListener("submit", function(event) {
            event.preventDefault();
            calcularRitmoCardiaco()
        });
    }   
});

// Calcu básica
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


function calcularFracciones() {
    let num1 = parseInt(document.getElementById("num1Frac").value) || 0;
    let den1 = parseInt(document.getElementById("den1Frac").value) || 1;
    let num2 = parseInt(document.getElementById("num2Frac").value) || 0;
    let den2 = parseInt(document.getElementById("den2Frac").value) || 1;
    let operacion = document.getElementById("fracOperacion").value;

    let resultado;

    switch (operacion) {
        case "sumar":
            resultado = sumarFracciones(num1, den1, num2, den2);
            break;
        case "restar":
            resultado = restarFracciones(num1, den1, num2, den2);
            break;
        case "multiplicar":
            resultado = multiplicarFracciones(num1, den1, num2, den2);
            break;
        case "dividir":
            resultado = dividirFracciones(num1, den1, num2, den2);
            break;
        default:
            resultado = "Operación no válida";
    }

    document.getElementById("fracResultado").textContent = resultado;
}


function sumarFracciones(num1, den1, num2, den2) {
    let numerador = (num1 * den2) + (num2 * den1);
    let denominador = den1 * den2;
    return simplificarFraccion(numerador, denominador);
}


function restarFracciones(num1, den1, num2, den2) {
    let numerador = (num1 * den2) - (num2 * den1);
    let denominador = den1 * den2;
    return simplificarFraccion(numerador, denominador);
}


function multiplicarFracciones(num1, den1, num2, den2) {
    let numerador = num1 * num2;
    let denominador = den1 * den2;
    return simplificarFraccion(numerador, denominador);
}


function dividirFracciones(num1, den1, num2, den2) {
    let numerador = num1 * den2;
    let denominador = den1 * num2;
    return simplificarFraccion(numerador, denominador);
}


function simplificarFraccion(numerador, denominador) {
    let gcd = obtenerMCD(numerador, denominador); 
    numerador /= gcd;
    denominador /= gcd;
    
    if (denominador < 0) {
        numerador *= -1;
        denominador *= -1;
    }
    
    return numerador + "/" + denominador;
}


function obtenerMCD(a, b) {
    if (b === 0) {
        return a;
    }
    return obtenerMCD(b, a % b);
}

const unidades = {
    longitud: { metro: 1, kilometro: 0.001, centimetro: 100, milimetro: 1000, milla: 0.000621371, yarda: 1.09361, pie: 3.28084, pulgada: 39.3701 },
    masa: { kilogramo: 1, gramo: 1000, libra: 2.20462, onza: 35.274 },
    volumen: { litro: 1, mililitro: 1000, metroCubico: 0.001, galon: 0.264172, pinta: 2.11338 },
    temperatura: { celsius: "C", fahrenheit: "F", kelvin: "K" }
};

function actualizarUnidades() {
    const tipo = document.getElementById("tipoConversion").value;
    const unidadDesde = document.getElementById("unidadDesde");
    const unidadHasta = document.getElementById("unidadHasta");

    unidadDesde.innerHTML = "";
    unidadHasta.innerHTML = "";

    Object.keys(unidades[tipo]).forEach((unidad) => {
        let option = `<option value="${unidad}">${unidad.charAt(0).toUpperCase() + unidad.slice(1)}</option>`;
        unidadDesde.innerHTML += option;
        unidadHasta.innerHTML += option;
    });
}

function convertirUnidades() {
    let valor = parseFloat(document.getElementById("valor").value);
    let desde = document.getElementById("unidadDesde").value;
    let hasta = document.getElementById("unidadHasta").value;
    let tipo = document.getElementById("tipoConversion").value;
    let resultado;

    if (tipo === "temperatura") {
        if (desde === hasta) {
            resultado = valor;
        } else if (desde === "celsius") {
            resultado = hasta === "fahrenheit" ? (valor * 9/5) + 32 : valor + 273.15;
        } else if (desde === "fahrenheit") {
            resultado = hasta === "celsius" ? (valor - 32) * 5/9 : ((valor - 32) * 5/9) + 273.15;
        } else if (desde === "kelvin") {
            resultado = hasta === "celsius" ? valor - 273.15 : (valor - 273.15) * 9/5 + 32;
        }
    } else {
        resultado = valor * (unidades[tipo][hasta] / unidades[tipo][desde]);
    }

    document.getElementById("resultadoConversion").textContent = resultado.toFixed(4);
}


function calcularInteres() {
    let capital = parseFloat(document.getElementById("capital").value);
            let tasa = parseFloat(document.getElementById("tasa").value) / 100;
            let tiempo = parseFloat(document.getElementById("tiempo").value);
            let frecuencia = parseInt(document.getElementById("frecuencia").value);

            let montoFinal = capital * Math.pow((1 + tasa / frecuencia), (frecuencia * tiempo));
            
            document.getElementById("interesResultado").textContent = montoFinal.toFixed(2);
}

function calcularPrestamo() {
    let monto = parseFloat(document.getElementById("montoPrestamo").value);
    let tasaAnual = parseFloat(document.getElementById("tasaPrestamo").value) / 100;
    let plazo = parseFloat(document.getElementById("plazo").value);
    let frecuencia = parseInt(document.getElementById("frecuenciaPago").value);
    let tasaPeriodo = tasaAnual / frecuencia;
    let numPagos = plazo * frecuencia;

    let pagoMensual = (monto * tasaPeriodo) / (1 - Math.pow(1 + tasaPeriodo, -numPagos));

    document.getElementById("pagoMensual").textContent = pagoMensual.toFixed(2);
}

function calcularAhorro() {
    let ahorroInicial = parseFloat(document.getElementById("ahorroInicial").value);
    let aporteMensual = parseFloat(document.getElementById("aporteMensual").value);
    let tasaAhorro = parseFloat(document.getElementById("tasaAhorro").value) / 100;
    let tiempoAhorro = parseFloat(document.getElementById("tiempoAhorro").value);
    
    let totalAcumulado = ahorroInicial;
    for (let i = 0; i < tiempoAhorro * 12; i++) {
        totalAcumulado += aporteMensual;
        totalAcumulado *= (1 + tasaAhorro / 12);
    }

    document.getElementById("ahorroResultado").textContent = totalAcumulado.toFixed(2);
}    


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

function calcularRitmoCardiaco() {
    let edad = parseFloat(document.getElementById("edadRitmo").value);
    let frecuenciaMaxima = 220 - edad;
    let ritmoMin = frecuenciaMaxima * 0.5;
    let ritmoMax = frecuenciaMaxima * 0.85;

    document.getElementById("frecuenciaMaxima").textContent = frecuenciaMaxima;
    document.getElementById("ritmoMin").textContent = ritmoMin.toFixed(0);
    document.getElementById("ritmoMax").textContent = ritmoMax.toFixed(0);
}
