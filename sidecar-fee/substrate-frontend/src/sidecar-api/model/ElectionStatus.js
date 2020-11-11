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
 * The ElectionStatus model module.
 * @module model/ElectionStatus
 * @version 1.0.0-oas3
 */
var ElectionStatus = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ElectionStatus</code>.
   * Information about the off-chain election. Not included in response when &#x60;forceEra.isForceNone&#x60;.
   * @alias module:model/ElectionStatus
   */
  function ElectionStatus() {
    _classCallCheck(this, ElectionStatus);

    ElectionStatus.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ElectionStatus, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ElectionStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ElectionStatus} obj Optional instance to populate.
     * @return {module:model/ElectionStatus} The populated <code>ElectionStatus</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ElectionStatus();

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], Object);
        }

        if (data.hasOwnProperty('toggleEstimate')) {
          obj['toggleEstimate'] = _ApiClient["default"].convertToType(data['toggleEstimate'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ElectionStatus;
}();
/**
 * Era election status: either `Close: null` or `Open: <BlockNumber>`. A status of `Close` indicates that the submission window for solutions from off-chain Phragmen is not open. A status of `Open` indicates that the submission window for off-chain Phragmen solutions has been open since BlockNumber. N.B. when the submission window is open, certain extrinsics are not allowed because they would mutate the state that the off-chain Phragmen calculation relies on for calculating results.
 * @member {Object} status
 */


ElectionStatus.prototype['status'] = undefined;
/**
 * Upper bound estimate of the block height at which the `status` will switch.
 * @member {String} toggleEstimate
 */

ElectionStatus.prototype['toggleEstimate'] = undefined;
var _default = ElectionStatus;
exports["default"] = _default;