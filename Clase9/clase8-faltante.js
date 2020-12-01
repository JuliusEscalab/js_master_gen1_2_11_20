// Reduce

const numeros = [1,2,3,4,5]
const sumaNumeros = numeros.reduce(
  (acumulativo, elementoActual) => acumulativo + elementoActual,
  0,
)

const ordernarOrdenesPorFecha = () => sandwichOrders.reduce(
  (fechasAcumulativas, ordenActual) => {
    const { ordered } = ordenActual;
    const { [ordered]: listaDeFechasActual = [] } = fechasAcumulativas;
    fechasAcumulativas[ordered] = [...listaDeFechasActual, ordenActual]
    return fechasAcumulativas;
  },
  {}
)

/**
 * 
 * {
 *   '20-10-2020': [
 *      {},
 *      {},
 *   ]
 * 
 * }
 * 
 */