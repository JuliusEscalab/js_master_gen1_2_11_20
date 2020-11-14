
## Tarea

### Clase 2

#### Crear un objeto, agregar como sus propiedades lo siguiente:

- Una propiedad de tipo **arreglo** llamado `mascotas: ['perros','gatos','canarios','pez','serpiente']`
###
- Una propiedad de tipo **boolean** llamado `esSegura: false`
###
- Una propiedad de tipo **function** llamada `llamarAlerta`, que reciba 1 parámetro y que al ejecutarse levante una alerta en el browser con el mensaje entregado como parámetro
###
- Una propiedad de tipo **function** llamada `esHttps`, que no reciba parámetros y que al ejecutarse:
  - Esta función debe modificar otra propiedad del objeto llamada esSeguro, dependiendo si es `true o false`, si la url es https o no
  - Esta función debe retornar `true o false` dependiendo si la url es https o no
###
- Una propiedad de tipo **function** llamada `eliminarMascota`, que reciba el 1 parámetro como el tipo de la mascota a eliminar
   - Esta función debe *buscar según el parámetro dentro del arreglo* definido anteriormente llamado `mascotas` y eliminar el tipo de mascota
   - Esta función debe retornar el arreglo actual
     <details>
      <summary>Tip / Ayuda</summary>
      <p>
      Pueden usar indexOf en el arreglo
      </p>
    </details>
###
- Una propiedad de tipo **function** llamada `eliminarUltimaMascota`, que no reciba parámetros y que al ejecutarse:
   - Esta función debe *eliminar el tipo de mascota* al final del arreglo definido anteriormente llamado `mascotas`
   - Esta función debe retornar el arreglo actual
###
- Una propiedad de tipo **function** llamada `agregarMascota`, que reciba el 1 parámetro como el tipo de nueva mascota a agregar
   - Esta función debe *agregar la nueva mascota al final del arreglo* definido anteriormente llamado `mascotas`
   - Esta función debe retornar el arreglo actual
###
- Una propiedad de tipo **function** llamada `contadorMascotas`, que no reciba parámetros y que al ejecutarse:
  - Esta función debe *contar dentro del arreglo* cuantos tipos de mascotas en su definición terminan en `os`, por ejemplo `Perros` termina en `os`
  - Guardar el resultado en una variable
  - La función debe retornar un `string` o texto, que diga `En el arreglo hay 3 mascotas que terminan con 'os'`