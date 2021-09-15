/*8.Escribir un programa que muestre la sumatoria de todos los múltiplos de 3 encontrados entre el 0 y el 100.*/

const sumatoriaMult3 = () => {
    var total = 0, num1 = 0, num2 = 1;
  
    for (var i=2; i <= 100; i+=3){
        total = num1 + num2;
        num1 = num2;
        num2 = total;
    }
      console.log(total);
  }
  
  sumatoriaMult3();