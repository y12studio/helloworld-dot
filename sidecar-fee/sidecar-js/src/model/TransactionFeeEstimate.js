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
 * The TransactionFeeEstimate model module.
 * @module model/TransactionFeeEstimate
 * @version 1.0.0-oas3
 */
class TransactionFeeEstimate {
    /**
     * Constructs a new <code>TransactionFeeEstimate</code>.
     * Note: &#x60;partialFee&#x60; does not include any tips that you may add to increase a transaction&#39;s priority. See [compute_fee](https://crates.parity.io/pallet_transaction_payment/struct.Module.html#method.compute_fee).
     * @alias module:model/TransactionFeeEstimate
     */
    constructor() { 
        
        TransactionFeeEstimate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TransactionFeeEstimate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionFeeEstimate} obj Optional instance to populate.
     * @return {module:model/TransactionFeeEstimate} The populated <code>TransactionFeeEstimate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionFeeEstimate();

            if (data.hasOwnProperty('weight')) {
                obj['weight'] = ApiClient.convertToType(data['weight'], 'String');
            }
            if (data.hasOwnProperty('class')) {
                obj['class'] = ApiClient.convertToType(data['class'], 'String');
            }
            if (data.hasOwnProperty('partialFee')) {
                obj['partialFee'] = ApiClient.convertToType(data['partialFee'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Extrinsic weight.
 * @member {String} weight
 */
TransactionFeeEstimate.prototype['weight'] = undefined;

/**
 * Extrinsic class.
 * @member {module:model/TransactionFeeEstimate.ClassEnum} class
 */
TransactionFeeEstimate.prototype['class'] = undefined;

/**
 * Expected inclusion fee for the transaction. Note that the fee rate changes up to 30% in a 24 hour period and this will not be the exact fee.
 * @member {String} partialFee
 */
TransactionFeeEstimate.prototype['partialFee'] = undefined;





/**
 * Allowed values for the <code>class</code> property.
 * @enum {String}
 * @readonly
 */
TransactionFeeEstimate['ClassEnum'] = {

    /**
     * value: "Normal"
     * @const
     */
    "Normal": "Normal",

    /**
     * value: "Operational"
     * @const
     */
    "Operational": "Operational",

    /**
     * value: "Mandatory"
     * @const
     */
    "Mandatory": "Mandatory"
};



export default TransactionFeeEstimate;

