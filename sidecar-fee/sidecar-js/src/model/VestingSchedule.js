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
 * The VestingSchedule model module.
 * @module model/VestingSchedule
 * @version 1.0.0-oas3
 */
class VestingSchedule {
    /**
     * Constructs a new <code>VestingSchedule</code>.
     * Vesting schedule for an account.
     * @alias module:model/VestingSchedule
     */
    constructor() { 
        
        VestingSchedule.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VestingSchedule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VestingSchedule} obj Optional instance to populate.
     * @return {module:model/VestingSchedule} The populated <code>VestingSchedule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VestingSchedule();

            if (data.hasOwnProperty('locked')) {
                obj['locked'] = ApiClient.convertToType(data['locked'], 'String');
            }
            if (data.hasOwnProperty('perBlock')) {
                obj['perBlock'] = ApiClient.convertToType(data['perBlock'], 'String');
            }
            if (data.hasOwnProperty('startingBlock')) {
                obj['startingBlock'] = ApiClient.convertToType(data['startingBlock'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Number of tokens locked at start.
 * @member {String} locked
 */
VestingSchedule.prototype['locked'] = undefined;

/**
 * Number of tokens that gets unlocked every block after `startingBlock`.
 * @member {String} perBlock
 */
VestingSchedule.prototype['perBlock'] = undefined;

/**
 * Starting block for unlocking (vesting).
 * @member {String} startingBlock
 */
VestingSchedule.prototype['startingBlock'] = undefined;






export default VestingSchedule;

