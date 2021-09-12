/* 2.- Crear una funcion que reciba 3 parametros, tu color favorito, tu edad y tu nombre y utilizando la palabra 
reservada return regresar lo siguiente: Mi nombre es: <tu nombre>, mi color favorito es: <tu color favorito> y mi 
edad es: <tu edad> */

  function datosPersona(color, edad, nombre){
    obj = {}; //objeto
    obj.color = color; //asignamos el argumento(valor) al obj en la variable color (va a ser guardado alli)
    obj.edad = edad;
    obj.nombre = nombre;
    return obj; //retornamos el objeto
  }

  /*pasamos los argumentos(valores) y enviamos la funcion normal los valores de la "nueva persona"*/
  /*llamamos la funcion y guardaamos el objeto con valores en una variable llamada "persona1"*/
  var persona1 = datosPersona("Azul", 25, "Hugo");

  //Instanciamos la persona1 y llamamos sus variables junto con sus valores e imprimimos
  document.write("Mi nombre es " + persona1.nombre + 
                 ", mi color favorito es " + persona1.color + 
                 ", y mi edad es " + persona1.edad + "</br>");

  var persona2 = datosPersona("Amazul", 23, "Robbie");

  document.write("Mi nombre es " + persona2.nombre + 
                 ", mi color favorito es " + persona2.color + 
                 ", y mi edad es " + persona2.edad + "</br>"
  );