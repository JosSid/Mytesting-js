import Carrito from './Carrito.js';

describe('Testing Carrito Class', () => {
    let carrito
    const nigiriItem = {
        name: 'Nigiri',
        price: 1.6
    }
    //Hook de jest para que instancoie un carrito para cada test
    beforeEach(() => {
        carrito = new Carrito()
    });

    describe('getTotalItems', () => {
        it('Should return 0 items at initialization', () => {
            expect(carrito.getTotalItems()).toEqual(0);
        });

        it('Should return 1 item after adding 1 product', () => {
            carrito.addItem(nigiriItem);
            expect(carrito.getTotalItems()).toEqual(1);
        });
    });

    describe('addItem', () => {
        
        beforeEach(() => {
            carrito.addItem(nigiriItem);
        });

        it('Should have the item added in the Carrito', () => {
            expect(carrito.items).toContainEqual(nigiriItem)
        });

        it('Should not contain an empty object when adding a nigiriItem', () => {
            expect(carrito.items).not.toContainEqual({})
        });
    });
});
