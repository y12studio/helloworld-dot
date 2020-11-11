"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AccountStakingPayoutsErasPayouts = _interopRequireDefault(require("./AccountStakingPayoutsErasPayouts"));

var _BlockIdentifiers = _interopRequireDefault(require("./BlockIdentifiers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AccountStakingPayouts model module.
 * @module model/AccountStakingPayouts
 * @version 1.0.0-oas3
 */
var AccountStakingPayouts = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AccountStakingPayouts</code>.
   * @alias module:model/AccountStakingPayouts
   */
  function AccountStakingPayouts() {
    _classCallCheck(this, AccountStakingPayouts);

    AccountStakingPayouts.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AccountStakingPayouts, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AccountStakingPayouts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountStakingPayouts} obj Optional instance to populate.
     * @return {module:model/AccountStakingPayouts} The populated <code>AccountStakingPayouts</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AccountStakingPayouts();

        if (data.hasOwnProperty('at')) {
          obj['at'] = _BlockIdentifiers["default"].constructFromObject(data['at']);
        }

        if (data.hasOwnProperty('erasPayouts')) {
          obj['erasPayouts'] = _ApiClient["default"].convertToType(data['erasPayouts'], [_AccountStakingPayoutsErasPayouts["default"]]);
        }
      }

      return obj;
    }
  }]);

  return AccountStakingPayouts;
}();
/**
 * @member {module:model/BlockIdentifiers} at
 */


AccountStakingPayouts.prototype['at'] = undefined;
/**
 * @member {Array.<module:model/AccountStakingPayoutsErasPayouts>} erasPayouts
 */

AccountStakingPayouts.prototype['erasPayouts'] = undefined;
var _default = AccountStakingPayouts;
exports["default"] = _default;