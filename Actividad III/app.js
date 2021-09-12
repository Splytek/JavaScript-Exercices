//USANDO ARROW FUNCTIONS

//PERIMETROS
  //Perimetro del rectangulo
  var p_rectangulo = (b, h) => 2 * (b + h);
  document.getElementById("rectangulo").innerHTML = "Perimetro = 2 * (10 + 6) = " + p_rectangulo(10,6) + "cm";

  //Perimetro del cuadrado
  var p_Cuadrado = (l) => 4 * l;
  document.getElementById("cuadrado").innerHTML = "Perimetro = 4 * 5 = " + p_Cuadrado(5) + "cm";

  var p_Triangulo_equilatero = (l) => 3 * l;
  document.getElementById("T_equilatero").innerHTML = "Perimetro = 3 * 5 = " + p_Triangulo_equilatero(5) + "cm"; 

  var p_Circunferencia = (r) => 2 * 3.14 * r;
  document.getElementById("Circunferencia").innerHTML = "Perimetro = 2 * PI * 2 = " + p_Circunferencia(2) + "cm"; 

//AREAS
  //Area del rectangulo
  var a_rectangulo = (b, h) => b * h;
  document.getElementById("a_rectangulo").innerHTML = "Area = 10 * 6 = " + a_rectangulo(10,6) + "cm^2";

