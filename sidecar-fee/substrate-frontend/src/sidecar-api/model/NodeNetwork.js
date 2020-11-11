"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NodeRole = _interopRequireDefault(require("./NodeRole"));

var _PeerInfo = _interopRequireDefault(require("./PeerInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The NodeNetwork model module.
 * @module model/NodeNetwork
 * @version 1.0.0-oas3
 */
var NodeNetwork = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NodeNetwork</code>.
   * @alias module:model/NodeNetwork
   */
  function NodeNetwork() {
    _classCallCheck(this, NodeNetwork);

    NodeNetwork.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NodeNetwork, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NodeNetwork</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NodeNetwork} obj Optional instance to populate.
     * @return {module:model/NodeNetwork} The populated <code>NodeNetwork</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NodeNetwork();

        if (data.hasOwnProperty('nodeRoles')) {
          obj['nodeRoles'] = _NodeRole["default"].constructFromObject(data['nodeRoles']);
        }

        if (data.hasOwnProperty('numPeers')) {
          obj['numPeers'] = _ApiClient["default"].convertToType(data['numPeers'], 'String');
        }

        if (data.hasOwnProperty('isSyncing')) {
          obj['isSyncing'] = _ApiClient["default"].convertToType(data['isSyncing'], 'Boolean');
        }

        if (data.hasOwnProperty('shouldHavePeers')) {
          obj['shouldHavePeers'] = _ApiClient["default"].convertToType(data['shouldHavePeers'], 'Boolean');
        }

        if (data.hasOwnProperty('localPeerId')) {
          obj['localPeerId'] = _ApiClient["default"].convertToType(data['localPeerId'], 'String');
        }

        if (data.hasOwnProperty('localListenAddresses')) {
          obj['localListenAddresses'] = _ApiClient["default"].convertToType(data['localListenAddresses'], ['String']);
        }

        if (data.hasOwnProperty('peersInfo')) {
          obj['peersInfo'] = _ApiClient["default"].convertToType(data['peersInfo'], [_PeerInfo["default"]]);
        }
      }

      return obj;
    }
  }]);

  return NodeNetwork;
}();
/**
 * @member {module:model/NodeRole} nodeRoles
 */


NodeNetwork.prototype['nodeRoles'] = undefined;
/**
 * Number of peers the node is connected to.
 * @member {String} numPeers
 */

NodeNetwork.prototype['numPeers'] = undefined;
/**
 * Whether or not the node is syncing. `False` indicates that the node is in sync.
 * @member {Boolean} isSyncing
 */

NodeNetwork.prototype['isSyncing'] = undefined;
/**
 * Whether or not the node should be connected to peers. Might be false for local chains or when running without discovery.
 * @member {Boolean} shouldHavePeers
 */

NodeNetwork.prototype['shouldHavePeers'] = undefined;
/**
 * Local copy of the `PeerId`.
 * @member {String} localPeerId
 */

NodeNetwork.prototype['localPeerId'] = undefined;
/**
 * Multiaddresses that the local node is listening on. The addresses include a trailing `/p2p/` with the local PeerId, and are thus suitable to be passed to `system_addReservedPeer` or as a bootnode address for example.
 * @member {Array.<String>} localListenAddresses
 */

NodeNetwork.prototype['localListenAddresses'] = undefined;
/**
 * @member {Array.<module:model/PeerInfo>} peersInfo
 */

NodeNetwork.prototype['peersInfo'] = undefined;
var _default = NodeNetwork;
exports["default"] = _default;