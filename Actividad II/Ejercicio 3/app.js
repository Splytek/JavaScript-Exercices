/* 3.- Crear una funcion que reciba 2 numeros y los sume, los reste, los multiplique y los divida y el resultado 
sea regresado usando la palabra reservada return. */

//funcion constructora - POO
//this: la propiedad "name" del objeto será igual al valor del "nombre" pasado a la llamada del constructor
function Calculadora(n1, n2){
  obj = {};
  obj.suma = n1 + n2; //igulamos el valor n1 y n2 al objeto suma y asi sucesivamente
  obj.resta = n1 - n2;
  obj.div = n1 / n2;
  obj.mult = n1 * n2;
  return obj; //retornamos los valores del objeto
}

//guardamos el valor retornado en la variable "op"
//pasamos los dos valores que pide la funcion y asi nos regrese el valor calculado con return 
var op = Calculadora(10, 15);
//instanciamos por su nombre e imprimimos cada objeto con su valor 
document.write(op.suma + "</br>"); //25
document.write(op.resta + "</br>"); //5
document.write(op.div + "</br>"); //1.5
document.write(op.mult + "</br>"); //150
