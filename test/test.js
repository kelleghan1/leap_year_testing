var code = require('../main');
var expect = require('chai').expect;
describe('Is a leap year', function(){
  it('Whether leap year or not', function(){
    expect(code.leapYear(2016)).to.equal(true)
  })
  it('Whether leap year or not', function(){
    expect(code.leapYear(1600)).to.equal(true)
  })
  it('Whether leap year or not', function(){
    expect(code.leapYear(2000)).to.equal(true)
  })
  it('Whether leap year or not', function(){
    expect(code.leapYear(1700)).to.equal(false)
  })
  it('Whether leap year or not', function(){
    expect(code.leapYear(1800)).to.equal(false)
  })
  it('Whether leap year or not', function(){
    expect(code.leapYear(1900)).to.equal(false)
  })
});
