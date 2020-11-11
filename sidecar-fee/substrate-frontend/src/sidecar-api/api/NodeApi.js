"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NodeNetwork = _interopRequireDefault(require("../model/NodeNetwork"));

var _NodeVersion = _interopRequireDefault(require("../model/NodeVersion"));

var _TransactionPool = _interopRequireDefault(require("../model/TransactionPool"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Node service.
* @module api/NodeApi
* @version 1.0.0-oas3
*/
var NodeApi = /*#__PURE__*/function () {
  /**
  * Constructs a new NodeApi. 
  * @alias module:api/NodeApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function NodeApi(apiClient) {
    _classCallCheck(this, NodeApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Get information about the Substrate node's activity in the peer-to-peer network.
   * Returns network related information of the node.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NodeNetwork} and HTTP response
   */


  _createClass(NodeApi, [{
    key: "getNodeNetworkingWithHttpInfo",
    value: function getNodeNetworkingWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _NodeNetwork["default"];
      return this.apiClient.callApi('/node/network', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get information about the Substrate node's activity in the peer-to-peer network.
     * Returns network related information of the node.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NodeNetwork}
     */

  }, {
    key: "getNodeNetworking",
    value: function getNodeNetworking() {
      return this.getNodeNetworkingWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get pending extrinsics from the Substrate node.
     * Returns the extrinsics that the node knows of that have not been included in a block.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TransactionPool} and HTTP response
     */

  }, {
    key: "getNodeTransactionPoolWithHttpInfo",
    value: function getNodeTransactionPoolWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TransactionPool["default"];
      return this.apiClient.callApi('/node/transaction-pool', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get pending extrinsics from the Substrate node.
     * Returns the extrinsics that the node knows of that have not been included in a block.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TransactionPool}
     */

  }, {
    key: "getNodeTransactionPool",
    value: function getNodeTransactionPool() {
      return this.getNodeTransactionPoolWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get information about the Substrates node's implementation and versioning.
     * Returns versioning information of the node.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NodeVersion} and HTTP response
     */

  }, {
    key: "getNodeVersionWithHttpInfo",
    value: function getNodeVersionWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _NodeVersion["default"];
      return this.apiClient.callApi('/node/version', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get information about the Substrates node's implementation and versioning.
     * Returns versioning information of the node.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NodeVersion}
     */

  }, {
    key: "getNodeVersion",
    value: function getNodeVersion() {
      return this.getNodeVersionWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return NodeApi;
}();

exports["default"] = NodeApi;