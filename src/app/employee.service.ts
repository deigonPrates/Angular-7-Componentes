import { Injectable } from '@angular/core';

export interface Employee{
  name:string;
  salary:number;
  bonus:number
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employee:Employee[] = [
    {
      'name': 'Edson Martin Marcelo',
      'salary': 1870,
      'bonus': 100
    },
    {
      'name': 'Guilherme Henrique Kevin Corte Real',
      'salary': 1300,
      'bonus': 330
    },
    {
      'name': 'Rebeca Mirella Duarte',
      'salary': 2400,
      'bonus': 0
    },
    {
      'name': 'Adriana Vanessa Melissa',
      'salary': 1200,
      'bonus': 400
    }
  ];

  constructor() { }

  addEmployeeService(employee){
    employee.bonus = (employee.salary > 1000) ? 0 : employee.bonus;
    this.employee.push(employee);
  }

  destroy(employee:Employee){
    const index = this.employee.indexOf(employee);
    this.employee.splice(index,1);
  }

}

