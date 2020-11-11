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
 * The PeerInfo model module.
 * @module model/PeerInfo
 * @version 1.0.0-oas3
 */
var PeerInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PeerInfo</code>.
   * @alias module:model/PeerInfo
   */
  function PeerInfo() {
    _classCallCheck(this, PeerInfo);

    PeerInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PeerInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PeerInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PeerInfo} obj Optional instance to populate.
     * @return {module:model/PeerInfo} The populated <code>PeerInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PeerInfo();

        if (data.hasOwnProperty('peerId')) {
          obj['peerId'] = _ApiClient["default"].convertToType(data['peerId'], 'String');
        }

        if (data.hasOwnProperty('roles')) {
          obj['roles'] = _ApiClient["default"].convertToType(data['roles'], 'String');
        }

        if (data.hasOwnProperty('protocolVersion')) {
          obj['protocolVersion'] = _ApiClient["default"].convertToType(data['protocolVersion'], 'String');
        }

        if (data.hasOwnProperty('bestHash')) {
          obj['bestHash'] = _ApiClient["default"].convertToType(data['bestHash'], 'String');
        }

        if (data.hasOwnProperty('bestNumber')) {
          obj['bestNumber'] = _ApiClient["default"].convertToType(data['bestNumber'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PeerInfo;
}();
/**
 * Peer ID.
 * @member {String} peerId
 */


PeerInfo.prototype['peerId'] = undefined;
/**
 * Roles the peer is running
 * @member {String} roles
 */

PeerInfo.prototype['roles'] = undefined;
/**
 * Peer's protocol version.
 * @member {String} protocolVersion
 */

PeerInfo.prototype['protocolVersion'] = undefined;
/**
 * Hash of the best block on the peer's canon chain.
 * @member {String} bestHash
 */

PeerInfo.prototype['bestHash'] = undefined;
/**
 * Height of the best block on the peer's canon chain.
 * @member {String} bestNumber
 */

PeerInfo.prototype['bestNumber'] = undefined;
var _default = PeerInfo;
exports["default"] = _default;