'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '物美礼品卡'
    }, _this.data = {
      gifts: [{
        imgUrl: '../images/1_r3_c2.jpg',
        nm: '生日卡',
        code: '24924::6'
      }, {
        imgUrl: '../images/1_r3_c5.jpg',
        nm: '节日卡',
        code: '82031::6'
      }, {
        imgUrl: '../images/1_r5_c2.jpg',
        nm: '星座卡',
        code: '75051::6'
      }, {
        imgUrl: '../images/1_r5_c5.jpg',
        nm: '福气卡',
        code: '94091::6'
      }, {
        imgUrl: '../images/1_r7_c2.jpg',
        nm: '天蝎座',
        code: '94090::6'
      }]
    }, _this.methods = {
      handleClick: function handleClick(val, code) {
        this.$navigate({ url: './detail?val=' + val + '&code=' + code });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJnaWZ0cyIsImltZ1VybCIsIm5tIiwiY29kZSIsIm1ldGhvZHMiLCJoYW5kbGVDbGljayIsInZhbCIsIiRuYXZpZ2F0ZSIsInVybCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGFBQU8sQ0FDTDtBQUNFQyxnQkFBUSx1QkFEVjtBQUVFQyxZQUFJLEtBRk47QUFHRUMsY0FBTTtBQUhSLE9BREssRUFNTDtBQUNFRixnQkFBUSx1QkFEVjtBQUVFQyxZQUFJLEtBRk47QUFHRUMsY0FBTTtBQUhSLE9BTkssRUFXTDtBQUNFRixnQkFBUSx1QkFEVjtBQUVFQyxZQUFJLEtBRk47QUFHRUMsY0FBTTtBQUhSLE9BWEssRUFnQkw7QUFDRUYsZ0JBQVEsdUJBRFY7QUFFRUMsWUFBSSxLQUZOO0FBR0VDLGNBQU07QUFIUixPQWhCSyxFQXFCTDtBQUNFRixnQkFBUSx1QkFEVjtBQUVFQyxZQUFJLEtBRk47QUFHRUMsY0FBTTtBQUhSLE9BckJLO0FBREYsSyxRQTZCUEMsTyxHQUFVO0FBQ1JDLGlCQURRLHVCQUNJQyxHQURKLEVBQ1FILElBRFIsRUFDYztBQUNwQixhQUFLSSxTQUFMLENBQWUsRUFBRUMsS0FBSyxrQkFBZ0JGLEdBQWhCLEdBQW9CLFFBQXBCLEdBQTZCSCxJQUFwQyxFQUFmO0FBQ0Q7QUFITyxLOzs7O0VBakN1Qk0sZUFBS0MsSTs7a0JBQW5CZCxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfniannvo7npLzlk4HljaEnXG4gIH07XG4gIGRhdGEgPSB7XG4gICAgZ2lmdHM6IFtcbiAgICAgIHtcbiAgICAgICAgaW1nVXJsOiAnLi4vaW1hZ2VzLzFfcjNfYzIuanBnJyxcbiAgICAgICAgbm06ICfnlJ/ml6XljaEnLFxuICAgICAgICBjb2RlOiAnMjQ5MjQ6OjYnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbWdVcmw6ICcuLi9pbWFnZXMvMV9yM19jNS5qcGcnLFxuICAgICAgICBubTogJ+iKguaXpeWNoScsXG4gICAgICAgIGNvZGU6ICc4MjAzMTo6NidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGltZ1VybDogJy4uL2ltYWdlcy8xX3I1X2MyLmpwZycsXG4gICAgICAgIG5tOiAn5pif5bqn5Y2hJyxcbiAgICAgICAgY29kZTogJzc1MDUxOjo2J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaW1nVXJsOiAnLi4vaW1hZ2VzLzFfcjVfYzUuanBnJyxcbiAgICAgICAgbm06ICfnpo/msJTljaEnLFxuICAgICAgICBjb2RlOiAnOTQwOTE6OjYnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbWdVcmw6ICcuLi9pbWFnZXMvMV9yN19jMi5qcGcnLFxuICAgICAgICBubTogJ+WkqeidjuW6pycsXG4gICAgICAgIGNvZGU6ICc5NDA5MDo6NidcbiAgICAgIH1cbiAgICBdXG4gIH07XG4gIG1ldGhvZHMgPSB7XG4gICAgaGFuZGxlQ2xpY2sodmFsLGNvZGUpIHtcbiAgICAgIHRoaXMuJG5hdmlnYXRlKHsgdXJsOiAnLi9kZXRhaWw/dmFsPScrdmFsKycmY29kZT0nK2NvZGUgfSk7XG4gICAgfVxuICB9O1xufVxuIl19