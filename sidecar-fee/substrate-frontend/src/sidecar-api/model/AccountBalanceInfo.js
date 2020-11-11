"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BalanceLock = _interopRequireDefault(require("./BalanceLock"));

var _BlockIdentifiers = _interopRequireDefault(require("./BlockIdentifiers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AccountBalanceInfo model module.
 * @module model/AccountBalanceInfo
 * @version 1.0.0-oas3
 */
var AccountBalanceInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AccountBalanceInfo</code>.
   * @alias module:model/AccountBalanceInfo
   */
  function AccountBalanceInfo() {
    _classCallCheck(this, AccountBalanceInfo);

    AccountBalanceInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AccountBalanceInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AccountBalanceInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountBalanceInfo} obj Optional instance to populate.
     * @return {module:model/AccountBalanceInfo} The populated <code>AccountBalanceInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AccountBalanceInfo();

        if (data.hasOwnProperty('at')) {
          obj['at'] = _BlockIdentifiers["default"].constructFromObject(data['at']);
        }

        if (data.hasOwnProperty('nonce')) {
          obj['nonce'] = _ApiClient["default"].convertToType(data['nonce'], 'String');
        }

        if (data.hasOwnProperty('free')) {
          obj['free'] = _ApiClient["default"].convertToType(data['free'], 'String');
        }

        if (data.hasOwnProperty('reserved')) {
          obj['reserved'] = _ApiClient["default"].convertToType(data['reserved'], 'String');
        }

        if (data.hasOwnProperty('miscFrozen')) {
          obj['miscFrozen'] = _ApiClient["default"].convertToType(data['miscFrozen'], 'String');
        }

        if (data.hasOwnProperty('feeFrozen')) {
          obj['feeFrozen'] = _ApiClient["default"].convertToType(data['feeFrozen'], 'String');
        }

        if (data.hasOwnProperty('locks')) {
          obj['locks'] = _ApiClient["default"].convertToType(data['locks'], [_BalanceLock["default"]]);
        }
      }

      return obj;
    }
  }]);

  return AccountBalanceInfo;
}();
/**
 * @member {module:model/BlockIdentifiers} at
 */


AccountBalanceInfo.prototype['at'] = undefined;
/**
 * Account nonce.
 * @member {String} nonce
 */

AccountBalanceInfo.prototype['nonce'] = undefined;
/**
 * Free balance of the account. Not equivalent to _spendable_ balance. This is the only balance that matters in terms of most operations on tokens.
 * @member {String} free
 */

AccountBalanceInfo.prototype['free'] = undefined;
/**
 * Reserved balance of the account.
 * @member {String} reserved
 */

AccountBalanceInfo.prototype['reserved'] = undefined;
/**
 * The amount that `free` may not drop below when withdrawing for anything except transaction fee payment.
 * @member {String} miscFrozen
 */

AccountBalanceInfo.prototype['miscFrozen'] = undefined;
/**
 * The amount that `free` may not drop below when withdrawing specifically for transaction fee payment.
 * @member {String} feeFrozen
 */

AccountBalanceInfo.prototype['feeFrozen'] = undefined;
/**
 * Array of locks on a balance. There can be many of these on an account and they \"overlap\", so the same balance is frozen by multiple locks
 * @member {Array.<module:model/BalanceLock>} locks
 */

AccountBalanceInfo.prototype['locks'] = undefined;
var _default = AccountBalanceInfo;
exports["default"] = _default;