let chai = require('chai');
let expect = chai.expect;
let busyService = require('../../services/table.service');
let busyServiceTest = [];

busyServiceTest.push(function() {
  it('getOccupiedStatus() should return false on first using', function() {
    expect(busyService.getOccupiedStatus()).to.equal(false);
  });
});

busyServiceTest.push(function() {
  it('setOccupiedStatus(true) should set the status to true', function() {
    expect(busyService.setOccupiedStatus(true)).to.equal(undefined);
  });
});

busyServiceTest.push(function() {
  it('getOccupiedStatus() should return false on second using', function() {
    expect(busyService.getOccupiedStatus()).to.equal(true);
  });
});

busyServiceTest.push(function() {
  it('setOccupiedStatus(false) resetting the state', function() {
    expect(busyService.setOccupiedStatus(false)).to.equal(undefined);
  });
});




module.exports = busyServiceTest;