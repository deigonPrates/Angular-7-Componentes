import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee, EmployeeService } from '../employee.service';

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
    const divModal = this.getDivModal();
    $(divModal).modal('hide');
  }

  show(){
    const divModal = this.getDivModal();
    $(divModal).modal('show');
  }

  private getDivModal():HTMLElement{
    const nativeElement:HTMLElement = this.element.nativeElement;
    return nativeElement.firstChild as HTMLElement;
  }

}
