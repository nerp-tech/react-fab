'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bool = _react.PropTypes.bool,
    func = _react.PropTypes.func,
    node = _react.PropTypes.node;
var FabButton = (_temp = _class = function (_Component) {
  _inherits(FabButton, _Component);

  function FabButton() {
    _classCallCheck(this, FabButton);

    return _possibleConstructorReturn(this, (FabButton.__proto__ || Object.getPrototypeOf(FabButton)).apply(this, arguments));
  }

  _createClass(FabButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          children = _props.children,
          onClick = _props.onClick;


      var classNames = (0, _classnames2.default)('fab-button', {
        'fab-button--active': active
      });

      return _react2.default.createElement(
        'button',
        { className: classNames, onClick: onClick },
        children
      );
    }
  }]);

  return FabButton;
}(_react.Component), _class.propTypes = {
  active: bool,
  children: node,
  onClick: func
}, _temp);
exports.default = FabButton;