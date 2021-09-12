/* 2.- Crear una funcion que reciba 3 parametros, tu color favorito, tu edad y tu nombre y utilizando la palabra 
reservada return regresar lo siguiente: Mi nombre es: <tu nombre>, mi color favorito es: <tu color favorito> y mi 
edad es: <tu edad> */

var datos;

function misDatos(color, edad, nombre){
    //accedemos a los datos con su indice del array
  datos = document.write("Mi nombre es " + nombre + 
                         ", mi color favorito es " + color + 
                         ", y mi edad es " + edad); 
  return datos;
}

misDatos("Azul", 28, "Hugo");