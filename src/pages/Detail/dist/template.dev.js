"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _marked = _interopRequireDefault(require("marked"));

var _blog = _interopRequireDefault(require("@/api/blog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  data: function data() {
    return {
      user: {},
      content: '',
      title: '',
      createdAt: ''
    };
  },
  computed: {
    markedContent: function markedContent() {
      return (0, _marked["default"])(this.content);
    }
  },
  created: function created() {
    var _this = this;

    var blogId = this.$route.params.blogId;

    _blog["default"].getBlogDetail({
      blogId: blogId
    }).then(function (res) {
      _this.user = res.data.user;
      _this.content = res.data.content;
      _this.title = res.data.title;
      _this.createdAt = res.data.createdAt;
    });
  }
};
exports["default"] = _default;