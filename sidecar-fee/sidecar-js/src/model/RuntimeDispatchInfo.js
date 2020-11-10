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
 * The RuntimeDispatchInfo model module.
 * @module model/RuntimeDispatchInfo
 * @version 1.0.0-oas3
 */
class RuntimeDispatchInfo {
    /**
     * Constructs a new <code>RuntimeDispatchInfo</code>.
     * RuntimeDispatchInfo for the transaction. Includes the &#x60;partialFee&#x60;.
     * @alias module:model/RuntimeDispatchInfo
     */
    constructor() { 
        
        RuntimeDispatchInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RuntimeDispatchInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RuntimeDispatchInfo} obj Optional instance to populate.
     * @return {module:model/RuntimeDispatchInfo} The populated <code>RuntimeDispatchInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RuntimeDispatchInfo();

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
RuntimeDispatchInfo.prototype['weight'] = undefined;

/**
 * Extrinsic class.
 * @member {module:model/RuntimeDispatchInfo.ClassEnum} class
 */
RuntimeDispatchInfo.prototype['class'] = undefined;

/**
 * The _inclusion fee_ of a transaction, i.e. the minimum fee required for a transaction. Includes weight and encoded length fees, but does not have access to any signed extensions, e.g. the `tip`.
 * @member {String} partialFee
 */
RuntimeDispatchInfo.prototype['partialFee'] = undefined;





/**
 * Allowed values for the <code>class</code> property.
 * @enum {String}
 * @readonly
 */
RuntimeDispatchInfo['ClassEnum'] = {

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



export default RuntimeDispatchInfo;

