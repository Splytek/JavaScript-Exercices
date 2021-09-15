/* Hacer un programa que permita saber si un año es bisiesto. Para que un año sea bisiesto debe ser divisible por 4 y no debe 
   ser divisible por 100, excepto que también sea divisible por 400. */

   const anioBisiesto = (anio) => {
     if((anio%4 === 0 && anio%100!=0) || anio%400 === 0){
         document.getElementById("Ejercicio_8").innerHTML = "Es bisiesto " + anio; 
     } else {
         document.getElementById("Ejercicio_8").innerHTML = "No es bisiesto " + anio;
     }
   }

   var anio = parseInt(prompt("Escribe el anio a consultar: "));
   anioBisiesto(anio);