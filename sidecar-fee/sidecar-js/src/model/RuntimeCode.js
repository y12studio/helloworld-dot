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
import BlockIdentifiers from './BlockIdentifiers';

/**
 * The RuntimeCode model module.
 * @module model/RuntimeCode
 * @version 1.0.0-oas3
 */
class RuntimeCode {
    /**
     * Constructs a new <code>RuntimeCode</code>.
     * @alias module:model/RuntimeCode
     */
    constructor() { 
        
        RuntimeCode.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RuntimeCode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RuntimeCode} obj Optional instance to populate.
     * @return {module:model/RuntimeCode} The populated <code>RuntimeCode</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RuntimeCode();

            if (data.hasOwnProperty('at')) {
                obj['at'] = BlockIdentifiers.constructFromObject(data['at']);
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/BlockIdentifiers} at
 */
RuntimeCode.prototype['at'] = undefined;

/**
 * @member {String} code
 */
RuntimeCode.prototype['code'] = undefined;






export default RuntimeCode;
