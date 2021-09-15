/*9. Dado un número entero positivo, mostrar su factorial. El factorial de un número se obtiene multiplicando todos los 
números enteros positivos que hay entre el 1 y ese número. */


const nfactorial = (num) => {
    var factorial = 1;

    for (var i=1; i <= num; i++){
      factorial = factorial * i;
    }
      document.write(factorial);
      
  }
  
  num = parseInt(prompt("Digita un numero para el factorial: "));
  nfactorial(num);