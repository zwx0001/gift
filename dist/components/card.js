'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var card = function (_wepy$component) {
  _inherits(card, _wepy$component);

  function card() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, card);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = card.__proto__ || Object.getPrototypeOf(card)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      tit: String,
      money: String
    }, _this.data = {
      flag: false,
      count: 0,
      money: 0
    }, _this.methods = {
      add: function add() {
        this.flag = true;
        var newCount = this.count;
        newCount++;
        this.count = newCount;
        this.$emit('add', {
          money: this.money
        });
      },
      minus: function minus() {
        var newCount = this.count;
        newCount--;
        if (newCount === 0) {
          this.flag = false;
        }
        this.count = newCount;
        this.$emit('minus', {
          money: this.money
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(card, [{
    key: 'onShow',
    value: function onShow() {
      this.money = money;
    }
  }]);

  return card;
}(_wepy2.default.component);

exports.default = card;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuanMiXSwibmFtZXMiOlsiY2FyZCIsInByb3BzIiwidGl0IiwiU3RyaW5nIiwibW9uZXkiLCJkYXRhIiwiZmxhZyIsImNvdW50IiwibWV0aG9kcyIsImFkZCIsIm5ld0NvdW50IiwiJGVtaXQiLCJtaW51cyIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsSyxHQUFRO0FBQ05DLFdBQUtDLE1BREM7QUFFTkMsYUFBT0Q7QUFGRCxLLFFBSVJFLEksR0FBTztBQUNMQyxZQUFNLEtBREQ7QUFFTEMsYUFBTyxDQUZGO0FBR0xILGFBQU87QUFIRixLLFFBS1BJLE8sR0FBVTtBQUNSQyxTQURRLGlCQUNGO0FBQ0osYUFBS0gsSUFBTCxHQUFZLElBQVo7QUFDQSxZQUFJSSxXQUFXLEtBQUtILEtBQXBCO0FBQ0FHO0FBQ0EsYUFBS0gsS0FBTCxHQUFhRyxRQUFiO0FBQ0EsYUFBS0MsS0FBTCxDQUFXLEtBQVgsRUFBa0I7QUFDaEJQLGlCQUFPLEtBQUtBO0FBREksU0FBbEI7QUFHRCxPQVRPO0FBVVJRLFdBVlEsbUJBVUE7QUFDTixZQUFJRixXQUFXLEtBQUtILEtBQXBCO0FBQ0FHO0FBQ0EsWUFBSUEsYUFBYSxDQUFqQixFQUFvQjtBQUNsQixlQUFLSixJQUFMLEdBQVksS0FBWjtBQUNEO0FBQ0QsYUFBS0MsS0FBTCxHQUFhRyxRQUFiO0FBQ0EsYUFBS0MsS0FBTCxDQUFXLE9BQVgsRUFBb0I7QUFDbEJQLGlCQUFPLEtBQUtBO0FBRE0sU0FBcEI7QUFHRDtBQXBCTyxLOzs7Ozs2QkFzQkQ7QUFDUCxXQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OztFQWxDK0JTLGVBQUtDLFM7O2tCQUFsQmQsSSIsImZpbGUiOiJjYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjYXJkIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gIHByb3BzID0ge1xyXG4gICAgdGl0OiBTdHJpbmcsXHJcbiAgICBtb25leTogU3RyaW5nXHJcbiAgfTtcclxuICBkYXRhID0ge1xyXG4gICAgZmxhZzogZmFsc2UsXHJcbiAgICBjb3VudDogMCxcclxuICAgIG1vbmV5OiAwXHJcbiAgfTtcclxuICBtZXRob2RzID0ge1xyXG4gICAgYWRkKCkge1xyXG4gICAgICB0aGlzLmZsYWcgPSB0cnVlO1xyXG4gICAgICBsZXQgbmV3Q291bnQgPSB0aGlzLmNvdW50O1xyXG4gICAgICBuZXdDb3VudCsrO1xyXG4gICAgICB0aGlzLmNvdW50ID0gbmV3Q291bnQ7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ2FkZCcsIHtcclxuICAgICAgICBtb25leTogdGhpcy5tb25leVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBtaW51cygpIHtcclxuICAgICAgbGV0IG5ld0NvdW50ID0gdGhpcy5jb3VudDtcclxuICAgICAgbmV3Q291bnQtLTtcclxuICAgICAgaWYgKG5ld0NvdW50ID09PSAwKSB7XHJcbiAgICAgICAgdGhpcy5mbGFnID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jb3VudCA9IG5ld0NvdW50O1xyXG4gICAgICB0aGlzLiRlbWl0KCdtaW51cycsIHtcclxuICAgICAgICBtb25leTogdGhpcy5tb25leVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG4gIG9uU2hvdygpIHtcclxuICAgIHRoaXMubW9uZXkgPSBtb25leTtcclxuICB9XHJcbn1cclxuIl19