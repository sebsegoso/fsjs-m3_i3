// 2. Cree una funcion que dado un arreglo de numeros de largo 10 permita obtener el mayor
// numero contenido en el arreglo

const greaterNumArray = (arr = []) => {
  if (arr.length !== 10) { /* solo porque dice 10 elementos, la función funciona sin importar la longitud del arreglo */
    alert("la longitud del arreglo debe ser 10");
    return;
  }

  return Math.max(...arr);
};

const array1 = [1, 23, 124, 499, 43, 4, 69, 58, 23, 99];
const maxArray1 = greaterNumArray(array1);
console.log(`el número mayor entre ${array1} es ${maxArray1}`);

const array2 = [2, 42, 952, 126, 126, 12, 56, 3, 156, 1];
const maxArray2 = greaterNumArray(array2);
console.log(`el número mayor entre ${array2} es ${maxArray2}`);
