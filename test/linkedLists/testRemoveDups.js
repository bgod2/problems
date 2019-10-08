let {removeDups} = require('../../linkedLists/removeDups.js');

let test = require('unit.js');

const assert = require('chai').assert;

describe('Test Remove Duplicates in a Linked List', function() {
    it('basic', function() {
        let list = [7, 1, 5, 3, 6, 4];
        let act = removeDups(list);
        let exp = true;

        assert.equal(act, exp);
    })

});
