"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TransactionPoolPool = _interopRequireDefault(require("./TransactionPoolPool"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TransactionPool model module.
 * @module model/TransactionPool
 * @version 1.0.0-oas3
 */
var TransactionPool = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TransactionPool</code>.
   * @alias module:model/TransactionPool
   */
  function TransactionPool() {
    _classCallCheck(this, TransactionPool);

    TransactionPool.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TransactionPool, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TransactionPool</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionPool} obj Optional instance to populate.
     * @return {module:model/TransactionPool} The populated <code>TransactionPool</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransactionPool();

        if (data.hasOwnProperty('pool')) {
          obj['pool'] = _ApiClient["default"].convertToType(data['pool'], [_TransactionPoolPool["default"]]);
        }
      }

      return obj;
    }
  }]);

  return TransactionPool;
}();
/**
 * @member {Array.<module:model/TransactionPoolPool>} pool
 */


TransactionPool.prototype['pool'] = undefined;
var _default = TransactionPool;
exports["default"] = _default;