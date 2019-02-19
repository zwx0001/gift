'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var history = function (_wepy$page) {
  _inherits(history, _wepy$page);

  function history() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, history);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = history.__proto__ || Object.getPrototypeOf(history)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '购买历史'
    }, _this.data = {
      arrs: []
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(history, [{
    key: 'onLoad',
    value: function onLoad(options) {
      var that = this;
      wx.getStorage({
        key: 'key',
        success: function success(res) {
          that.arrs = JSON.parse(res.data);
        }
      });
    }
  }]);

  return history;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(history , 'pages/history'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpc3RvcnkuanMiXSwibmFtZXMiOlsiaGlzdG9yeSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiYXJycyIsIm9wdGlvbnMiLCJ0aGF0Iiwid3giLCJnZXRTdG9yYWdlIiwia2V5Iiwic3VjY2VzcyIsInJlcyIsIkpTT04iLCJwYXJzZSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsWUFBTTtBQURELEs7Ozs7OzJCQUdBQyxPLEVBQVM7QUFDZCxVQUFJQyxPQUFPLElBQVg7QUFDQUMsU0FBR0MsVUFBSCxDQUFjO0FBQ1pDLGFBQUssS0FETztBQUVaQyxlQUZZLG1CQUVKQyxHQUZJLEVBRUM7QUFDWEwsZUFBS0YsSUFBTCxHQUFZUSxLQUFLQyxLQUFMLENBQVdGLElBQUlSLElBQWYsQ0FBWjtBQUNEO0FBSlcsT0FBZDtBQU1EOzs7O0VBZmtDVyxlQUFLQyxJOztrQkFBckJmLE8iLCJmaWxlIjoiaGlzdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgaGlzdG9yeSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+i0reS5sOWOhuWPsidcclxuICB9O1xyXG4gIGRhdGEgPSB7XHJcbiAgICBhcnJzOiBbXVxyXG4gIH07XHJcbiAgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICBrZXk6ICdrZXknLFxyXG4gICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgIHRoYXQuYXJycyA9IEpTT04ucGFyc2UocmVzLmRhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19