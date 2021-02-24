	* Objetos
	* Propiedades
	* Métodos
	* Bucle `for…in`
	* Notación de puntos vs notación de corchetes


    Los objetos son arreglos en los que las propiedades no son solamente numericas, pueden ser nombres propios, de esta manera la información es un poco más organica.

    Las propiedades son los nombres que le pone el sistema, a un tipo de dato que se puede compartir entre objetos.

    Metodos son las funciones, pero almacenadas en un arreglo. De esta manera se puede acceder simplemente llamando al metodo del objeto.

    Bucle "For...in"

        const object = { a: 1, b: 2, c: 3 };

    for (const property in object) {
        console.log(`${property}: ${object[property]}`);
    }

    De esta manera se puede acceder a todas las propiedades de un objeto.

    Notacion de puntos es cuando accedes a una propiedad de un objeto de una manera sencilla. No permite crear propiedades tan facilmente.
    Con corchetes puedes generar propiedades dependiendo de como las necesites, ya sea vacias o con datos.