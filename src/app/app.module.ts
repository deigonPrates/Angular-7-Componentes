import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}  from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { EmployeeNewComponent } from './components/employee/employee-new/employee-new.component';
import { SalaryColorDirective } from './directives/salary-color.directive';
import { EmployeeNewModalComponent } from './components/employee/employee-new-modal/employee-new-modal.component';
import { AlertSuccessComponent } from './components/alert-success/alert-success.component';
import { EmployeeEditModalComponent } from './components/employee/employee-edit-modal/employee-edit-modal.component';
import { EmployeeDeleteModalComponent } from './components/employee/employee-delete-modal/employee-delete-modal.component';
import { MyMoneyPipe } from './pipes/my-money.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { ToastComponent } from './components/toast/toast.component';

@NgModule({
  declarations: [
    AlertSuccessComponent,
    AppComponent,
    EmployeeEditModalComponent,
    EmployeeListComponent,
    EmployeeNewComponent,
    EmployeeNewModalComponent,
    SalaryColorDirective,
    EmployeeDeleteModalComponent,
    MyMoneyPipe,
    ModalComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
