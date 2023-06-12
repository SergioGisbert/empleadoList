export class Empleado{
    legajo: number;
    nombre: string;
    apellido:string;
    sexo: string;
    salario: number;

    constructor(leajo:number, nombre: string, apellido: string, sexo: string, salario: number){
        this.legajo = leajo;
        this.nombre = nombre;
        this.apellido = apellido;
        this.sexo = sexo;
        this.salario = salario;
    }

}