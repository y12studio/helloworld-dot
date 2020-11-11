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
 * The Nominations model module.
 * @module model/Nominations
 * @version 1.0.0-oas3
 */
var Nominations = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Nominations</code>.
   * @alias module:model/Nominations
   */
  function Nominations() {
    _classCallCheck(this, Nominations);

    Nominations.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Nominations, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Nominations</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Nominations} obj Optional instance to populate.
     * @return {module:model/Nominations} The populated <code>Nominations</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Nominations();

        if (data.hasOwnProperty('targets')) {
          obj['targets'] = _ApiClient["default"].convertToType(data['targets'], ['String']);
        }

        if (data.hasOwnProperty('submittedIn')) {
          obj['submittedIn'] = _ApiClient["default"].convertToType(data['submittedIn'], 'String');
        }

        if (data.hasOwnProperty('suppressed')) {
          obj['suppressed'] = _ApiClient["default"].convertToType(data['suppressed'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return Nominations;
}();
/**
 * The targets of the nomination.
 * @member {Array.<String>} targets
 */


Nominations.prototype['targets'] = undefined;
/**
 * The era the nominations were submitted. (Except for initial nominations which are considered submitted at era 0.)
 * @member {String} submittedIn
 */

Nominations.prototype['submittedIn'] = undefined;
/**
 * Whether the nominations have been suppressed.
 * @member {Boolean} suppressed
 */

Nominations.prototype['suppressed'] = undefined;
var _default = Nominations;
exports["default"] = _default;