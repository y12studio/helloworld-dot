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
    instance = new SubstrateApiSidecarV1.Signature();
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

  describe('Signature', function() {
    it('should create an instance of Signature', function() {
      // uncomment below and update the code to test Signature
      //var instane = new SubstrateApiSidecarV1.Signature();
      //expect(instance).to.be.a(SubstrateApiSidecarV1.Signature);
    });

    it('should have the property signature (base name: "signature")', function() {
      // uncomment below and update the code to test the property signature
      //var instance = new SubstrateApiSidecarV1.Signature();
      //expect(instance).to.be();
    });

    it('should have the property signer (base name: "signer")', function() {
      // uncomment below and update the code to test the property signer
      //var instance = new SubstrateApiSidecarV1.Signature();
      //expect(instance).to.be();
    });

  });

}));