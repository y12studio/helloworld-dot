"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BlockIdentifiers = _interopRequireDefault(require("./BlockIdentifiers"));

var _PalletStorageItemMetadata = _interopRequireDefault(require("./PalletStorageItemMetadata"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PalletStorageItem model module.
 * @module model/PalletStorageItem
 * @version 1.0.0-oas3
 */
var PalletStorageItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PalletStorageItem</code>.
   * @alias module:model/PalletStorageItem
   */
  function PalletStorageItem() {
    _classCallCheck(this, PalletStorageItem);

    PalletStorageItem.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PalletStorageItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PalletStorageItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PalletStorageItem} obj Optional instance to populate.
     * @return {module:model/PalletStorageItem} The populated <code>PalletStorageItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PalletStorageItem();

        if (data.hasOwnProperty('at')) {
          obj['at'] = _BlockIdentifiers["default"].constructFromObject(data['at']);
        }

        if (data.hasOwnProperty('pallet')) {
          obj['pallet'] = _ApiClient["default"].convertToType(data['pallet'], 'String');
        }

        if (data.hasOwnProperty('palletIndex')) {
          obj['palletIndex'] = _ApiClient["default"].convertToType(data['palletIndex'], 'String');
        }

        if (data.hasOwnProperty('storageItem')) {
          obj['storageItem'] = _ApiClient["default"].convertToType(data['storageItem'], 'String');
        }

        if (data.hasOwnProperty('key1')) {
          obj['key1'] = _ApiClient["default"].convertToType(data['key1'], 'String');
        }

        if (data.hasOwnProperty('key2')) {
          obj['key2'] = _ApiClient["default"].convertToType(data['key2'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], Object);
        }

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _PalletStorageItemMetadata["default"].constructFromObject(data['metadata']);
        }
      }

      return obj;
    }
  }]);

  return PalletStorageItem;
}();
/**
 * @member {module:model/BlockIdentifiers} at
 */


PalletStorageItem.prototype['at'] = undefined;
/**
 * Name of the pallet.
 * @member {String} pallet
 */

PalletStorageItem.prototype['pallet'] = undefined;
/**
 * Index of the pallet for looking up storage.
 * @member {String} palletIndex
 */

PalletStorageItem.prototype['palletIndex'] = undefined;
/**
 * Name of the storage item.
 * @member {String} storageItem
 */

PalletStorageItem.prototype['storageItem'] = undefined;
/**
 * Key1 query param. Will not show up in response unless it was passed as part of the URI.
 * @member {String} key1
 */

PalletStorageItem.prototype['key1'] = undefined;
/**
 * Key2 query param. Will not show up in response if not defined in URI.
 * @member {String} key2
 */

PalletStorageItem.prototype['key2'] = undefined;
/**
 * Value returned by this storage query.
 * @member {Object} value
 */

PalletStorageItem.prototype['value'] = undefined;
/**
 * @member {module:model/PalletStorageItemMetadata} metadata
 */

PalletStorageItem.prototype['metadata'] = undefined;
var _default = PalletStorageItem;
exports["default"] = _default;