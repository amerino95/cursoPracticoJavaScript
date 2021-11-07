// Creando un nuevo array que contiene el valor de la propiedad salary del array "peru"
const salarios = trabajadoresPeru.map(
    function(trabajador) {
        return trabajador.salary;
    }
);

// Ordenar salarios de forma ascendete.
const salariosPeruSorted = salarios.sort(
    function(salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

// Funcion para verificar si el parametro ingresado es par.
function esPar(numerito) {
    return (numerito % 2 === 0);
}

// Funcion para calcular el promedio (El promedio es la suma todos los elementos de una lista, dividido entre la cantidad de elementos sumados). 
function promedio(lista) {
    const sumaLista = lista.reduce(
        function(resultado = 0, nuevoElemento) {
            return resultado + nuevoElemento;
        }
    );
    const resultadoPromedio = sumaLista / lista.length;
    return resultadoPromedio;
}

// Funcion para calcular la mediana de una lista de elementos (La mediana es el elemento central de una lista impar, caso contrario es el promedio de los dos elementos centrales de la lista).
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);
    if(esPar(lista.length)) {
        const personitaMItad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];
        const mediana = promedio([personitaMItad1,personitaMitad2]); 
        return mediana;
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

// Mediana general de salarios en Peru.
const medianaGeneral = medianaSalarios(salariosPeruSorted);

// Mediana de salarios del top 10%.
const spliceStart = (salariosPeruSorted.length * 90) / 100;
const spliceCount = salariosPeruSorted.length - spliceStart;

const salariosTop10 = salariosPeruSorted.splice(spliceStart,spliceCount);

const medianaTop10 = medianaSalarios(salariosTop10);

console.log(
    medianaGeneral,
    medianaTop10,
);

