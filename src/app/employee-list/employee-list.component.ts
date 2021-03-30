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

  constructor(public employeeService:EmployeeService) {
    console.log(this.employeeNewModalComponent);
    setTimeout(() =>{
      console.log(this.employeeNewModalComponent);
      this.employeeNewModalComponent.show();
    }, 2000);
   }

  ngOnInit(): void {
  }

  getColorEmployee(employee){
    return (employee.salary > 20000) ? 'green' : null;
  }
}
