/* Ejercicio 3 desarrollar un programa que responda al usuario si el helado que busca existe o no y cual es su precio 
ejemplo: tener valores predefinidos: oreo, chocolate, vainilla y fresa y definir también sus precios. Si la función recibe 
un helado que no existe se va a retornar: Helado no encontrado, de lo contrario se regresa: 
El helado <helado_recibido_en_la_funcion> + <precio> */

const sHelado = (sabor) => {
  if("oreo"){
    return `El helado ${sabor} de 17 pesos`;
  } else if("chocolate"){
    return `El helado ${sabor} de 19 pesos`;
  } else if("vainilla"){
    return `El helado ${sabor} de 15 pesos`;
  } else if("fresa"){
    return `El helado ${sabor} de 21 pesos`;
  } else {
    return `Helado no encontrado`;
  }
}

var sabor = prompt("Que tipo de sabor buscas?"); 

document.write(sHelado(sabor));