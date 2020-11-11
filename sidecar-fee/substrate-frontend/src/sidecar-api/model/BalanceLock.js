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
 * The BalanceLock model module.
 * @module model/BalanceLock
 * @version 1.0.0-oas3
 */
var BalanceLock = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BalanceLock</code>.
   * @alias module:model/BalanceLock
   */
  function BalanceLock() {
    _classCallCheck(this, BalanceLock);

    BalanceLock.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BalanceLock, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BalanceLock</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BalanceLock} obj Optional instance to populate.
     * @return {module:model/BalanceLock} The populated <code>BalanceLock</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BalanceLock();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }

        if (data.hasOwnProperty('reasons')) {
          obj['reasons'] = _ApiClient["default"].convertToType(data['reasons'], 'String');
        }
      }

      return obj;
    }
  }]);

  return BalanceLock;
}();
/**
 * An identifier for this lock. Only one lock may be in existence for each identifier.
 * @member {String} id
 */


BalanceLock.prototype['id'] = undefined;
/**
 * The amount below which the free balance may not drop with this lock in effect.
 * @member {String} amount
 */

BalanceLock.prototype['amount'] = undefined;
/**
 * Reasons for withdrawing balance.
 * @member {module:model/BalanceLock.ReasonsEnum} reasons
 */

BalanceLock.prototype['reasons'] = undefined;
/**
 * Allowed values for the <code>reasons</code> property.
 * @enum {String}
 * @readonly
 */

BalanceLock['ReasonsEnum'] = {
  /**
   * value: "Fee = 0"
   * @const
   */
  "Fee &#x3D; 0": "Fee = 0",

  /**
   * value: "Misc = 1"
   * @const
   */
  "Misc &#x3D; 1": "Misc = 1",

  /**
   * value: "All = 2"
   * @const
   */
  "All &#x3D; 2": "All = 2"
};
var _default = BalanceLock;
exports["default"] = _default;