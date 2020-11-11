"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BlockFinalize = _interopRequireDefault(require("./BlockFinalize"));

var _BlockInitialize = _interopRequireDefault(require("./BlockInitialize"));

var _DigestItem = _interopRequireDefault(require("./DigestItem"));

var _Extrinsic = _interopRequireDefault(require("./Extrinsic"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Block model module.
 * @module model/Block
 * @version 1.0.0-oas3
 */
var Block = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Block</code>.
   * Note: Block finalization does not correspond to consensus, i.e. whether the block is in the canonical chain. It denotes the finalization of block _construction._
   * @alias module:model/Block
   */
  function Block() {
    _classCallCheck(this, Block);

    Block.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Block, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Block</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Block} obj Optional instance to populate.
     * @return {module:model/Block} The populated <code>Block</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Block();

        if (data.hasOwnProperty('hash')) {
          obj['hash'] = _ApiClient["default"].convertToType(data['hash'], 'String');
        }

        if (data.hasOwnProperty('height')) {
          obj['height'] = _ApiClient["default"].convertToType(data['height'], 'String');
        }

        if (data.hasOwnProperty('parentHash')) {
          obj['parentHash'] = _ApiClient["default"].convertToType(data['parentHash'], 'String');
        }

        if (data.hasOwnProperty('stateRoot')) {
          obj['stateRoot'] = _ApiClient["default"].convertToType(data['stateRoot'], 'String');
        }

        if (data.hasOwnProperty('extrinsicRoot')) {
          obj['extrinsicRoot'] = _ApiClient["default"].convertToType(data['extrinsicRoot'], 'String');
        }

        if (data.hasOwnProperty('authorId')) {
          obj['authorId'] = _ApiClient["default"].convertToType(data['authorId'], 'String');
        }

        if (data.hasOwnProperty('logs')) {
          obj['logs'] = _ApiClient["default"].convertToType(data['logs'], [_DigestItem["default"]]);
        }

        if (data.hasOwnProperty('onInitialize')) {
          obj['onInitialize'] = _BlockInitialize["default"].constructFromObject(data['onInitialize']);
        }

        if (data.hasOwnProperty('extrinsics')) {
          obj['extrinsics'] = _ApiClient["default"].convertToType(data['extrinsics'], [_Extrinsic["default"]]);
        }

        if (data.hasOwnProperty('onFinalize')) {
          obj['onFinalize'] = _BlockFinalize["default"].constructFromObject(data['onFinalize']);
        }
      }

      return obj;
    }
  }]);

  return Block;
}();
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
var _default = Block;
exports["default"] = _default;