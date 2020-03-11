const { hello } = require('./hello');
const { expect } = require('chai');

// Should return Hello Ben !!!
//console.log(hello('Ben'));
describe('hello function', () => {
  it('Should return Hello Ben !!!', () => {
    // style BDD -> expect
    expect(hello('Ben')).to.equal('Hello Ben !!!');

    // style BDD -> should
    //hello('Ben').should.be.equal.('Hello Ben !!!');
  });
});
