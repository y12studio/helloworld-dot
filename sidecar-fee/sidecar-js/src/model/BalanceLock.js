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
 * The BalanceLock model module.
 * @module model/BalanceLock
 * @version 1.0.0-oas3
 */
class BalanceLock {
    /**
     * Constructs a new <code>BalanceLock</code>.
     * @alias module:model/BalanceLock
     */
    constructor() { 
        
        BalanceLock.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BalanceLock</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BalanceLock} obj Optional instance to populate.
     * @return {module:model/BalanceLock} The populated <code>BalanceLock</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BalanceLock();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('reasons')) {
                obj['reasons'] = ApiClient.convertToType(data['reasons'], 'String');
            }
        }
        return obj;
    }


}

/**
 * An identifier for this lock. Only one lock may be in existence for each identifier.
 * @member {String} id
 */
BalanceLock.prototype['id'] = undefined;

/**
 * The amount below which the free balance may not drop with this lock in effect.
 * @member {String} amount
 */
BalanceLock.prototype['amount'] = undefined;

/**
 * Reasons for withdrawing balance.
 * @member {module:model/BalanceLock.ReasonsEnum} reasons
 */
BalanceLock.prototype['reasons'] = undefined;





/**
 * Allowed values for the <code>reasons</code> property.
 * @enum {String}
 * @readonly
 */
BalanceLock['ReasonsEnum'] = {

    /**
     * value: "Fee = 0"
     * @const
     */
    "Fee &#x3D; 0": "Fee = 0",

    /**
     * value: "Misc = 1"
     * @const
     */
    "Misc &#x3D; 1": "Misc = 1",

    /**
     * value: "All = 2"
     * @const
     */
    "All &#x3D; 2": "All = 2"
};



export default BalanceLock;

