'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FabActions = (_temp = _class = function (_Component) {
  _inherits(FabActions, _Component);

  function FabActions() {
    _classCallCheck(this, FabActions);

    return _possibleConstructorReturn(this, (FabActions.__proto__ || Object.getPrototypeOf(FabActions)).apply(this, arguments));
  }

  _createClass(FabActions, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          children = _props.children,
          onClose = _props.onClose;


      var className = (0, _classnames2.default)('fab-actions', {
        'fab-actions--active': active
      });

      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.Children.map(children, function (element, index) {
          var options = {
            active: active,
            key: index,
            onClose: onClose
          };

          if (_react2.default.isValidElement(element)) {
            return _react2.default.cloneElement(element, options);
          } else {
            return element;
          }
        })
      );
    }
  }]);

  return FabActions;
}(_react.Component), _class.propTypes = {
  active: _propTypes.bool,
  children: _propTypes.node,
  onClose: func
}, _temp);
exports.default = FabActions;