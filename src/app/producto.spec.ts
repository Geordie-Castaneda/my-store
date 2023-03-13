import { Producto } from './producto';

describe('Producto', () => {
  it('should create an instance', () => {
    expect(new Producto('Carro','Carro de ultimo modelo', 18000.50, 2)).toBeTruthy();
  });
});
