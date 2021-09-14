/*Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es 
viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.*/

dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

const dSemana = (dSemana) => {
  for(var i=0; i<dSemana.length; i++){
      var d = prompt("Ingresa un dia de la semana: ");
      if(d == dSemana[i]){
        document.getElementById("Ejercicio_4").innerHTML = dSemana[i];
        break; //detiene el loop e imprime el dato
      } else{
        document.getElementById("Ejercicio_4").innerHTML = ("No existe ese dia");
        break;
      }
    }
}

dSemana(dias);