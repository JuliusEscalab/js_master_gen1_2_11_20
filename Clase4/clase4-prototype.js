// Prototipos

function Personaje(nombre, edad){
  nombre = nombre;
  edad = edad;
}

Personaje.prototype.setNombre = function(nuevoNombre){
  this.nombre = nuevoNombre;
  return 'cambiado!';
}

Personaje.prototype.setEdad = function(edad){
  this.edad = edad;
}