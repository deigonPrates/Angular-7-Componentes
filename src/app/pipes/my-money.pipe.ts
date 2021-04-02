import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMoney'
})
export class MyMoneyPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  }

}
