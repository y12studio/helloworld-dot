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
 * The TransactionSuccess model module.
 * @module model/TransactionSuccess
 * @version 1.0.0-oas3
 */
class TransactionSuccess {
    /**
     * Constructs a new <code>TransactionSuccess</code>.
     * @alias module:model/TransactionSuccess
     */
    constructor() { 
        
        TransactionSuccess.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TransactionSuccess</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionSuccess} obj Optional instance to populate.
     * @return {module:model/TransactionSuccess} The populated <code>TransactionSuccess</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionSuccess();

            if (data.hasOwnProperty('hash')) {
                obj['hash'] = ApiClient.convertToType(data['hash'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The hash of the encoded transaction.
 * @member {String} hash
 */
TransactionSuccess.prototype['hash'] = undefined;






export default TransactionSuccess;

