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
 * The TransactionMaterial model module.
 * @module model/TransactionMaterial
 * @version 1.0.0-oas3
 */
var TransactionMaterial = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TransactionMaterial</code>.
   * Note: &#x60;chainName&#x60;, &#x60;specName&#x60;, and &#x60;specVersion&#x60; are used to define a type registry with a set of signed extensions and types. For Polkadot and Kusama, &#x60;chainName&#x60; is not used in defining this registry, but in other Substrate-based chains that re-launch their network without changing the &#x60;specName&#x60;, the &#x60;chainName&#x60; would be needed to create the correct registry. Substrate Reference: - &#x60;RuntimeVersion&#x60;: https://crates.parity.io/sp_version/struct.RuntimeVersion.html - &#x60;SignedExtension&#x60;: https://crates.parity.io/sp_runtime/traits/trait.SignedExtension.html -  FRAME Support: https://crates.parity.io/frame_support/metadata/index.html
   * @alias module:model/TransactionMaterial
   */
  function TransactionMaterial() {
    _classCallCheck(this, TransactionMaterial);

    TransactionMaterial.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TransactionMaterial, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TransactionMaterial</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionMaterial} obj Optional instance to populate.
     * @return {module:model/TransactionMaterial} The populated <code>TransactionMaterial</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransactionMaterial();

        if (data.hasOwnProperty('at')) {
          obj['at'] = _BlockIdentifiers["default"].constructFromObject(data['at']);
        }

        if (data.hasOwnProperty('genesisHash')) {
          obj['genesisHash'] = _ApiClient["default"].convertToType(data['genesisHash'], 'String');
        }

        if (data.hasOwnProperty('chainName')) {
          obj['chainName'] = _ApiClient["default"].convertToType(data['chainName'], 'String');
        }

        if (data.hasOwnProperty('specName')) {
          obj['specName'] = _ApiClient["default"].convertToType(data['specName'], 'String');
        }

        if (data.hasOwnProperty('specVersion')) {
          obj['specVersion'] = _ApiClient["default"].convertToType(data['specVersion'], 'String');
        }

        if (data.hasOwnProperty('txVersion')) {
          obj['txVersion'] = _ApiClient["default"].convertToType(data['txVersion'], 'String');
        }

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _ApiClient["default"].convertToType(data['metadata'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TransactionMaterial;
}();
/**
 * @member {module:model/BlockIdentifiers} at
 */


TransactionMaterial.prototype['at'] = undefined;
/**
 * The hash of the chain's genesis block.
 * @member {String} genesisHash
 */

TransactionMaterial.prototype['genesisHash'] = undefined;
/**
 * The chain's name.
 * @member {String} chainName
 */

TransactionMaterial.prototype['chainName'] = undefined;
/**
 * The chain's spec.
 * @member {String} specName
 */

TransactionMaterial.prototype['specName'] = undefined;
/**
 * The spec version. Always increased in a runtime upgrade.
 * @member {String} specVersion
 */

TransactionMaterial.prototype['specVersion'] = undefined;
/**
 * The transaction version. Common `txVersion` numbers indicate that the transaction encoding format and method indices are the same. Needed for decoding in an offline environment. Adding new transactions does not change `txVersion`.
 * @member {String} txVersion
 */

TransactionMaterial.prototype['txVersion'] = undefined;
/**
 * The chain's metadata in hex format.
 * @member {String} metadata
 */

TransactionMaterial.prototype['metadata'] = undefined;
var _default = TransactionMaterial;
exports["default"] = _default;