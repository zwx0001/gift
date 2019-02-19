'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Imgs = function (_wepy$component) {
  _inherits(Imgs, _wepy$component);

  function Imgs() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Imgs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Imgs.__proto__ || Object.getPrototypeOf(Imgs)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      i: String,
      v: Number
    }, _this.data = {
      idx: 0
    }, _this.methods = {
      ck: function ck(v, i) {
        this.idx = v;
        this.$emit('img', i);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Imgs;
}(_wepy2.default.component);

exports.default = Imgs;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltZy5qcyJdLCJuYW1lcyI6WyJJbWdzIiwicHJvcHMiLCJpIiwiU3RyaW5nIiwidiIsIk51bWJlciIsImRhdGEiLCJpZHgiLCJtZXRob2RzIiwiY2siLCIkZW1pdCIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLEssR0FBUTtBQUNOQyxTQUFHQyxNQURHO0FBRU5DLFNBQUdDO0FBRkcsSyxRQUlSQyxJLEdBQU87QUFDTEMsV0FBSztBQURBLEssUUFHUEMsTyxHQUFVO0FBQ1JDLFFBRFEsY0FDTEwsQ0FESyxFQUNGRixDQURFLEVBQ0M7QUFDUCxhQUFLSyxHQUFMLEdBQVdILENBQVg7QUFDQSxhQUFLTSxLQUFMLENBQVcsS0FBWCxFQUFrQlIsQ0FBbEI7QUFDRDtBQUpPLEs7Ozs7RUFSc0JTLGVBQUtDLFM7O2tCQUFsQlosSSIsImZpbGUiOiJpbWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltZ3MgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgcHJvcHMgPSB7XHJcbiAgICBpOiBTdHJpbmcsXHJcbiAgICB2OiBOdW1iZXJcclxuICB9O1xyXG4gIGRhdGEgPSB7XHJcbiAgICBpZHg6IDBcclxuICB9O1xyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBjayh2LCBpKSB7XHJcbiAgICAgIHRoaXMuaWR4ID0gdjtcclxuICAgICAgdGhpcy4kZW1pdCgnaW1nJywgaSk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iXX0=