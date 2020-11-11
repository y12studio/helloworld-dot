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
 * The TransactionDryRun model module.
 * @module model/TransactionDryRun
 * @version 1.0.0-oas3
 */
var TransactionDryRun = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TransactionDryRun</code>.
   * References: - &#x60;UnknownTransaction&#x60;: https://crates.parity.io/sp_runtime/transaction_validity/enum.UnknownTransaction.html - &#x60;InvalidTransaction&#x60;: https://crates.parity.io/sp_runtime/transaction_validity/enum.InvalidTransaction.html
   * @alias module:model/TransactionDryRun
   */
  function TransactionDryRun() {
    _classCallCheck(this, TransactionDryRun);

    TransactionDryRun.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TransactionDryRun, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TransactionDryRun</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionDryRun} obj Optional instance to populate.
     * @return {module:model/TransactionDryRun} The populated <code>TransactionDryRun</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransactionDryRun();

        if (data.hasOwnProperty('resultType')) {
          obj['resultType'] = _ApiClient["default"].convertToType(data['resultType'], 'String');
        }

        if (data.hasOwnProperty('result')) {
          obj['result'] = _ApiClient["default"].convertToType(data['result'], 'String');
        }

        if (data.hasOwnProperty('validityErrorType')) {
          obj['validityErrorType'] = _ApiClient["default"].convertToType(data['validityErrorType'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TransactionDryRun;
}();
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
var _default = TransactionDryRun;
exports["default"] = _default;