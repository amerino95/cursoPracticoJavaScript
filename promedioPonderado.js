// Definicion: Este promedio es muy similiar al promedio de la media aritmetica, pero nos permite definir tambien el peso, importancia o relevancia de cada elemento de nuestro conjunto de números.
// Un caso de uso de la media ponderada es el calculo de notas academicas cuando cada materia o asignatura otorga diferentes "Creditos".
// Esta es su formula: 
// [(N1*C1)+(N2*C2)+(N3*C3)] / (C1+C2+C3)

const notes = [
    {
        course: "Educacion Fisica",
        note: 10,
        credit: 2,
    },
    {
        course: "Programacion",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];
// Multiplicar cada nota por su credito.
const notesWhithCredit = notes.map(
    function(noteObject) {
        return noteObject.note * noteObject.credit;
    }
);
// Sumar los elementos de notesWhitCredit.
const sumOfNotesWithCredit = notesWhithCredit.reduce(
    function(sum=0, newVal) {
        return sum + newVal;
    }
)
// Nueva variable asignando los valores del credito.
const credits = notes.map(function(noteObject) {
    return noteObject.credit;
});
// Sumar todos los creditos.
const sumOfCredits = credits.reduce(
    function(sum=0, newVal) {
        return sum + newVal;
    }
);
// Dividir sumOfNotesWithCredit / sumOfCredits.
const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;

//CREANDO FUNCION
function calculandoPromedioPonderado(notes) {
    const notesWithCredit = notes.map(
        function(noteObject) {
            return noteObject.note * noteObject.credit; 
        }
    );
    const sumNotesWithCredit = notesWhithCredit.reduce(
        function(sum=0,newVal) {
            return sum + newVal;
        }
    );
    const credits = notes.map(
        function(noteObject) {
            return noteObject.credit;
        }
    );
    const sumOfCredits = credits.reduce(
        function(suma=0,newVal) {
            return suma + newVal;
        }
    );
    const resultadoPronedioPonderado = sumNotesWithCredit / sumOfCredits;
    return resultadoPronedioPonderado;
}
