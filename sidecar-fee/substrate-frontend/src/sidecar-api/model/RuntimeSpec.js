"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BlockIdentifiers = _interopRequireDefault(require("./BlockIdentifiers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RuntimeSpec model module.
 * @module model/RuntimeSpec
 * @version 1.0.0-oas3
 */
var RuntimeSpec = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RuntimeSpec</code>.
   * Version information related to the runtime.
   * @alias module:model/RuntimeSpec
   */
  function RuntimeSpec() {
    _classCallCheck(this, RuntimeSpec);

    RuntimeSpec.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RuntimeSpec, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RuntimeSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RuntimeSpec} obj Optional instance to populate.
     * @return {module:model/RuntimeSpec} The populated <code>RuntimeSpec</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RuntimeSpec();

        if (data.hasOwnProperty('at')) {
          obj['at'] = _BlockIdentifiers["default"].constructFromObject(data['at']);
        }

        if (data.hasOwnProperty('authoringVersion')) {
          obj['authoringVersion'] = _ApiClient["default"].convertToType(data['authoringVersion'], 'String');
        }

        if (data.hasOwnProperty('chainType')) {
          obj['chainType'] = _ApiClient["default"].convertToType(data['chainType'], 'String');
        }

        if (data.hasOwnProperty('implVersion')) {
          obj['implVersion'] = _ApiClient["default"].convertToType(data['implVersion'], 'String');
        }

        if (data.hasOwnProperty('specName')) {
          obj['specName'] = _ApiClient["default"].convertToType(data['specName'], 'String');
        }

        if (data.hasOwnProperty('specVersion')) {
          obj['specVersion'] = _ApiClient["default"].convertToType(data['specVersion'], 'String');
        }

        if (data.hasOwnProperty('transactionVersion')) {
          obj['transactionVersion'] = _ApiClient["default"].convertToType(data['transactionVersion'], 'String');
        }

        if (data.hasOwnProperty('properties')) {
          obj['properties'] = _ApiClient["default"].convertToType(data['properties'], Object);
        }
      }

      return obj;
    }
  }]);

  return RuntimeSpec;
}();
/**
 * @member {module:model/BlockIdentifiers} at
 */


RuntimeSpec.prototype['at'] = undefined;
/**
 * The version of the authorship interface. An authoring node will not attempt to author blocks unless this is equal to its native runtime.
 * @member {String} authoringVersion
 */

RuntimeSpec.prototype['authoringVersion'] = undefined;
/**
 * Type of the chain.
 * @member {module:model/RuntimeSpec.ChainTypeEnum} chainType
 */

RuntimeSpec.prototype['chainType'] = undefined;
/**
 * Version of the implementation specification. Non-consensus-breaking optimizations are about the only changes that could be made which would result in only the `impl_version` changing. The `impl_version` is set to 0 when `spec_version` is incremented.
 * @member {String} implVersion
 */

RuntimeSpec.prototype['implVersion'] = undefined;
/**
 * Identifies the different Substrate runtimes.
 * @member {String} specName
 */

RuntimeSpec.prototype['specName'] = undefined;
/**
 * Version of the runtime specification.
 * @member {String} specVersion
 */

RuntimeSpec.prototype['specVersion'] = undefined;
/**
 * All existing dispatches are fully compatible when this number doesn't change. This number must change when an existing dispatchable (module ID, dispatch ID) is changed, either through an alteration in its user-level semantics, a parameter added/removed/changed, a dispatchable being removed, a module being removed, or a dispatchable/module changing its index.
 * @member {String} transactionVersion
 */

RuntimeSpec.prototype['transactionVersion'] = undefined;
/**
 * Arbitrary properties defined in the chain spec.
 * @member {Object} properties
 */

RuntimeSpec.prototype['properties'] = undefined;
/**
 * Allowed values for the <code>chainType</code> property.
 * @enum {String}
 * @readonly
 */

RuntimeSpec['ChainTypeEnum'] = {
  /**
   * value: "Development"
   * @const
   */
  "Development": "Development",

  /**
   * value: "Local"
   * @const
   */
  "Local": "Local",

  /**
   * value: "Live"
   * @const
   */
  "Live": "Live"
};
var _default = RuntimeSpec;
exports["default"] = _default;