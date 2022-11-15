const suma = require('./suma');

describe('test de la función suma con valores positivos', () => {
    test('sumar 1 + 2 es igual a 3', () => {
        expect(suma(1, 2)).toBe(3);
      });
      
      test('sumar 0 + 0 es igual a 0', () => {
          expect(suma(0, 0)).toBe(0);
      });
});

describe('test de la función suma con valores negativos',() => {
    test('sumar -1 + -1 es igual a -2', () => {
        expect(suma(-1, -1)).toBe(-2)
    });

    describe('test de la función con valores negativos muy grandes', () => {
        test('sumar -1000000 + -2000000 es igual a -3000000', () => {
            expect(suma(-1000000, -2000000)).toBe(-3000000)
        })
    });
});
