/* 1.- Recorrer un arreglo con nombres de frutas e imprimir en la consola si encuentran la palabra plátano si no la encuentran 
   retornar: no fue encontrado. --> */

   var aFruta = ["Manzana", "Fresa", "Uvas", "Mango", "Platano", "Naranja"];

   const sFruta = (aFruta) => {
     var wFruit = prompt("Escribe un fruta: ");
     convertFruit = wFruit[0].toUpperCase() + wFruit.slice(1);
     for(var i=0; i<aFruta.length; i++){
       if(convertFruit == aFruta[i]){
         document.getElementById("Ejercicio_1").innerHTML = aFruta[i];
         break; //detiene el for cuando la codicion es verdader e imprime el resultado
       } else {
        document.getElementById("Ejercicio_1").innerHTML = "No fue encontrado.";
       }
     }
   };

   sFruta(aFruta);

