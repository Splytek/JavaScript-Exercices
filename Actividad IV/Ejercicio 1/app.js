/* Ejercicio 1 recibir cualquier edad en una función y validar si es mayor de edad o menor de edad */

//ARROW FUNCTION
const edad = (edad) => edad === 18 ? "Eres mayor de edad" : "Eres menor de edad"; 

age = parseInt(prompt("Dame tu edad?"));
var edadP = edad(age);

document.getElementById("ageUser").innerHTML = edadP; 