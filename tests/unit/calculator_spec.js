var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it can perform addition', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    let expected = 5;
    assert.strictEqual(calculator.runningTotal, expected)
  })

  it('can subtract a number from a number', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    let expected = 3;
    assert.strictEqual(calculator.runningTotal, expected)
  })

  it('can perform multiplication', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    let expected = 15;
    assert.strictEqual(calculator.runningTotal, expected)
  })

  it('can divide a number by a number', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    let expected = 3;
    assert.strictEqual(calculator.runningTotal, expected)
  })

  it('can concatenate multiple number button clicks', function(){
    calculator.numberClick(1);
    calculator.numberClick(1);
    calculator.numberClick(1);
    calculator.numberClick(1);
    calculator.numberClick(1);
    calculator.numberClick(1);
    calculator.numberClick(1);
    let expected = 1111111;
    assert.strictEqual(calculator.runningTotal, expected)
  })

  it('can chain multiple operations together', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.operatorClick('*');
    calculator.numberClick(9);
    calculator.numberClick(0);
    calculator.operatorClick('=');
    let expected = 180;
    assert.equal(calculator.runningTotal, expected);
  })


  it('can clear the running total without affecting the calculation', function(){
    calculator.previousTotal = 10000;
    calculator.clearClick();
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.operatorClick('=');
    let expected = 2;
    assert.strictEqual(calculator.runningTotal, expected)
  })



});
