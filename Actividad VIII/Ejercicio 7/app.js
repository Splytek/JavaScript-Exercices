/* 7.	Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100. */

const sumatoria = () => {
  var total = 0, num1 = 0, num2 = 1;

  for (var i=2; i <= 100; i++){
      total = num1 + num2;
      num1 = num2;
      num2 = total;
  }
    console.log(total);
}

sumatoria();