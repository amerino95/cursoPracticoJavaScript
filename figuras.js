// Funciones Cuadrado
console.group("Cuadrado")
function perimetroCuadrado(lado) {
    return lado * 4;
}
function areaCuadrado(lado) {
    return lado * lado;
}
console.groupEnd()

// triangulo
console.group("Triangulo")
function perimetroTriangulo(ladoTriangulo1,ladoTriangulo2,baseTriangulo) {
    return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
}
function areaTriangulo(baseTriangulo, alturaTriangulo) {
    return (baseTriangulo * alturaTriangulo)  / 2;
}
console.groupEnd()

// Funciones Circulo
console.group("Circulo")
const PI = Math.PI;
function diametroCirculo(radioCirculo) {
    return radioCirculo * 2;
}
function perimetroCirculo(radioCirculo) {
    let diametroCirculo = radioCirculo * 2;
    return diametroCirculo * PI;
}
function areaCirculo(radioCirculo) {
    return (radioCirculo * radioCirculo) * PI;
}
console.groupEnd()

// Input Cuadrado
function CalcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const values = input.value;
    const perimetro = perimetroCuadrado(values);
    alert(perimetro);
}
function CalcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

// Input Triangulo
function CalcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTrianguloLado1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTrianguloLado2");
    const value2 = Number(input2.value);
    const base = document.getElementById("InputTrianguloBase");
    const value3 = Number(base.value);
    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert(perimetro);
}
function CalcularAreaTriangulo() {
    const input1 = document.getElementById("InputTrianguloBase");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTrianguloAltura");
    const value2 = Number(input2.value);
    const area = areaTriangulo(value1,value2);
    alert(area);
}

// Input Circulo

function calcularDiametroCirculo() {
    const radio = document.getElementById("inputRadioCirculo");
    const valorRadio = radio.value;
    const diametro = valorRadio * 2;
    alert(diametro);
}
function calcularPerimetroCirculo() {
    const radio = document.getElementById("inputRadioCirculo");
    const valorRadio = radio.value;
    const perimetro = perimetroCirculo(valorRadio);
    alert(perimetro);
}
function calcularAreaCirculo() {
    const radio = document.getElementById("inputRadioCirculo");
    const valorRadio = radio.value;
    const area = areaCirculo(valorRadio);
    alert(area);
}
function verifarTrianguloIsosceles(lado1,lado2,lado3) {
    
}

// function alturaTriangulo(lado, base) {
//     const resultadoLado = lado * lado;
//     const resultadoBase = (base * base) / 4;
//     const resultadoResta = resultadoLado - resultadoBase;
//     const altura = Math.sqrt(resultadoResta);
//     return altura;
// }
// function calcularAlturaTriangulo() {
//     const lado = document.getElementById("inputTrianguloLadoCongruente");
//     const valorLado = lado.value;
//     const base = document.getElementById("inputTrianguloBase");
//     const valorBase = base.value;
//     const altura = alturaTriangulo(valorLado,valorBase);
//     alert(altura);
// }

// RETO
// Crear una funcion para calcular la altura de un trinagulo isosceles.
// 1 - La funcion debe recibir, como parametros, la longitud de los 3 lados del tringulo.
// 2 - La funcion debe validar que la longitud de los 3 lados del trinagulo correspondan a un triangulo isosceles.
// La funcion debe retornar la altura del triangulo.
function altura(lado1,lado2,base) {
    if(lado1  === lado2 && lado1 != base) {
        alert("Triangulo Isosceles");
        const altura = Math.sqrt(lado1**2 - base**2 / 2);
        alert(altura);
    } else {
        alert("No es Isosceles");
    }
} 
function calcularAlturaIsosceles() {
    const longitudLado1 = document.getElementById("longitudLado1");
    const longitudLado1Value = longitudLado1.value;
    const longitudLado2 = document.getElementById("longitudLado2");
    const longitudLado2Value = longitudLado2.value;
    const longitudLado3 = document.getElementById("longitudLado3");
    const longitudLado3Value = longitudLado3.value;
    return altura(longitudLado1Value,longitudLado2Value,longitudLado3Value);
}