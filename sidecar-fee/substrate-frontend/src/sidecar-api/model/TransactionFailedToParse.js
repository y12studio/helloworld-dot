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
 * The TransactionFailedToParse model module.
 * @module model/TransactionFailedToParse
 * @version 1.0.0-oas3
 */
var TransactionFailedToParse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TransactionFailedToParse</code>.
   * Error message when Sidecar fails to parse the transaction.
   * @alias module:model/TransactionFailedToParse
   */
  function TransactionFailedToParse() {
    _classCallCheck(this, TransactionFailedToParse);

    TransactionFailedToParse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TransactionFailedToParse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TransactionFailedToParse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionFailedToParse} obj Optional instance to populate.
     * @return {module:model/TransactionFailedToParse} The populated <code>TransactionFailedToParse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransactionFailedToParse();

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

  return TransactionFailedToParse;
}();
/**
 * @member {Number} code
 */


TransactionFailedToParse.prototype['code'] = undefined;
/**
 * `Failed to parse a tx.`
 * @member {String} error
 */

TransactionFailedToParse.prototype['error'] = undefined;
/**
 * @member {String} transaction
 */

TransactionFailedToParse.prototype['transaction'] = undefined;
/**
 * @member {String} cause
 */

TransactionFailedToParse.prototype['cause'] = undefined;
/**
 * @member {String} stack
 */

TransactionFailedToParse.prototype['stack'] = undefined;
var _default = TransactionFailedToParse;
exports["default"] = _default;