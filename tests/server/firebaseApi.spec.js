const requireHelper = require('./requireHelper');
const firebaseApi = requireHelper.require('routes/firebaseApi');
const assert = require('chai').assert;
const sinon = require('sinon');

// create mock request and response
let reqMock = {};

let resMock = {};
resMock.status = function() {
  return this;
};
resMock.send = function() {
  return this;
};
resMock.end = function() {
  return this;
};
sinon.spy(resMock, "status");
sinon.spy(resMock, "send");

describe('Get City', function () {

    it('valid city', function() {
        reqMock = {
            query:{
                city: 'Hamilton'
            }
        };

        firebaseApi.getCity(reqMock, resMock);

        // Default results
        assert(true, true);
    });


})