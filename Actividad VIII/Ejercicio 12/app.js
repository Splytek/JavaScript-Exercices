/*12.	No olvides que no es posible dividir por cero, por lo que es necesario evitar que el programa arroje un error si 
no se ingresaron números positivos.*/


const fibonacciN= () => {
  var total = 0, num1 = 0, num2 = 1;

  for (var i=2; i <= 10; i++){
      total = num1 + num2;
      num1 = num2;
      num2 = total;
  }
    console.log(total);
}

fibonacciN();