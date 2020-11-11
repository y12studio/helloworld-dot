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
 * The UnappliedSlash model module.
 * @module model/UnappliedSlash
 * @version 1.0.0-oas3
 */
var UnappliedSlash = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UnappliedSlash</code>.
   * @alias module:model/UnappliedSlash
   */
  function UnappliedSlash() {
    _classCallCheck(this, UnappliedSlash);

    UnappliedSlash.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UnappliedSlash, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UnappliedSlash</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UnappliedSlash} obj Optional instance to populate.
     * @return {module:model/UnappliedSlash} The populated <code>UnappliedSlash</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UnappliedSlash();

        if (data.hasOwnProperty('validator')) {
          obj['validator'] = _ApiClient["default"].convertToType(data['validator'], 'String');
        }

        if (data.hasOwnProperty('own')) {
          obj['own'] = _ApiClient["default"].convertToType(data['own'], 'String');
        }

        if (data.hasOwnProperty('others')) {
          obj['others'] = _ApiClient["default"].convertToType(data['others'], ['String']);
        }

        if (data.hasOwnProperty('reporters')) {
          obj['reporters'] = _ApiClient["default"].convertToType(data['reporters'], ['String']);
        }

        if (data.hasOwnProperty('payout')) {
          obj['payout'] = _ApiClient["default"].convertToType(data['payout'], 'String');
        }
      }

      return obj;
    }
  }]);

  return UnappliedSlash;
}();
/**
 * Stash account ID of the offending validator.
 * @member {String} validator
 */


UnappliedSlash.prototype['validator'] = undefined;
/**
 * The amount the validator will be slashed.
 * @member {String} own
 */

UnappliedSlash.prototype['own'] = undefined;
/**
 * Array of tuples(`[accountId, amount]`) representing all the stashes of other slashed stakers and the amount they will be slashed.
 * @member {Array.<String>} others
 */

UnappliedSlash.prototype['others'] = undefined;
/**
 * Array of account IDs of the reporters of the offense.
 * @member {Array.<String>} reporters
 */

UnappliedSlash.prototype['reporters'] = undefined;
/**
 * Amount of bounty payout to reporters.
 * @member {String} payout
 */

UnappliedSlash.prototype['payout'] = undefined;
var _default = UnappliedSlash;
exports["default"] = _default;