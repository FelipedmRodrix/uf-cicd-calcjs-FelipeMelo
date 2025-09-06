const { add, subtract, multiply, divide, power } = require('./calculadora');

describe('Funções Matemáticas Básicas', () => {
  test('Deve adicionar dois números corretamente', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(-1, 1)).toBe(0);
  });

  test('Deve subtrair dois números corretamente', () => {
    expect(subtract(5, 2)).toBe(3);
    expect(subtract(10, 20)).toBe(-10);
  });

  test('Deve multiplicar dois números corretamente', () => {
    expect(multiply(3, 4)).toBe(12);
    expect(multiply(-3, 4)).toBe(-12);
  });

  test('Deve dividir dois números corretamente', () => {
    expect(divide(10, 2)).toBe(5);
    expect(divide(9, 3)).toBe(3);
  });

  test('Deve lançar erro ao tentar dividir por zero', () => {
    expect(() => divide(10, 0)).toThrow('Divisão por zero não é permitida.');
  });

  test('Deve calcular a potenciação corretamente', () => {
    expect(power(2, 3)).toBe(8);
    expect(power(5, 2)).toBe(25);
    expect(power(3, 0)).toBe(1);
    expect(power(7, -1)).toBeCloseTo(0.142857, 6);
  });
});
