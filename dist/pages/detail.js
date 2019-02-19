'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _card = require('./../components/card.js');

var _card2 = _interopRequireDefault(_card);

var _img = require('./../components/img.js');

var _img2 = _interopRequireDefault(_img);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Detail = function (_wepy$page) {
  _inherits(Detail, _wepy$page);

  function Detail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Detail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Detail.__proto__ || Object.getPrototypeOf(Detail)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      msg: '',
      code: '',
      total: 0.0,
      count: 0,
      array: [],
      curimg: ''
    }, _this.$repeat = { "array": { "com": "imgs", "props": "" } }, _this.$props = { "imgs": { "xmlns:v-bind": { "value": "", "for": "array", "item": "item", "index": "index", "key": "index" }, "v-bind:i.sync": { "value": "item.sku_img", "for": "array", "item": "item", "index": "index", "key": "index" }, "v-bind:v.sync": { "value": "index", "type": "index", "for": "array", "item": "item", "index": "index", "key": "index" } }, "card": { "money": "1000", "v-bind:tit.sync": "msg" }, "card1": { "money": "800", "v-bind:tit.sync": "msg" }, "card2": { "money": "500", "v-bind:tit.sync": "msg" }, "card3": { "money": "188", "v-bind:tit.sync": "msg" }, "card4": { "money": "166", "v-bind:tit.sync": "msg" }, "card5": { "money": "88", "v-bind:tit.sync": "msg" }, "card6": { "money": "66", "v-bind:tit.sync": "msg" }, "card7": { "money": "18", "v-bind:tit.sync": "msg" }, "card8": { "money": "16", "v-bind:tit.sync": "msg" } }, _this.$events = {}, _this.components = {
      imgs: _img2.default,
      card: _card2.default,
      card1: _card2.default,
      card2: _card2.default,
      card3: _card2.default,
      card4: _card2.default,
      card5: _card2.default,
      card6: _card2.default,
      card7: _card2.default,
      card8: _card2.default,
      card9: _card2.default
    }, _this.methods = {
      buyCar: function buyCar() {
        var date = new Date().toLocaleString();
        var that = this;
        this.$navigate({
          url: './history'
        });

        var value = wx.getStorageSync('key') ? JSON.parse(wx.getStorageSync('key')) : [];
        value.push({
          msg: that.msg,
          date: date,
          total: that.total,
          img: that.curimg
        });
        wx.setStorage({
          key: 'key',
          data: JSON.stringify(value)
        });
      }
    }, _this.events = {
      add: function add(data) {
        _this.count += 1;
        _this.total += data.money * 1;
      },
      minus: function minus(data) {
        _this.count -= 1;
        _this.total -= data.money * 1;
      },
      img: function img(data) {
        _this.curimg = data;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Detail, [{
    key: 'onLoad',
    value: function onLoad(e) {
      this.msg = e.val;
      this.code = e.code;
      var that = this;
      wx.setNavigationBarTitle({
        title: e.val
      });
      wx.request({
        methods: 'post',
        data: {
          params: that.code,
          pramsSorts: '默认排序',
          pageSize: 12
        },
        url: 'https://o.jd.com/market/marketChannelAll/search',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function success(res) {
          that.array = res.data.detail;
          that.curimg = res.data.detail[0].sku_img;
          that.$apply();
        }
      });
    }
  }]);

  return Detail;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Detail , 'pages/detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qcyJdLCJuYW1lcyI6WyJEZXRhaWwiLCJkYXRhIiwibXNnIiwiY29kZSIsInRvdGFsIiwiY291bnQiLCJhcnJheSIsImN1cmltZyIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImltZ3MiLCJJbWdzIiwiY2FyZCIsImNhcmQxIiwiY2FyZDIiLCJjYXJkMyIsImNhcmQ0IiwiY2FyZDUiLCJjYXJkNiIsImNhcmQ3IiwiY2FyZDgiLCJjYXJkOSIsIm1ldGhvZHMiLCJidXlDYXIiLCJkYXRlIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwidGhhdCIsIiRuYXZpZ2F0ZSIsInVybCIsInZhbHVlIiwid3giLCJnZXRTdG9yYWdlU3luYyIsIkpTT04iLCJwYXJzZSIsInB1c2giLCJpbWciLCJzZXRTdG9yYWdlIiwia2V5Iiwic3RyaW5naWZ5IiwiZXZlbnRzIiwiYWRkIiwibW9uZXkiLCJtaW51cyIsImUiLCJ2YWwiLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJ0aXRsZSIsInJlcXVlc3QiLCJwYXJhbXMiLCJwcmFtc1NvcnRzIiwicGFnZVNpemUiLCJoZWFkZXIiLCJzdWNjZXNzIiwicmVzIiwiZGV0YWlsIiwic2t1X2ltZyIsIiRhcHBseSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxJLEdBQU87QUFDTEMsV0FBSyxFQURBO0FBRUxDLFlBQU0sRUFGRDtBQUdMQyxhQUFPLEdBSEY7QUFJTEMsYUFBTyxDQUpGO0FBS0xDLGFBQU8sRUFMRjtBQU1MQyxjQUFRO0FBTkgsSyxRQWlDUkMsTyxHQUFVLEVBQUMsU0FBUSxFQUFDLE9BQU0sTUFBUCxFQUFjLFNBQVEsRUFBdEIsRUFBVCxFLFFBQ1hDLE0sR0FBUyxFQUFDLFFBQU8sRUFBQyxnQkFBZSxFQUFDLFNBQVEsRUFBVCxFQUFZLE9BQU0s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QUkwQixPQUFPLElBQVg7QUFDQUksU0FBR2UscUJBQUgsQ0FBeUI7QUFDdkJDLGVBQU9ILEVBQUVDO0FBRGMsT0FBekI7QUFHQWQsU0FBR2lCLE9BQUgsQ0FBVztBQUNUMUIsaUJBQVMsTUFEQTtBQUVUdkIsY0FBTTtBQUNKa0Qsa0JBQVF0QixLQUFLMUIsSUFEVDtBQUVKaUQsc0JBQVksTUFGUjtBQUdKQyxvQkFBVTtBQUhOLFNBRkc7QUFPVHRCLGFBQUssaURBUEk7QUFRVHVCLGdCQUFRO0FBQ04sMEJBQWdCO0FBRFYsU0FSQztBQVdUQyxpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCM0IsZUFBS3ZCLEtBQUwsR0FBYWtELElBQUl2RCxJQUFKLENBQVN3RCxNQUF0QjtBQUNBNUIsZUFBS3RCLE1BQUwsR0FBY2lELElBQUl2RCxJQUFKLENBQVN3RCxNQUFULENBQWdCLENBQWhCLEVBQW1CQyxPQUFqQztBQUNBN0IsZUFBSzhCLE1BQUw7QUFDRDtBQWZRLE9BQVg7QUFpQkQ7Ozs7RUFqQ2lDQyxlQUFLQyxJOztrQkFBcEI3RCxNIiwiZmlsZSI6ImRldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuaW1wb3J0IGNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9jYXJkJztcclxuaW1wb3J0IEltZ3MgZnJvbSAnLi4vY29tcG9uZW50cy9pbWcnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXRhaWwgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGRhdGEgPSB7XHJcbiAgICBtc2c6ICcnLFxyXG4gICAgY29kZTogJycsXHJcbiAgICB0b3RhbDogMC4wLFxyXG4gICAgY291bnQ6IDAsXHJcbiAgICBhcnJheTogW10sXHJcbiAgICBjdXJpbWc6ICcnXHJcbiAgfTtcclxuICBvbkxvYWQoZSkge1xyXG4gICAgdGhpcy5tc2cgPSBlLnZhbDtcclxuICAgIHRoaXMuY29kZSA9IGUuY29kZTtcclxuICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XHJcbiAgICAgIHRpdGxlOiBlLnZhbFxyXG4gICAgfSk7XHJcbiAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgbWV0aG9kczogJ3Bvc3QnLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcGFyYW1zOiB0aGF0LmNvZGUsXHJcbiAgICAgICAgcHJhbXNTb3J0czogJ+m7mOiupOaOkuW6jycsXHJcbiAgICAgICAgcGFnZVNpemU6IDEyXHJcbiAgICAgIH0sXHJcbiAgICAgIHVybDogJ2h0dHBzOi8vby5qZC5jb20vbWFya2V0L21hcmtldENoYW5uZWxBbGwvc2VhcmNoJyxcclxuICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgIHRoYXQuYXJyYXkgPSByZXMuZGF0YS5kZXRhaWw7XHJcbiAgICAgICAgdGhhdC5jdXJpbWcgPSByZXMuZGF0YS5kZXRhaWxbMF0uc2t1X2ltZztcclxuICAgICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAkcmVwZWF0ID0ge1wiYXJyYXlcIjp7XCJjb21cIjpcImltZ3NcIixcInByb3BzXCI6XCJcIn19O1xyXG4kcHJvcHMgPSB7XCJpbWdzXCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJhcnJheVwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOmkuc3luY1wiOntcInZhbHVlXCI6XCJpdGVtLnNrdV9pbWdcIixcImZvclwiOlwiYXJyYXlcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInYtYmluZDp2LnN5bmNcIjp7XCJ2YWx1ZVwiOlwiaW5kZXhcIixcInR5cGVcIjpcImluZGV4XCIsXCJmb3JcIjpcImFycmF5XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn19LFwiY2FyZFwiOntcIm1vbmV5XCI6XCIxMDAwXCIsXCJ2LWJpbmQ6dGl0LnN5bmNcIjpcIm1zZ1wifSxcImNhcmQxXCI6e1wibW9uZXlcIjpcIjgwMFwiLFwidi1iaW5kOnRpdC5zeW5jXCI6XCJtc2dcIn0sXCJjYXJkMlwiOntcIm1vbmV5XCI6XCI1MDBcIixcInYtYmluZDp0aXQuc3luY1wiOlwibXNnXCJ9LFwiY2FyZDNcIjp7XCJtb25leVwiOlwiMTg4XCIsXCJ2LWJpbmQ6dGl0LnN5bmNcIjpcIm1zZ1wifSxcImNhcmQ0XCI6e1wibW9uZXlcIjpcIjE2NlwiLFwidi1iaW5kOnRpdC5zeW5jXCI6XCJtc2dcIn0sXCJjYXJkNVwiOntcIm1vbmV5XCI6XCI4OFwiLFwidi1iaW5kOnRpdC5zeW5jXCI6XCJtc2dcIn0sXCJjYXJkNlwiOntcIm1vbmV5XCI6XCI2NlwiLFwidi1iaW5kOnRpdC5zeW5jXCI6XCJtc2dcIn0sXCJjYXJkN1wiOntcIm1vbmV5XCI6XCIxOFwiLFwidi1iaW5kOnRpdC5zeW5jXCI6XCJtc2dcIn0sXCJjYXJkOFwiOntcIm1vbmV5XCI6XCIxNlwiLFwidi1iaW5kOnRpdC5zeW5jXCI6XCJtc2dcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgaW1nczogSW1ncyxcclxuICAgIGNhcmQ6IGNhcmQsXHJcbiAgICBjYXJkMTogY2FyZCxcclxuICAgIGNhcmQyOiBjYXJkLFxyXG4gICAgY2FyZDM6IGNhcmQsXHJcbiAgICBjYXJkNDogY2FyZCxcclxuICAgIGNhcmQ1OiBjYXJkLFxyXG4gICAgY2FyZDY6IGNhcmQsXHJcbiAgICBjYXJkNzogY2FyZCxcclxuICAgIGNhcmQ4OiBjYXJkLFxyXG4gICAgY2FyZDk6IGNhcmRcclxuICB9O1xyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBidXlDYXIoKSB7XHJcbiAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpO1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgIHRoaXMuJG5hdmlnYXRlKHtcclxuICAgICAgICB1cmw6ICcuL2hpc3RvcnknXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbGV0IHZhbHVlID0gd3guZ2V0U3RvcmFnZVN5bmMoJ2tleScpXHJcbiAgICAgICAgPyBKU09OLnBhcnNlKHd4LmdldFN0b3JhZ2VTeW5jKCdrZXknKSlcclxuICAgICAgICA6IFtdO1xyXG4gICAgICB2YWx1ZS5wdXNoKHtcclxuICAgICAgICBtc2c6IHRoYXQubXNnLFxyXG4gICAgICAgIGRhdGU6IGRhdGUsXHJcbiAgICAgICAgdG90YWw6IHRoYXQudG90YWwsXHJcbiAgICAgICAgaW1nOiB0aGF0LmN1cmltZ1xyXG4gICAgICB9KTtcclxuICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAga2V5OiAna2V5JyxcclxuICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh2YWx1ZSlcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBldmVudHMgPSB7XHJcbiAgICBhZGQ6IGRhdGEgPT4ge1xyXG4gICAgICB0aGlzLmNvdW50ICs9IDE7XHJcbiAgICAgIHRoaXMudG90YWwgKz0gZGF0YS5tb25leSAqIDE7XHJcbiAgICB9LFxyXG4gICAgbWludXM6IGRhdGEgPT4ge1xyXG4gICAgICB0aGlzLmNvdW50IC09IDE7XHJcbiAgICAgIHRoaXMudG90YWwgLT0gZGF0YS5tb25leSAqIDE7XHJcbiAgICB9LFxyXG4gICAgaW1nOiBkYXRhID0+IHtcclxuICAgICAgdGhpcy5jdXJpbWcgPSBkYXRhO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIl19