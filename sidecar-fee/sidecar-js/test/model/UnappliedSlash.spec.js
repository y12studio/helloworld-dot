/**
 * Substrate API Sidecar v1.
 * Substrate API Sidecar is a REST service that makes it easy to interact with blockchain nodes built using Substrate's FRAME framework.
 *
 * The version of the OpenAPI document: 1.0.0-oas3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SubstrateApiSidecarV1);
  }
}(this, function(expect, SubstrateApiSidecarV1) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SubstrateApiSidecarV1.UnappliedSlash();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('UnappliedSlash', function() {
    it('should create an instance of UnappliedSlash', function() {
      // uncomment below and update the code to test UnappliedSlash
      //var instane = new SubstrateApiSidecarV1.UnappliedSlash();
      //expect(instance).to.be.a(SubstrateApiSidecarV1.UnappliedSlash);
    });

    it('should have the property validator (base name: "validator")', function() {
      // uncomment below and update the code to test the property validator
      //var instance = new SubstrateApiSidecarV1.UnappliedSlash();
      //expect(instance).to.be();
    });

    it('should have the property own (base name: "own")', function() {
      // uncomment below and update the code to test the property own
      //var instance = new SubstrateApiSidecarV1.UnappliedSlash();
      //expect(instance).to.be();
    });

    it('should have the property others (base name: "others")', function() {
      // uncomment below and update the code to test the property others
      //var instance = new SubstrateApiSidecarV1.UnappliedSlash();
      //expect(instance).to.be();
    });

    it('should have the property reporters (base name: "reporters")', function() {
      // uncomment below and update the code to test the property reporters
      //var instance = new SubstrateApiSidecarV1.UnappliedSlash();
      //expect(instance).to.be();
    });

    it('should have the property payout (base name: "payout")', function() {
      // uncomment below and update the code to test the property payout
      //var instance = new SubstrateApiSidecarV1.UnappliedSlash();
      //expect(instance).to.be();
    });

  });

}));