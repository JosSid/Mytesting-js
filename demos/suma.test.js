import suma from './suma';

describe('un test más', () => {
    it('should be 0 if both of values are like a and -a', () => {
        expect(suma(3, -3)).toBe(0);
        expect(suma(8, -8)).toBe(0);
    });
});

describe('tiene que dar error con un solo parametro', () => {
    it('should return NaN with only one input param', () => {
        expect(suma(3)).toBeNaN();
    });
    it('should return NaN with only one input param', () => {
        expect(suma(3, undefined)).toBeNaN();
    });


});

describe('tiene que dar error con un solo parametro', () => {
    it('should return NaN with only one input param', () => {
        expect(suma(3)).toBeNaN();
    });
    it('should return NaN with only one input param', () => {
        expect(suma(3, undefined)).toBeNaN();
    });
});

describe('Ejemplos malos de test', () => {
    it('test A', () => {
        expect(suma(3,4)).toBe(7);
    });;
});

describe('test de la función suma con valores positivos', () => {
    test('sumar 1 + 2 es igual a 3', () => {
        expect(suma(1, 2)).toBe(3);
      });
      
      test('sumar 0 + 0 es igual a 0', () => {
          expect(suma(0, 0)).toBe(0);
      });

      test.todo('sumar 3.4 mas 3.0 es igual a 6.4')
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
