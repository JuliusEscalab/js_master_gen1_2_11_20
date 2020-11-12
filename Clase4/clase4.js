// Objetos

var texto = "texto"

var personaje1 = {
  nombre: 'Link',
  edad: 18,
  dineroEnBolsillo: null,
  tieneHijos: undefined,
  apodos: ['Zelda', 'Enlace'],
  adulto: true,
  setNombre: function(nuevoNombre){
    this.nombre = nuevoNombre;
    return 'cambiado!';
  },
  setEdad: function(edad){
    this.edad = edad;
  },
  dosAnosAlFuturo: function(){
    return this.edad + 2;
  },
  readThis: function(){
    console.log(this)
  },
}

var mascotas = {
  mascota1: 'Epona',
}

Object.keys(personaje1) // devuelve las llaves del objeto
Object.values(personaje1) // devuelve los valores del objeto
Object.entries(personaje1) // devuelve un arreglo con las llaves y los valores del objeto

// Congelar objetos

var objetoCongelado = Object.freeze(personaje1);
objetoCongelado.nombre = 'Zelda'
objetoCongelado.nombre // Link
objetoCongelado.setNombre('Zelda') // Link
objetoCongelado.nombre// Link -> no cambia

// Prototipos - definido en clase4-prototype.js

var personaje2 = new Personaje('Zelda', '18')

// Arreglos (Array)

function miFuncion(){ console.log('funcion')}
var arreglo = ['elemento1', 'elemento2', true, 0, miFuncion, 'luna', { nombre: 'Julio' }]

var precios = [2100, 500, 2300]

// .forEach
var sumarValores = 0;

var funcionIterar = function(valor){
  // console.log("valor: ", valor, ", indice: ", indice, ", arreglo: ", arregloCompleto)
  sumarValores += valor;
}

precios.forEach(funcionIterar)

// Agregar Al Arreglo

var arregloMascotas = []

arregloMascotas.push('Perro')
arregloMascotas.push('Gato')
arregloMascotas // ['Perro', 'Gato']
arregloMascotas.pop()
arregloMascotas // ['Perro']

// Splice para manipular arreglos

// Set
var miObjeto = { nombre: 'Julio'};

var arregloRepetido = [1,1,1,2,3,3,4,4,4,5,5,'julio', 'julio', miObjeto, miObjeto]

var miSet = new Set(arregloRepetido)