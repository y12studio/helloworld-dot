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
import Block from '../model/Block';
import Error from '../model/Error';

/**
* Blocks service.
* @module api/BlocksApi
* @version 1.0.0-oas3
*/
export default class BlocksApi {

    /**
    * Constructs a new BlocksApi. 
    * @alias module:api/BlocksApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
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
    getBlockByIdWithHttpInfo(blockId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'blockId' is set
      if (blockId === undefined || blockId === null) {
        throw new Error("Missing the required parameter 'blockId' when calling getBlockById");
      }

      let pathParams = {
        'blockId': blockId
      };
      let queryParams = {
        'eventDocs': opts['eventDocs'],
        'extrinsicDocs': opts['extrinsicDocs']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Block;
      return this.apiClient.callApi(
        '/blocks/{blockId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
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
    getBlockById(blockId, opts) {
      return this.getBlockByIdWithHttpInfo(blockId, opts)
        .then(function(response_and_data) {
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
    getHeadBlockWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'finalized': opts['finalized'],
        'eventDocs': opts['eventDocs'],
        'extrinsicDocs': opts['extrinsicDocs']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Block;
      return this.apiClient.callApi(
        '/blocks/head', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
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
    getHeadBlock(opts) {
      return this.getHeadBlockWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
