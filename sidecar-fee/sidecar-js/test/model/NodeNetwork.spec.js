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
    instance = new SubstrateApiSidecarV1.NodeNetwork();
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

  describe('NodeNetwork', function() {
    it('should create an instance of NodeNetwork', function() {
      // uncomment below and update the code to test NodeNetwork
      //var instane = new SubstrateApiSidecarV1.NodeNetwork();
      //expect(instance).to.be.a(SubstrateApiSidecarV1.NodeNetwork);
    });

    it('should have the property nodeRoles (base name: "nodeRoles")', function() {
      // uncomment below and update the code to test the property nodeRoles
      //var instance = new SubstrateApiSidecarV1.NodeNetwork();
      //expect(instance).to.be();
    });

    it('should have the property numPeers (base name: "numPeers")', function() {
      // uncomment below and update the code to test the property numPeers
      //var instance = new SubstrateApiSidecarV1.NodeNetwork();
      //expect(instance).to.be();
    });

    it('should have the property isSyncing (base name: "isSyncing")', function() {
      // uncomment below and update the code to test the property isSyncing
      //var instance = new SubstrateApiSidecarV1.NodeNetwork();
      //expect(instance).to.be();
    });

    it('should have the property shouldHavePeers (base name: "shouldHavePeers")', function() {
      // uncomment below and update the code to test the property shouldHavePeers
      //var instance = new SubstrateApiSidecarV1.NodeNetwork();
      //expect(instance).to.be();
    });

    it('should have the property localPeerId (base name: "localPeerId")', function() {
      // uncomment below and update the code to test the property localPeerId
      //var instance = new SubstrateApiSidecarV1.NodeNetwork();
      //expect(instance).to.be();
    });

    it('should have the property localListenAddresses (base name: "localListenAddresses")', function() {
      // uncomment below and update the code to test the property localListenAddresses
      //var instance = new SubstrateApiSidecarV1.NodeNetwork();
      //expect(instance).to.be();
    });

    it('should have the property peersInfo (base name: "peersInfo")', function() {
      // uncomment below and update the code to test the property peersInfo
      //var instance = new SubstrateApiSidecarV1.NodeNetwork();
      //expect(instance).to.be();
    });

  });

}));