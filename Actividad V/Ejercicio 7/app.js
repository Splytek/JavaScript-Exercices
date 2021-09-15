/* Escribir un programa que solicite al usuario una letra y, si es una vocal, muestre el mensaje “es vocal”. Se debe validar que 
el usuario ingrese sólo un carácter. Si ingresa un string de más de un carácter, informarle que no se puede procesar el dato.*/

var isAlpha = function(ch){
    ch.toLowerCase();
    if(ch.length === 1 && /[A-Za-z]/.test(ch)){
      if(ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u"){
        document.getElementById("Ejercicio_7").innerHTML = "Es vocal"; 
      } else{
        document.getElementById("Ejercicio_7").innerHTML = "No es vocal"; 
      } 
    } else {
        document.getElementById("Ejercicio_7").innerHTML = "No se puede procesar el dato"; 
    }
}

var letra = prompt("Escribe solo una letra");

isAlpha(letra);

