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
    instance = new SubstrateApiSidecarV1.RuntimeSpec();
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

  describe('RuntimeSpec', function() {
    it('should create an instance of RuntimeSpec', function() {
      // uncomment below and update the code to test RuntimeSpec
      //var instane = new SubstrateApiSidecarV1.RuntimeSpec();
      //expect(instance).to.be.a(SubstrateApiSidecarV1.RuntimeSpec);
    });

    it('should have the property at (base name: "at")', function() {
      // uncomment below and update the code to test the property at
      //var instance = new SubstrateApiSidecarV1.RuntimeSpec();
      //expect(instance).to.be();
    });

    it('should have the property authoringVersion (base name: "authoringVersion")', function() {
      // uncomment below and update the code to test the property authoringVersion
      //var instance = new SubstrateApiSidecarV1.RuntimeSpec();
      //expect(instance).to.be();
    });

    it('should have the property chainType (base name: "chainType")', function() {
      // uncomment below and update the code to test the property chainType
      //var instance = new SubstrateApiSidecarV1.RuntimeSpec();
      //expect(instance).to.be();
    });

    it('should have the property implVersion (base name: "implVersion")', function() {
      // uncomment below and update the code to test the property implVersion
      //var instance = new SubstrateApiSidecarV1.RuntimeSpec();
      //expect(instance).to.be();
    });

    it('should have the property specName (base name: "specName")', function() {
      // uncomment below and update the code to test the property specName
      //var instance = new SubstrateApiSidecarV1.RuntimeSpec();
      //expect(instance).to.be();
    });

    it('should have the property specVersion (base name: "specVersion")', function() {
      // uncomment below and update the code to test the property specVersion
      //var instance = new SubstrateApiSidecarV1.RuntimeSpec();
      //expect(instance).to.be();
    });

    it('should have the property transactionVersion (base name: "transactionVersion")', function() {
      // uncomment below and update the code to test the property transactionVersion
      //var instance = new SubstrateApiSidecarV1.RuntimeSpec();
      //expect(instance).to.be();
    });

    it('should have the property properties (base name: "properties")', function() {
      // uncomment below and update the code to test the property properties
      //var instance = new SubstrateApiSidecarV1.RuntimeSpec();
      //expect(instance).to.be();
    });

  });

}));
