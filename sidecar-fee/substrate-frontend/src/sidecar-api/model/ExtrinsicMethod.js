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
 * The ExtrinsicMethod model module.
 * @module model/ExtrinsicMethod
 * @version 1.0.0-oas3
 */
var ExtrinsicMethod = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ExtrinsicMethod</code>.
   * Extrinsic method
   * @alias module:model/ExtrinsicMethod
   */
  function ExtrinsicMethod() {
    _classCallCheck(this, ExtrinsicMethod);

    ExtrinsicMethod.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ExtrinsicMethod, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ExtrinsicMethod</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExtrinsicMethod} obj Optional instance to populate.
     * @return {module:model/ExtrinsicMethod} The populated <code>ExtrinsicMethod</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ExtrinsicMethod();

        if (data.hasOwnProperty('pallet')) {
          obj['pallet'] = _ApiClient["default"].convertToType(data['pallet'], 'String');
        }

        if (data.hasOwnProperty('methodName')) {
          obj['methodName'] = _ApiClient["default"].convertToType(data['methodName'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ExtrinsicMethod;
}();
/**
 * @member {String} pallet
 */


ExtrinsicMethod.prototype['pallet'] = undefined;
/**
 * @member {String} methodName
 */

ExtrinsicMethod.prototype['methodName'] = undefined;
var _default = ExtrinsicMethod;
exports["default"] = _default;