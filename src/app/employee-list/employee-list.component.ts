import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeEditModalComponent } from '../employee-edit-modal/employee-edit-modal.component';
import { EmployeeNewModalComponent } from '../employee-new-modal/employee-new-modal.component';
import { Employee, EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employee:Employee;
  employeeEdit:Employee;

  showMessageSuccess = false;

  @ViewChild(EmployeeNewModalComponent)
  employeeNewModalComponent:EmployeeNewModalComponent;

  @ViewChild(EmployeeEditModalComponent)
  employeeEditModalComponent:EmployeeEditModalComponent

  constructor(public employeeService:EmployeeService) {}

  ngOnInit(): void {
  }

  onNewEmployee(employee:Employee){
    this.employee = employee;
    this.showMessageSuccess = true;
  }

  onEditEmployee(employee:Employee){
    console.log(employee);
  }

  showEditModal(employee:Employee){
    this.employeeEdit = employee;
    this.employeeEditModalComponent.show();
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
