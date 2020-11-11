"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RuntimeDispatchInfo model module.
 * @module model/RuntimeDispatchInfo
 * @version 1.0.0-oas3
 */
var RuntimeDispatchInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RuntimeDispatchInfo</code>.
   * RuntimeDispatchInfo for the transaction. Includes the &#x60;partialFee&#x60;.
   * @alias module:model/RuntimeDispatchInfo
   */
  function RuntimeDispatchInfo() {
    _classCallCheck(this, RuntimeDispatchInfo);

    RuntimeDispatchInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RuntimeDispatchInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RuntimeDispatchInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RuntimeDispatchInfo} obj Optional instance to populate.
     * @return {module:model/RuntimeDispatchInfo} The populated <code>RuntimeDispatchInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RuntimeDispatchInfo();

        if (data.hasOwnProperty('weight')) {
          obj['weight'] = _ApiClient["default"].convertToType(data['weight'], 'String');
        }

        if (data.hasOwnProperty('class')) {
          obj['class'] = _ApiClient["default"].convertToType(data['class'], 'String');
        }

        if (data.hasOwnProperty('partialFee')) {
          obj['partialFee'] = _ApiClient["default"].convertToType(data['partialFee'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RuntimeDispatchInfo;
}();
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
var _default = RuntimeDispatchInfo;
exports["default"] = _default;