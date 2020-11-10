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
 * The PalletStorageItemMetadata model module.
 * @module model/PalletStorageItemMetadata
 * @version 1.0.0-oas3
 */
class PalletStorageItemMetadata {
    /**
     * Constructs a new <code>PalletStorageItemMetadata</code>.
     * Metadata of a storage item from a FRAME pallet.
     * @alias module:model/PalletStorageItemMetadata
     */
    constructor() { 
        
        PalletStorageItemMetadata.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PalletStorageItemMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PalletStorageItemMetadata} obj Optional instance to populate.
     * @return {module:model/PalletStorageItemMetadata} The populated <code>PalletStorageItemMetadata</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PalletStorageItemMetadata();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('modifier')) {
                obj['modifier'] = ApiClient.convertToType(data['modifier'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], Object);
            }
            if (data.hasOwnProperty('fallback')) {
                obj['fallback'] = ApiClient.convertToType(data['fallback'], 'String');
            }
            if (data.hasOwnProperty('documentation')) {
                obj['documentation'] = ApiClient.convertToType(data['documentation'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
PalletStorageItemMetadata.prototype['name'] = undefined;

/**
 * @member {String} modifier
 */
PalletStorageItemMetadata.prototype['modifier'] = undefined;

/**
 * Info about the data structure used for storage.
 * @member {Object} type
 */
PalletStorageItemMetadata.prototype['type'] = undefined;

/**
 * @member {String} fallback
 */
PalletStorageItemMetadata.prototype['fallback'] = undefined;

/**
 * @member {String} documentation
 */
PalletStorageItemMetadata.prototype['documentation'] = undefined;






export default PalletStorageItemMetadata;

