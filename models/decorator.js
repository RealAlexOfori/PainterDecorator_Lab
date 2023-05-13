const Decorator = function() {
    this.paintStock = []
}

Decorator.prototype.addPaint = function(paint){
   return this.paintStock.push(paint)
}

Decorator.prototype.sumTotal = function(){
    let total = 0;

    for (const paint of this.paintStock){
    total += paint.numberOfLitres
    }
   return total;
}

Decorator.prototype.enoughPaintForRoom = function(){
    if (this.numberOfLitres >= this.areaOfRoom);
    return true 
}

module.exports = Decorator;