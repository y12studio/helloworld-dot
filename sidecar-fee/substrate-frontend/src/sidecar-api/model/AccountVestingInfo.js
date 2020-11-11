"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BlockIdentifiers = _interopRequireDefault(require("./BlockIdentifiers"));

var _VestingSchedule = _interopRequireDefault(require("./VestingSchedule"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AccountVestingInfo model module.
 * @module model/AccountVestingInfo
 * @version 1.0.0-oas3
 */
var AccountVestingInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AccountVestingInfo</code>.
   * @alias module:model/AccountVestingInfo
   */
  function AccountVestingInfo() {
    _classCallCheck(this, AccountVestingInfo);

    AccountVestingInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AccountVestingInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AccountVestingInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountVestingInfo} obj Optional instance to populate.
     * @return {module:model/AccountVestingInfo} The populated <code>AccountVestingInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AccountVestingInfo();

        if (data.hasOwnProperty('at')) {
          obj['at'] = _BlockIdentifiers["default"].constructFromObject(data['at']);
        }

        if (data.hasOwnProperty('vesting')) {
          obj['vesting'] = _VestingSchedule["default"].constructFromObject(data['vesting']);
        }
      }

      return obj;
    }
  }]);

  return AccountVestingInfo;
}();
/**
 * @member {module:model/BlockIdentifiers} at
 */


AccountVestingInfo.prototype['at'] = undefined;
/**
 * @member {module:model/VestingSchedule} vesting
 */

AccountVestingInfo.prototype['vesting'] = undefined;
var _default = AccountVestingInfo;
exports["default"] = _default;