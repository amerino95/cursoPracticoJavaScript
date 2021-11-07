const lista1 = [
   1,
   2,
   3,
   1,
   2,
   3,
   4,
   2,
   2,
   2,
   1,
];
// Nuevo array donde se almacenara el numero y la cantidad de veces que se repiten.
const lista1Count = {};
// Asignando propiedad y valor a const lista1Count.
lista1.map(
    function(elemento) {
        if(lista1Count[elemento]) {
            lista1Count[elemento] +=1;
        } else {
            lista1Count[elemento] = 1;   
        }
    }
)
// Creando nuevo array, pasando de objeto a array con Object.entries y con metodo .sort ordenando ese array de forma ascendente, la moda es el ultimo elemento.
const lista1Array = Object.entries(lista1Count).sort(
    function(elementoA, elementoB) {
        return elementoA[1] - elementoB[1];
    }
)
// La moda es el ultimo elemento del array.
const moda = lista1Array[lista1Array.length - 1];

// GENERANDO LA FUNCION.

function calculandoModa(lista) {
    const listaCount = {};
    lista.map(
        function(elemento) {
            if(listaCount[elemento]) {
                listaCount[elemento] +=1;
            } else {
                listaCount[elemento] = 1;
            }
        }
    )
    const listaArray = Object.entries(listaCount).sort(
        function(elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
    )
    const moda = listaArray[listaArray.length - 1];
    return moda;
}

