import Carrito from './Carrito.js';

describe('Testing Carrito Class', () => {
    let carrito
    const nigiriItem = {
        name: 'Nigiri',
        price: 1.6
    };
    let watter = {
        name: 'Bottle of watter',
        price: 1
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
        // Manejo de errores en Jest
        it('Should trow an error when adding empty objects to the carrito', () => {
            expect(() => carrito.addItem({})).toThrow();
        });
        // edge Testing
        it('Should trow an error saying "Must be an object" when trying to add a non object', () => {
            expect(() => carrito.addItem('Hello')).toThrow(/must be an object/i);
            expect(() => carrito.addItem(33)).toThrow(/must be an object/i);
            //expect(() => carrito.addItem(new Promise())).toThrow(/must be an object/i);
            expect(() => carrito.addItem(function(){})).toThrow(/must be an object/i);
        });
        
        /*TODO*/it('Should throw an error when trying to add an item without name or price', () => {
            expect(() => carrito.addItem({name: undefined})).toThrow(/must be defined name and price/i);
            expect(() => carrito.addItem({price: undefined})).toThrow(/must be defined name and price/i);
        })
    });

    describe('getTotalCheckout', () => {
        it('Should return 1.6 after adding a nigiriItem', () => {
            carrito.addItem(nigiriItem);
            expect(carrito.getTotalCheckout()).toBeCloseTo(1.6);
        });

        it('Should return 3.2 when adding 2 nigiriItems', () => {
            carrito.addItem(nigiriItem);
            carrito.addItem(nigiriItem);
            expect(carrito.getTotalCheckout()).toBeCloseTo(3.2)
        });

        it('Should return 2.6 when adding 1 nigiriItems and 1 watter', () => {
            carrito.addItem(nigiriItem);
            carrito.addItem(watter);
            expect(carrito.getTotalCheckout()).toBeCloseTo(2.6)
        });

        it('Should return 4.2 when adding 2 nigiriItems and 1 watter', () => {
            carrito.addItem(nigiriItem);
            carrito.addItem(nigiriItem);
            carrito.addItem(watter);
            expect(carrito.getTotalCheckout()).toBeCloseTo(4.2);
        });

    });
    describe.todo('Aplicar TDD para remove item')
    //Pista: debereis modificar el test tambien de addItem para generar un id cuando se añade el item
});
