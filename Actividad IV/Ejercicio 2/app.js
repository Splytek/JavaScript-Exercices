/* Ejercicio 2 recibir dos números en una función e imprimir cual es mayor que el otro */

//ARROW FUNCTIONS
const numero = (x, y) => x > y ? `${x} es mayor` : `${y} es mayor`;

var x = parseInt(prompt("Digita el primer numero: "));
var y = parseInt(prompt("Digita el segundo numero: "));

resultado = numero(x, y);

document.getElementById("numberL").innerHTML = resultado;