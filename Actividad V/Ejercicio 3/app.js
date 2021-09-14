/* Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. Considerar el caso en que ambos números 
son iguales. */

const numero = (n1, n2) => {
  if(n1 < n2){
    return `${n1} es menor`;
  } else if (n1 == n2 ){
    return `son iguales`;
  } else {
    return `${n2} es menor`;
  }
}

var numb1 = parseInt(prompt("Digita el primer digito: "));
var numb2 = parseInt(prompt("Digita el numero digito: "));

r_total = numero(numb1, numb2);
document.getElementById("Ejercicio_3").innerHTML = r_total;