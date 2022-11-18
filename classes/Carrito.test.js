import Carrito from './Carrito.js';

describe('Testing Carrito Class', () => {
    let carrito
    const nigiriItem1 = {
        id: '000000',
        name: 'Nigiri',
        price: 1.6
    };
    const nigiriItem2 = {
        id: '111111',
        name: 'Nigiri',
        price: 1.6
    };
    let watter = {
        id: '222222',
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
            carrito.addItem(nigiriItem1);
            expect(carrito.getTotalItems()).toEqual(1);
        });
    });

    describe('addItem', () => {
        
        beforeEach(() => {
            carrito.addItem(nigiriItem1);
        });

        it('Should have the item added in the Carrito', () => {
            expect(carrito.items).toContainEqual(nigiriItem1)
        });

        it('Should not contain an empty object when adding a nigiriItem', () => {
            expect(carrito.items).not.toContainEqual({})
        });

    });

    describe('checkItem', () => {
        beforeEach(() => {
            carrito.addItem(nigiriItem1);
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
                
                it('Should throw an error when trying to add an item without name or price', () => {
                    expect(() => carrito.addItem({name: undefined})).toThrow(/must be defined name and price/i);
                    expect(() => carrito.addItem({price: undefined})).toThrow(/must be defined name and price/i);
                    expect(() => carrito.addItem({id: undefined})).toThrow(/must be defined name and price/i);
                });

                it('Should check an item before adding', () => {
                    //El espia nos da observabilidad sobre lo que pasa en la funcion
                    const spy = jest.spyOn(carrito, 'checkItem');
                    //si llamamos a addItem
                    carrito.addItem(nigiriItem1)
                    //Entonces checkItem, la funcion espiada, tiene que ser invocada
                    expect(spy).toHaveBeenCalled();
                    //el input tiene que ser el mismo de addItem
                    expect(spy).toHaveBeenCalledWith(nigiriItem1);
                     //Tiene que haber sido llamada 1 única vez
                    expect(spy).toHaveBeenCalledTimes(1);

                });
    });

    describe('getTotalCheckout', () => {
        it('Should return 1.6 after adding a nigiriItem', () => {
            carrito.addItem(nigiriItem1);
            expect(carrito.getTotalCheckout()).toBeCloseTo(1.6);
        });

        it('Should return 3.2 when adding 2 nigiriItems', () => {
            carrito.addItem(nigiriItem1);
            carrito.addItem(nigiriItem2);
            expect(carrito.getTotalCheckout()).toBeCloseTo(3.2)
        });

        it('Should return 2.6 when adding 1 nigiriItems and 1 watter', () => {
            carrito.addItem(nigiriItem1);
            carrito.addItem(watter);
            expect(carrito.getTotalCheckout()).toBeCloseTo(2.6)
        });

        it('Should return 4.2 when adding 2 nigiriItems and 1 watter', () => {
            carrito.addItem(nigiriItem1);
            carrito.addItem(nigiriItem2);
            carrito.addItem(watter);
            expect(carrito.getTotalCheckout()).toBeCloseTo(4.2);
        });

    });

    describe('removeItem', () => {
        it('Should return items.length === 0 when adding 1 nigiriItem and remove this nigiriItem', () => {
            carrito.addItem(nigiriItem1);
            carrito.removeItem(nigiriItem1);
            expect(carrito.items).toBeArrayOfSize(0);
        });
        it('Should return  [watter] when adding a nigiriItem and a watter and remove nigiriItem', () => {
            carrito.addItem(nigiriItem1);
            carrito.addItem(watter);
            carrito.removeItem(nigiriItem1);
            expect(carrito.items).toEqual([watter]);
        });
        it('Should return  [nigiriItem,watter] when adding 2 nigiriItems and a watter and remove 1 nigiriItem', () => {
            carrito.addItem(nigiriItem1);
            carrito.addItem(nigiriItem2);
            carrito.addItem(watter);
            carrito.removeItem(nigiriItem1);
            expect(carrito.items).toEqual([nigiriItem2, watter]);
        })
        //Pista: debereis modificar el test tambien de addItem para generar un id cuando se añade el item
    })

});
