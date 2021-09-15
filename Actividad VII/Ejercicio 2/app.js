/* 2.- Recorrer un arreglo de 4 números y multiplicar el primero por el segundo, el segundo por el tercero y el tercero por 
el cuarto. */

var aNumbers = [8,6,4,7];

const numeros = (aNumbers) => {
  for(var i=0; i<aNumbers.length-1; i++){
    var newNumbers = aNumbers[i] * aNumbers[i+1];
    document.write(newNumbers + "</br>");
  }
}

numeros(aNumbers);