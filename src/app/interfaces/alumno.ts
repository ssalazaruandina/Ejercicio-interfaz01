export interface Alumno{
    codigo:string,
    dni: string,
    nombre: string,
    apellido: string,
    contrasenia: string,
    nota: number
}

export let listaAlumnos: Alumno[] = [
    {
        codigo: "018101931J",
        dni: "70546723",
        nombre: "Shande",
        apellido: "Pantoja Puma",
        contrasenia: "pantojita123",
        nota: 0
    },
    {
        codigo: "019101932K",
        dni: "70546723",
        nombre: "Patricio",
        apellido: "Pepe",
        contrasenia: "pepito123",
        nota: 0
    },
    {
        codigo: "017101933L",
        dni: "70546723",
        nombre: "Sideral",
        apellido: "Carrion",
        contrasenia: "bebita123",
        nota: 0
    },
    {
        codigo: "019101934H",
        dni: "70546723",
        nombre: "El patito",
        apellido: "Juan",
        contrasenia: "juancito123",
        nota: 0
    },
    {
        codigo: "020101935V",
        dni: "70546723",
        nombre: "Pepe",
        apellido: "Perez",
        contrasenia: "perez123",
        nota: 0
    },
    {
        codigo: "0191019312",
        dni: "70546723",
        nombre: "Luis",
        apellido: "Lucho",
        contrasenia: "luchito123",
        nota: 0
    }
];