import { Component, ElementRef, OnInit } from '@angular/core';

declare const $;

@Component({
  selector: 'toast',
  template: `
    <div class="d-toast">
      <div class="toast hide" role="alert" aria-live="assertive" aria-atomic="true" data-delay="2000000000">
        <div class="toast-header mb-2 bg-success text-white">
          <strong class="mr-auto"></strong>
          <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="toast-body">
        </div>
      </div>
    </div>
  `,
  styles: [
    '.d-toast{position:absolute;top:0;right:0;min-width:200px}'
  ]
})

export class ToastComponent implements OnInit {

  private nativeElement: HTMLElement;

  constructor(private element:ElementRef) {
    this.nativeElement = this.element.nativeElement;
   }

  ngOnInit(): void {
  }

  setContent(title:string, body:string):void{
    this.nativeElement.querySelector('.mr-auto').innerHTML = title;
    this.nativeElement.querySelector('.toast-body').innerHTML = body;

    this.show();
  }

  private show(){
    $(this.divToast).toast('show');
  }

  private hide(){
    $(this.divToast).toast('hide');
  }


  private get divToast():HTMLElement{
    const nativeElement:HTMLElement = this.element.nativeElement;
    return nativeElement.firstChild.firstChild as HTMLElement;
  }

}
