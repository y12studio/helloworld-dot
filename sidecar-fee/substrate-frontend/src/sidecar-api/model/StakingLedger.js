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
 * The StakingLedger model module.
 * @module model/StakingLedger
 * @version 1.0.0-oas3
 */
var StakingLedger = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StakingLedger</code>.
   * The staking ledger.
   * @alias module:model/StakingLedger
   */
  function StakingLedger() {
    _classCallCheck(this, StakingLedger);

    StakingLedger.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(StakingLedger, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>StakingLedger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StakingLedger} obj Optional instance to populate.
     * @return {module:model/StakingLedger} The populated <code>StakingLedger</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StakingLedger();

        if (data.hasOwnProperty('stash')) {
          obj['stash'] = _ApiClient["default"].convertToType(data['stash'], 'String');
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'String');
        }

        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'String');
        }

        if (data.hasOwnProperty('unlocking')) {
          obj['unlocking'] = _ApiClient["default"].convertToType(data['unlocking'], 'String');
        }

        if (data.hasOwnProperty('claimedRewards')) {
          obj['claimedRewards'] = _ApiClient["default"].convertToType(data['claimedRewards'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return StakingLedger;
}();
/**
 * The _Stash_ account whose balance is actually locked and at stake.
 * @member {String} stash
 */


StakingLedger.prototype['stash'] = undefined;
/**
 * The total amount of the _Stash_'s balance that we are currently accounting for. Simply `active + unlocking`.
 * @member {String} total
 */

StakingLedger.prototype['total'] = undefined;
/**
 * The total amount of the _Stash_'s balance that will be at stake in any forthcoming eras.
 * @member {String} active
 */

StakingLedger.prototype['active'] = undefined;
/**
 * Any balance that is becoming free, which may eventually be transferred out of the _Stash_ (assuming it doesn't get slashed first). Represented as an array of objects, each with an `era` at which `value` will be unlocked.
 * @member {String} unlocking
 */

StakingLedger.prototype['unlocking'] = undefined;
/**
 * Array of eras for which the stakers behind a validator have claimed rewards. Only updated for _validators._
 * @member {Array.<String>} claimedRewards
 */

StakingLedger.prototype['claimedRewards'] = undefined;
var _default = StakingLedger;
exports["default"] = _default;