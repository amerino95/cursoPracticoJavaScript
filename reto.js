/*
Web donde ingresando un monto base se calcule el igv 18%, tambien el total que es la suma del monto base y su igv.
*/
function calcularIgv() {
    const montoBase = Number(document.getElementById("montoBase").value);
    const igv = (montoBase * 18) / 100;
    const total = montoBase + igv;
    return document.getElementById("igv").value = igv,
    document.getElementById("total").value = total
}
