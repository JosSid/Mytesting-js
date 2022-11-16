module.exports = class Carrito {

    constructor(){
        this.items = []
    }

    getTotalItems(){
        return this.items.length;
    };

    addItem(item){
        this.items.push(item);
    };
}