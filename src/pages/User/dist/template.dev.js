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
      total: 0,
      page: 1,
      blogs: [],
      user: {}
    };
  },
  created: function created() {
    this.userId = this.$route.params.userId;
    this.page = this.$route.query.page || 1;
    this.getUserBlogs(this.page);
  },
  methods: {
    getUserBlogs: function getUserBlogs(page) {
      var _this = this;

      _blog["default"].getBlogsByUserId(this.userId, {
        page: page
      }).then(function (res) {
        _this.total = res.total;
        _this.page = res.page;
        _this.blogs = res.data;

        if (res.data && res.data.length > 0) {
          _this.user = res.data[0].user;
        }
      });
    },
    onPageChange: function onPageChange(newPage) {
      this.getUserBlogs(newPage);
      this.$router.push({
        path: "/user/".concat(this.userId),
        query: {
          page: newPage
        }
      });
    },
    spliteDate: function spliteDate(dateStr) {
      var dateObj = typeof dateStr === 'Object' ? dateStr : new Date(dateStr);
      return {
        date: dateObj.getDate(),
        month: dateObj.getMonth() + 1,
        year: dateObj.getFullYear()
      };
    }
  }
};
exports["default"] = _default;