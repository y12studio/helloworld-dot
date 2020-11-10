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
import BlockFinalize from './BlockFinalize';
import BlockInitialize from './BlockInitialize';
import DigestItem from './DigestItem';
import Extrinsic from './Extrinsic';

/**
 * The Block model module.
 * @module model/Block
 * @version 1.0.0-oas3
 */
class Block {
    /**
     * Constructs a new <code>Block</code>.
     * Note: Block finalization does not correspond to consensus, i.e. whether the block is in the canonical chain. It denotes the finalization of block _construction._
     * @alias module:model/Block
     */
    constructor() { 
        
        Block.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Block</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Block} obj Optional instance to populate.
     * @return {module:model/Block} The populated <code>Block</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Block();

            if (data.hasOwnProperty('hash')) {
                obj['hash'] = ApiClient.convertToType(data['hash'], 'String');
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'String');
            }
            if (data.hasOwnProperty('parentHash')) {
                obj['parentHash'] = ApiClient.convertToType(data['parentHash'], 'String');
            }
            if (data.hasOwnProperty('stateRoot')) {
                obj['stateRoot'] = ApiClient.convertToType(data['stateRoot'], 'String');
            }
            if (data.hasOwnProperty('extrinsicRoot')) {
                obj['extrinsicRoot'] = ApiClient.convertToType(data['extrinsicRoot'], 'String');
            }
            if (data.hasOwnProperty('authorId')) {
                obj['authorId'] = ApiClient.convertToType(data['authorId'], 'String');
            }
            if (data.hasOwnProperty('logs')) {
                obj['logs'] = ApiClient.convertToType(data['logs'], [DigestItem]);
            }
            if (data.hasOwnProperty('onInitialize')) {
                obj['onInitialize'] = BlockInitialize.constructFromObject(data['onInitialize']);
            }
            if (data.hasOwnProperty('extrinsics')) {
                obj['extrinsics'] = ApiClient.convertToType(data['extrinsics'], [Extrinsic]);
            }
            if (data.hasOwnProperty('onFinalize')) {
                obj['onFinalize'] = BlockFinalize.constructFromObject(data['onFinalize']);
            }
        }
        return obj;
    }


}

/**
 * The block's hash.
 * @member {String} hash
 */
Block.prototype['hash'] = undefined;

/**
 * The block's height.
 * @member {String} height
 */
Block.prototype['height'] = undefined;

/**
 * The hash of the parent block.
 * @member {String} parentHash
 */
Block.prototype['parentHash'] = undefined;

/**
 * The state root after executing this block.
 * @member {String} stateRoot
 */
Block.prototype['stateRoot'] = undefined;

/**
 * The Merkle root of the extrinsics.
 * @member {String} extrinsicRoot
 */
Block.prototype['extrinsicRoot'] = undefined;

/**
 * The account ID of the block author (may be undefined for some chains).
 * @member {String} authorId
 */
Block.prototype['authorId'] = undefined;

/**
 * Array of `DigestItem`s associated with the block.
 * @member {Array.<module:model/DigestItem>} logs
 */
Block.prototype['logs'] = undefined;

/**
 * @member {module:model/BlockInitialize} onInitialize
 */
Block.prototype['onInitialize'] = undefined;

/**
 * Array of extrinsics (inherents and transactions) within the block.
 * @member {Array.<module:model/Extrinsic>} extrinsics
 */
Block.prototype['extrinsics'] = undefined;

/**
 * @member {module:model/BlockFinalize} onFinalize
 */
Block.prototype['onFinalize'] = undefined;






export default Block;

