"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TransactionFeeEstimateFailureAt = _interopRequireDefault(require("./TransactionFeeEstimateFailureAt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TransactionFeeEstimateFailure model module.
 * @module model/TransactionFeeEstimateFailure
 * @version 1.0.0-oas3
 */
var TransactionFeeEstimateFailure = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TransactionFeeEstimateFailure</code>.
   * @alias module:model/TransactionFeeEstimateFailure
   */
  function TransactionFeeEstimateFailure() {
    _classCallCheck(this, TransactionFeeEstimateFailure);

    TransactionFeeEstimateFailure.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TransactionFeeEstimateFailure, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TransactionFeeEstimateFailure</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionFeeEstimateFailure} obj Optional instance to populate.
     * @return {module:model/TransactionFeeEstimateFailure} The populated <code>TransactionFeeEstimateFailure</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransactionFeeEstimateFailure();

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'Number');
        }

        if (data.hasOwnProperty('at')) {
          obj['at'] = _TransactionFeeEstimateFailureAt["default"].constructFromObject(data['at']);
        }

        if (data.hasOwnProperty('error')) {
          obj['error'] = _ApiClient["default"].convertToType(data['error'], 'String');
        }

        if (data.hasOwnProperty('transaction')) {
          obj['transaction'] = _ApiClient["default"].convertToType(data['transaction'], 'String');
        }

        if (data.hasOwnProperty('block')) {
          obj['block'] = _ApiClient["default"].convertToType(data['block'], 'String');
        }

        if (data.hasOwnProperty('cause')) {
          obj['cause'] = _ApiClient["default"].convertToType(data['cause'], 'String');
        }

        if (data.hasOwnProperty('stack')) {
          obj['stack'] = _ApiClient["default"].convertToType(data['stack'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TransactionFeeEstimateFailure;
}();
/**
 * @member {Number} code
 */


TransactionFeeEstimateFailure.prototype['code'] = undefined;
/**
 * @member {module:model/TransactionFeeEstimateFailureAt} at
 */

TransactionFeeEstimateFailure.prototype['at'] = undefined;
/**
 * Error description.
 * @member {String} error
 */

TransactionFeeEstimateFailure.prototype['error'] = undefined;
/**
 * @member {String} transaction
 */

TransactionFeeEstimateFailure.prototype['transaction'] = undefined;
/**
 * Block hash of the block fee estimation was attempted at.
 * @member {String} block
 */

TransactionFeeEstimateFailure.prototype['block'] = undefined;
/**
 * Error message from the client.
 * @member {String} cause
 */

TransactionFeeEstimateFailure.prototype['cause'] = undefined;
/**
 * @member {String} stack
 */

TransactionFeeEstimateFailure.prototype['stack'] = undefined;
var _default = TransactionFeeEstimateFailure;
exports["default"] = _default;