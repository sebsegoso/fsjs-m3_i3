/* 1. Cree una funcion que dado un numero n cree un arreglo de largo n, donde en cada posicion
del arreglo este el doble del anterior nota, el primer elemento del arreglo es 1 */

const createArray = () => {
  const length = Number(prompt("¿Cuál es la longitud del arreglo?"));
  if (isNaN(length) || length <= 0) {
    const retry = confirm(
      "Ingrese un número válido mayor que 0. ¿Intentar nuevamente?"
    );
    return retry ? createArray() : null;
  }

  const arr = [...Array(length).keys()].map((_, i) => 2 ** i);

  console.log(arr);
  return arr;
};

createArray();
