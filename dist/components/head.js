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

var head = function (_wepy$component) {
    _inherits(head, _wepy$component);

    function head() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, head);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = head.__proto__ || Object.getPrototypeOf(head)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            msg: String,
            title: String,
            syncTitle: {
                type: String,
                default: 'null'
            },
            twoTitle: {
                type: String,
                default: 'two'
            }
        }, _this.methods = {
            bindtap: function bindtap() {
                var rst = this.commonFunc();
            },
            bindinput: function bindinput() {
                var rst = this.commonFunc();
            },
            handleClick: function handleClick() {
                //this.$emit('myevent',{val:'666'})
                this.$emit('childFn', { val: '888' });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(head, [{
        key: 'onLoad',
        value: function onLoad() {
            console.log(this.msg);
            console.log(this.title);
            console.log(this.syncTitle);
            console.log(this.twoTitle);
        }
    }, {
        key: 'customFunction',


        //自定义方法
        value: function customFunction() {
            return 'sth.';
        }
    }]);

    return head;
}(_wepy2.default.component);

exports.default = head;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWQuanMiXSwibmFtZXMiOlsiaGVhZCIsInByb3BzIiwibXNnIiwiU3RyaW5nIiwidGl0bGUiLCJzeW5jVGl0bGUiLCJ0eXBlIiwiZGVmYXVsdCIsInR3b1RpdGxlIiwibWV0aG9kcyIsImJpbmR0YXAiLCJyc3QiLCJjb21tb25GdW5jIiwiYmluZGlucHV0IiwiaGFuZGxlQ2xpY2siLCIkZW1pdCIsInZhbCIsImNvbnNvbGUiLCJsb2ciLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztzTEFDakJDLEssR0FBTTtBQUNGQyxpQkFBSUMsTUFERjtBQUVGQyxtQkFBTUQsTUFGSjtBQUdGRSx1QkFBVTtBQUNOQyxzQkFBS0gsTUFEQztBQUVOSSx5QkFBUTtBQUZGLGFBSFI7QUFPRkMsc0JBQVM7QUFDTEYsc0JBQUtILE1BREE7QUFFTEkseUJBQVE7QUFGSDtBQVBQLFMsUUFrQk5FLE8sR0FBVTtBQUNOQyxtQkFETSxxQkFDSTtBQUNOLG9CQUFJQyxNQUFNLEtBQUtDLFVBQUwsRUFBVjtBQUNILGFBSEs7QUFJTkMscUJBSk0sdUJBSU07QUFDUixvQkFBSUYsTUFBTSxLQUFLQyxVQUFMLEVBQVY7QUFDSCxhQU5LO0FBT05FLHVCQVBNLHlCQU9PO0FBQ1Q7QUFDQSxxQkFBS0MsS0FBTCxDQUFXLFNBQVgsRUFBcUIsRUFBQ0MsS0FBSSxLQUFMLEVBQXJCO0FBQ0g7QUFWSyxTOzs7OztpQ0FORjtBQUNKQyxvQkFBUUMsR0FBUixDQUFZLEtBQUtoQixHQUFqQjtBQUNBZSxvQkFBUUMsR0FBUixDQUFZLEtBQUtkLEtBQWpCO0FBQ0FhLG9CQUFRQyxHQUFSLENBQVksS0FBS2IsU0FBakI7QUFDQVksb0JBQVFDLEdBQVIsQ0FBWSxLQUFLVixRQUFqQjtBQUNIOzs7OztBQWNEO3lDQUNpQjtBQUNiLG1CQUFPLE1BQVA7QUFDSDs7OztFQW5DNkJXLGVBQUtDLFM7O2tCQUFsQnBCLEkiLCJmaWxlIjoiaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgaGVhZCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgIHByb3BzPXtcclxuICAgICAgICBtc2c6U3RyaW5nLFxyXG4gICAgICAgIHRpdGxlOlN0cmluZyxcclxuICAgICAgICBzeW5jVGl0bGU6e1xyXG4gICAgICAgICAgICB0eXBlOlN0cmluZyxcclxuICAgICAgICAgICAgZGVmYXVsdDonbnVsbCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR3b1RpdGxlOntcclxuICAgICAgICAgICAgdHlwZTpTdHJpbmcsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6J3R3bydcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvbkxvYWQoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1zZylcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRpdGxlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3luY1RpdGxlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudHdvVGl0bGUpXHJcbiAgICB9XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAgIGJpbmR0YXAoKSB7XHJcbiAgICAgICAgICAgIGxldCByc3QgPSB0aGlzLmNvbW1vbkZ1bmMoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJpbmRpbnB1dCgpIHtcclxuICAgICAgICAgICAgbGV0IHJzdCA9IHRoaXMuY29tbW9uRnVuYygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGFuZGxlQ2xpY2soKXtcclxuICAgICAgICAgICAgLy90aGlzLiRlbWl0KCdteWV2ZW50Jyx7dmFsOic2NjYnfSlcclxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hpbGRGbicse3ZhbDonODg4J30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v6Ieq5a6a5LmJ5pa55rOVXHJcbiAgICBjdXN0b21GdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gJ3N0aC4nO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==