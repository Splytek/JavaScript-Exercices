/* 3.- crear una función que reciba dos números, entero 1 y entero 2, el entero 1 va a ser el multiplicando y el numero 
dos el multiplicador y al final se imprimirá la tabla de multiplicar. */

const tablaMult = (entero1, entero2) => {
  for(var i=0; i<10; i+=2){
    r = entero1 *= entero2;
    document.write(`${entero1} x ${i} = ${r} </br>`);
  }
}

var num1 = parseInt(prompt("Escribe le multiplicando: "));
var num2 = parseInt(prompt("Escribe le multiplicador: "));

tablaMult(num1, num2);