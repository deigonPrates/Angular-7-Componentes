import { Component, ViewChild } from "@angular/core";
import { ModalComponent } from "./modal.component";

@Component({
  template: ''
})

export class Modalable{

  @ViewChild(ModalComponent)
  modalConponent:ModalComponent;


  hide(){
    this.modalConponent.hide();
  }

  show(){
   this.modalConponent.show();
  }

}
