"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TransactionFailedToParse = _interopRequireDefault(require("./TransactionFailedToParse"));

var _TransactionFailedToSubmit = _interopRequireDefault(require("./TransactionFailedToSubmit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TransactionFailure model module.
 * @module model/TransactionFailure
 * @version 1.0.0-oas3
 */
var TransactionFailure = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TransactionFailure</code>.
   * @alias module:model/TransactionFailure
   * @implements module:model/TransactionFailedToSubmit
   * @implements module:model/TransactionFailedToParse
   */
  function TransactionFailure() {
    _classCallCheck(this, TransactionFailure);

    _TransactionFailedToSubmit["default"].initialize(this);

    _TransactionFailedToParse["default"].initialize(this);

    TransactionFailure.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TransactionFailure, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TransactionFailure</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionFailure} obj Optional instance to populate.
     * @return {module:model/TransactionFailure} The populated <code>TransactionFailure</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransactionFailure();

        _TransactionFailedToSubmit["default"].constructFromObject(data, obj);

        _TransactionFailedToParse["default"].constructFromObject(data, obj);

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

  return TransactionFailure;
}();
/**
 * @member {Number} code
 */


TransactionFailure.prototype['code'] = undefined;
/**
 * `Failed to parse a tx.`
 * @member {String} error
 */

TransactionFailure.prototype['error'] = undefined;
/**
 * @member {String} transaction
 */

TransactionFailure.prototype['transaction'] = undefined;
/**
 * @member {String} cause
 */

TransactionFailure.prototype['cause'] = undefined;
/**
 * @member {String} stack
 */

TransactionFailure.prototype['stack'] = undefined; // Implement TransactionFailedToSubmit interface:

/**
 * @member {Number} code
 */

_TransactionFailedToSubmit["default"].prototype['code'] = undefined;
/**
 * Failed to submit transaction.
 * @member {String} error
 */

_TransactionFailedToSubmit["default"].prototype['error'] = undefined;
/**
 * @member {String} transaction
 */

_TransactionFailedToSubmit["default"].prototype['transaction'] = undefined;
/**
 * @member {String} cause
 */

_TransactionFailedToSubmit["default"].prototype['cause'] = undefined;
/**
 * @member {String} stack
 */

_TransactionFailedToSubmit["default"].prototype['stack'] = undefined; // Implement TransactionFailedToParse interface:

/**
 * @member {Number} code
 */

_TransactionFailedToParse["default"].prototype['code'] = undefined;
/**
 * `Failed to parse a tx.`
 * @member {String} error
 */

_TransactionFailedToParse["default"].prototype['error'] = undefined;
/**
 * @member {String} transaction
 */

_TransactionFailedToParse["default"].prototype['transaction'] = undefined;
/**
 * @member {String} cause
 */

_TransactionFailedToParse["default"].prototype['cause'] = undefined;
/**
 * @member {String} stack
 */

_TransactionFailedToParse["default"].prototype['stack'] = undefined;
var _default = TransactionFailure;
exports["default"] = _default;