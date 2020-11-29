# Tarea 4

Para la tarea seguiremos utilizando el json de **sandwichOrders.js**
Recuerden solo utilizar **let o const** de ahora en adelante, ya no más ~~var~~


# Crear las siguientes funciones flecha

##
- Función que me permita encontrar todas las ordenes que que contengan de **ingredients** lechuga y palta

- Función que me permita encontrar una orden a través del id y que me devuelva un **string** con el siguiente formato de ejemplo: `La orden fue realizada el 09-10-2020, la orden llevó mechada y bagette`. En caso de no encontrar nada a través del id, el mensaje, a modo de ejemplo, deberá ser: `No se encontró la orden con id 800`
  - Usar **destructuración** [-> Documentación <-](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment)

- Función que me permita encontrar una orden a través del id y que me indique si la orden incluye `pepinillos` entre sus **ingredients**, debería devolver un `true|false`

- Función que me permita encontrar todas las orden que se hicieron en un día en específico, es decir, si yo coloco **20-10-2020**, la función me debería devolver: `Se encontraron N ordenen para la fecha 20-10-2020`.