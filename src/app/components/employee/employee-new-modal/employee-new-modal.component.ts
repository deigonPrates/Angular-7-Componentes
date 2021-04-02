import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Employee, EmployeeService } from '../../../services/employee.service';
import { ModalComponent } from '../../modal/modal.component';

declare const $;

@Component({
  selector: 'employee-new-modal',
  templateUrl: './employee-new-modal.component.html',
  styleUrls: ['./employee-new-modal.component.css']
})
export class EmployeeNewModalComponent implements OnInit {

  employee:Employee =  {
    name: '',
    salary: 0,
    bonus: 0,
  };

  @Output()
  Onsubmit: EventEmitter<Employee> =  new EventEmitter<Employee>();

  @ViewChild(ModalComponent)
  modalComponent:ModalComponent

  constructor(private element:ElementRef, private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  addEmployee(){
    const copy = Object.assign({}, this.employee);
    this.employeeService.addEmployeeService(copy);
    this.Onsubmit.emit(copy);
    this.hide();
  }

  hide(){
    this.modalComponent.hide();
  }

  show(){
   this.modalComponent.show();
  }
}
