interface Persona{
    nombre: string;
    apellido: string;
    edad: number;
}

function mostrarPersona(pPersona: Persona) {
    console.log(pPersona);
}

mostrarPersona({ nombre: 'Rosa', apellido: 'García', edad: 45});

// Propiedades opcionales
interface Coche{
    marca: string;
    modelo: string;
    color?: string;
}

function mostrarCoche(pCoche: Coche) {
    console.log(`Marca: ${pCoche.marca}. Model: ${pCoche.modelo}`);
    if (pCoche.color) {
        console.log(`Color: ${pCoche.color}`);
    } else {
        console.log('El coche no tiene color');
    }
}

mostrarCoche({ marca: 'Mercedes', modelo: 'C180'});

// Propiedades de solo lectura
interface Punto{
    readonly x: number;
    readonly y: number;
}

let p1: Punto = { x: 121, y: 84};

// Definir una funcion
interface Busqueda{
    (valor: string, buscar: string): boolean;
}

const miBusqueda: Busqueda = (v: string, b: string): boolean => {
    const result = v.search(b);
    return result > -1;
}

console.log(miBusqueda('hola', 'ala'));

// Interface en una clase
interface Humano{
    nombre: string;
    edad: number;
}

class Adulto implements Humano{
    nombre:string;
    edad: number;
    coche: boolean;

    constructor(pNombre: string, pEdad: number, pCoche: boolean) {
        this.coche = pCoche;
        this.edad = pEdad;
        this.nombre = pNombre;
    }
}