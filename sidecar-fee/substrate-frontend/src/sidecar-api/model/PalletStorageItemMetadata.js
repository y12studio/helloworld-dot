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
 * The PalletStorageItemMetadata model module.
 * @module model/PalletStorageItemMetadata
 * @version 1.0.0-oas3
 */
var PalletStorageItemMetadata = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PalletStorageItemMetadata</code>.
   * Metadata of a storage item from a FRAME pallet.
   * @alias module:model/PalletStorageItemMetadata
   */
  function PalletStorageItemMetadata() {
    _classCallCheck(this, PalletStorageItemMetadata);

    PalletStorageItemMetadata.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PalletStorageItemMetadata, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PalletStorageItemMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PalletStorageItemMetadata} obj Optional instance to populate.
     * @return {module:model/PalletStorageItemMetadata} The populated <code>PalletStorageItemMetadata</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PalletStorageItemMetadata();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('modifier')) {
          obj['modifier'] = _ApiClient["default"].convertToType(data['modifier'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], Object);
        }

        if (data.hasOwnProperty('fallback')) {
          obj['fallback'] = _ApiClient["default"].convertToType(data['fallback'], 'String');
        }

        if (data.hasOwnProperty('documentation')) {
          obj['documentation'] = _ApiClient["default"].convertToType(data['documentation'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PalletStorageItemMetadata;
}();
/**
 * @member {String} name
 */


PalletStorageItemMetadata.prototype['name'] = undefined;
/**
 * @member {String} modifier
 */

PalletStorageItemMetadata.prototype['modifier'] = undefined;
/**
 * Info about the data structure used for storage.
 * @member {Object} type
 */

PalletStorageItemMetadata.prototype['type'] = undefined;
/**
 * @member {String} fallback
 */

PalletStorageItemMetadata.prototype['fallback'] = undefined;
/**
 * @member {String} documentation
 */

PalletStorageItemMetadata.prototype['documentation'] = undefined;
var _default = PalletStorageItemMetadata;
exports["default"] = _default;