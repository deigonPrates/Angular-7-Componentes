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
      'name': 'Deigon Prates',
      'salary': 1000,
      'bonus': 0
    },
    {
      'name': 'Cimara',
      'salary': 2000,
      'bonus': 0
    },
  ];

  constructor() { }

  addEmployeeService(employee){
    employee.bonus = (employee.salary > 1000) ? 0 : employee.bonus;
    this.employee.push(employee);
  }

}

