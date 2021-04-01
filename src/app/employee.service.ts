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

  employee:Employee[] = [];

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

