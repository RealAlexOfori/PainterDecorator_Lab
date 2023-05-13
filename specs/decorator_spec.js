const assert = require('assert');
const PaintCan = require('../models/paintcan.js');
const Room = require('../models/room.js');
const Decorator = require('../models/decorator.js');

describe ('Decorator', function(){

    let paints 
    let duluxcan
    let crowncan
    let azarcan
    let sikkenscan
    let room

    beforeEach(function(){
     duluxcan = new PaintCan(5)
     crowncan = new PaintCan(5)
     azarcan = new PaintCan(5)
     sikkenscan = new PaintCan(0)
     room = new Room(10)
     paints = [duluxcan, crowncan, azarcan, sikkenscan]

     decorator = new Decorator() 

    });

    it('should start with an empty paint stock', function(){
        const actual = decorator.paintStock
        assert.deepStrictEqual(actual, [])
    });

    it('should be able to add a can of paint to stock', function(){
        decorator.addPaint(duluxcan)
        const actual = decorator.paintStock
        assert.deepStrictEqual(actual, [duluxcan])
    });

    it('should be able to add several paint to stock', function(){
        decorator.addPaint(duluxcan)
        decorator.addPaint(crowncan)
        decorator.addPaint(azarcan)
        const actual = decorator.paintStock
        assert.deepStrictEqual(actual, [duluxcan, crowncan, azarcan])
    });

    it('should be able to calculate total litres paint it has in stock', function(){
        decorator.addPaint(duluxcan)
        decorator.addPaint(crowncan)
        decorator.addPaint(azarcan)
    
        assert.strictEqual(decorator.sumTotal(), 15)
    });

    it('should be able to calculate whether he has enough paint to paint a room',function(){
        decorator.room
        assert.strictEqual(decorator.enoughPaintForRoom(), true)

    });

    it('should be able to paint room if has enough paint in stock', function(){
    
    });
});