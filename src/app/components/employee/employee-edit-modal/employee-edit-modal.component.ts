import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Employee } from '../../../services/employee.service';
import { ModalComponent } from '../../modal/modal.component';

declare const $;

@Component({
  selector: 'employee-edit-modal',
  templateUrl: './employee-edit-modal.component.html',
  styleUrls: ['./employee-edit-modal.component.css']
})
export class EmployeeEditModalComponent implements OnInit {

  @Input()
  employee:Employee;

  @Output()
  Onsubmit: EventEmitter<Employee> =  new EventEmitter<Employee>();

  @ViewChild(ModalComponent)
  modalConponent:ModalComponent

  constructor(private element:ElementRef) { }

  ngOnInit(): void {
  }

  addEmployee(){
    const copy = Object.assign({}, this.employee);
    this.Onsubmit.emit(copy);
    this.hide();
  }

  hide(){
    this.modalConponent.hide();
  }

  show(){
   this.modalConponent.show();
  }

}
