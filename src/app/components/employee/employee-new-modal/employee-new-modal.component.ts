import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Employee, EmployeeService } from '../../../services/employee.service';
import { Modalable } from '../../modal/modalable';

declare const $;

@Component({
  selector: 'employee-new-modal',
  templateUrl: './employee-new-modal.component.html',
  styleUrls: ['./employee-new-modal.component.css']
})
export class EmployeeNewModalComponent extends Modalable implements OnInit {

  employee:Employee =  {
    name: '',
    salary: 0,
    bonus: 0,
  };

  @Output()
  Onsubmit: EventEmitter<Employee> =  new EventEmitter<Employee>();

  constructor(private employeeService: EmployeeService) {
    super();
   }

  ngOnInit(): void {
  }

  addEmployee(){
    const copy = Object.assign({}, this.employee);
    this.employeeService.addEmployeeService(copy);
    this.Onsubmit.emit(copy);
    this.hide();
  }

}
