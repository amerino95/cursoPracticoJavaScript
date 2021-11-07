const cuponesActivos = ["cuponA", "cuponB", "cuponC"];

function calcularPrecioConDescuento(precio,descuento) {
  const precioOriginal = precio;
  const porcentajePagar = 100 - descuento;
  const precioPagar = precioOriginal * porcentajePagar / 100;
  return precioPagar;
}

// function botonCalcularPrecioPagar() {
//   const precioIngresado = document.getElementById("PrecioIngresado");
//   const valorPrecioIngresado = precioIngresado.value;
//   const descuentoIngresado = document.getElementById("DescuentoIngresado");
//   const valorDescuentoIngresado = descuentoIngresado.value;
//   const precioPagar = calcularPrecioConDescuento(valorPrecioIngresado,valorDescuentoIngresado);
//   const precioFinal = document.getElementById("PrecioFinal");
//   precioFinal.innerText = `El precio a pagar es ${precioPagar}`;
// }

function botonCalcularPrecioPagar() {
  const precioIngresado = document.getElementById("PrecioIngresado");
  const valorPrecioIngresado = precioIngresado.value;
  const cuponIngresado = document.getElementById("CuponIngresado");
  const valorCuponIngresado = cuponIngresado.value;

  let descuento;

  switch(valorCuponIngresado) {
    case cuponesActivos[0]:
      descuento = 10;
      break;
    case cuponesActivos[1]:
      descuento = 20;
      break;
    case cuponesActivos[2]:
      descuento = 30;
      break;
    default:
      descuento = 0;
      break;
  }
  
  if(descuento === 0) {
    return alert("CUPON INVALIDO");
  } else {
    const precioFinal = calcularPrecioConDescuento(valorPrecioIngresado,descuento);
    const imprimirResultado = document.getElementById("PrecioFinal");
    return imprimirResultado.innerText = `El total con descuento a pagar es ${precioFinal}`;
  }
}
