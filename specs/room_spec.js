const assert = require('assert');
const Room = require('../models/room.js');

describe('Room', function () {

    let guestroom;

    beforeEach( function(){
        guestroom = new Room( 10, true)
    });

    it('should have an area in square meters', function(){
      const actual = guestroom.areaOfRoom
      assert.strictEqual (actual, 10);
    });

    it('should start not painted', function(){
        const actual = guestroom.startNotPainted
        assert.deepStrictEqual (actual, [])
    });

    it('should be able to be painted', function (){
       const actual = guestroom.ableToBePainted
       assert.deepStrictEqual (actual, true)
    });

});