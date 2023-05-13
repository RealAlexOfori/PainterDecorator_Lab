const PaintCan = function(numberOfLitres){
    this.numberOfLitres = numberOfLitres

}

PaintCan.prototype.isEmpty = function(){
    return !this.numberOfLitres;
}


PaintCan.prototype.empty = function(){
    return this.numberOfLitres = 0;
}

module.exports = PaintCan;