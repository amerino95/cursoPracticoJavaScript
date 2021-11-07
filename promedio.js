/*function calcularPromedio(lista) {
    let sumaLista = 0;
    for(let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i];
    }
    const promedio = sumaLista / lista.length;
    return promedio;
}*/

const lista = [100,200,300,500];


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