const assert = require('assert');
const PaintCan = require('../models/paintcan.js');
const Room = require('../models/room.js');
const Decorator = require('../models/decorator.js');

describe('PaintCan', function(){
    let duluxcan;

    beforeEach(function(){
        duluxcan = new PaintCan(5);
    });

    it('should have a number of litres of paint', function(){
        const actual = duluxcan.numberOfLitres
        assert.strictEqual(actual, 5)
    });

    it('should be able to check if it is empty', function(){
        const actual = duluxcan.isEmpty()
        const expected = false
        assert.strictEqual (actual, expected)
    });


    it('should be able to empty itself', function(){
        duluxcan.empty()
        const expected = true
        assert.strictEqual(duluxcan.isEmpty(), expected)
    });
});