"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AccountStakingInfo = _interopRequireDefault(require("../model/AccountStakingInfo"));

var _AccountStakingPayouts = _interopRequireDefault(require("../model/AccountStakingPayouts"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _StakingProgress = _interopRequireDefault(require("../model/StakingProgress"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Staking service.
* @module api/StakingApi
* @version 1.0.0-oas3
*/
var StakingApi = /*#__PURE__*/function () {
  /**
  * Constructs a new StakingApi. 
  * @alias module:api/StakingApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function StakingApi(apiClient) {
    _classCallCheck(this, StakingApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Get payout information for a _Stash_ account.
   * Returns payout information for the last specified eras. If specifying both the depth and era query params, this endpoint will return information for (era - depth) through era. (i.e. if depth=5 and era=20 information will be returned for eras 16 through 20). N.B. You cannot query eras less then `current_era - HISTORY_DEPTH`. N.B. The `nominator*` fields correspond to the address being queried, even if it is a validator's _Stash_ address. This is because a validator is technically nominating itself.
   * @param {String} accountId SS58 address of the account. Must be a _Stash_ account.
   * @param {Object} opts Optional parameters
   * @param {String} opts.depth The number of eras to query for payouts of. Must be less than or equal to `HISTORY_DEPTH`. In cases where `era - (depth -1)` is less than 0, the first era queried will be 0. (default to '1')
   * @param {String} opts.era The era to query at. (default to '`active_era - 1`')
   * @param {Boolean} opts.unclaimedOnly Only return unclaimed rewards. (default to 'true')
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AccountStakingPayouts} and HTTP response
   */


  _createClass(StakingApi, [{
    key: "getStakingPayoutsByAccountIdWithHttpInfo",
    value: function getStakingPayoutsByAccountIdWithHttpInfo(accountId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new _Error["default"]("Missing the required parameter 'accountId' when calling getStakingPayoutsByAccountId");
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
        'depth': opts['depth'],
        'era': opts['era'],
        'unclaimedOnly': opts['unclaimedOnly']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _AccountStakingPayouts["default"];
      return this.apiClient.callApi('/accounts/{accountId}/staking-payouts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get payout information for a _Stash_ account.
     * Returns payout information for the last specified eras. If specifying both the depth and era query params, this endpoint will return information for (era - depth) through era. (i.e. if depth=5 and era=20 information will be returned for eras 16 through 20). N.B. You cannot query eras less then `current_era - HISTORY_DEPTH`. N.B. The `nominator*` fields correspond to the address being queried, even if it is a validator's _Stash_ address. This is because a validator is technically nominating itself.
     * @param {String} accountId SS58 address of the account. Must be a _Stash_ account.
     * @param {Object} opts Optional parameters
     * @param {String} opts.depth The number of eras to query for payouts of. Must be less than or equal to `HISTORY_DEPTH`. In cases where `era - (depth -1)` is less than 0, the first era queried will be 0. (default to '1')
     * @param {String} opts.era The era to query at. (default to '`active_era - 1`')
     * @param {Boolean} opts.unclaimedOnly Only return unclaimed rewards. (default to 'true')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AccountStakingPayouts}
     */

  }, {
    key: "getStakingPayoutsByAccountId",
    value: function getStakingPayoutsByAccountId(accountId, opts) {
      return this.getStakingPayoutsByAccountIdWithHttpInfo(accountId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get progress on the general Staking pallet system.
     * Returns information on the progress of key components of the staking system and estimates of future points of interest. Replaces `/staking-info` from versions < v1.0.0.
     * @param {Object} opts Optional parameters
     * @param {String} opts.at Block at which to retrieve a staking progress report.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StakingProgress} and HTTP response
     */

  }, {
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
     * Get staking information for a _Stash_ account.
     * Returns information about a _Stash_ account's staking activity. Replaces `/staking/{address}` from versions < v1.0.0.
     * @param {String} accountId SS58 address of the account. Must be a _Stash_ account.
     * @param {Object} opts Optional parameters
     * @param {String} opts.at Block at which to query the staking info for the specified account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AccountStakingInfo} and HTTP response
     */

  }, {
    key: "getStakingSummaryByAccountIdWithHttpInfo",
    value: function getStakingSummaryByAccountIdWithHttpInfo(accountId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'accountId' is set

      if (accountId === undefined || accountId === null) {
        throw new _Error["default"]("Missing the required parameter 'accountId' when calling getStakingSummaryByAccountId");
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
      var returnType = _AccountStakingInfo["default"];
      return this.apiClient.callApi('/accounts/{accountId}/staking-info', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get staking information for a _Stash_ account.
     * Returns information about a _Stash_ account's staking activity. Replaces `/staking/{address}` from versions < v1.0.0.
     * @param {String} accountId SS58 address of the account. Must be a _Stash_ account.
     * @param {Object} opts Optional parameters
     * @param {String} opts.at Block at which to query the staking info for the specified account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AccountStakingInfo}
     */

  }, {
    key: "getStakingSummaryByAccountId",
    value: function getStakingSummaryByAccountId(accountId, opts) {
      return this.getStakingSummaryByAccountIdWithHttpInfo(accountId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return StakingApi;
}();

exports["default"] = StakingApi;