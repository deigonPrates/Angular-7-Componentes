import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeNewModalComponent } from '../employee-new-modal/employee-new-modal.component';
import { Employee, EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employee:Employee;
  showMessageSuccess = false;

  @ViewChild(EmployeeNewModalComponent)
  employeeNewModalComponent:EmployeeNewModalComponent;

  constructor(public employeeService:EmployeeService) {}

  ngOnInit(): void {
  }

  onNewEmployee(employee:Employee){
    this.employee = employee;
    this.showMessageSuccess = true;
  }

  showModal(){
    this.employeeNewModalComponent.show();
  }

  getColorEmployee(employee: Employee){
    let color = '';

    if(employee.salary > 20000){
      color = 'green';
    }else if(employee.salary < 1000){
      color = 'red';
    }
    return color;
  }
}
