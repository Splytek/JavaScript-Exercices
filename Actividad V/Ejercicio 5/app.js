/* Solicitar al usuario que ingrese los nombres de dos personas, los cuales se almacenarán en dos variables. 
A continuación, imprimir “coincidencia” si los nombres de ambas personas comienzan con la misma letra ó si 
terminan con la misma letra. Si no es así, imprimir “no hay coincidencia”. */

function coincidencia(cadena1, cadena2){

  if(cadena1.charAt(0)==cadena2.charAt(0) || cadena1.charAt(cadena1.length-1) == cadena2.charAt(cadena2.length-1)){
    document.write('Si hay coincidencia');
  }else{
    document.write('No hay coincidencia');
  }
}  

coincidencia('Hugo', 'Hugo');