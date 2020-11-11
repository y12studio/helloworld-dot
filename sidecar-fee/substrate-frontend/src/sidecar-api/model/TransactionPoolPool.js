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
 * The TransactionPoolPool model module.
 * @module model/TransactionPoolPool
 * @version 1.0.0-oas3
 */
var TransactionPoolPool = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TransactionPoolPool</code>.
   * @alias module:model/TransactionPoolPool
   */
  function TransactionPoolPool() {
    _classCallCheck(this, TransactionPoolPool);

    TransactionPoolPool.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TransactionPoolPool, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TransactionPoolPool</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionPoolPool} obj Optional instance to populate.
     * @return {module:model/TransactionPoolPool} The populated <code>TransactionPoolPool</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransactionPoolPool();

        if (data.hasOwnProperty('hash')) {
          obj['hash'] = _ApiClient["default"].convertToType(data['hash'], 'String');
        }

        if (data.hasOwnProperty('encodedExtrinsic')) {
          obj['encodedExtrinsic'] = _ApiClient["default"].convertToType(data['encodedExtrinsic'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TransactionPoolPool;
}();
/**
 * H256 hash of the extrinsic.
 * @member {String} hash
 */


TransactionPoolPool.prototype['hash'] = undefined;
/**
 * Scale encoded extrinsic.
 * @member {String} encodedExtrinsic
 */

TransactionPoolPool.prototype['encodedExtrinsic'] = undefined;
var _default = TransactionPoolPool;
exports["default"] = _default;