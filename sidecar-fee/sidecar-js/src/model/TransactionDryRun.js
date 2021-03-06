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
 * The TransactionDryRun model module.
 * @module model/TransactionDryRun
 * @version 1.0.0-oas3
 */
class TransactionDryRun {
    /**
     * Constructs a new <code>TransactionDryRun</code>.
     * References: - &#x60;UnknownTransaction&#x60;: https://crates.parity.io/sp_runtime/transaction_validity/enum.UnknownTransaction.html - &#x60;InvalidTransaction&#x60;: https://crates.parity.io/sp_runtime/transaction_validity/enum.InvalidTransaction.html
     * @alias module:model/TransactionDryRun
     */
    constructor() { 
        
        TransactionDryRun.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TransactionDryRun</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionDryRun} obj Optional instance to populate.
     * @return {module:model/TransactionDryRun} The populated <code>TransactionDryRun</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionDryRun();

            if (data.hasOwnProperty('resultType')) {
                obj['resultType'] = ApiClient.convertToType(data['resultType'], 'String');
            }
            if (data.hasOwnProperty('result')) {
                obj['result'] = ApiClient.convertToType(data['result'], 'String');
            }
            if (data.hasOwnProperty('validityErrorType')) {
                obj['validityErrorType'] = ApiClient.convertToType(data['validityErrorType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Either `DispatchOutcome` if the transaction is valid or `TransactionValidityError` if the result is invalid.
 * @member {module:model/TransactionDryRun.ResultTypeEnum} resultType
 */
TransactionDryRun.prototype['resultType'] = undefined;

/**
 * If there was an error it will be the cause of the error. If the transaction executed correctly it will be `Ok: []`
 * @member {module:model/TransactionDryRun.ResultEnum} result
 */
TransactionDryRun.prototype['result'] = undefined;

/**
 * @member {module:model/TransactionDryRun.ValidityErrorTypeEnum} validityErrorType
 */
TransactionDryRun.prototype['validityErrorType'] = undefined;





/**
 * Allowed values for the <code>resultType</code> property.
 * @enum {String}
 * @readonly
 */
TransactionDryRun['ResultTypeEnum'] = {

    /**
     * value: "DispatchOutcome"
     * @const
     */
    "DispatchOutcome": "DispatchOutcome",

    /**
     * value: "TransactionValidityError"
     * @const
     */
    "TransactionValidityError": "TransactionValidityError"
};


/**
 * Allowed values for the <code>result</code> property.
 * @enum {String}
 * @readonly
 */
TransactionDryRun['ResultEnum'] = {

    /**
     * value: "Ok"
     * @const
     */
    "Ok": "Ok",

    /**
     * value: "CannotLookup"
     * @const
     */
    "CannotLookup": "CannotLookup",

    /**
     * value: "NoUnsignedValidator"
     * @const
     */
    "NoUnsignedValidator": "NoUnsignedValidator",

    /**
     * value: "Custom(u8)"
     * @const
     */
    "Custom(u8)": "Custom(u8)",

    /**
     * value: "Call"
     * @const
     */
    "Call": "Call",

    /**
     * value: "Payment"
     * @const
     */
    "Payment": "Payment",

    /**
     * value: "Future"
     * @const
     */
    "Future": "Future",

    /**
     * value: "Stale"
     * @const
     */
    "Stale": "Stale",

    /**
     * value: "BadProof"
     * @const
     */
    "BadProof": "BadProof",

    /**
     * value: "AncientBirthBlock"
     * @const
     */
    "AncientBirthBlock": "AncientBirthBlock",

    /**
     * value: "ExhaustsResources"
     * @const
     */
    "ExhaustsResources": "ExhaustsResources",

    /**
     * value: "BadMandatory"
     * @const
     */
    "BadMandatory": "BadMandatory",

    /**
     * value: "MandatoryDispatch"
     * @const
     */
    "MandatoryDispatch": "MandatoryDispatch"
};


/**
 * Allowed values for the <code>validityErrorType</code> property.
 * @enum {String}
 * @readonly
 */
TransactionDryRun['ValidityErrorTypeEnum'] = {

    /**
     * value: "InvalidTransaction"
     * @const
     */
    "InvalidTransaction": "InvalidTransaction",

    /**
     * value: "UnknownTransaction"
     * @const
     */
    "UnknownTransaction": "UnknownTransaction"
};



export default TransactionDryRun;

