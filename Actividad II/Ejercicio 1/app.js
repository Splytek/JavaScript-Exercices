/* 1.- Crear una funcion que reciba tu nombre como parametro e imprima el texto: Hola mi nombre es: <tu nombre> */

// Decalarar mis variables
var n;

  //Funcion autoejecutable
  //Funcion que recibe un valor y devuelve un valor
  function myName(name){
  //Imprimimos la variable con su valor
    console.log("Hola mi nombre es " + name);
    document.write("Hola mi nombre es " + name)
  }

  //Pedimos al usuario su nombre por teclado
  // n = prompt("Digita tu nombre? ");
  n = prompt("Escribe tu nombre: ");
  //Llamamos la funcion y pasamos un argumento(valor) que seria el obtenido desde el "prompt"
  myName(n);