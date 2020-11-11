"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AccountBalanceInfo = _interopRequireDefault(require("../model/AccountBalanceInfo"));

var _AccountVestingInfo = _interopRequireDefault(require("../model/AccountVestingInfo"));

var _Error = _interopRequireDefault(require("../model/Error"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Accounts service.
* @module api/AccountsApi
* @version 1.0.0-oas3
*/
var AccountsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new AccountsApi. 
  * @alias module:api/AccountsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AccountsApi(apiClient) {
    _classCallCheck(this, AccountsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Get balance information for an account.
   * Returns information about an account's balance. Replaces `/balance/{address}` from versions < v1.0.0.
   * @param {String} accountId SS58 address of the account.
   * @param {Object} opts Optional parameters
   * @param {String} opts.at Block at which to query balance info for the specified account.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AccountBalanceInfo} and HTTP response
   */


  _createClass(AccountsApi, [{
    key: "getAccountBalanceInfoWithHttpInfo",
    value: function getAccountBalanceInfoWithHttpInfo(accountId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new _Error["default"]("Missing the required parameter 'accountId' when calling getAccountBalanceInfo");
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
        'at': opts['at']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _AccountBalanceInfo["default"];
      return this.apiClient.callApi('/accounts/{accountId}/balance-info', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get balance information for an account.
     * Returns information about an account's balance. Replaces `/balance/{address}` from versions < v1.0.0.
     * @param {String} accountId SS58 address of the account.
     * @param {Object} opts Optional parameters
     * @param {String} opts.at Block at which to query balance info for the specified account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AccountBalanceInfo}
     */

  }, {
    key: "getAccountBalanceInfo",
    value: function getAccountBalanceInfo(accountId, opts) {
      return this.getAccountBalanceInfoWithHttpInfo(accountId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get vesting information for an account.
     * Returns the vesting schedule for an account. Replaces `/vesting/{address}` from versions < v1.0.0.
     * @param {String} accountId SS58 address of the account.
     * @param {Object} opts Optional parameters
     * @param {String} opts.at Block at which to query the vesting info for the specified account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AccountVestingInfo} and HTTP response
     */

  }, {
    key: "getVestingSummaryByAccountIdWithHttpInfo",
    value: function getVestingSummaryByAccountIdWithHttpInfo(accountId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new _Error["default"]("Missing the required parameter 'accountId' when calling getVestingSummaryByAccountId");
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
        'at': opts['at']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _AccountVestingInfo["default"];
      return this.apiClient.callApi('/accounts/{accountId}/vesting-info', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get vesting information for an account.
     * Returns the vesting schedule for an account. Replaces `/vesting/{address}` from versions < v1.0.0.
     * @param {String} accountId SS58 address of the account.
     * @param {Object} opts Optional parameters
     * @param {String} opts.at Block at which to query the vesting info for the specified account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AccountVestingInfo}
     */

  }, {
    key: "getVestingSummaryByAccountId",
    value: function getVestingSummaryByAccountId(accountId, opts) {
      return this.getVestingSummaryByAccountIdWithHttpInfo(accountId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return AccountsApi;
}();

exports["default"] = AccountsApi;