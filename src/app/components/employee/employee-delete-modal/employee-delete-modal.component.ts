import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Employee, EmployeeService } from '../../../services/employee.service';
import { Modalable } from '../../modal/modalable';

declare const $;

@Component({
  selector: 'employee-delete-modal',
  templateUrl: './employee-delete-modal.component.html',
  styleUrls: ['./employee-delete-modal.component.css']
})
export class EmployeeDeleteModalComponent extends Modalable implements OnInit {

  @Input()
  employee:Employee;


  @Output()
  OnDelete: EventEmitter<Employee> =  new EventEmitter<Employee>();

  constructor(private employeeService:EmployeeService) {
    super();
  }

  ngOnInit(): void {
  }

  destroy(employee:Employee){
    const copy = Object.assign({}, employee)
    this.employeeService.destroy(employee);
    this.OnDelete.emit(copy);
    this.hide();
  }

}
