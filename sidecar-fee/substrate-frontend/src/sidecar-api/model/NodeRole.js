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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* Enum class NodeRole.
* @enum {}
* @readonly
*/
var NodeRole = /*#__PURE__*/function () {
  function NodeRole() {
    _classCallCheck(this, NodeRole);

    _defineProperty(this, "Full", "Full");

    _defineProperty(this, "LightClient", "LightClient");

    _defineProperty(this, "Authority", "Authority");

    _defineProperty(this, "Sentry", "Sentry");
  }

  _createClass(NodeRole, null, [{
    key: "constructFromObject",

    /**
    * Returns a <code>NodeRole</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/NodeRole} The enum <code>NodeRole</code> value.
    */
    value: function constructFromObject(object) {
      return object;
    }
  }]);

  return NodeRole;
}();

exports["default"] = NodeRole;