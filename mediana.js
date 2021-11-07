// Una lista con cantidad de elementos inpar, tendra como mediana al elemento del medio, mientras que en una lista de cantidad de elementos par, tendra como mediana el promedio de los dos elementos centrales.
function promedio(lista) {
    // let sumaLista = 0;
    // for(let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }
    const sumaLista = lista.reduce(
        function(resultado = 0, nuevoElemento) {
            return resultado + nuevoElemento;
        }
    );// methodo reduce.
    const resultadoPromedio = sumaLista / lista.length;
    return resultadoPromedio;
}

const lista1 = [10,30,50,70,90]; // 50
const lista2 = [10,20,30,40]; // 25
const lista3 = [30,20,40,10,18,17,2000]; // 25

function calculandoMediana(lista) {
    const mitadLista = parseInt(lista.length / 2);
    let mediana;
    if(lista.length % 2 === 0) {
        const elemento1 = lista[mitadLista - 1]; 
        const elemento2 = lista[mitadLista];
        mediana = promedio([elemento1,elemento2]);
        return mediana;
    } else {
        mediana = lista[mitadLista];
        return mediana;
    }
}

console.log(lista3.sort());
