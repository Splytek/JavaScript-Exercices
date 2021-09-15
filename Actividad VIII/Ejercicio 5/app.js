/* 5.	Solicitar al usuario que ingrese una frase y luego imprimir un listado de las vocales que aparecen en esa 
frase (sin repetirlas). */

const fraseVocal = (f) => {
  for(var i=0; i<f.length; i++){
    if(f.charAt(i) == "a" || f.charAt(i) == "e" || f.charAt(i) == "i" || f.charAt(i) == "o" || f.charAt(i) == "u"){
      rCadena = f.charAt(i);
      var arr = rCadena.split(','); //convertir mi charAt() a un array(arreglo)
      console.log(arr); //imprimimos el arreglo
    }
  }
}


var f = prompt("Escribe un frase: "); 
fraseVocal(f);