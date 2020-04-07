"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function friendlyDate(dateStr) {
  var dateObj = typeof dateStr === "Object" ? dateStr : new Date(dateStr);
  var space = Date.now() - dateObj.getTime();
  var str = "";

  switch (true) {
    case space < 1000 * 60:
      str = "刚刚";
      break;

    case space < 1000 * 60 * 60:
      str = Math.floor(space / (1000 * 60)) + "分钟前";
      break;

    case space < 1000 * 60 * 60 * 24:
      str = Math.floor(space / (1000 * 60 * 60)) + "小时前";
      break;

    case space < 1000 * 60 * 60 * 24 * 7:
      str = Math.floor(space / (1000 * 60 * 60 * 24)) + "天前";
      break;

    case space < 1000 * 60 * 60 * 24 * 30:
      str = Math.floor(space / (1000 * 60 * 60 * 24 * 7)) + "周前";
      break;

    case space < 1000 * 60 * 60 * 24 * 30 * 12:
      str = Math.floor(space / (1000 * 60 * 60 * 24 * 30)) + "个月前";
      break;

    default:
      str = Math.floor(space / (1000 * 60 * 60 * 24 * 30 * 12)) + "年前";
  }

  return str;
}

var _default = {
  install: function install(Vue, options) {
    Vue.prototype.friendlyDate = friendlyDate;
  }
};
exports["default"] = _default;