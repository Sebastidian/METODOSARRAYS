`use strict`


// En base al resultado del ejercicio anterior agrupar
//en un array únicamente las palabras que tengan mas de 3 letras


let phrase = 'La programación web es fundamental para el progreso';
let words = phrase.split(" ");
let threeletters = words.filter(word => word.length > 3);
alert(threeletters);
