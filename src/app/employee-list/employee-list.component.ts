import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(public employeeService:EmployeeService) { }

  ngOnInit(): void {
  }

  getColorEmployee(employee){
    return (employee.salary > 20000) ? 'green' : null;
  }
}
