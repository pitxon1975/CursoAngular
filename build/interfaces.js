function mostrarPersona(pPersona) {
    console.log(pPersona);
}
mostrarPersona({ nombre: 'Rosa', apellido: 'García', edad: 45 });
function mostrarCoche(pCoche) {
    console.log(`Marca: ${pCoche.marca}. Model: ${pCoche.modelo}`);
    if (pCoche.color) {
        console.log(`Color: ${pCoche.color}`);
    }
    else {
        console.log('El coche no tiene color');
    }
}
mostrarCoche({ marca: 'Mercedes', modelo: 'C180' });
let p1 = { x: 121, y: 84 };
const miBusqueda = (v, b) => {
    const result = v.search(b);
    return result > -1;
};
console.log(miBusqueda('hola', 'ala'));
class Adulto {
    constructor(pNombre, pEdad, pCoche) {
        this.coche = pCoche;
        this.edad = pEdad;
        this.nombre = pNombre;
    }
}
