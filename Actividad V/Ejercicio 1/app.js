/* Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir "Ganaste un premio". */

const award = (x) => x === 1000 ? "Ganaste un premio" : "Vuelve a intentarlo";

var x = parseInt(prompt("Digita un numero: "));
resultado = award(x);

document.getElementById("Ejercicio_1").innerHTML = resultado;