"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _blog = _interopRequireDefault(require("@/api/blog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  data: function data() {
    return {
      title: '',
      description: '',
      content: '',
      atIndex: false
    };
  },
  methods: {
    onCommit: function onCommit() {
      var _this = this;

      _blog["default"].createBlog({
        title: this.title,
        description: this.description,
        content: this.content,
        atIndex: this.atIndex
      }).then(function (res) {
        _this.$message.success(res.msg);

        _this.$router.push({
          path: "/detail/".concat(res.data.id)
        });
      });
    }
  }
};
exports["default"] = _default;