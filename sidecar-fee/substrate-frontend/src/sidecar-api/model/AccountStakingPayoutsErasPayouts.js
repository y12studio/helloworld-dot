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
 * The AccountStakingPayoutsErasPayouts model module.
 * @module model/AccountStakingPayoutsErasPayouts
 * @version 1.0.0-oas3
 */
var AccountStakingPayoutsErasPayouts = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AccountStakingPayoutsErasPayouts</code>.
   * @alias module:model/AccountStakingPayoutsErasPayouts
   */
  function AccountStakingPayoutsErasPayouts() {
    _classCallCheck(this, AccountStakingPayoutsErasPayouts);

    AccountStakingPayoutsErasPayouts.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AccountStakingPayoutsErasPayouts, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AccountStakingPayoutsErasPayouts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountStakingPayoutsErasPayouts} obj Optional instance to populate.
     * @return {module:model/AccountStakingPayoutsErasPayouts} The populated <code>AccountStakingPayoutsErasPayouts</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AccountStakingPayoutsErasPayouts();

        if (data.hasOwnProperty('era')) {
          obj['era'] = _ApiClient["default"].convertToType(data['era'], 'String');
        }

        if (data.hasOwnProperty('totalEraRewardPoints')) {
          obj['totalEraRewardPoints'] = _ApiClient["default"].convertToType(data['totalEraRewardPoints'], 'String');
        }

        if (data.hasOwnProperty('totalEraPayout')) {
          obj['totalEraPayout'] = _ApiClient["default"].convertToType(data['totalEraPayout'], 'String');
        }

        if (data.hasOwnProperty('payouts')) {
          obj['payouts'] = _ApiClient["default"].convertToType(data['payouts'], [Object]);
        }
      }

      return obj;
    }
  }]);

  return AccountStakingPayoutsErasPayouts;
}();
/**
 * Era this information is associated with.
 * @member {String} era
 */


AccountStakingPayoutsErasPayouts.prototype['era'] = undefined;
/**
 * Total reward points for the era. Equals the sum of reward points for all the validators in the set.
 * @member {String} totalEraRewardPoints
 */

AccountStakingPayoutsErasPayouts.prototype['totalEraRewardPoints'] = undefined;
/**
 * Total payout for the era. Validators split the payout based on the portion of `totalEraRewardPoints` they have.
 * @member {String} totalEraPayout
 */

AccountStakingPayoutsErasPayouts.prototype['totalEraPayout'] = undefined;
/**
 * @member {Array.<Object>} payouts
 */

AccountStakingPayoutsErasPayouts.prototype['payouts'] = undefined;
var _default = AccountStakingPayoutsErasPayouts;
exports["default"] = _default;