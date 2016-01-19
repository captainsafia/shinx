const Rx = require('rx');
const scheduler = Rx.TestScheduler();

const subject = require('../index.js');

const expect = require('chai').expect;

subject.subscribe(function(value) {
    return value;
});

// TODO: Implement tests for observer-observable pattern
describe('subject', () => {
    it('should return a value when a kernel is added', () => {
        expect(true).to.be.true;
    });

    it('should not return a value when another file is added', () => {
        expect(true).to.be.true;
    });
});
