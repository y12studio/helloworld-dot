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
 * The TransactionFailedToSubmit model module.
 * @module model/TransactionFailedToSubmit
 * @version 1.0.0-oas3
 */
class TransactionFailedToSubmit {
    /**
     * Constructs a new <code>TransactionFailedToSubmit</code>.
     * Error message when the node rejects the submitted transaction.
     * @alias module:model/TransactionFailedToSubmit
     */
    constructor() { 
        
        TransactionFailedToSubmit.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TransactionFailedToSubmit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionFailedToSubmit} obj Optional instance to populate.
     * @return {module:model/TransactionFailedToSubmit} The populated <code>TransactionFailedToSubmit</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionFailedToSubmit();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'Number');
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'String');
            }
            if (data.hasOwnProperty('transaction')) {
                obj['transaction'] = ApiClient.convertToType(data['transaction'], 'String');
            }
            if (data.hasOwnProperty('cause')) {
                obj['cause'] = ApiClient.convertToType(data['cause'], 'String');
            }
            if (data.hasOwnProperty('stack')) {
                obj['stack'] = ApiClient.convertToType(data['stack'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} code
 */
TransactionFailedToSubmit.prototype['code'] = undefined;

/**
 * Failed to submit transaction.
 * @member {String} error
 */
TransactionFailedToSubmit.prototype['error'] = undefined;

/**
 * @member {String} transaction
 */
TransactionFailedToSubmit.prototype['transaction'] = undefined;

/**
 * @member {String} cause
 */
TransactionFailedToSubmit.prototype['cause'] = undefined;

/**
 * @member {String} stack
 */
TransactionFailedToSubmit.prototype['stack'] = undefined;






export default TransactionFailedToSubmit;

