// 3. Dado un arreglo de strings que contiene los dias de la semana, cree una funcion que le
// permita obtener un dia en particular si se recibe sunumero correspondiente.ej
// 1 = Lunes , 7 = Domingo.

const numToDay = (num) => {
  const days = [
    "domingo",
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sábado",
  ];
  if (num < 1 || 7 < num) {
    console.error("Error: El número debe ser entre 1 y 7");
    return;
  }

  return days[num % days.length];
};

console.log(1, numToDay(1));
console.log(3, numToDay(3));
console.log(7, numToDay(7));
console.log(0, numToDay(0));
console.log(8, numToDay(8));
