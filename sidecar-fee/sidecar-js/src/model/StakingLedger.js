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
 * The StakingLedger model module.
 * @module model/StakingLedger
 * @version 1.0.0-oas3
 */
class StakingLedger {
    /**
     * Constructs a new <code>StakingLedger</code>.
     * The staking ledger.
     * @alias module:model/StakingLedger
     */
    constructor() { 
        
        StakingLedger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StakingLedger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StakingLedger} obj Optional instance to populate.
     * @return {module:model/StakingLedger} The populated <code>StakingLedger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StakingLedger();

            if (data.hasOwnProperty('stash')) {
                obj['stash'] = ApiClient.convertToType(data['stash'], 'String');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'String');
            }
            if (data.hasOwnProperty('unlocking')) {
                obj['unlocking'] = ApiClient.convertToType(data['unlocking'], 'String');
            }
            if (data.hasOwnProperty('claimedRewards')) {
                obj['claimedRewards'] = ApiClient.convertToType(data['claimedRewards'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * The _Stash_ account whose balance is actually locked and at stake.
 * @member {String} stash
 */
StakingLedger.prototype['stash'] = undefined;

/**
 * The total amount of the _Stash_'s balance that we are currently accounting for. Simply `active + unlocking`.
 * @member {String} total
 */
StakingLedger.prototype['total'] = undefined;

/**
 * The total amount of the _Stash_'s balance that will be at stake in any forthcoming eras.
 * @member {String} active
 */
StakingLedger.prototype['active'] = undefined;

/**
 * Any balance that is becoming free, which may eventually be transferred out of the _Stash_ (assuming it doesn't get slashed first). Represented as an array of objects, each with an `era` at which `value` will be unlocked.
 * @member {String} unlocking
 */
StakingLedger.prototype['unlocking'] = undefined;

/**
 * Array of eras for which the stakers behind a validator have claimed rewards. Only updated for _validators._
 * @member {Array.<String>} claimedRewards
 */
StakingLedger.prototype['claimedRewards'] = undefined;






export default StakingLedger;

