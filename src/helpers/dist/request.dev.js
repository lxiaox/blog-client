"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = request;

var _axios = _interopRequireDefault(require("axios"));

var _elementUi = require("element-ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 封装axios
_axios["default"].defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
_axios["default"].defaults.baseURL = 'https://blog-server.hunger-valley.com';
_axios["default"].defaults.withCredentials = true;

function request(url) {
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return new Promise(function (resolve, reject) {
    var option = {
      url: url,
      method: method
    };

    if (method.toLowerCase() === 'get') {
      option.params = data;
    } else {
      option.data = data;
    }

    (0, _axios["default"])(option).then(function (res) {
      if (res.data.status === 'ok') {
        resolve(res.data);
      } else {
        _elementUi.Message.error(res.data.msg);

        reject(res.data);
      }
    })["catch"](function (err) {
      _elementUi.Message.error('网络异常');

      reject({
        msg: '网络异常'
      });
    });
  });
}