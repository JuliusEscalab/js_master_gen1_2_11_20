// Clases

class PersonaConVariablesPublicas {
  nombre = ""
  edad = 0

  constructor(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
  }

  getNombre = () => this.nombre;
  setNombre = (nuevoNombre) => this.nombre = nuevoNombre;

  getEdad = () => this.edad;
  setEdad = (nuevaEdad) => this.edad = nuevaEdad;
}

// Nombre y Edad son variables de clase
// class Mascota {
//   nombre = ""
//   edad = 0
// }

// Prototipo
function Persona2(nombre, edad){
  this.nombre = nombre;
  this.edad = edad;
}

Persona2.prototype.getNombre = function(){
  return this.nombre;
}

// Persona con variables privadas

const Persona = (function(){
  const _nombre = new WeakMap();
  const _edad = new WeakMap();

  class Persona {
    constructor(nombre, edad){
      _nombre.set(this, nombre);
      _edad.set(this, edad);
    }

    getNombre = () => _nombre.get(this)
    setNombre = (nuevoNombre) => _nombre.set(this, nuevoNombre)

    getEdad = () => _edad.get(this)
    setEdad = (nuevaEdad) => _edad.set(this, nuevaEdad);
  }

  return Persona;
}());

// Lo estático no se comunica con lo no estático
class Api {
  // Estático
  static baseURL = 'https://escalab-6b3e3.firebaseio.com/pets.json'
  static lista = null
  static fetchData = async () => {
    const response = await fetch(Api.baseURL)
    const parsedResponse = await response.json()
    Api.lista = parsedResponse;
    return parsedResponse;
  }

  // No estático
  url = ''

  constructor(url){
    this.url = url;
  }
}

// Api.fetchData() -> trae información y lo guarda en Api.lista

class Utils {
  static nombreClase = 'Utils'
  static calcularCuadrado = (x) => x * x
  static PI = Math.PI
  static perimetroRectangulo = ({ ladoA = 1, ladoB = 1}) => ladoA * ladoB
}

// Herencia

class Mamifero {
  hola = () => console.log("hola Mamifero")
}

class Animal extends Mamifero {
  edad = 0
  raza = ''
  especie = ''
  tipo = 'mamifero'

  constructor({edad, raza, especie, tipo }){
    super();
    this.edad = edad;
    this.raza = raza;
    this.especie = especie;
    this.tipo = tipo;
  }

  getEdad = () => this.edad;
  setEdad = nuevaEdad => this.edad = nuevaEdad;

  getRaza = () => this.raza;
  setRaza = nuevaRaza => this.raza = nuevaRaza;

  getEspecie = () => this.especie;
  setEspecie = nuevaEspecie => this.especie = nuevaEspecie;

  getTipo = () => this.tipo;
  setTipo = nuevoTipo => this.tipo = nuevoTipo;
}

class Mascota extends Animal {
  nombre = ''

  constructor({ nombre, edad, raza, especie, tipo }){
    super({ edad, raza, especie, tipo })
    this.nombre = nombre;
  }

  getNombre = () => this.nombre;
  setNombte = nuevoNombre => this.nombre = nuevoNombre
}

class ListaMascotas {
  lista = []
  traerMascotas = async () => {
    const response = await Api.fetchData()
    response.map(data => {
      const mascota = new Mascota({...data})
      const newArray = [
        ...this.lista,
        mascota,
      ]
      this.lista = newArray;
    })
  }
}