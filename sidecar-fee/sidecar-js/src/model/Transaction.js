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

import ApiClient from '../ApiClient';

/**
 * The Transaction model module.
 * @module model/Transaction
 * @version 1.0.0-oas3
 */
class Transaction {
    /**
     * Constructs a new <code>Transaction</code>.
     * @alias module:model/Transaction
     */
    constructor() { 
        
        Transaction.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Transaction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Transaction} obj Optional instance to populate.
     * @return {module:model/Transaction} The populated <code>Transaction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Transaction();

            if (data.hasOwnProperty('tx')) {
                obj['tx'] = ApiClient.convertToType(data['tx'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} tx
 */
Transaction.prototype['tx'] = undefined;






export default Transaction;
