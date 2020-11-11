"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BlockIdentifiers = _interopRequireDefault(require("./BlockIdentifiers"));

var _Nominations = _interopRequireDefault(require("./Nominations"));

var _StakingLedger = _interopRequireDefault(require("./StakingLedger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AccountStakingInfo model module.
 * @module model/AccountStakingInfo
 * @version 1.0.0-oas3
 */
var AccountStakingInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AccountStakingInfo</code>.
   * Note: Runtime versions of Kusama less than 1062 will either have &#x60;lastReward&#x60; in place of &#x60;claimedRewards&#x60;, or no field at all. This is related to changes in reward distribution. See: [Lazy Payouts](https://github.com/paritytech/substrate/pull/4474), [Simple Payouts](https://github.com/paritytech/substrate/pull/5406)
   * @alias module:model/AccountStakingInfo
   */
  function AccountStakingInfo() {
    _classCallCheck(this, AccountStakingInfo);

    AccountStakingInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AccountStakingInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AccountStakingInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountStakingInfo} obj Optional instance to populate.
     * @return {module:model/AccountStakingInfo} The populated <code>AccountStakingInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AccountStakingInfo();

        if (data.hasOwnProperty('at')) {
          obj['at'] = _BlockIdentifiers["default"].constructFromObject(data['at']);
        }

        if (data.hasOwnProperty('rewardDestination')) {
          obj['rewardDestination'] = _ApiClient["default"].convertToType(data['rewardDestination'], 'String');
        }

        if (data.hasOwnProperty('controller')) {
          obj['controller'] = _ApiClient["default"].convertToType(data['controller'], 'String');
        }

        if (data.hasOwnProperty('numSlashingSpans')) {
          obj['numSlashingSpans'] = _ApiClient["default"].convertToType(data['numSlashingSpans'], 'String');
        }

        if (data.hasOwnProperty('nominations')) {
          obj['nominations'] = _Nominations["default"].constructFromObject(data['nominations']);
        }

        if (data.hasOwnProperty('stakingLedger')) {
          obj['stakingLedger'] = _StakingLedger["default"].constructFromObject(data['stakingLedger']);
        }
      }

      return obj;
    }
  }]);

  return AccountStakingInfo;
}();
/**
 * @member {module:model/BlockIdentifiers} at
 */


AccountStakingInfo.prototype['at'] = undefined;
/**
 * The account to which rewards will be paid. Can be 'Staked' (Stash account, adding to the amount at stake), 'Stash' (Stash address, not adding to the amount at stake), or 'Controller' (Controller address).
 * @member {module:model/AccountStakingInfo.RewardDestinationEnum} rewardDestination
 */

AccountStakingInfo.prototype['rewardDestination'] = undefined;
/**
 * Controller address for the given Stash.
 * @member {String} controller
 */

AccountStakingInfo.prototype['controller'] = undefined;
/**
 * Number of slashing spans on Stash account; `null` if provided address is not a Controller.
 * @member {String} numSlashingSpans
 */

AccountStakingInfo.prototype['numSlashingSpans'] = undefined;
/**
 * @member {module:model/Nominations} nominations
 */

AccountStakingInfo.prototype['nominations'] = undefined;
/**
 * @member {module:model/StakingLedger} stakingLedger
 */

AccountStakingInfo.prototype['stakingLedger'] = undefined;
/**
 * Allowed values for the <code>rewardDestination</code> property.
 * @enum {String}
 * @readonly
 */

AccountStakingInfo['RewardDestinationEnum'] = {
  /**
   * value: "Staked"
   * @const
   */
  "Staked": "Staked",

  /**
   * value: "Stash"
   * @const
   */
  "Stash": "Stash",

  /**
   * value: "Controller"
   * @const
   */
  "Controller": "Controller"
};
var _default = AccountStakingInfo;
exports["default"] = _default;