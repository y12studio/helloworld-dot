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
 * The NodeVersion model module.
 * @module model/NodeVersion
 * @version 1.0.0-oas3
 */
var NodeVersion = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NodeVersion</code>.
   * Version information of the node.
   * @alias module:model/NodeVersion
   */
  function NodeVersion() {
    _classCallCheck(this, NodeVersion);

    NodeVersion.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NodeVersion, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NodeVersion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NodeVersion} obj Optional instance to populate.
     * @return {module:model/NodeVersion} The populated <code>NodeVersion</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NodeVersion();

        if (data.hasOwnProperty('clientVersion')) {
          obj['clientVersion'] = _ApiClient["default"].convertToType(data['clientVersion'], 'String');
        }

        if (data.hasOwnProperty('clientImplName')) {
          obj['clientImplName'] = _ApiClient["default"].convertToType(data['clientImplName'], 'String');
        }

        if (data.hasOwnProperty('chain')) {
          obj['chain'] = _ApiClient["default"].convertToType(data['chain'], 'String');
        }
      }

      return obj;
    }
  }]);

  return NodeVersion;
}();
/**
 * Node's binary version.
 * @member {String} clientVersion
 */


NodeVersion.prototype['clientVersion'] = undefined;
/**
 * Node's implementation name.
 * @member {String} clientImplName
 */

NodeVersion.prototype['clientImplName'] = undefined;
/**
 * Node's chain name.
 * @member {String} chain
 */

NodeVersion.prototype['chain'] = undefined;
var _default = NodeVersion;
exports["default"] = _default;