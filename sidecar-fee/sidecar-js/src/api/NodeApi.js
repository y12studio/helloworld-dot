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
import NodeNetwork from '../model/NodeNetwork';
import NodeVersion from '../model/NodeVersion';
import TransactionPool from '../model/TransactionPool';

/**
* Node service.
* @module api/NodeApi
* @version 1.0.0-oas3
*/
export default class NodeApi {

    /**
    * Constructs a new NodeApi. 
    * @alias module:api/NodeApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get information about the Substrate node's activity in the peer-to-peer network.
     * Returns network related information of the node.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NodeNetwork} and HTTP response
     */
    getNodeNetworkingWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = NodeNetwork;
      return this.apiClient.callApi(
        '/node/network', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get information about the Substrate node's activity in the peer-to-peer network.
     * Returns network related information of the node.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NodeNetwork}
     */
    getNodeNetworking() {
      return this.getNodeNetworkingWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get pending extrinsics from the Substrate node.
     * Returns the extrinsics that the node knows of that have not been included in a block.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TransactionPool} and HTTP response
     */
    getNodeTransactionPoolWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TransactionPool;
      return this.apiClient.callApi(
        '/node/transaction-pool', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get pending extrinsics from the Substrate node.
     * Returns the extrinsics that the node knows of that have not been included in a block.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TransactionPool}
     */
    getNodeTransactionPool() {
      return this.getNodeTransactionPoolWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get information about the Substrates node's implementation and versioning.
     * Returns versioning information of the node.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NodeVersion} and HTTP response
     */
    getNodeVersionWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = NodeVersion;
      return this.apiClient.callApi(
        '/node/version', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get information about the Substrates node's implementation and versioning.
     * Returns versioning information of the node.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NodeVersion}
     */
    getNodeVersion() {
      return this.getNodeVersionWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
