import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Employee } from '../../../services/employee.service';
import { Modalable } from '../../modal/modalable';

declare const $;

@Component({
  selector: 'employee-edit-modal',
  templateUrl: './employee-edit-modal.component.html',
  styleUrls: ['./employee-edit-modal.component.css']
})
export class EmployeeEditModalComponent extends Modalable implements OnInit {

  @Input()
  employee:Employee;

  @Output()
  Onsubmit: EventEmitter<Employee> =  new EventEmitter<Employee>();

  constructor(private element:ElementRef) {
    super();
  }

  ngOnInit(): void {
  }

  addEmployee(){
    const copy = Object.assign({}, this.employee);
    this.Onsubmit.emit(copy);
    this.hide();
  }

}
