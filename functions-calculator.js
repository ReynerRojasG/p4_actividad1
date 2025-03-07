document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("sumForm").addEventListener("submit",function(event){
        event.preventDefault();
        sum();
    });

});


function sum(){
    console.log("sumarrrrrrrrrrrrrrr")
    let num1 = parseFloat(document.getElementById("num1").value) || 0;
    let num2 = parseFloat(document.getElementById("num2").value) || 0;
    let resultado = num1 + num2;
    document.getElementById("resultado").textContent = resultado;
}