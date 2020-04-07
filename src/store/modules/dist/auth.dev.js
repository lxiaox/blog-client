"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _auth = _interopRequireDefault(require("@/api/auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var state = {
  user: null,
  isLogin: false
};
var getters = {
  user: function user(state) {
    return state.user;
  },
  isLogin: function isLogin(state) {
    return state.isLogin;
  }
};
var mutations = {
  setUser: function setUser(state, payload) {
    state.user = payload.user;
  },
  setIsLogin: function setIsLogin(state, payload) {
    state.isLogin = payload.isLogin;
  }
};
var actions = {
  login: function login(_ref, _ref2) {
    var commit, username, password, res;
    return regeneratorRuntime.async(function login$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            commit = _ref.commit;
            username = _ref2.username, password = _ref2.password;
            _context.next = 4;
            return regeneratorRuntime.awrap(_auth["default"].login({
              username: username,
              password: password
            }));

          case 4:
            res = _context.sent;
            commit('setUser', {
              user: res.data
            });
            commit('setIsLogin', {
              isLogin: true
            });
            return _context.abrupt("return", res.data);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  logout: function logout(_ref3) {
    var commit;
    return regeneratorRuntime.async(function logout$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            commit = _ref3.commit;
            _context2.next = 3;
            return regeneratorRuntime.awrap(_auth["default"].logout());

          case 3:
            commit('setUser', {
              user: null
            });
            commit('setIsLogin', {
              isLogin: false
            });

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    });
  },
  register: function register(_ref4, _ref5) {
    var commit, username, password, res;
    return regeneratorRuntime.async(function register$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            commit = _ref4.commit;
            username = _ref5.username, password = _ref5.password;
            _context3.next = 4;
            return regeneratorRuntime.awrap(_auth["default"].register({
              username: username,
              password: password
            }));

          case 4:
            res = _context3.sent;
            return _context3.abrupt("return", res.data);

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    });
  },
  checkLogin: function checkLogin(_ref6) {
    var commit, state, res;
    return regeneratorRuntime.async(function checkLogin$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            commit = _ref6.commit, state = _ref6.state;

            if (!state.isLogin) {
              _context4.next = 3;
              break;
            }

            return _context4.abrupt("return", true);

          case 3:
            _context4.next = 5;
            return regeneratorRuntime.awrap(_auth["default"].getInfo());

          case 5:
            res = _context4.sent;
            commit('setIsLogin', {
              isLogin: res.isLogin
            });

            if (res.isLogin) {
              _context4.next = 9;
              break;
            }

            return _context4.abrupt("return", false);

          case 9:
            commit('setUser', {
              user: res.data
            });
            return _context4.abrupt("return", true);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    });
  }
};
var _default = {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
};
exports["default"] = _default;