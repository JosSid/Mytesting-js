import { v4 as uuidv4 } from 'uuid';

module.exports = class Carrito {

    constructor(){
        this.items = []
    }

    getTotalItems(){
        return this.items.length;
    };

    addItem(item){
        this.checkItem(item)
        const id = uuidv4();
        const addItem = {id, ...item}
        this.items.push(addItem);
        
    };

    checkItem(item) {
        if(typeof item === 'object' && Object.keys(item).length === 0) {
            throw new Error('Item cannot be an empty object')
        } else if(typeof item !== 'object') {
            throw new Error('Must be an object')
        }else if(!item.name || !item.price){
            throw new Error('must be defined name and price')
        }
    };

    getTotalCheckout() {
        return this.items.reduce((prev, curr) => prev + curr.price, 0)
    };

    removeItem(item) {
       this.items = this.items.filter(e => e.id !== item.id)
    }
};