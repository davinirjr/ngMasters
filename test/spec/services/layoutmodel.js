'use strict';

describe('Service: layoutModel', function () {

  // load the service's module
  beforeEach(module('ngMastersApp'));

  // instantiate service
  var layoutModel;
  beforeEach(inject(function (_layoutModel_) {
    layoutModel = _layoutModel_;
  }));

  it('should do something', function () {
    expect(!!layoutModel).toBe(true);
  });

});
