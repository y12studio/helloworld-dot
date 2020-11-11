"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RuntimeCode = _interopRequireDefault(require("../model/RuntimeCode"));

var _RuntimeSpec = _interopRequireDefault(require("../model/RuntimeSpec"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Runtime service.
* @module api/RuntimeApi
* @version 1.0.0-oas3
*/
var RuntimeApi = /*#__PURE__*/function () {
  /**
  * Constructs a new RuntimeApi. 
  * @alias module:api/RuntimeApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function RuntimeApi(apiClient) {
    _classCallCheck(this, RuntimeApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Get the runtime wasm blob.
   * Returns the runtime Wasm blob in hex format.
   * @param {Object} opts Optional parameters
   * @param {String} opts.at Block at which to retrieve the runtime wasm blob at.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RuntimeCode} and HTTP response
   */


  _createClass(RuntimeApi, [{
    key: "runtimeCodeGetWithHttpInfo",
    value: function runtimeCodeGetWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'at': opts['at']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _RuntimeCode["default"];
      return this.apiClient.callApi('/runtime/code', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get the runtime wasm blob.
     * Returns the runtime Wasm blob in hex format.
     * @param {Object} opts Optional parameters
     * @param {String} opts.at Block at which to retrieve the runtime wasm blob at.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RuntimeCode}
     */

  }, {
    key: "runtimeCodeGet",
    value: function runtimeCodeGet(opts) {
      return this.runtimeCodeGetWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get the runtime metadata in decoded, JSON form.
     * Returns the runtime metadata as a JSON object. Substrate Reference: - FRAME Support: https://crates.parity.io/frame_support/metadata/index.html - Knowledge Base: https://substrate.dev/docs/en/knowledgebase/runtime/metadata
     * @param {Object} opts Optional parameters
     * @param {String} opts.at Block at which to retrieve the metadata at.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "runtimeMetadataGetWithHttpInfo",
    value: function runtimeMetadataGetWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'at': opts['at']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/runtime/metadata', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get the runtime metadata in decoded, JSON form.
     * Returns the runtime metadata as a JSON object. Substrate Reference: - FRAME Support: https://crates.parity.io/frame_support/metadata/index.html - Knowledge Base: https://substrate.dev/docs/en/knowledgebase/runtime/metadata
     * @param {Object} opts Optional parameters
     * @param {String} opts.at Block at which to retrieve the metadata at.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "runtimeMetadataGet",
    value: function runtimeMetadataGet(opts) {
      return this.runtimeMetadataGetWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get version information of the Substrate runtime.
     * Returns version information related to the runtime.
     * @param {Object} opts Optional parameters
     * @param {String} opts.at Block at which to retrieve runtime version information at.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RuntimeSpec} and HTTP response
     */

  }, {
    key: "runtimeSpecGetWithHttpInfo",
    value: function runtimeSpecGetWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'at': opts['at']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _RuntimeSpec["default"];
      return this.apiClient.callApi('/runtime/spec', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get version information of the Substrate runtime.
     * Returns version information related to the runtime.
     * @param {Object} opts Optional parameters
     * @param {String} opts.at Block at which to retrieve runtime version information at.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RuntimeSpec}
     */

  }, {
    key: "runtimeSpecGet",
    value: function runtimeSpecGet(opts) {
      return this.runtimeSpecGetWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return RuntimeApi;
}();

exports["default"] = RuntimeApi;