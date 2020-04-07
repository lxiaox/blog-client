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
      blogs: [],
      page: 1,
      total: 0
    };
  },
  created: function created() {
    this.page = parseInt(this.$route.query.page) || 1;
    this.getBlogs(this.page);
  },
  methods: {
    getBlogs: function getBlogs() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      _blog["default"].getIndexBlogs({
        page: page
      }).then(function (res) {
        _this.blogs = res.data;
        _this.page = res.page;
        _this.total = res.total;
      });
    },
    onPageChange: function onPageChange(newPage) {
      this.getBlogs(newPage);
      this.$router.push({
        path: '/',
        query: {
          page: newPage
        }
      });
    }
  }
};
exports["default"] = _default;