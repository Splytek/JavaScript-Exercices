/* Crear un programa que permita al usuario elegir un candidato por el cual votar. Las posibilidades son: candidato A por el 
partido rojo, candidato B por el partido verde, candidato C por el partido azul. Según el candidato elegido (A, B ó C) se le 
debe imprimir el mensaje “Usted ha votado por el partido [color que corresponda al candidato elegido]”. Si el usuario ingresa 
una opción que no corresponde a ninguno de los candidatos disponibles, indicar “Opción errónea”. */


const candidato = () => {
  var optionCandidato = document.getElementById("valorCandidato").value;
  
  if(optionCandidato == "A" || optionCandidato == "a"){
    document.getElementById("Ejercicio_6").innerHTML = "Usted ha votado por el partido rojo";
  } else if(optionCandidato == "B" || optionCandidato == "b"){
    document.getElementById("Ejercicio_6").innerHTML = "Usted ha votado por el partido verde";
  } else if(optionCandidato == "C" || optionCandidato == "c"){
    document.getElementById("Ejercicio_6").innerHTML = "Usted ha votado por el partido azul";
  } else {
    document.getElementById("Ejercicio_6").innerHTML = "Opcion erronea";  
  }

}