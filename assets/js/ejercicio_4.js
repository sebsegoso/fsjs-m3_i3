// 4. Cree una funcion que le permita buscar un elemento contenido en el arreglo. nota, el
// arreglo solo contendra numeros, y tendra un largo maximo de 100.

const findNumberInArray = (arr = [], num) => {
  if (100 < arr.length) {
    console.error("la longitud del arreglo no puede ser mayor a 100");
    return;
  }
  const elementIndex = arr.findIndex((item) => item === num);

  if (elementIndex < 0) {
    console.log("elemento no encontrado");
    return null;
  }
  console.log(`Elemento encontrado en el índice ${elementIndex}`);

  return arr[elementIndex];
};

const arr = [71, 432, 413, 404, 365, 472, 471, 41, 149, 324];
const item = findNumberInArray(arr, 41);
console.log(`item:`, item);
