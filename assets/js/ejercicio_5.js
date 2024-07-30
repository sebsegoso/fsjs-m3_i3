// 5. Cree un programa que dado un arreglo de numeros desordenados los ordene
// ascendentemente.

const sortArray = (arr = []) => arr.sort((a, b) => (a > b ? 1 : -1));
const originalArray = [71, 432, 413, 404, 365, 472, 471, 41, 149, 324];
console.log(`originalArray:`, originalArray);

const sortedArray = sortArray(originalArray);
console.log(`sortedArray:`, sortedArray);
