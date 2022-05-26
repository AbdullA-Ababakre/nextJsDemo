webpackHotUpdate_N_E("pages/signin",{

/***/ "./pages/signin.js":
/*!*************************!*\
  !*** ./pages/signin.js ***!
  \*************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SignIn; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_bytedance_Desktop_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_bytedance_Desktop_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_bytedance_Desktop_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_bytedance_Desktop_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/bytedance/Desktop/06-onwards-to-a-bigger-project-starting-project/pages/signin.js\",\n    _s = $RefreshSig$();\n\n\n\n\nvar __N_SSP = true;\nfunction SignIn(_ref) {\n  _s();\n\n  var _this = this;\n\n  var csrfToken = _ref.csrfToken,\n      providers = _ref.providers;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(''),\n      email = _useState[0],\n      setEmail = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(''),\n      password = _useState2[0],\n      setPassword = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(null),\n      message = _useState3[0],\n      setMessage = _useState3[1];\n\n  var signInUser = /*#__PURE__*/function () {\n    var _ref2 = Object(_Users_bytedance_Desktop_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_bytedance_Desktop_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {\n      var options, res;\n      return _Users_bytedance_Desktop_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              console.log(email, password);\n              options = {\n                redirect: false,\n                email: email,\n                password: password\n              };\n              _context.next = 5;\n              return Object(next_auth_react__WEBPACK_IMPORTED_MODULE_3__[\"signIn\"])('credentials', options);\n\n            case 5:\n              res = _context.sent;\n              setMessage(null);\n\n              if (res !== null && res !== void 0 && res.error) {\n                setMessage(res.error);\n              } // return router.push('/');\n\n\n            case 8:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function signInUser(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var signUpUser = /*#__PURE__*/function () {\n    var _ref3 = Object(_Users_bytedance_Desktop_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_bytedance_Desktop_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(e) {\n      var res, data, options, _res;\n\n      return _Users_bytedance_Desktop_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              e.preventDefault();\n              _context2.next = 3;\n              return fetch('./api/register', {\n                method: 'POST',\n                headers: {\n                  'Content-Type': 'application/json',\n                  'Accept': 'application/json'\n                },\n                body: JSON.stringify({\n                  email: email,\n                  password: password\n                })\n              });\n\n            case 3:\n              res = _context2.sent;\n              _context2.next = 6;\n              return res.json();\n\n            case 6:\n              data = _context2.sent;\n\n              if (data.message) {\n                setMessage(data.message);\n              }\n\n              if (!(data.message == \"Registered successfully\")) {\n                _context2.next = 13;\n                break;\n              }\n\n              options = {\n                redirect: false,\n                email: email,\n                password: password\n              };\n              _context2.next = 12;\n              return Object(next_auth_react__WEBPACK_IMPORTED_MODULE_3__[\"signIn\"])(\"credentials\", options);\n\n            case 12:\n              _res = _context2.sent;\n\n            case 13:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function signUpUser(_x2) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      action: \"\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        name: \"csrfToken\",\n        type: \"hidden\",\n        defaultValue: csrfToken\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: [\"Email address\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"email\",\n          id: \"email\",\n          name: \"email\",\n          value: email,\n          onChange: function onChange(e) {\n            return setEmail(e.target.value);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: [\"Password\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"email\",\n          id: \"email\",\n          name: \"email\",\n          value: password,\n          onChange: function onChange(e) {\n            return setPassword(e.target.value);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        style: {\n          color: 'red'\n        },\n        children: message\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick(e) {\n          return signInUser(e);\n        },\n        children: \"Sign in with Credentials\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick(e) {\n          return signUpUser(e);\n        },\n        children: \"Sign Up\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }, this), Object.values(providers).map(function (provider) {\n      if (provider.name === 'Email' || provider.name === 'Credentials') {\n        return;\n      }\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: function onClick() {\n            return Object(next_auth_react__WEBPACK_IMPORTED_MODULE_3__[\"signIn\"])(provider.id);\n          },\n          children: [\"Sign in with \", provider.name]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 29\n        }, _this)\n      }, provider.name, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 25\n      }, _this);\n    })]\n  }, void 0, true);\n}\n\n_s(SignIn, \"/20WMbTYCTzx+g8ZjG2132HsIzU=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = SignIn;\n\nvar _c;\n\n$RefreshReg$(_c, \"SignIn\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbmluLmpzPzBjMWUiXSwibmFtZXMiOlsiU2lnbkluIiwiY3NyZlRva2VuIiwicHJvdmlkZXJzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwic2lnbkluVXNlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJvcHRpb25zIiwicmVkaXJlY3QiLCJzaWduSW4iLCJyZXMiLCJlcnJvciIsInNpZ25VcFVzZXIiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImpzb24iLCJkYXRhIiwidGFyZ2V0IiwidmFsdWUiLCJjb2xvciIsIk9iamVjdCIsInZhbHVlcyIsIm1hcCIsInByb3ZpZGVyIiwibmFtZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVlLFNBQVNBLE1BQVQsT0FBMEM7QUFBQTs7QUFBQTs7QUFBQSxNQUF4QkMsU0FBd0IsUUFBeEJBLFNBQXdCO0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhO0FBQ3JELE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRHFELGtCQUUzQkMsc0RBQVEsQ0FBQyxFQUFELENBRm1CO0FBQUEsTUFFOUNDLEtBRjhDO0FBQUEsTUFFdkNDLFFBRnVDOztBQUFBLG1CQUdyQkYsc0RBQVEsQ0FBQyxFQUFELENBSGE7QUFBQSxNQUc5Q0csUUFIOEM7QUFBQSxNQUdwQ0MsV0FIb0M7O0FBQUEsbUJBSXZCSixzREFBUSxDQUFDLElBQUQsQ0FKZTtBQUFBLE1BSTlDSyxPQUo4QztBQUFBLE1BSXJDQyxVQUpxQzs7QUFNckQsTUFBTUMsVUFBVTtBQUFBLDJXQUFHLGlCQUFPQyxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNmQSxlQUFDLENBQUNDLGNBQUY7QUFDQUMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZVixLQUFaLEVBQWtCRSxRQUFsQjtBQUNJUyxxQkFIVyxHQUdEO0FBQUVDLHdCQUFRLEVBQUUsS0FBWjtBQUFtQloscUJBQUssRUFBTEEsS0FBbkI7QUFBMEJFLHdCQUFRLEVBQVJBO0FBQTFCLGVBSEM7QUFBQTtBQUFBLHFCQUlHVyw4REFBTSxDQUFDLGFBQUQsRUFBZ0JGLE9BQWhCLENBSlQ7O0FBQUE7QUFJVEcsaUJBSlM7QUFLZlQsd0JBQVUsQ0FBQyxJQUFELENBQVY7O0FBQ0Esa0JBQUlTLEdBQUosYUFBSUEsR0FBSixlQUFJQSxHQUFHLENBQUVDLEtBQVQsRUFBZ0I7QUFDWlYsMEJBQVUsQ0FBQ1MsR0FBRyxDQUFDQyxLQUFMLENBQVY7QUFDSCxlQVJjLENBVWY7OztBQVZlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVZULFVBQVU7QUFBQTtBQUFBO0FBQUEsS0FBaEI7O0FBY0EsTUFBTVUsVUFBVTtBQUFBLDJXQUFHLGtCQUFPVCxDQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZkEsZUFBQyxDQUFDQyxjQUFGO0FBRGU7QUFBQSxxQkFFR1MsS0FBSyxDQUFDLGdCQUFELEVBQW1CO0FBQ3RDQyxzQkFBTSxFQUFFLE1BRDhCO0FBRXRDQyx1QkFBTyxFQUFFO0FBQ0wsa0NBQWdCLGtCQURYO0FBRUwsNEJBQVU7QUFGTCxpQkFGNkI7QUFNdENDLG9CQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUV0Qix1QkFBSyxFQUFMQSxLQUFGO0FBQVNFLDBCQUFRLEVBQVJBO0FBQVQsaUJBQWY7QUFOZ0MsZUFBbkIsQ0FGUjs7QUFBQTtBQUVUWSxpQkFGUztBQUFBO0FBQUEscUJBVUVBLEdBQUcsQ0FBQ1MsSUFBSixFQVZGOztBQUFBO0FBVVhDLGtCQVZXOztBQVlmLGtCQUFJQSxJQUFJLENBQUNwQixPQUFULEVBQWtCO0FBQ2RDLDBCQUFVLENBQUNtQixJQUFJLENBQUNwQixPQUFOLENBQVY7QUFDSDs7QUFkYyxvQkFlWG9CLElBQUksQ0FBQ3BCLE9BQUwsSUFBZ0IseUJBZkw7QUFBQTtBQUFBO0FBQUE7O0FBZ0JQTyxxQkFoQk8sR0FnQkc7QUFBRUMsd0JBQVEsRUFBRSxLQUFaO0FBQW1CWixxQkFBSyxFQUFMQSxLQUFuQjtBQUEwQkUsd0JBQVEsRUFBUkE7QUFBMUIsZUFoQkg7QUFBQTtBQUFBLHFCQWlCT1csOERBQU0sQ0FBQyxhQUFELEVBQWdCRixPQUFoQixDQWpCYjs7QUFBQTtBQWlCTEcsa0JBakJLOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVZFLFVBQVU7QUFBQTtBQUFBO0FBQUEsS0FBaEI7O0FBc0JBLHNCQUNJO0FBQUEsNEJBVUk7QUFBTSxZQUFNLEVBQUMsRUFBYjtBQUFBLDhCQUNJO0FBQU8sWUFBSSxFQUFDLFdBQVo7QUFBd0IsWUFBSSxFQUFDLFFBQTdCO0FBQXNDLG9CQUFZLEVBQUVyQjtBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFBLGlEQUVJO0FBQU8sY0FBSSxFQUFDLE9BQVo7QUFBb0IsWUFBRSxFQUFDLE9BQXZCO0FBQStCLGNBQUksRUFBQyxPQUFwQztBQUE0QyxlQUFLLEVBQUVLLEtBQW5EO0FBQTBELGtCQUFRLEVBQUUsa0JBQUFPLENBQUM7QUFBQSxtQkFBSU4sUUFBUSxDQUFDTSxDQUFDLENBQUNrQixNQUFGLENBQVNDLEtBQVYsQ0FBWjtBQUFBO0FBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFNSTtBQUFBLDRDQUVJO0FBQU8sY0FBSSxFQUFDLE9BQVo7QUFBb0IsWUFBRSxFQUFDLE9BQXZCO0FBQStCLGNBQUksRUFBQyxPQUFwQztBQUE0QyxlQUFLLEVBQUV4QixRQUFuRDtBQUE2RCxrQkFBUSxFQUFFLGtCQUFBSyxDQUFDO0FBQUEsbUJBQUlKLFdBQVcsQ0FBQ0ksQ0FBQyxDQUFDa0IsTUFBRixDQUFTQyxLQUFWLENBQWY7QUFBQTtBQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5KLGVBVUk7QUFBRyxhQUFLLEVBQUU7QUFBRUMsZUFBSyxFQUFFO0FBQVQsU0FBVjtBQUFBLGtCQUE2QnZCO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWSixlQVdJO0FBQVEsZUFBTyxFQUFFLGlCQUFDRyxDQUFEO0FBQUEsaUJBQU9ELFVBQVUsQ0FBQ0MsQ0FBRCxDQUFqQjtBQUFBLFNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEosZUFZSTtBQUFRLGVBQU8sRUFBRSxpQkFBQ0EsQ0FBRDtBQUFBLGlCQUFPUyxVQUFVLENBQUNULENBQUQsQ0FBakI7QUFBQSxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZKLEVBNEJRcUIsTUFBTSxDQUFDQyxNQUFQLENBQWNqQyxTQUFkLEVBQXlCa0MsR0FBekIsQ0FBNkIsVUFBQ0MsUUFBRCxFQUFjO0FBQ3ZDLFVBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxLQUFrQixPQUFsQixJQUE2QkQsUUFBUSxDQUFDQyxJQUFULEtBQWtCLGFBQW5ELEVBQWtFO0FBQzlEO0FBQ0g7O0FBQ0QsMEJBQ0k7QUFBQSwrQkFDSTtBQUFRLGlCQUFPLEVBQUU7QUFBQSxtQkFBTW5CLDhEQUFNLENBQUNrQixRQUFRLENBQUNFLEVBQVYsQ0FBWjtBQUFBLFdBQWpCO0FBQUEsc0NBQ2tCRixRQUFRLENBQUNDLElBRDNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLFNBQVVELFFBQVEsQ0FBQ0MsSUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBT0gsS0FYRCxDQTVCUjtBQUFBLGtCQURKO0FBNENIOztHQXRGdUJ0QyxNO1VBQ0xJLHFEOzs7S0FES0osTSIsImZpbGUiOiIuL3BhZ2VzL3NpZ25pbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldENzcmZUb2tlbiwgZ2V0UHJvdmlkZXJzLCBzaWduSW4sIGdldFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduSW4oeyBjc3JmVG9rZW4sIHByb3ZpZGVycyB9KSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICBjb25zdCBzaWduSW5Vc2VyID0gYXN5bmMgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhlbWFpbCxwYXNzd29yZCk7XG4gICAgICAgIGxldCBvcHRpb25zID0geyByZWRpcmVjdDogZmFsc2UsIGVtYWlsLCBwYXNzd29yZCB9XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNpZ25JbignY3JlZGVudGlhbHMnLCBvcHRpb25zKTtcbiAgICAgICAgc2V0TWVzc2FnZShudWxsKTtcbiAgICAgICAgaWYgKHJlcz8uZXJyb3IpIHtcbiAgICAgICAgICAgIHNldE1lc3NhZ2UocmVzLmVycm9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJldHVybiByb3V0ZXIucHVzaCgnLycpO1xuICAgIH1cblxuXG4gICAgY29uc3Qgc2lnblVwVXNlciA9IGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy4vYXBpL3JlZ2lzdGVyJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCwgcGFzc3dvcmQgfSksXG4gICAgICAgIH0pXG4gICAgICAgIGxldCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgICAgICBpZiAoZGF0YS5tZXNzYWdlKSB7XG4gICAgICAgICAgICBzZXRNZXNzYWdlKGRhdGEubWVzc2FnZSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YS5tZXNzYWdlID09IFwiUmVnaXN0ZXJlZCBzdWNjZXNzZnVsbHlcIikge1xuICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSB7IHJlZGlyZWN0OiBmYWxzZSwgZW1haWwsIHBhc3N3b3JkIH1cbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNpZ25JbihcImNyZWRlbnRpYWxzXCIsIG9wdGlvbnMpXG4gICAgICAgICAgICAvLyByZXR1cm4gcm91dGVyLnB1c2goXCIvXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHsvKiA8Zm9ybSBtZXRob2Q9XCJwb3N0XCIgYWN0aW9uPVwiL2FwaS9hdXRoL3NpZ25pbi9lbWFpbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiY3NyZlRva2VuXCIgdHlwZT1cImhpZGRlblwiIGRlZmF1bHRWYWx1ZT17Y3NyZlRva2VufSAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgRW1haWwgYWRkcmVzc1xuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TaWduIGluIHdpdGggRW1haWw8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT4gKi99XG5cbiAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiY3NyZlRva2VuXCIgdHlwZT1cImhpZGRlblwiIGRlZmF1bHRWYWx1ZT17Y3NyZlRva2VufSAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgRW1haWwgYWRkcmVzc1xuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9e2UgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICBQYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9e2UgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PnttZXNzYWdlfTwvcD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiBzaWduSW5Vc2VyKGUpfT5TaWduIGluIHdpdGggQ3JlZGVudGlhbHM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiBzaWduVXBVc2VyKGUpfT5TaWduIFVwPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG5cblxuXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhwcm92aWRlcnMpLm1hcCgocHJvdmlkZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3ZpZGVyLm5hbWUgPT09ICdFbWFpbCcgfHwgcHJvdmlkZXIubmFtZSA9PT0gJ0NyZWRlbnRpYWxzJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cHJvdmlkZXIubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduSW4ocHJvdmlkZXIuaWQpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiBpbiB3aXRoIHtwcm92aWRlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICAgIGNvbnN0IHsgcmVxIH0gPSBjb250ZXh0O1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxIH0pXG4gICAgaWYgKHNlc3Npb24pIHtcbiAgICAgICAgLy8gU2lnbmVkIGluXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZWRpcmVjdDogeyBkZXN0aW5hdGlvbjogXCIvXCIgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGNzcmZUb2tlbiA9IGF3YWl0IGdldENzcmZUb2tlbihjb250ZXh0KTtcbiAgICBjb25zdCBwcm92aWRlcnMgPSBhd2FpdCBnZXRQcm92aWRlcnMoKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7IGNzcmZUb2tlbiwgcHJvdmlkZXJzIH1cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/signin.js\n");

/***/ })

})