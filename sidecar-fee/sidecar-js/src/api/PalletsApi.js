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
import PalletStorageItem from '../model/PalletStorageItem';
import StakingProgress from '../model/StakingProgress';

/**
* Pallets service.
* @module api/PalletsApi
* @version 1.0.0-oas3
*/
export default class PalletsApi {

    /**
    * Constructs a new PalletsApi. 
    * @alias module:api/PalletsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get progress on the general Staking pallet system.
     * Returns information on the progress of key components of the staking system and estimates of future points of interest. Replaces `/staking-info` from versions < v1.0.0.
     * @param {Object} opts Optional parameters
     * @param {String} opts.at Block at which to retrieve a staking progress report.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StakingProgress} and HTTP response
     */
    getStakingProgressWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
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
      let returnType = StakingProgress;
      return this.apiClient.callApi(
        '/pallets/staking/progress', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get progress on the general Staking pallet system.
     * Returns information on the progress of key components of the staking system and estimates of future points of interest. Replaces `/staking-info` from versions < v1.0.0.
     * @param {Object} opts Optional parameters
     * @param {String} opts.at Block at which to retrieve a staking progress report.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StakingProgress}
     */
    getStakingProgress(opts) {
      return this.getStakingProgressWithHttpInfo(opts)
        .then(function(response_and_data) {
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
    palletsPalletIdStorageStorageItemIdGetWithHttpInfo(palletId, storageItemId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'palletId' is set
      if (palletId === undefined || palletId === null) {
        throw new Error("Missing the required parameter 'palletId' when calling palletsPalletIdStorageStorageItemIdGet");
      }
      // verify the required parameter 'storageItemId' is set
      if (storageItemId === undefined || storageItemId === null) {
        throw new Error("Missing the required parameter 'storageItemId' when calling palletsPalletIdStorageStorageItemIdGet");
      }

      let pathParams = {
        'palletId': palletId,
        'storageItemId': storageItemId
      };
      let queryParams = {
        'key1': opts['key1'],
        'key2': opts['key2'],
        'at': opts['at'],
        'metadata': opts['metadata']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PalletStorageItem;
      return this.apiClient.callApi(
        '/pallets/{palletId}/storage/{storageItemId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
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
    palletsPalletIdStorageStorageItemIdGet(palletId, storageItemId, opts) {
      return this.palletsPalletIdStorageStorageItemIdGetWithHttpInfo(palletId, storageItemId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
