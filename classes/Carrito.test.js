import Carrito from './Carrito.js';

describe('Testing Carrito Class', () => {
    describe('getTotalItems', () => {
        it('Should return 0 items at initialization', () => {
            const carrito = new Carrito();
            expect(carrito.getTotalItems()).toEqual(0);
        });

        it('Should return 1 item after adding 1 product', () => {
            const carrito = new Carrito()
            carrito.addItem({
                name: 'Nigiri',
                price: 1.6
            });
            expect(carrito.getTotalItems()).toEqual(1);
        });
    });

    describe('addItem', () => {
        it('Should have the item added in the Carrito', () => {
            const carrito = new Carrito();
            carrito.addItem({
                name: 'Nigiri',
                price: 1.6
            });
            expect(carrito.items).toContainEqual(
                {
                    name: 'Nigiri',
                    price: 1.6
                }
            )
        });
    });
});
