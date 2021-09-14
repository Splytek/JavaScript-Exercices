/* Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos 
números son iguales. */

const numero = (num1, num2) => num1 < num2 ? `${num1} es menor` : `${num2} es menor`;

var x = parseInt(prompt("Digita el primer digito: "));
var y = parseInt(prompt("Digita el numero digito: "));

result = numero(x, y);
document.getElementById("Ejercicio_2").innerHTML = result;