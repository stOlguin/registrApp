export interface User {
    id:number;
    correo:string;
    password:string;
    rut: number;
}

export interface Alumno {
    id?: String;
    rut: string;
    nombre: string;
    apellidop: string;
    apellidom: string;
}

export interface Codigo{
    id: string;
}