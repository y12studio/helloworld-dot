"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BlockIdentifiers = _interopRequireDefault(require("./BlockIdentifiers"));

var _ElectionStatus = _interopRequireDefault(require("./ElectionStatus"));

var _UnappliedSlash = _interopRequireDefault(require("./UnappliedSlash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The StakingProgress model module.
 * @module model/StakingProgress
 * @version 1.0.0-oas3
 */
var StakingProgress = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StakingProgress</code>.
   * @alias module:model/StakingProgress
   */
  function StakingProgress() {
    _classCallCheck(this, StakingProgress);

    StakingProgress.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(StakingProgress, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>StakingProgress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StakingProgress} obj Optional instance to populate.
     * @return {module:model/StakingProgress} The populated <code>StakingProgress</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StakingProgress();

        if (data.hasOwnProperty('at')) {
          obj['at'] = _BlockIdentifiers["default"].constructFromObject(data['at']);
        }

        if (data.hasOwnProperty('activeEra')) {
          obj['activeEra'] = _ApiClient["default"].convertToType(data['activeEra'], 'String');
        }

        if (data.hasOwnProperty('forceEra')) {
          obj['forceEra'] = _ApiClient["default"].convertToType(data['forceEra'], 'String');
        }

        if (data.hasOwnProperty('nextActiveEraEstimate')) {
          obj['nextActiveEraEstimate'] = _ApiClient["default"].convertToType(data['nextActiveEraEstimate'], 'String');
        }

        if (data.hasOwnProperty('nextSessionEstimate')) {
          obj['nextSessionEstimate'] = _ApiClient["default"].convertToType(data['nextSessionEstimate'], 'String');
        }

        if (data.hasOwnProperty('unappliedSlashes')) {
          obj['unappliedSlashes'] = _ApiClient["default"].convertToType(data['unappliedSlashes'], [_UnappliedSlash["default"]]);
        }

        if (data.hasOwnProperty('electionStatus')) {
          obj['electionStatus'] = _ElectionStatus["default"].constructFromObject(data['electionStatus']);
        }

        if (data.hasOwnProperty('idealValidatorCount')) {
          obj['idealValidatorCount'] = _ApiClient["default"].convertToType(data['idealValidatorCount'], 'String');
        }

        if (data.hasOwnProperty('validatorSet')) {
          obj['validatorSet'] = _ApiClient["default"].convertToType(data['validatorSet'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return StakingProgress;
}();
/**
 * @member {module:model/BlockIdentifiers} at
 */


StakingProgress.prototype['at'] = undefined;
/**
 * `EraIndex` of the era being rewarded. 
 * @member {String} activeEra
 */

StakingProgress.prototype['activeEra'] = undefined;
/**
 * Current status of era forcing.
 * @member {module:model/StakingProgress.ForceEraEnum} forceEra
 */

StakingProgress.prototype['forceEra'] = undefined;
/**
 * Upper bound estimate of the block height at which the next active era will start. Not included in response when `forceEra.isForceNone`.
 * @member {String} nextActiveEraEstimate
 */

StakingProgress.prototype['nextActiveEraEstimate'] = undefined;
/**
 * Upper bound estimate of the block height at which the next session will start.
 * @member {String} nextSessionEstimate
 */

StakingProgress.prototype['nextSessionEstimate'] = undefined;
/**
 * Array of upcoming `UnappliedSlash` indexed by era.
 * @member {Array.<module:model/UnappliedSlash>} unappliedSlashes
 */

StakingProgress.prototype['unappliedSlashes'] = undefined;
/**
 * @member {module:model/ElectionStatus} electionStatus
 */

StakingProgress.prototype['electionStatus'] = undefined;
/**
 * Upper bound of validator set size; considered the ideal size. Not included in response when `forceEra.isForceNone`.
 * @member {String} idealValidatorCount
 */

StakingProgress.prototype['idealValidatorCount'] = undefined;
/**
 * Stash account IDs of the validators for the current session. Not included in response when `forceEra.isForceNone`.
 * @member {Array.<String>} validatorSet
 */

StakingProgress.prototype['validatorSet'] = undefined;
/**
 * Allowed values for the <code>forceEra</code> property.
 * @enum {String}
 * @readonly
 */

StakingProgress['ForceEraEnum'] = {
  /**
   * value: "ForceNone"
   * @const
   */
  "ForceNone": "ForceNone",

  /**
   * value: "NotForcing"
   * @const
   */
  "NotForcing": "NotForcing",

  /**
   * value: "ForceAlways"
   * @const
   */
  "ForceAlways": "ForceAlways",

  /**
   * value: "ForceNew"
   * @const
   */
  "ForceNew": "ForceNew"
};
var _default = StakingProgress;
exports["default"] = _default;