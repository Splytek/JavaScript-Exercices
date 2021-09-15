/*10.	Crear un algoritmo que muestre los primeros 10 números de la sucesión de Fibonacci. La sucesión comienza con los 
números 0 y 1 y, a partir de éstos, cada elemento es la suma de los dos números anteriores en la secuencia: 
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55… */


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