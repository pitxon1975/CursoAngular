// function sumar(a, b) {
//    return a + b;
// }
const sumar = function (a, b) {
    return a + b;
};
const sumar2 = function (a, b) {
    return a + b;
};
const sumar3 = function (a, b) {
    return a + b;
};
//Parametros opcionales y valores por defecto
function nombreCompleto(nombre, apellido = ('Gomez')) {
    if (apellido)
        return nombre + " " + apellido;
    else
        return nombre;
}
console.log(nombreCompleto('Pedro'));
console.log(nombreCompleto('Mario', 'Romero'));
