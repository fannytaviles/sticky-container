'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Sticking = _react2['default'].createClass({
  displayName: 'Sticking',

  propTypes: {
    children: _react2['default'].PropTypes.element.isRequired,
    active: _react2['default'].PropTypes.bool.isRequired
  },
  getInitialState: function getInitialState() {
    return {
      height: 0,
      sticky: false,
      initialHeight: 0
    };
  },

  componentDidMount: function componentDidMount() {
    this.onWindowScroll();
  },
  onWindowScroll: function onWindowScroll() {
    var _this = this;

    var StickyElement = document.getElementById('sticky-component');
    this.setState({ initialHeight: StickyElement.offsetTop });
    window.onscroll = function () {
      _this.calculateDistance(window.scrollY, _this.state.initialHeight);
    };
  },
  render: function render() {
    var stickyStyles = {};
    if (this.state.sticky) {
      stickyStyles = { position: 'fixed', top: 0, zIndex: 10 };
      this.props.active(true);
    } else {
      stickyStyles = { position: 'initial', top: 'initial' };
      this.props.active(false);
    }
    return _react2['default'].createElement(
      'div',
      { style: stickyStyles, id: 'sticky-component' },
      this.props.children
    );
  },
  calculateDistance: function calculateDistance(scrollDistance, initHeight) {
    this.setState({ height: initHeight - scrollDistance });
    if (this.state.height <= 0) {
      this.setState({ sticky: true });
    } else {
      this.setState({ sticky: false });
    }
  }
});

exports['default'] = Sticking;
module.exports = exports['default'];