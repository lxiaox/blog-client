"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _store = _interopRequireDefault(require("../store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_vue["default"].use(_vueRouter["default"]);

var router = new _vueRouter["default"]({
  routes: [{
    path: '/',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/pages/Index/template.vue'));
      });
    }
  }, {
    path: '/my',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/pages/my/template.vue'));
      });
    },
    meta: {
      requireAuth: true
    }
  }, {
    path: '/login',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/pages/login/template.vue'));
      });
    }
  }, {
    path: '/register',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/pages/register/template.vue'));
      });
    }
  }, {
    path: '/create',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/pages/create/template.vue'));
      });
    },
    meta: {
      requireAuth: true
    }
  }, {
    path: '/edit/:blogId',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/pages/edit/template.vue'));
      });
    },
    meta: {
      requireAuth: true
    }
  }, {
    path: '/user/:userId',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/pages/user/template.vue'));
      });
    }
  }, {
    path: '/detail/:blogId',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/pages/detail/template.vue'));
      });
    }
  }]
});
window.store = _store["default"];
router.beforeEach(function (to, from, next) {
  if (to.matched.some(function (i) {
    return i.meta.requireAuth;
  })) {
    _store["default"].dispatch('checkLogin').then(function (isLogin) {
      if (!isLogin) {
        next({
          path: '/login',
          query: {
            redirect: to.fullPath
          }
        });
      } else {
        next();
      }
    });
  } else {
    next();
  }
});
var _default = router;
exports["default"] = _default;