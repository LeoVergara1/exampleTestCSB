const { plus, minus, multiply, divide } = require('./operations');

describe('Operaciones matemáticas', () => {
  test('suma de dos números', () => {
    expect(plus(1, 2)).toBe(3);
  });

  test('resta de dos números', () => {
    expect(minus(5, 3)).toBe(2);
  });

  test('multiplicación de dos números', () => {
    expect(multiply(2, 4)).toBe(8);
  });

  test('división de dos números', () => {
    expect(divide(8, 2)).toBe(4);
  });

  test('división por cero', () => {
    expect(divide(5, 0)).toBe(Infinity);
  });
});
