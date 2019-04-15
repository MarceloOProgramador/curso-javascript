const escola = "cod3r";

console.log(escola.charAt(4)); //return r
console.log(escola.charAt(5)); // return ""
console.log(escola.charCodeAt(3)); //return 51
console.log(escola.indexOf('3')); //return 3

console.log(escola.substring(1)); //return od3r
console.log(escola.substring(0, 3)); //return cod

console.log('Escola '.concat(escola).concat("!"));// return "Escola cod3r!";
console.log(escola.replace(3, "e"));

console.log("Ana, Maria, Pedro".split(',')); //return [ 'Ana', ' Maria', ' Pedro' ];
