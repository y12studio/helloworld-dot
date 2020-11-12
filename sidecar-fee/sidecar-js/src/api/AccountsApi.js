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
import AccountBalanceInfo from '../model/AccountBalanceInfo';
import AccountVestingInfo from '../model/AccountVestingInfo';
import Error from '../model/Error';

/**
* Accounts service.
* @module api/AccountsApi
* @version 1.0.0-oas3
*/
export default class AccountsApi {

    /**
    * Constructs a new AccountsApi. 
    * @alias module:api/AccountsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get balance information for an account.
     * Returns information about an account's balance. Replaces `/balance/{address}` from versions < v1.0.0.
     * @param {String} accountId SS58 address of the account.
     * @param {Object} opts Optional parameters
     * @param {String} opts.at Block at which to query balance info for the specified account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AccountBalanceInfo} and HTTP response
     */
    getAccountBalanceInfoWithHttpInfo(accountId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getAccountBalanceInfo");
      }

      let pathParams = {
        'accountId': accountId
      };
      let queryParams = {
        'at': opts['at']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AccountBalanceInfo;
      return this.apiClient.callApi(
        '/accounts/{accountId}/balance-info', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get balance information for an account.
     * Returns information about an account's balance. Replaces `/balance/{address}` from versions < v1.0.0.
     * @param {String} accountId SS58 address of the account.
     * @param {Object} opts Optional parameters
     * @param {String} opts.at Block at which to query balance info for the specified account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AccountBalanceInfo}
     */
    getAccountBalanceInfo(accountId, opts) {
      return this.getAccountBalanceInfoWithHttpInfo(accountId, opts)
        .then(function(response_and_data) {
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
    getVestingSummaryByAccountIdWithHttpInfo(accountId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getVestingSummaryByAccountId");
      }

      let pathParams = {
        'accountId': accountId
      };
      let queryParams = {
        'at': opts['at']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AccountVestingInfo;
      return this.apiClient.callApi(
        '/accounts/{accountId}/vesting-info', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get vesting information for an account.
     * Returns the vesting schedule for an account. Replaces `/vesting/{address}` from versions < v1.0.0.
     * @param {String} accountId SS58 address of the account.
     * @param {Object} opts Optional parameters
     * @param {String} opts.at Block at which to query the vesting info for the specified account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AccountVestingInfo}
     */
    getVestingSummaryByAccountId(accountId, opts) {
      return this.getVestingSummaryByAccountIdWithHttpInfo(accountId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}