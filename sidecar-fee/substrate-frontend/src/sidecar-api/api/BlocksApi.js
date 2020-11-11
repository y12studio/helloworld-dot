"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Block = _interopRequireDefault(require("../model/Block"));

var _Error = _interopRequireDefault(require("../model/Error"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Blocks service.
* @module api/BlocksApi
* @version 1.0.0-oas3
*/
var BlocksApi = /*#__PURE__*/function () {
  /**
  * Constructs a new BlocksApi. 
  * @alias module:api/BlocksApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function BlocksApi(apiClient) {
    _classCallCheck(this, BlocksApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Get a block by its height or hash.
   * Returns a single block. BlockId can either be a block hash or a block height. Replaces `/block/{number}` from versions < v1.0.0.
   * @param {String} blockId Block identifier, as the block height or block hash.
   * @param {Object} opts Optional parameters
   * @param {Boolean} opts.eventDocs When set to `true`, every event will have an extra `docs` property with a string of the events documentation. (default to false)
   * @param {Boolean} opts.extrinsicDocs When set to `true`, every extrinsic will have an extra `docs` property with a string of the extrinsics documentation. (default to false)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Block} and HTTP response
   */


  _createClass(BlocksApi, [{
    key: "getBlockByIdWithHttpInfo",
    value: function getBlockByIdWithHttpInfo(blockId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'blockId' is set

      if (blockId === undefined || blockId === null) {
        throw new _Error["default"]("Missing the required parameter 'blockId' when calling getBlockById");
      }

      var pathParams = {
        'blockId': blockId
      };
      var queryParams = {
        'eventDocs': opts['eventDocs'],
        'extrinsicDocs': opts['extrinsicDocs']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Block["default"];
      return this.apiClient.callApi('/blocks/{blockId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a block by its height or hash.
     * Returns a single block. BlockId can either be a block hash or a block height. Replaces `/block/{number}` from versions < v1.0.0.
     * @param {String} blockId Block identifier, as the block height or block hash.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.eventDocs When set to `true`, every event will have an extra `docs` property with a string of the events documentation. (default to false)
     * @param {Boolean} opts.extrinsicDocs When set to `true`, every extrinsic will have an extra `docs` property with a string of the extrinsics documentation. (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Block}
     */

  }, {
    key: "getBlockById",
    value: function getBlockById(blockId, opts) {
      return this.getBlockByIdWithHttpInfo(blockId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get the most recently finalized block.
     * Returns the most recently finalized block. Replaces `/block` from versions < v1.0.0.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.finalized Boolean representing whether or not to get the finalized head. If it is not set the value defaults to true. When set to false it will attempt to get the newest known block, which may not be finalized. (default to true)
     * @param {Boolean} opts.eventDocs When set to `true`, every event will have an extra `docs` property with a string of the events documentation. (default to false)
     * @param {Boolean} opts.extrinsicDocs When set to `true`, every extrinsic will have an extra `docs` property with a string of the extrinsics documentation. (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Block} and HTTP response
     */

  }, {
    key: "getHeadBlockWithHttpInfo",
    value: function getHeadBlockWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'finalized': opts['finalized'],
        'eventDocs': opts['eventDocs'],
        'extrinsicDocs': opts['extrinsicDocs']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Block["default"];
      return this.apiClient.callApi('/blocks/head', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get the most recently finalized block.
     * Returns the most recently finalized block. Replaces `/block` from versions < v1.0.0.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.finalized Boolean representing whether or not to get the finalized head. If it is not set the value defaults to true. When set to false it will attempt to get the newest known block, which may not be finalized. (default to true)
     * @param {Boolean} opts.eventDocs When set to `true`, every event will have an extra `docs` property with a string of the events documentation. (default to false)
     * @param {Boolean} opts.extrinsicDocs When set to `true`, every extrinsic will have an extra `docs` property with a string of the extrinsics documentation. (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Block}
     */

  }, {
    key: "getHeadBlock",
    value: function getHeadBlock(opts) {
      return this.getHeadBlockWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return BlocksApi;
}();

exports["default"] = BlocksApi;