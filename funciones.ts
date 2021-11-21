// function sumar(a, b) {
//    return a + b;
// }

const sumar: (a: number, b:number) => number= function(a: number, b: number): number {
    return a + b;
}

const sumar2 = function (a: number, b:number):  number {
    return a + b;
}

const sumar3: (a: number, b:number) => number= function(a, b) {
    return a + b;
}

//Parametros opcionales y valores por defecto
function nombreCompleto(nombre: string, apellido:string=('Gomez')): string{
    if (apellido) return nombre + " " + apellido;
    else return nombre;
}

console.log(nombreCompleto('Pedro'));
console.log(nombreCompleto('Mario', 'Romero'));

// Parámetros REST
function nombreCompleto2 (nombre: string, ...restoNombre: string[]): string {
    return nombre + " " + restoNombre.join(' ');
}

console.log(nombreCompleto2('Ana', 'María', 'Dolores', 'García', 'Santos'));