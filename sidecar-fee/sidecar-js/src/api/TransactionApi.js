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


import ApiClient from "../ApiClient";
import Error from '../model/Error';
import Transaction from '../model/Transaction';
import TransactionDryRun from '../model/TransactionDryRun';
import TransactionFailure from '../model/TransactionFailure';
import TransactionFeeEstimate from '../model/TransactionFeeEstimate';
import TransactionFeeEstimateFailure from '../model/TransactionFeeEstimateFailure';
import TransactionMaterial from '../model/TransactionMaterial';
import TransactionSuccess from '../model/TransactionSuccess';

/**
* Transaction service.
* @module api/TransactionApi
* @version 1.0.0-oas3
*/
export default class TransactionApi {

    /**
    * Constructs a new TransactionApi. 
    * @alias module:api/TransactionApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Dry run an extrinsic.
     * Use the dryrun call to practice submission of a transaction.
     * @param {module:model/Transaction} transaction 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TransactionDryRun} and HTTP response
     */
    dryrunTransactionWithHttpInfo(transaction) {
      let postBody = transaction;
      // verify the required parameter 'transaction' is set
      if (transaction === undefined || transaction === null) {
        throw new Error("Missing the required parameter 'transaction' when calling dryrunTransaction");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = TransactionDryRun;
      return this.apiClient.callApi(
        '/transaction/dry-run', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Dry run an extrinsic.
     * Use the dryrun call to practice submission of a transaction.
     * @param {module:model/Transaction} transaction 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TransactionDryRun}
     */
    dryrunTransaction(transaction) {
      return this.dryrunTransactionWithHttpInfo(transaction)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Receive a fee estimate for a transaction.
     * Send a serialized transaction and receive back a naive fee estimate. Note: `partialFee` does not include any tips that you may add to increase a transaction's priority. See the reference on `compute_fee`. Replaces `/tx/fee-estimate` from versions < v1.0.0. Substrate Reference: - `RuntimeDispatchInfo`: https://crates.parity.io/pallet_transaction_payment_rpc_runtime_api/struct.RuntimeDispatchInfo.html - `query_info`: https://crates.parity.io/pallet_transaction_payment/struct.Module.html#method.query_info - `compute_fee`: https://crates.parity.io/pallet_transaction_payment/struct.Module.html#method.compute_fee
     * @param {module:model/Transaction} transaction 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TransactionFeeEstimate} and HTTP response
     */
    feeEstimateTransactionWithHttpInfo(transaction) {
      let postBody = transaction;
      // verify the required parameter 'transaction' is set
      if (transaction === undefined || transaction === null) {
        throw new Error("Missing the required parameter 'transaction' when calling feeEstimateTransaction");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = TransactionFeeEstimate;
      return this.apiClient.callApi(
        '/transaction/fee-estimate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Receive a fee estimate for a transaction.
     * Send a serialized transaction and receive back a naive fee estimate. Note: `partialFee` does not include any tips that you may add to increase a transaction's priority. See the reference on `compute_fee`. Replaces `/tx/fee-estimate` from versions < v1.0.0. Substrate Reference: - `RuntimeDispatchInfo`: https://crates.parity.io/pallet_transaction_payment_rpc_runtime_api/struct.RuntimeDispatchInfo.html - `query_info`: https://crates.parity.io/pallet_transaction_payment/struct.Module.html#method.query_info - `compute_fee`: https://crates.parity.io/pallet_transaction_payment/struct.Module.html#method.compute_fee
     * @param {module:model/Transaction} transaction 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TransactionFeeEstimate}
     */
    feeEstimateTransaction(transaction) {
      return this.feeEstimateTransactionWithHttpInfo(transaction)
        .then(function(response_and_data) {
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
    getTransactionMaterialWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'at': opts['at'],
        'noMeta': opts['noMeta']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TransactionMaterial;
      return this.apiClient.callApi(
        '/transaction/material', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all the network information needed to construct a transaction offline.
     * Returns the material that is universal to constructing any signed transaction offline. Replaces `/tx/artifacts` from versions < v1.0.0.
     * @param {Object} opts Optional parameters
     * @param {String} opts.at Block at which to retrieve the transaction construction material.
     * @param {Boolean} opts.noMeta  (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TransactionMaterial}
     */
    getTransactionMaterial(opts) {
      return this.getTransactionMaterialWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Submit a transaction to the node's transaction pool.
     * Accepts a valid signed extrinsic. Replaces `/tx` from versions < v1.0.0.
     * @param {module:model/Transaction} transaction 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TransactionSuccess} and HTTP response
     */
    submitTransactionWithHttpInfo(transaction) {
      let postBody = transaction;
      // verify the required parameter 'transaction' is set
      if (transaction === undefined || transaction === null) {
        throw new Error("Missing the required parameter 'transaction' when calling submitTransaction");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = TransactionSuccess;
      return this.apiClient.callApi(
        '/transaction', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Submit a transaction to the node's transaction pool.
     * Accepts a valid signed extrinsic. Replaces `/tx` from versions < v1.0.0.
     * @param {module:model/Transaction} transaction 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TransactionSuccess}
     */
    submitTransaction(transaction) {
      return this.submitTransactionWithHttpInfo(transaction)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}