/*11.	Escribir un programa que permita al usuario ingresar 6 números enteros, que pueden ser positivos o negativos. 
Al finalizar, mostrar la sumatoria de los números negativos y el promedio de los positivos.*/


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