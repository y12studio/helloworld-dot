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
 * The Signature model module.
 * @module model/Signature
 * @version 1.0.0-oas3
 */
var Signature = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Signature</code>.
   * Object with &#x60;signature&#x60; and &#x60;signer&#x60;, or &#x60;null&#x60; if unsigned.
   * @alias module:model/Signature
   */
  function Signature() {
    _classCallCheck(this, Signature);

    Signature.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Signature, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Signature</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Signature} obj Optional instance to populate.
     * @return {module:model/Signature} The populated <code>Signature</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Signature();

        if (data.hasOwnProperty('signature')) {
          obj['signature'] = _ApiClient["default"].convertToType(data['signature'], 'String');
        }

        if (data.hasOwnProperty('signer')) {
          obj['signer'] = _ApiClient["default"].convertToType(data['signer'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Signature;
}();
/**
 * @member {String} signature
 */


Signature.prototype['signature'] = undefined;
/**
 * @member {String} signer
 */

Signature.prototype['signer'] = undefined;
var _default = Signature;
exports["default"] = _default;