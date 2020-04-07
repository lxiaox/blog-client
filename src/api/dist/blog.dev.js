"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _request = _interopRequireDefault(require("@/helpers/request.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 博客相关接口
var URL = {
  CREATE: '/blog',
  UPDATA: '/blog/:blogId',
  DELETE: '/blog/:blogId',
  GET_LIST: '/blog',
  GET_DETAIL: '/blog/:blogId'
};
var _default = {
  createBlog: function createBlog() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      title: '',
      content: '',
      description: '',
      atIndex: false
    },
        _ref$title = _ref.title,
        title = _ref$title === void 0 ? '' : _ref$title,
        _ref$content = _ref.content,
        content = _ref$content === void 0 ? '' : _ref$content,
        _ref$description = _ref.description,
        description = _ref$description === void 0 ? '' : _ref$description,
        _ref$atIndex = _ref.atIndex,
        atIndex = _ref$atIndex === void 0 ? false : _ref$atIndex;

    return (0, _request["default"])(URL.CREATE, 'POST', {
      title: title,
      content: content,
      description: description,
      atIndex: atIndex
    });
  },
  updateBlog: function updateBlog(_ref2, _ref3) {
    var blogId = _ref2.blogId;
    var title = _ref3.title,
        content = _ref3.content,
        description = _ref3.description,
        atIndex = _ref3.atIndex;
    return (0, _request["default"])(URL.UPDATA.replace(':blogId', blogId), 'PATCH', {
      title: title,
      content: content,
      description: description,
      atIndex: atIndex
    });
  },
  deleteBlog: function deleteBlog(_ref4) {
    var blogId = _ref4.blogId;
    return (0, _request["default"])(URL.DELETE.replace(':blogId', blogId), 'DELETE');
  },

  /* page不传默认为1，
   * userId不传返回所有用户博客，
   * atIndex不传返回所有，传true为显示在首页的，传false为不限时在首页的
  */
  getBlogs: function getBlogs() {
    var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      page: 1
    },
        _ref5$page = _ref5.page,
        page = _ref5$page === void 0 ? 1 : _ref5$page,
        userId = _ref5.userId,
        atIndex = _ref5.atIndex;

    return (0, _request["default"])(URL.GET_LIST, 'GET', {
      page: page,
      userId: userId,
      atIndex: atIndex
    });
  },
  getBlogsByUserId: function getBlogsByUserId(userId) {
    var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      page: 1
    },
        _ref6$page = _ref6.page,
        page = _ref6$page === void 0 ? 1 : _ref6$page,
        atIndex = _ref6.atIndex;

    return this.getBlogs({
      page: page,
      userId: userId,
      atIndex: atIndex
    });
  },
  getIndexBlogs: function getIndexBlogs() {
    var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      page: 1
    },
        _ref7$page = _ref7.page,
        page = _ref7$page === void 0 ? 1 : _ref7$page;

    return this.getBlogs({
      page: page,
      atIndex: true
    });
  },
  getBlogDetail: function getBlogDetail(_ref8) {
    var blogId = _ref8.blogId;
    return (0, _request["default"])(URL.GET_DETAIL.replace(':blogId', blogId), 'GET');
  }
};
exports["default"] = _default;