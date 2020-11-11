"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _Transaction = _interopRequireDefault(require("../model/Transaction"));

var _TransactionDryRun = _interopRequireDefault(require("../model/TransactionDryRun"));

var _TransactionFailure = _interopRequireDefault(require("../model/TransactionFailure"));

var _TransactionFeeEstimate = _interopRequireDefault(require("../model/TransactionFeeEstimate"));

var _TransactionFeeEstimateFailure = _interopRequireDefault(require("../model/TransactionFeeEstimateFailure"));

var _TransactionMaterial = _interopRequireDefault(require("../model/TransactionMaterial"));

var _TransactionSuccess = _interopRequireDefault(require("../model/TransactionSuccess"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Transaction service.
* @module api/TransactionApi
* @version 1.0.0-oas3
*/
var TransactionApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TransactionApi. 
  * @alias module:api/TransactionApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TransactionApi(apiClient) {
    _classCallCheck(this, TransactionApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Dry run an extrinsic.
   * Use the dryrun call to practice submission of a transaction.
   * @param {module:model/Transaction} transaction 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TransactionDryRun} and HTTP response
   */


  _createClass(TransactionApi, [{
    key: "dryrunTransactionWithHttpInfo",
    value: function dryrunTransactionWithHttpInfo(transaction) {
      var postBody = transaction; // verify the required parameter 'transaction' is set

      if (transaction === undefined || transaction === null) {
        throw new _Error["default"]("Missing the required parameter 'transaction' when calling dryrunTransaction");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _TransactionDryRun["default"];
      return this.apiClient.callApi('/transaction/dry-run', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Dry run an extrinsic.
     * Use the dryrun call to practice submission of a transaction.
     * @param {module:model/Transaction} transaction 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TransactionDryRun}
     */

  }, {
    key: "dryrunTransaction",
    value: function dryrunTransaction(transaction) {
      return this.dryrunTransactionWithHttpInfo(transaction).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Receive a fee estimate for a transaction.
     * Send a serialized transaction and receive back a naive fee estimate. Note: `partialFee` does not include any tips that you may add to increase a transaction's priority. See the reference on `compute_fee`. Replaces `/tx/fee-estimate` from versions < v1.0.0. Substrate Reference: - `RuntimeDispatchInfo`: https://crates.parity.io/pallet_transaction_payment_rpc_runtime_api/struct.RuntimeDispatchInfo.html - `query_info`: https://crates.parity.io/pallet_transaction_payment/struct.Module.html#method.query_info - `compute_fee`: https://crates.parity.io/pallet_transaction_payment/struct.Module.html#method.compute_fee
     * @param {module:model/Transaction} transaction 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TransactionFeeEstimate} and HTTP response
     */

  }, {
    key: "feeEstimateTransactionWithHttpInfo",
    value: function feeEstimateTransactionWithHttpInfo(transaction) {
      var postBody = transaction; // verify the required parameter 'transaction' is set

      if (transaction === undefined || transaction === null) {
        throw new _Error["default"]("Missing the required parameter 'transaction' when calling feeEstimateTransaction");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _TransactionFeeEstimate["default"];
      return this.apiClient.callApi('/transaction/fee-estimate', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Receive a fee estimate for a transaction.
     * Send a serialized transaction and receive back a naive fee estimate. Note: `partialFee` does not include any tips that you may add to increase a transaction's priority. See the reference on `compute_fee`. Replaces `/tx/fee-estimate` from versions < v1.0.0. Substrate Reference: - `RuntimeDispatchInfo`: https://crates.parity.io/pallet_transaction_payment_rpc_runtime_api/struct.RuntimeDispatchInfo.html - `query_info`: https://crates.parity.io/pallet_transaction_payment/struct.Module.html#method.query_info - `compute_fee`: https://crates.parity.io/pallet_transaction_payment/struct.Module.html#method.compute_fee
     * @param {module:model/Transaction} transaction 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TransactionFeeEstimate}
     */

  }, {
    key: "feeEstimateTransaction",
    value: function feeEstimateTransaction(transaction) {
      return this.feeEstimateTransactionWithHttpInfo(transaction).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get all the network information needed to construct a transaction offline.
     * Returns the material that is universal to constructing any signed transaction offline. Replaces `/tx/artifacts` from versions < v1.0.0.
     * @param {Object} opts Optional parameters
     * @param {String} opts.at Block at which to retrieve the transaction construction material.
     * @param {Boolean} opts.noMeta  (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TransactionMaterial} and HTTP response
     */

  }, {
    key: "getTransactionMaterialWithHttpInfo",
    value: function getTransactionMaterialWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'at': opts['at'],
        'noMeta': opts['noMeta']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TransactionMaterial["default"];
      return this.apiClient.callApi('/transaction/material', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get all the network information needed to construct a transaction offline.
     * Returns the material that is universal to constructing any signed transaction offline. Replaces `/tx/artifacts` from versions < v1.0.0.
     * @param {Object} opts Optional parameters
     * @param {String} opts.at Block at which to retrieve the transaction construction material.
     * @param {Boolean} opts.noMeta  (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TransactionMaterial}
     */

  }, {
    key: "getTransactionMaterial",
    value: function getTransactionMaterial(opts) {
      return this.getTransactionMaterialWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Submit a transaction to the node's transaction pool.
     * Accepts a valid signed extrinsic. Replaces `/tx` from versions < v1.0.0.
     * @param {module:model/Transaction} transaction 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TransactionSuccess} and HTTP response
     */

  }, {
    key: "submitTransactionWithHttpInfo",
    value: function submitTransactionWithHttpInfo(transaction) {
      var postBody = transaction; // verify the required parameter 'transaction' is set

      if (transaction === undefined || transaction === null) {
        throw new _Error["default"]("Missing the required parameter 'transaction' when calling submitTransaction");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _TransactionSuccess["default"];
      return this.apiClient.callApi('/transaction', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Submit a transaction to the node's transaction pool.
     * Accepts a valid signed extrinsic. Replaces `/tx` from versions < v1.0.0.
     * @param {module:model/Transaction} transaction 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TransactionSuccess}
     */

  }, {
    key: "submitTransaction",
    value: function submitTransaction(transaction) {
      return this.submitTransactionWithHttpInfo(transaction).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return TransactionApi;
}();

exports["default"] = TransactionApi;