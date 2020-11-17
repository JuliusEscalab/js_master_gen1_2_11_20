/**
Hacer un closure con contexto de "una persona tira un dado". 
Es decir, yo le entrego un nombre, por ejemplo:

var dadoJulio = nuevoDado('julio')

Y que la respuesta de dadoJulio() sea:

dadoJulio() -> "Julio tiró un dado y salió 6"
dadoJulio() -> "Julio tiró un dado y salió 3"
dadoJulio() -> "Julio tiró un dado y salió 5"

Por lo tanto, la respuesta del closure debe ser aleatoria y el
dado debe ser de 6 caras (osea del 1 al 6)
 */

function primeraFuncion(nombre){
  return function(){
    return "Hola " + nombre;
  }
}

function nuevoDado(nombre){
  return function(){
    var resultadoDado = Math.ceil(Math.random() * 6)
    return nombre +" tiró un dado y salió "+resultadoDado
  }
}

// ============

//console.log(this) // contexto window

function foo(){
  console.log(this)
}

//foo(); // ejecutamos foo

var objeto = {
  valor1: 'valor1',
  foo: function(){
    console.log(this)
  }
}

function FooPrototipo(valor2){
  this.valor1 = 'hola'
  this.valor2 = valor2;
  // console.log(this)
}

var instanciaFoo = new FooPrototipo('valor2');

// Ejercicio

var nombre = 'Chrome';
var apellido = 'Window';

var persona = {
  nombre: 'Julio',
  apellido: 'Orellana',
  nombreCompleto: function(){
    console.log("nombreCompleto: ", this)
    var self = this;
    function llamarNombreCompleto(){
      console.log(self.nombre + ' ' + self.apellido);
    }

    llamarNombreCompleto()
  }
}

