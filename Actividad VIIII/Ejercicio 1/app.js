/*Crear un menu con Do While y switch en el cual te pida la opción que desees y puedas calcular el área de un
rectángulo, triangulo escaleno, cuadrado y circunferencia.

Los datos deben de ser introducidos desde la consola
 */

do{

option = prompt("Escoge una opcion de figura geometrica: ");

switch(option){
    case "rectangulo": 
      var a_rectangulo = (b, h) => b * h;
      document.write("Area = 10 * 6 = " + a_rectangulo(10,6) + "cm^2");
    break;
    case "triagulo equilatero": 
      var a_T_Equilatero = (b, h) => b * h / 2;
      document.write("Area = 6 * 7 / 2 = " + a_T_Equilatero(6,7) + "cm^2");
    break;
    case "cuadrado":
      var a_cuadrado = (a) => Math.pow(a, 2);
      document.write("Area = 5^2 = " + a_cuadrado(5) + "cm^2");
    break;
    case "circunferencia":
      var a_circunferencia = (r) => 3.1416 * Math.pow(r, 2);
      document.write("Area = PI * r^2 = " + a_circunferencia(4) + "cm^2");
    break;
    default:
      document.write("No existe esa opcion");
    break;
}

option = prompt("Quieres hacer un nuevo calculo? SI[y]/NO[x]");

}while(option == "y");

