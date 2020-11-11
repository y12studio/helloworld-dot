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
 * The TransactionFeeEstimate model module.
 * @module model/TransactionFeeEstimate
 * @version 1.0.0-oas3
 */
var TransactionFeeEstimate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TransactionFeeEstimate</code>.
   * Note: &#x60;partialFee&#x60; does not include any tips that you may add to increase a transaction&#39;s priority. See [compute_fee](https://crates.parity.io/pallet_transaction_payment/struct.Module.html#method.compute_fee).
   * @alias module:model/TransactionFeeEstimate
   */
  function TransactionFeeEstimate() {
    _classCallCheck(this, TransactionFeeEstimate);

    TransactionFeeEstimate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TransactionFeeEstimate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TransactionFeeEstimate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionFeeEstimate} obj Optional instance to populate.
     * @return {module:model/TransactionFeeEstimate} The populated <code>TransactionFeeEstimate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransactionFeeEstimate();

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

  return TransactionFeeEstimate;
}();
/**
 * Extrinsic weight.
 * @member {String} weight
 */


TransactionFeeEstimate.prototype['weight'] = undefined;
/**
 * Extrinsic class.
 * @member {module:model/TransactionFeeEstimate.ClassEnum} class
 */

TransactionFeeEstimate.prototype['class'] = undefined;
/**
 * Expected inclusion fee for the transaction. Note that the fee rate changes up to 30% in a 24 hour period and this will not be the exact fee.
 * @member {String} partialFee
 */

TransactionFeeEstimate.prototype['partialFee'] = undefined;
/**
 * Allowed values for the <code>class</code> property.
 * @enum {String}
 * @readonly
 */

TransactionFeeEstimate['ClassEnum'] = {
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
var _default = TransactionFeeEstimate;
exports["default"] = _default;