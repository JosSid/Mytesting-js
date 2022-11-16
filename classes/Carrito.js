module.exports = class Carrito {

    constructor(){
        this.items = []
    }

    getTotalItems(){
        return this.items.length;
    };

    addItem(item){
        if(typeof item === 'object' && Object.keys(item).length === 0) {
            throw new Error('Item cannot be an empty object')
        } else if(typeof item !== 'object') {
            throw new Error('Must be an object')
        }else if(!item.name || !item.price){
            throw new Error('must be defined name and price')
        }
        this.items.push(item);
    };

    getTotalCheckout() {
        return this.items.reduce((prev, curr) => prev + curr.price, 0)
    };
};