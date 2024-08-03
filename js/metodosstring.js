let frase =  "Romulo JAVA DEVELOPER";
let longitud = frase.length;
console.log ("La longitud es : " + longitud);


let fragmento = frase.slice(7,21);
console.log (fragmento);

let frutas = "naranjas, manzanas, uvas, platanos";
let nuevofrutas = frutas.split(",");
console.log(nuevofrutas);

console.log("frase original es : " + frutas);


let nuevofragmento = frase.substring(7,21);
console.log (nuevofragmento);

let palabras = "Buenos días a Todos";
let mayusculas = palabras.toUpperCase();
let minusculas = palabras.toLowerCase();

console.log("Esta es la frase en Mayuscula : " + mayusculas);
console.log("Esta es la frase en Minuscula : " + minusculas);


