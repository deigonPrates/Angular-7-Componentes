import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeNewModalComponent } from '../employee-new-modal/employee-new-modal.component';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  @ViewChild(EmployeeNewModalComponent)
  employeeNewModalComponent:EmployeeNewModalComponent;

  constructor(public employeeService:EmployeeService) {}

  ngOnInit(): void {
  }

  showModal(){
    this.employeeNewModalComponent.show();
  }

  getColorEmployee(employee){
    return (employee.salary > 20000) ? 'green' : null;
  }
}
