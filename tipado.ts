// Boolean
let esValido: boolean = true;
esValido = false;


// Number
let edad: number = 12;

// String
let nombre: string = 'Gustavo';
let apellido: string = 'López';

let nombre_completo: string = `${nombre} ${apellido}`;

// Array
let numeros: number[] = [12, 3, 45, 67, 89];
let numeros2: Array<number> = [3, 1, 65, 2];


// Tupla
let sitio: [string, number] = ['casa', 28008];

// Enum
enum Estado {
    Offline,
    Indefinido,
    Online
}

let stat: Estado = Estado.Online
console.log(stat);


// Unknown
let sinTipo: unknown = 'Hola';

let nuevaCadena: string = 'esto es otra cadena';

// Any
let tipoindefinido: any;

// Void
function logger(): void {
    console.log('Logger');
}

