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
 * The TransactionFailedToSubmit model module.
 * @module model/TransactionFailedToSubmit
 * @version 1.0.0-oas3
 */
var TransactionFailedToSubmit = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TransactionFailedToSubmit</code>.
   * Error message when the node rejects the submitted transaction.
   * @alias module:model/TransactionFailedToSubmit
   */
  function TransactionFailedToSubmit() {
    _classCallCheck(this, TransactionFailedToSubmit);

    TransactionFailedToSubmit.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TransactionFailedToSubmit, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TransactionFailedToSubmit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionFailedToSubmit} obj Optional instance to populate.
     * @return {module:model/TransactionFailedToSubmit} The populated <code>TransactionFailedToSubmit</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransactionFailedToSubmit();

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'Number');
        }

        if (data.hasOwnProperty('error')) {
          obj['error'] = _ApiClient["default"].convertToType(data['error'], 'String');
        }

        if (data.hasOwnProperty('transaction')) {
          obj['transaction'] = _ApiClient["default"].convertToType(data['transaction'], 'String');
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

  return TransactionFailedToSubmit;
}();
/**
 * @member {Number} code
 */


TransactionFailedToSubmit.prototype['code'] = undefined;
/**
 * Failed to submit transaction.
 * @member {String} error
 */

TransactionFailedToSubmit.prototype['error'] = undefined;
/**
 * @member {String} transaction
 */

TransactionFailedToSubmit.prototype['transaction'] = undefined;
/**
 * @member {String} cause
 */

TransactionFailedToSubmit.prototype['cause'] = undefined;
/**
 * @member {String} stack
 */

TransactionFailedToSubmit.prototype['stack'] = undefined;
var _default = TransactionFailedToSubmit;
exports["default"] = _default;