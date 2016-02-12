var code = require('../main');
var expect = require('chai').expect;

describe('Is a leap year', function(){
  it('Whether leap year or not', function () {
    expect(code.leapYear(2016)).to.equal(true)
  })
});
