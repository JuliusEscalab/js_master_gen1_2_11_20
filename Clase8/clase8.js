// Funciones Flecha

function cuadrado(x){
  return x * x;
}

const cuadradoArrowFunctionForma1 = x => {
  return x * x;
}

const cuadradoArrowFunctionForma2 = x => x * x

const perimetroAB = (a,b) => a * b

const dameElPerimetro = () => `El perimetro de 2 y 3 es ${perimetroAB(2,3)}`

const metodoVoid = () => {}

const esMayor = (valor1, valor2) => valor1 > valor2

const esMayorTernario = (valor1, valor2) => esMayor(valor1, valor2) ? 'Si' : 'No'

// Optional Chaining Operator

const persona1 = {
  datos: {
    nombreCompleto: {
      nombre: 'Julio',
      apellido: 'Orellana',
    },
    cuenta: {
      luz: 3000,
    }
  }
}

const persona2 = {
  datos: {
    cuenta: {
      luz: 3000,
    }
  }
}

const getFullName = (persona) => `${persona?.datos?.nombreCompleto?.nombre} ${persona?.datos?.nombreCompleto?.apellido}`

const getFullNameDesctructuring = ({
  datos: {
    nombreCompleto: {
      nombre = 'nombre',
      apellido = 'apellido'
    } = {
      nombre: 'nombre_por_defecto',
      apellido: 'apellido_por_defecto',
    }
  }
}) => `${nombre} ${apellido}`

// const { datos: { luz = 0 } } = persona2;
// const luz = persona2?.datos?.luz || 0;

const persona3 = {
  datos: {
    nombreCompleto: {
      nombre: 'Julio',
      apellido: 'Orellana',
    },
    cuenta: {
      luz: 3000,
      valores: [2000, 1000, 5000]
    }
  }
}
const {
  datos: {
    cuenta: {
      luz,
      valores,
    },
    nombreCompleto: {
      segundApellido = 'Apellido por defecto',
    }
  }, 
} = persona3;

const switchCase = (valor) => {
  switch(valor){
    case 1: return 'El valor es 1'; break;
    case 2: return 'El valor es 2'; break;
    default: return `El valor es ${valor}`; break;
  }
}

function contexto(){ // Function
  console.log(this)
}

function Contexto(){ // Prototipo
  console.log('THIS: ',this)
}

// const miContexto = new Contexto();

const objeto1 = { // Objeto
  miContexto: function(){

    this // <- contexto de objeto

    function contextoObjeto(){
      console.log('objeto1: ', this) // <- contexto de window
    }
    contextoObjeto();

    const contextoArrowFunction = () => {
      console.log('objeto1: ', this) // <- contexto de objeto1
    }
  }
}



const nombre = 'Chrome';
const apellido = 'Window';

const persona = {
  nombre: 'Julio',
  apellido: 'Orellana',
  encontrado: false,
  lista: ['perros', 'gatos','canarios'],
  nombreCompleto: function() { // Problema
    return function() { // Pierde el contexto y toma el global object
      console.log(`${this.nombre} ${this.apellido}`);
    };
  },
  nombreCompletoArrowFunction: function() { // Solución arrow function
    // se sigue usando function para mantener el contexto de `persona`, ver clase 4.
    // ya no se necesita ni bind ni self
    return () => console.log(`${this.nombre} ${this.apellido}`)
  },
  dimeElNombre: () => {
    console.log(this.nombre);
  },
  dameElPerro: function(){
    this.lista.forEach((elementoDeLaLista) => {
      if(elementoDeLaLista.includes('perros')){
        console.log(this)
        this.encontrado = true;
      }
    });
    console.log(this.encontrado);
  }
};

const nombreCompleto = persona.nombreCompleto()
const nombreCompletoAF = persona.nombreCompletoArrowFunction();

// Métodos de Array

// Objeto sandwichOrders

proteina = ["hamburguesa vacuno", "hamburguesa cerdo", "hamburguesa pollo", "hamburguesa lentejas", "not burger", "hamburguesa quinoa", "hamburguesa meatless", "mechada", "pollo", "churrasco"]

sauce = ["mayonesa", "ketchup", "mostaza", "bbq", "salsa ajo", "salsa verde", "aji pebre", "not mayo"]

ingredients = ["lechuga", "tomate", "cebolla", "cebolla caramelizada", "palta", "tocino", "champiñones", "porotos verdes", "huevo", "queso cheddar", "pepinillos", "ají amarillo", "ají verde"]

breads = ["bagette", "brioche", "pita", "marraqueta", "hallulla"]

// Filter()

const list = ['1', '2', 2, 2];

const listFilter = (listItem) => listItem === 2

const resultadoFilter1 = list.filter(listFilter)

const filterOrders = () => {
  console.time('orders')
  const result = sandwichOrders.filter(sandwichOrder => sandwichOrder.bread === 'bagette')
  console.timeEnd('orders')
  console.log(result)
}

const filterOrdersByBread = (filter, sandwichOrders) => sandwichOrders.filter(
  (sandwichOrder) => sandwichOrder.bread === filter
)

const filterOrdersByType = ({ type = '', filter = ''} = {}) => 
  sandwichOrders.filter(
    sandwichOrder => 
      sandwichOrder[type] === filter
      && sandwichOrder.sauces.includes('ketchup')
  )

// .map()

const getSandwichOrdersByProperty = ({ type = ''}) => sandwichOrders.map(
  sandwichOrder => 
    ({
      type: sandwichOrder[type],
      protein: sandwichOrder.protein
    })
)

// .find()

const findSandwichBySauceBread = (sauce, bread, id) =>
  sandwichOrders.filter(
    (sandwichOrder) => 
      sandwichOrder.sauces.includes(sauce)
      && sandwichOrder.bread === bread
  )
  .find(
    (sandwichOrder) => 
      sandwichOrder.id === id
  )

// .every()

const everyAreAllOrdered = () => 
  sandwichOrders.every(
    sandwichOrder => sandwichOrder.ordered
  )

const someAreNotOrdered = () =>
  sandwichOrders.some(
    sandwichOrder => !sandwichOrder.ordered
  )