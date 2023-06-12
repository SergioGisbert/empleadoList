import { Component } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent {
  listEmpleado: Empleado[] = [
    {legajo: 1, nombre: 'Juan', apellido: 'Perez', sexo: 'Masculino', salario: 25000},
    {legajo: 2, nombre: 'Marta', apellido: 'Soler', sexo: 'Femenino', salario: 27000},
    {legajo: 3, nombre: 'David', apellido: 'Blasco', sexo: 'Masculino', salario: 20000},
    {legajo: 4, nombre: 'Marina', apellido: 'Garcia', sexo: 'Femenino', salario: 30000},
    {legajo: 5, nombre: 'Lucia', apellido: 'Carmona', sexo: 'Femenino', salario: 26000},
    {legajo: 4, nombre: 'Mario', apellido: 'Silvestre', sexo: 'Masculino', salario: 21000},
    {legajo: 5, nombre: 'Miriam', apellido: 'Pedrosa', sexo: 'Femenino', salario: 19000}
  ]

  radioButtonSeleccionado= 'Todos';

  obtenerTotalEmpleados(): number{
    return this.listEmpleado.length;
  }

  obtenerTotalFemeninos():number{
    return this.listEmpleado.filter(list => list.sexo === 'Femenino').length;
  }

  obtenerTotalMasculinos():number{
    return this.listEmpleado.filter(list => list.sexo === 'Masculino').length;
  }
  empleadoCountRadioButtonChange(radioButtonSeleccionado: string):void{
   this.radioButtonSeleccionado = radioButtonSeleccionado;
  }
}
