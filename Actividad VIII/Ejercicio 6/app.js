/* 5. Solicitar al usuario que ingrese una frase y luego imprimir la cantidad de vocales que se encuentran en dicha 
frase. */

const cantidadFrase = (f) => {
    for(var i=0; i<f.length; i++){
      if(f.charAt(i) == "a" || f.charAt(i) == "e" || f.charAt(i) == "i" || f.charAt(i) == "o" || f.charAt(i) == "u"){
        longitudCadena = f.charAt(i);
        newlongitudCadena = longitudCadena.split();
        console.log(newlongitudCadena);
      }

    }

    console.log(newlongitudCadena.length+1);
}
  
var f = prompt("Escribe un frase: "); 
cantidadFrase(f);