// Boolean
let esValido = true;
esValido = false;
// Number
let edad = 12;
// String
let nombre = 'Gustavo';
let apellido = 'López';
let nombre_completo = `${nombre} ${apellido}`;
// Array
let numeros = [12, 3, 45, 67, 89];
let numeros2 = [3, 1, 65, 2];
// Tupla
let sitio = ['casa', 28008];
// Enum
var Estado;
(function (Estado) {
    Estado[Estado["Offline"] = 0] = "Offline";
    Estado[Estado["Indefinido"] = 1] = "Indefinido";
    Estado[Estado["Online"] = 2] = "Online";
})(Estado || (Estado = {}));
let stat = Estado.Online;
console.log(stat);
// Unknown
let sinTipo = 'Hola';
let nuevaCadena = 'esto es otra cadena';
// Any
let tipoindefinido;
// Void
function logger() {
    console.log('Logger');
}
