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
    instance = new SubstrateApiSidecarV1.StakingProgress();
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

  describe('StakingProgress', function() {
    it('should create an instance of StakingProgress', function() {
      // uncomment below and update the code to test StakingProgress
      //var instane = new SubstrateApiSidecarV1.StakingProgress();
      //expect(instance).to.be.a(SubstrateApiSidecarV1.StakingProgress);
    });

    it('should have the property at (base name: "at")', function() {
      // uncomment below and update the code to test the property at
      //var instance = new SubstrateApiSidecarV1.StakingProgress();
      //expect(instance).to.be();
    });

    it('should have the property activeEra (base name: "activeEra")', function() {
      // uncomment below and update the code to test the property activeEra
      //var instance = new SubstrateApiSidecarV1.StakingProgress();
      //expect(instance).to.be();
    });

    it('should have the property forceEra (base name: "forceEra")', function() {
      // uncomment below and update the code to test the property forceEra
      //var instance = new SubstrateApiSidecarV1.StakingProgress();
      //expect(instance).to.be();
    });

    it('should have the property nextActiveEraEstimate (base name: "nextActiveEraEstimate")', function() {
      // uncomment below and update the code to test the property nextActiveEraEstimate
      //var instance = new SubstrateApiSidecarV1.StakingProgress();
      //expect(instance).to.be();
    });

    it('should have the property nextSessionEstimate (base name: "nextSessionEstimate")', function() {
      // uncomment below and update the code to test the property nextSessionEstimate
      //var instance = new SubstrateApiSidecarV1.StakingProgress();
      //expect(instance).to.be();
    });

    it('should have the property unappliedSlashes (base name: "unappliedSlashes")', function() {
      // uncomment below and update the code to test the property unappliedSlashes
      //var instance = new SubstrateApiSidecarV1.StakingProgress();
      //expect(instance).to.be();
    });

    it('should have the property electionStatus (base name: "electionStatus")', function() {
      // uncomment below and update the code to test the property electionStatus
      //var instance = new SubstrateApiSidecarV1.StakingProgress();
      //expect(instance).to.be();
    });

    it('should have the property idealValidatorCount (base name: "idealValidatorCount")', function() {
      // uncomment below and update the code to test the property idealValidatorCount
      //var instance = new SubstrateApiSidecarV1.StakingProgress();
      //expect(instance).to.be();
    });

    it('should have the property validatorSet (base name: "validatorSet")', function() {
      // uncomment below and update the code to test the property validatorSet
      //var instance = new SubstrateApiSidecarV1.StakingProgress();
      //expect(instance).to.be();
    });

  });

}));