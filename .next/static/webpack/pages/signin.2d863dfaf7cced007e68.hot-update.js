webpackHotUpdate_N_E("pages/signin",{

/***/ "./pages/signin.js":
/*!*************************!*\
  !*** ./pages/signin.js ***!
  \*************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SignIn; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_bytedance_Desktop_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_bytedance_Desktop_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_bytedance_Desktop_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_bytedance_Desktop_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/bytedance/Desktop/06-onwards-to-a-bigger-project-starting-project/pages/signin.js\",\n    _s = $RefreshSig$();\n\n\n\n\nvar __N_SSP = true;\nfunction SignIn(_ref) {\n  _s();\n\n  var _this = this;\n\n  var csrfToken = _ref.csrfToken,\n      providers = _ref.providers;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(''),\n      email = _useState[0],\n      setEmail = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(''),\n      password = _useState2[0],\n      setPassword = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(null),\n      message = _useState3[0],\n      setMessage = _useState3[1];\n\n  var signInUser = /*#__PURE__*/function () {\n    var _ref2 = Object(_Users_bytedance_Desktop_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_bytedance_Desktop_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {\n      var options, res;\n      return _Users_bytedance_Desktop_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              console.log(\"email\", email);\n              console.log(\"password\", password);\n              e.preventDefault();\n              options = {\n                redirect: false,\n                email: email,\n                password: password\n              };\n              _context.next = 6;\n              return Object(next_auth_react__WEBPACK_IMPORTED_MODULE_3__[\"signIn\"])('credentials', options);\n\n            case 6:\n              res = _context.sent;\n              console.log(\"ress----\", res); // setMessage(null);\n              // if (res?.error) {\n              //     setMessage(res.error);\n              // }\n              // return router.push('/');\n\n            case 8:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function signInUser(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var signUpUser = /*#__PURE__*/function () {\n    var _ref3 = Object(_Users_bytedance_Desktop_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_bytedance_Desktop_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(e) {\n      var res, data, options, _res;\n\n      return _Users_bytedance_Desktop_06_onwards_to_a_bigger_project_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              e.preventDefault();\n              _context2.next = 3;\n              return fetch('./api/register', {\n                method: 'POST',\n                headers: {\n                  'Content-Type': 'application/json',\n                  'Accept': 'application/json'\n                },\n                body: JSON.stringify({\n                  email: email,\n                  password: password\n                })\n              });\n\n            case 3:\n              res = _context2.sent;\n              _context2.next = 6;\n              return res.json();\n\n            case 6:\n              data = _context2.sent;\n\n              if (data.message) {\n                setMessage(data.message);\n              }\n\n              if (!(data.message == \"Registered successfully\")) {\n                _context2.next = 13;\n                break;\n              }\n\n              options = {\n                redirect: false,\n                email: email,\n                password: password\n              };\n              _context2.next = 12;\n              return Object(next_auth_react__WEBPACK_IMPORTED_MODULE_3__[\"signIn\"])(\"credentials\", options);\n\n            case 12:\n              _res = _context2.sent;\n\n            case 13:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function signUpUser(_x2) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      action: \"\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        name: \"csrfToken\",\n        type: \"hidden\",\n        defaultValue: csrfToken\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: [\"Email address\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"email\",\n          id: \"email\",\n          name: \"email\",\n          value: email,\n          onChange: function onChange(e) {\n            return setEmail(e.target.value);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: [\"Password\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"email\",\n          id: \"password\",\n          name: \"password\",\n          value: password,\n          onChange: function onChange(e) {\n            return setPassword(e.target.value);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        style: {\n          color: 'red'\n        },\n        children: message\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick(e) {\n          return signInUser(e);\n        },\n        children: \"Sign in with Credentials\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick(e) {\n          return signUpUser(e);\n        },\n        children: \"Sign Up\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 13\n    }, this), Object.values(providers).map(function (provider) {\n      if (provider.name === 'Email' || provider.name === 'Credentials') {\n        return;\n      }\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: function onClick() {\n            return Object(next_auth_react__WEBPACK_IMPORTED_MODULE_3__[\"signIn\"])(provider.id);\n          },\n          children: [\"Sign in with \", provider.name]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 29\n        }, _this)\n      }, provider.name, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 25\n      }, _this);\n    })]\n  }, void 0, true);\n}\n\n_s(SignIn, \"/20WMbTYCTzx+g8ZjG2132HsIzU=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = SignIn;\n\nvar _c;\n\n$RefreshReg$(_c, \"SignIn\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbmluLmpzPzBjMWUiXSwibmFtZXMiOlsiU2lnbkluIiwiY3NyZlRva2VuIiwicHJvdmlkZXJzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwic2lnbkluVXNlciIsImUiLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJvcHRpb25zIiwicmVkaXJlY3QiLCJzaWduSW4iLCJyZXMiLCJzaWduVXBVc2VyIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJqc29uIiwiZGF0YSIsInRhcmdldCIsInZhbHVlIiwiY29sb3IiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJwcm92aWRlciIsIm5hbWUiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTQSxNQUFULE9BQTBDO0FBQUE7O0FBQUE7O0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTtBQUNyRCxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQURxRCxrQkFFM0JDLHNEQUFRLENBQUMsRUFBRCxDQUZtQjtBQUFBLE1BRTlDQyxLQUY4QztBQUFBLE1BRXZDQyxRQUZ1Qzs7QUFBQSxtQkFHckJGLHNEQUFRLENBQUMsRUFBRCxDQUhhO0FBQUEsTUFHOUNHLFFBSDhDO0FBQUEsTUFHcENDLFdBSG9DOztBQUFBLG1CQUl2Qkosc0RBQVEsQ0FBQyxJQUFELENBSmU7QUFBQSxNQUk5Q0ssT0FKOEM7QUFBQSxNQUlyQ0MsVUFKcUM7O0FBTXJELE1BQU1DLFVBQVU7QUFBQSwyV0FBRyxpQkFBT0MsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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bnRlbnQiOlsiaW1wb3J0IHsgZ2V0Q3NyZlRva2VuLCBnZXRQcm92aWRlcnMsIHNpZ25JbiwgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25Jbih7IGNzcmZUb2tlbiwgcHJvdmlkZXJzIH0pIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIGNvbnN0IHNpZ25JblVzZXIgPSBhc3luYyAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVtYWlsXCIsIGVtYWlsKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJwYXNzd29yZFwiLCBwYXNzd29yZCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7IHJlZGlyZWN0OiBmYWxzZSwgZW1haWwsIHBhc3N3b3JkIH1cbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgc2lnbkluKCdjcmVkZW50aWFscycsIG9wdGlvbnMpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3MtLS0tXCIscmVzKTtcbiAgICAgICAgLy8gc2V0TWVzc2FnZShudWxsKTtcbiAgICAgICAgLy8gaWYgKHJlcz8uZXJyb3IpIHtcbiAgICAgICAgLy8gICAgIHNldE1lc3NhZ2UocmVzLmVycm9yKTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIHJldHVybiByb3V0ZXIucHVzaCgnLycpO1xuICAgIH1cblxuXG4gICAgY29uc3Qgc2lnblVwVXNlciA9IGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy4vYXBpL3JlZ2lzdGVyJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCwgcGFzc3dvcmQgfSksXG4gICAgICAgIH0pXG4gICAgICAgIGxldCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgICAgICBpZiAoZGF0YS5tZXNzYWdlKSB7XG4gICAgICAgICAgICBzZXRNZXNzYWdlKGRhdGEubWVzc2FnZSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YS5tZXNzYWdlID09IFwiUmVnaXN0ZXJlZCBzdWNjZXNzZnVsbHlcIikge1xuICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSB7IHJlZGlyZWN0OiBmYWxzZSwgZW1haWwsIHBhc3N3b3JkIH1cbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNpZ25JbihcImNyZWRlbnRpYWxzXCIsIG9wdGlvbnMpXG4gICAgICAgICAgICAvLyByZXR1cm4gcm91dGVyLnB1c2goXCIvXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHsvKiA8Zm9ybSBtZXRob2Q9XCJwb3N0XCIgYWN0aW9uPVwiL2FwaS9hdXRoL3NpZ25pbi9lbWFpbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiY3NyZlRva2VuXCIgdHlwZT1cImhpZGRlblwiIGRlZmF1bHRWYWx1ZT17Y3NyZlRva2VufSAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgRW1haWwgYWRkcmVzc1xuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TaWduIGluIHdpdGggRW1haWw8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT4gKi99XG5cbiAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiY3NyZlRva2VuXCIgdHlwZT1cImhpZGRlblwiIGRlZmF1bHRWYWx1ZT17Y3NyZlRva2VufSAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgRW1haWwgYWRkcmVzc1xuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9e2UgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICBQYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9e2UgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PnttZXNzYWdlfTwvcD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiBzaWduSW5Vc2VyKGUpfT5TaWduIGluIHdpdGggQ3JlZGVudGlhbHM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiBzaWduVXBVc2VyKGUpfT5TaWduIFVwPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG5cblxuXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhwcm92aWRlcnMpLm1hcCgocHJvdmlkZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3ZpZGVyLm5hbWUgPT09ICdFbWFpbCcgfHwgcHJvdmlkZXIubmFtZSA9PT0gJ0NyZWRlbnRpYWxzJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cHJvdmlkZXIubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduSW4ocHJvdmlkZXIuaWQpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiBpbiB3aXRoIHtwcm92aWRlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICAgIGNvbnN0IHsgcmVxIH0gPSBjb250ZXh0O1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxIH0pXG4gICAgaWYgKHNlc3Npb24pIHtcbiAgICAgICAgLy8gU2lnbmVkIGluXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZWRpcmVjdDogeyBkZXN0aW5hdGlvbjogXCIvXCIgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGNzcmZUb2tlbiA9IGF3YWl0IGdldENzcmZUb2tlbihjb250ZXh0KTtcbiAgICBjb25zdCBwcm92aWRlcnMgPSBhd2FpdCBnZXRQcm92aWRlcnMoKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7IGNzcmZUb2tlbiwgcHJvdmlkZXJzIH1cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/signin.js\n");

/***/ })

})