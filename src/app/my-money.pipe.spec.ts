import { MyMoneyPipe } from './my-money.pipe';

describe('MyMoneyPipe', () => {
  it('create an instance', () => {
    const pipe = new MyMoneyPipe();
    expect(pipe).toBeTruthy();
  });
});
