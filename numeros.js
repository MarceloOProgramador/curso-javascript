const peso1 = 1.0; // Type is integer
//const peso1 = 1.1; // Type is float
const peso2 = Number("2.0"); //Type is integer

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 * peso2);

console.log(media.toFixed(2)); //return a float with two 0 after dot;
console.log(media.toString(2)); //return a binary media result;
console.log(typeof media);
console.log(typeof Number);