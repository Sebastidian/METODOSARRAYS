' use strict'

//Separar por palabras y mostrar cuantas palabras tiene la siguiente frase:
//let phrase = 'La programación web es fundamental para el progres

let phrase = 'La programación web es fundamental para el progreso'

let words = phrase.split(" ");
let cantidadwords = words.length;
alert("La frase tiene " + cantidadwords + " words.");