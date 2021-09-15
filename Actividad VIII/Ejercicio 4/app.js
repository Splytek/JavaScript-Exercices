/* 4. Requerir al usuario que ingrese un número entero positivo e imprimir todos los números correlativos entre el 
ingresado por el usuario y uno menos del doble del mismo. */

const numeroE = () => {
    for(var i=5; i<=20; i+=3){
      console.log(i);
    }
}

x = parseInt(prompt("Digita un numero entero positivo: "));
  
numeroE(x);