// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  var respuesta = [];

  for (var valor in objeto) {
    respuesta.push([valor, objeto[valor]]);
  }
  return respuesta;



}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  var respuesta = {};
  
  for (var i = 0; i < string.length; i++) {
        
    if(string[i] === "a"){
      if(respuesta["a"] === undefined){
      respuesta["a"] = 0;
      }
      respuesta.a++;
    }
    else if(string[i] === "b"){
      if(respuesta["b"] === undefined){
        respuesta["b"] = 0;
        }
        respuesta.b++;
      
    }else if(string[i] === "c"){
      if(respuesta["c"] === undefined){
        respuesta["c"] = 0;
        }
        respuesta.c++;
      
    }else if(string[i] === "d"){
      if(respuesta["d"] === undefined){
        respuesta["d"] = 0;
        }
        respuesta.d++;
      
    }else if(string[i] === "e"){
      
    }else if(string[i] === "f"){
      if(respuesta["f"] === undefined){
        respuesta["f"] = 0;
        }
        respuesta.f++;
      
    }else if(string[i] === "g"){
      
    }else if(string[i] === "h"){
      if(respuesta["h"] === undefined){
        respuesta["h"] = 0;
        }
        respuesta.h++;
      
    }else if(string[i] === "i"){
      
    }else if(string[i] === "j"){
      if(respuesta["j"] === undefined){
        respuesta["j"] = 0;
        }
        respuesta.j++;
      
    }else if(string[i] === "k"){
      if(respuesta["k"] === undefined){
        respuesta["k"] = 0;
        }
        respuesta.k++;
      
    }else if(string[i] === "l"){
      
    }else if(string[i] === "m"){
      
    }else if(string[i] === "n"){
      
    }else if(string[i] === "o"){
      if(respuesta["o"] === undefined){
        respuesta["o"] = 0;
        }
        respuesta.o++;
      
    }else if(string[i] === "p"){
      if(respuesta["p"] === undefined){
        respuesta["p"] = 0;
        }
        respuesta.p++;
      
    }else if(string[i] === "q"){
      if(respuesta["q"] === undefined){
        respuesta["q"] = 0;
        }
        respuesta.q++;
      
    }else if(string[i] === "r"){
      if(respuesta["r"] === undefined){
        respuesta["r"] = 0;
        }
        respuesta.r++;
      
    }else if(string[i] === "s"){
      if(respuesta["s"] === undefined){
        respuesta["s"] = 0;
        }
        respuesta.s++;
      
    }else if(string[i] === "t"){
      if(respuesta["t"] === undefined){
        respuesta["t"] = 0;
        }
        respuesta.t++;
      
    }else if(string[i] === "u"){
      
    }else if(string[i] === "v"){
      
    }else if(string[i] === "w"){
      if(respuesta["w"] === undefined){
        respuesta["w"] = 0;
        }
        respuesta.w++;
      
    }else if(string[i] === "x"){
      
    }else if(string[i] === "y"){
      
    }else if(string[i] === "z"){
      
    }
  }
  return respuesta;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var nuevaPalabra = '';
  
    for (var i = 0; i < s.length; i++) {
      if (s[i] == s[i].toUpperCase()) {
      nuevaPalabra = nuevaPalabra.concat(s[i])      
      }    
    }

    for (var i = 0; i < s.length; i++) {
      if (s[i] == s[i].toLowerCase()) {
        nuevaPalabra = nuevaPalabra.concat(s[i])      
      }    
    }
  return nuevaPalabra;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  var division = str.split(' ');
  for (let i = 0; i < division.length; i++) {
    division[i] = division[i].split('').reverse().join('');  
  }
  resultado = division.join(' ');
  return resultado;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var reversa = numero.toString().split("").reverse().join("");

    if(reversa == numero){
      return "Es capicua";
    } else {
      return "No es capicua";
    }
}

function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  var respuesta = '';

  for (let i = 0; i < cadena.length; i++) {
    if(cadena[i] === 'a'||cadena[i] === 'b'|| cadena[i] === 'c'){
      continue;
    } else {
      respuesta = respuesta.concat(cadena[i]);
    }    
  }
  return respuesta;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  
    return arr.sort((x,y) => x.length - y.length);
 
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var union = [];
  var contador = 0;
 
  for (let i = 0; i < arreglo1.length; i++) {
    for (let e = 0; e < arreglo2.length; e++) {
      if(arreglo1[i] === arreglo2[e]){
        if(union[contador] === undefined){
          union[contador] = arreglo1[i];
          contador++;
        }
      }      
    }    
  }
  return union;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

