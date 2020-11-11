"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _PalletStorageItem = _interopRequireDefault(require("../model/PalletStorageItem"));

var _StakingProgress = _interopRequireDefault(require("../model/StakingProgress"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Pallets service.
* @module api/PalletsApi
* @version 1.0.0-oas3
*/
var PalletsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new PalletsApi. 
  * @alias module:api/PalletsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PalletsApi(apiClient) {
    _classCallCheck(this, PalletsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Get progress on the general Staking pallet system.
   * Returns information on the progress of key components of the staking system and estimates of future points of interest. Replaces `/staking-info` from versions < v1.0.0.
   * @param {Object} opts Optional parameters
   * @param {String} opts.at Block at which to retrieve a staking progress report.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StakingProgress} and HTTP response
   */


  _createClass(PalletsApi, [{
    key: "getStakingProgressWithHttpInfo",
    value: function getStakingProgressWithHttpInfo(opts) {
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
      var returnType = _StakingProgress["default"];
      return this.apiClient.callApi('/pallets/staking/progress', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get progress on the general Staking pallet system.
     * Returns information on the progress of key components of the staking system and estimates of future points of interest. Replaces `/staking-info` from versions < v1.0.0.
     * @param {Object} opts Optional parameters
     * @param {String} opts.at Block at which to retrieve a staking progress report.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StakingProgress}
     */

  }, {
    key: "getStakingProgress",
    value: function getStakingProgress(opts) {
      return this.getStakingProgressWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get the value of a storage item.
     * Returns the value stored under the storageItemId. If it is a map, query param key1 is required. If the storage item is double map query params key1 and key2 are required.
     * @param {String} palletId Name or index of the pallet to query the storage of.
     * @param {String} storageItemId Id of the storage item to query for.
     * @param {Object} opts Optional parameters
     * @param {String} opts.key1 Key for a map, or first key for a double map. Required for querying a map.
     * @param {String} opts.key2 Second key for a double map. Required for querying a double map.
     * @param {String} opts.at Block at which to query the storage item at.
     * @param {Boolean} opts.metadata Include the storage items metadata (including documentation) if set to true. (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PalletStorageItem} and HTTP response
     */

  }, {
    key: "palletsPalletIdStorageStorageItemIdGetWithHttpInfo",
    value: function palletsPalletIdStorageStorageItemIdGetWithHttpInfo(palletId, storageItemId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'palletId' is set

      if (palletId === undefined || palletId === null) {
        throw new _Error["default"]("Missing the required parameter 'palletId' when calling palletsPalletIdStorageStorageItemIdGet");
      } // verify the required parameter 'storageItemId' is set


      if (storageItemId === undefined || storageItemId === null) {
        throw new _Error["default"]("Missing the required parameter 'storageItemId' when calling palletsPalletIdStorageStorageItemIdGet");
      }

      var pathParams = {
        'palletId': palletId,
        'storageItemId': storageItemId
      };
      var queryParams = {
        'key1': opts['key1'],
        'key2': opts['key2'],
        'at': opts['at'],
        'metadata': opts['metadata']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PalletStorageItem["default"];
      return this.apiClient.callApi('/pallets/{palletId}/storage/{storageItemId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get the value of a storage item.
     * Returns the value stored under the storageItemId. If it is a map, query param key1 is required. If the storage item is double map query params key1 and key2 are required.
     * @param {String} palletId Name or index of the pallet to query the storage of.
     * @param {String} storageItemId Id of the storage item to query for.
     * @param {Object} opts Optional parameters
     * @param {String} opts.key1 Key for a map, or first key for a double map. Required for querying a map.
     * @param {String} opts.key2 Second key for a double map. Required for querying a double map.
     * @param {String} opts.at Block at which to query the storage item at.
     * @param {Boolean} opts.metadata Include the storage items metadata (including documentation) if set to true. (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PalletStorageItem}
     */

  }, {
    key: "palletsPalletIdStorageStorageItemIdGet",
    value: function palletsPalletIdStorageStorageItemIdGet(palletId, storageItemId, opts) {
      return this.palletsPalletIdStorageStorageItemIdGetWithHttpInfo(palletId, storageItemId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return PalletsApi;
}();

exports["default"] = PalletsApi;