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
import BalanceLock from './BalanceLock';
import BlockIdentifiers from './BlockIdentifiers';

/**
 * The AccountBalanceInfo model module.
 * @module model/AccountBalanceInfo
 * @version 1.0.0-oas3
 */
class AccountBalanceInfo {
    /**
     * Constructs a new <code>AccountBalanceInfo</code>.
     * @alias module:model/AccountBalanceInfo
     */
    constructor() { 
        
        AccountBalanceInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AccountBalanceInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountBalanceInfo} obj Optional instance to populate.
     * @return {module:model/AccountBalanceInfo} The populated <code>AccountBalanceInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountBalanceInfo();

            if (data.hasOwnProperty('at')) {
                obj['at'] = BlockIdentifiers.constructFromObject(data['at']);
            }
            if (data.hasOwnProperty('nonce')) {
                obj['nonce'] = ApiClient.convertToType(data['nonce'], 'String');
            }
            if (data.hasOwnProperty('free')) {
                obj['free'] = ApiClient.convertToType(data['free'], 'String');
            }
            if (data.hasOwnProperty('reserved')) {
                obj['reserved'] = ApiClient.convertToType(data['reserved'], 'String');
            }
            if (data.hasOwnProperty('miscFrozen')) {
                obj['miscFrozen'] = ApiClient.convertToType(data['miscFrozen'], 'String');
            }
            if (data.hasOwnProperty('feeFrozen')) {
                obj['feeFrozen'] = ApiClient.convertToType(data['feeFrozen'], 'String');
            }
            if (data.hasOwnProperty('locks')) {
                obj['locks'] = ApiClient.convertToType(data['locks'], [BalanceLock]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/BlockIdentifiers} at
 */
AccountBalanceInfo.prototype['at'] = undefined;

/**
 * Account nonce.
 * @member {String} nonce
 */
AccountBalanceInfo.prototype['nonce'] = undefined;

/**
 * Free balance of the account. Not equivalent to _spendable_ balance. This is the only balance that matters in terms of most operations on tokens.
 * @member {String} free
 */
AccountBalanceInfo.prototype['free'] = undefined;

/**
 * Reserved balance of the account.
 * @member {String} reserved
 */
AccountBalanceInfo.prototype['reserved'] = undefined;

/**
 * The amount that `free` may not drop below when withdrawing for anything except transaction fee payment.
 * @member {String} miscFrozen
 */
AccountBalanceInfo.prototype['miscFrozen'] = undefined;

/**
 * The amount that `free` may not drop below when withdrawing specifically for transaction fee payment.
 * @member {String} feeFrozen
 */
AccountBalanceInfo.prototype['feeFrozen'] = undefined;

/**
 * Array of locks on a balance. There can be many of these on an account and they \"overlap\", so the same balance is frozen by multiple locks
 * @member {Array.<module:model/BalanceLock>} locks
 */
AccountBalanceInfo.prototype['locks'] = undefined;






export default AccountBalanceInfo;
