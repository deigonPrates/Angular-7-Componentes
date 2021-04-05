import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeDeleteModalComponent } from '../employee-delete-modal/employee-delete-modal.component';
import { EmployeeEditModalComponent } from '../employee-edit-modal/employee-edit-modal.component';
import { EmployeeNewModalComponent } from '../employee-new-modal/employee-new-modal.component';
import { Employee, EmployeeService } from '../../../services/employee.service';
import { ToastComponent } from '../../toast/toast.component';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employee:Employee;
  employeeEdit:Employee;
  employeeDelete:Employee;

  showMessageSuccess = false;

  @ViewChild(EmployeeNewModalComponent)
  employeeNewModalComponent:EmployeeNewModalComponent;

  @ViewChild(EmployeeEditModalComponent)
  employeeEditModalComponent:EmployeeEditModalComponent


  @ViewChild(EmployeeDeleteModalComponent)
  employeeDeleteModalComponent:EmployeeDeleteModalComponent



  @ViewChild(ToastComponent)
  toastComponent:ToastComponent

  constructor(public employeeService:EmployeeService) {}

  ngOnInit(): void {
  }

  onNewEmployee(employee:Employee){
    this.toastComponent.setContent('Criado', `<strong>${employee.name}</strong> Foi cadastrado com sucesso!`);
  }

  onEditEmployee(employee:Employee){
    this.toastComponent.setContent('Editado', `<strong>${employee.name}</strong> Foi editado com sucesso!`);
  }

  onDeleteEmployee(employee:Employee){
    this.toastComponent.setContent('Deletado', `<strong>${employee.name}</strong> Foi removido com sucesso!`);
  }

  showEditModal(employee:Employee){
    this.employeeEdit = employee;
    this.employeeEditModalComponent.show();
  }

  showDeleteModal(employee:Employee){
    this.employeeDelete = employee;
    this.employeeDeleteModalComponent.show();
  }

  showModal(){
    this.employeeNewModalComponent.show();
  }

  getColorEmployee(employee: Employee){
    let color = '';

    if(employee.salary > 20000){
      color = 'green';
    }else if(employee.salary < 1000){
      color = 'red';
    }
    return color;
  }
}
