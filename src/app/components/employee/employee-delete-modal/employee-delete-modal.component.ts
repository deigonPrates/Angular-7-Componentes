import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Employee, EmployeeService } from '../../../services/employee.service';
import { ModalComponent } from '../../modal/modal.component';

declare const $;

@Component({
  selector: 'employee-delete-modal',
  templateUrl: './employee-delete-modal.component.html',
  styleUrls: ['./employee-delete-modal.component.css']
})
export class EmployeeDeleteModalComponent implements OnInit {

  @Input()
  employee:Employee;


  @Output()
  OnDelete: EventEmitter<Employee> =  new EventEmitter<Employee>();

  @ViewChild(ModalComponent)
  modalComponent:ModalComponent

  constructor(private element:ElementRef, private employeeService:EmployeeService) { }

  ngOnInit(): void {
  }

  destroy(employee:Employee){
    const copy = Object.assign({}, employee)
    this.employeeService.destroy(employee);
    this.OnDelete.emit(copy);
    this.hide();
  }

  hide(){
    this.modalComponent.hide();
  }

  show(){
    this.modalComponent.show();
  }

}
