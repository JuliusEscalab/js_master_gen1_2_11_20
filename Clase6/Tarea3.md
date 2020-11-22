# Tarea 3

Siguiente con la forma de creación de objetos y propiedades de la tarea 2:

## Crear un objeto con las siguientes propiedades

###
- Una propiedad de tipo **null** llamado **lista**

###
- Una propiedad de tipo **function** llamado **llamadaApi**, no recibirá parámetros
  - Esta función debe hacer una llamada api utilizando `fetch` utilizando la siguiente url: `https://escalab-6b3e3.firebaseio.com/javascript.json`
  - La respuesta que debe ser transformada utilizando `.json()`, debe guardar el resultado en `lista`
  - La función debe revisar si la lista ya tiene datos, si ya tiene datos entonces no debe hacer la llamada `fetch`

El eschema de la respuesta de la llamada api es:

```js
age: number
hobbies: array
id: number
name: string
picture: string
```

###
- Una propiedad de tipo **function** llamado **verDatoLista**, recibirá 1 parámetro que será un **número** llamado `posicion`
  - La función debe retornar el elemento en la lista con la posición entregada
  - En caso de que no existe la posición especificada, debe retornar un mensaje **No existe ese elemento en la lista**

### 
- Una propiedad de tipo **function** llamada **vaciarLista**, que no recibirá parámetros
  - La función deberá regresar la lista a null

### (desafiante)
- Una propiedad de tipo **function** llamada **verPorPropiedad**, que recibirá 2 parámetros, el primero es un **número** denominado `posición` y la segunda es un **string** llamada `propiedad`
  - La función deberá buscar el elemento dentro de la propiedad `lista`
  - La función deberá buscar la propiedad especificada por el parámetro `propiedad` dentro del objeto devuelto por la ejecución anterior.
  - La función deberá devolver el valor de la propiedad ingresada anteriormente.

