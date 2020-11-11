"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SanitizedEvent = _interopRequireDefault(require("./SanitizedEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BlockInitialize model module.
 * @module model/BlockInitialize
 * @version 1.0.0-oas3
 */
var BlockInitialize = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BlockInitialize</code>.
   * Object with an array of &#x60;SanitizedEvent&#x60;s that occurred during block initialization with the &#x60;method&#x60; and &#x60;data&#x60; for each.
   * @alias module:model/BlockInitialize
   */
  function BlockInitialize() {
    _classCallCheck(this, BlockInitialize);

    BlockInitialize.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BlockInitialize, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BlockInitialize</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BlockInitialize} obj Optional instance to populate.
     * @return {module:model/BlockInitialize} The populated <code>BlockInitialize</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BlockInitialize();

        if (data.hasOwnProperty('events')) {
          obj['events'] = _ApiClient["default"].convertToType(data['events'], [_SanitizedEvent["default"]]);
        }
      }

      return obj;
    }
  }]);

  return BlockInitialize;
}();
/**
 * @member {Array.<module:model/SanitizedEvent>} events
 */


BlockInitialize.prototype['events'] = undefined;
var _default = BlockInitialize;
exports["default"] = _default;