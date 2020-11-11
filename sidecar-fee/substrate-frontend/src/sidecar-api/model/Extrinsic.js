"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ExtrinsicMethod = _interopRequireDefault(require("./ExtrinsicMethod"));

var _RuntimeDispatchInfo = _interopRequireDefault(require("./RuntimeDispatchInfo"));

var _SanitizedEvent = _interopRequireDefault(require("./SanitizedEvent"));

var _Signature = _interopRequireDefault(require("./Signature"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Extrinsic model module.
 * @module model/Extrinsic
 * @version 1.0.0-oas3
 */
var Extrinsic = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Extrinsic</code>.
   * @alias module:model/Extrinsic
   */
  function Extrinsic() {
    _classCallCheck(this, Extrinsic);

    Extrinsic.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Extrinsic, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Extrinsic</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Extrinsic} obj Optional instance to populate.
     * @return {module:model/Extrinsic} The populated <code>Extrinsic</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Extrinsic();

        if (data.hasOwnProperty('method')) {
          obj['method'] = _ExtrinsicMethod["default"].constructFromObject(data['method']);
        }

        if (data.hasOwnProperty('signature')) {
          obj['signature'] = _Signature["default"].constructFromObject(data['signature']);
        }

        if (data.hasOwnProperty('nonce')) {
          obj['nonce'] = _ApiClient["default"].convertToType(data['nonce'], 'String');
        }

        if (data.hasOwnProperty('args')) {
          obj['args'] = _ApiClient["default"].convertToType(data['args'], Object);
        }

        if (data.hasOwnProperty('tip')) {
          obj['tip'] = _ApiClient["default"].convertToType(data['tip'], 'String');
        }

        if (data.hasOwnProperty('hash')) {
          obj['hash'] = _ApiClient["default"].convertToType(data['hash'], 'String');
        }

        if (data.hasOwnProperty('info')) {
          obj['info'] = _RuntimeDispatchInfo["default"].constructFromObject(data['info']);
        }

        if (data.hasOwnProperty('events')) {
          obj['events'] = _ApiClient["default"].convertToType(data['events'], [_SanitizedEvent["default"]]);
        }

        if (data.hasOwnProperty('success')) {
          obj['success'] = _ApiClient["default"].convertToType(data['success'], 'Boolean');
        }

        if (data.hasOwnProperty('paysFee')) {
          obj['paysFee'] = _ApiClient["default"].convertToType(data['paysFee'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return Extrinsic;
}();
/**
 * @member {module:model/ExtrinsicMethod} method
 */


Extrinsic.prototype['method'] = undefined;
/**
 * @member {module:model/Signature} signature
 */

Extrinsic.prototype['signature'] = undefined;
/**
 * Account nonce, if applicable.
 * @member {String} nonce
 */

Extrinsic.prototype['nonce'] = undefined;
/**
 * Object of arguments keyed by parameter name.
 * @member {Object} args
 */

Extrinsic.prototype['args'] = undefined;
/**
 * Any tip added to the transaction.
 * @member {String} tip
 */

Extrinsic.prototype['tip'] = undefined;
/**
 * The transaction's hash.
 * @member {String} hash
 */

Extrinsic.prototype['hash'] = undefined;
/**
 * @member {module:model/RuntimeDispatchInfo} info
 */

Extrinsic.prototype['info'] = undefined;
/**
 * An array of `SanitizedEvent`s that occurred during extrinsic execution.
 * @member {Array.<module:model/SanitizedEvent>} events
 */

Extrinsic.prototype['events'] = undefined;
/**
 * Whether or not the extrinsic succeeded.
 * @member {Boolean} success
 */

Extrinsic.prototype['success'] = undefined;
/**
 * Whether the extrinsic requires a fee. Careful! This field relates to whether or not the extrinsic requires a fee if called as a transaction. Block authors could insert the extrinsic as an inherent in the block and not pay a fee. Always check that `paysFee` is `true` and that the extrinsic is signed when reconciling old blocks.
 * @member {Boolean} paysFee
 */

Extrinsic.prototype['paysFee'] = undefined;
var _default = Extrinsic;
exports["default"] = _default;