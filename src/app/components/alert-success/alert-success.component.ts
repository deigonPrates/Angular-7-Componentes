import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alert-success',
  template: `<div class="alert alert-success alert-dismissible fade show" role="alert">
                <ng-content></ng-content>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
            </div>`
})
export class AlertSuccessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
