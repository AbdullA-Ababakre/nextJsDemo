module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/signin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/signin.js":
/*!*************************!*\
  !*** ./pages/signin.js ***!
  \*************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SignIn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/bytedance/Desktop/06-onwards-to-a-bigger-project-starting-project/pages/signin.js\";\n\n\n\nfunction SignIn({\n  csrfToken,\n  providers\n}) {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  const {\n    0: email,\n    1: setEmail\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])('');\n  const {\n    0: password,\n    1: setPassword\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])('');\n  const {\n    0: message,\n    1: setMessage\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null);\n\n  const signInUser = async e => {\n    e.preventDefault();\n    let options = {\n      redirect: false,\n      email,\n      password\n    };\n    const res = await Object(next_auth_react__WEBPACK_IMPORTED_MODULE_1__[\"signIn\"])('credentials', options);\n    setMessage(null);\n\n    if (res !== null && res !== void 0 && res.error) {\n      setMessage(res.error);\n    }\n\n    return router.push('/');\n  };\n\n  const signUpUser = async e => {\n    e.preventDefault();\n    const res = await fetch('/api/register', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        email,\n        password\n      })\n    });\n    let data = await res.json();\n\n    if (data.message) {\n      setMessage(data.message);\n    }\n\n    if (data.message == \"Registered successfully\") {\n      let options = {\n        redirect: false,\n        email,\n        password\n      };\n      const res = await Object(next_auth_react__WEBPACK_IMPORTED_MODULE_1__[\"signIn\"])(\"credentials\", options);\n      return router.push(\"/\");\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      action: \"\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        name: \"csrfToken\",\n        type: \"hidden\",\n        defaultValue: csrfToken\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: [\"Email address\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"email\",\n          id: \"email\",\n          name: \"email\",\n          value: email,\n          onChange: e => setEmail(e.target.value)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: [\"Password\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"email\",\n          id: \"password\",\n          name: \"password\",\n          value: password,\n          onChange: e => setPassword(e.target.value)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        style: {\n          color: 'red'\n        },\n        children: message\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: e => signInUser(e),\n        children: \"Sign in with Credentials\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: e => signUpUser(e),\n        children: \"Sign Up\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }, this), Object.values(providers).map(provider => {\n      if (provider.name === 'Email' || provider.name === 'Credentials') {\n        return;\n      }\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: () => Object(next_auth_react__WEBPACK_IMPORTED_MODULE_1__[\"signIn\"])(provider.id),\n          children: [\"Sign in with \", provider.name]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 29\n        }, this)\n      }, provider.name, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 25\n      }, this);\n    })]\n  }, void 0, true);\n}\nasync function getServerSideProps(context) {\n  const {\n    req\n  } = context;\n  const session = await Object(next_auth_react__WEBPACK_IMPORTED_MODULE_1__[\"getSession\"])({\n    req\n  });\n\n  if (session) {\n    // Signed in\n    return {\n      redirect: {\n        destination: \"/\"\n      }\n    };\n  }\n\n  const csrfToken = await Object(next_auth_react__WEBPACK_IMPORTED_MODULE_1__[\"getCsrfToken\"])(context);\n  const providers = await Object(next_auth_react__WEBPACK_IMPORTED_MODULE_1__[\"getProviders\"])();\n  return {\n    props: {\n      csrfToken,\n      providers\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaWduaW4uanM/MGMxZSJdLCJuYW1lcyI6WyJTaWduSW4iLCJjc3JmVG9rZW4iLCJwcm92aWRlcnMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJlbWFpbCIsInNldEVtYWlsIiwidXNlU3RhdGUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJzaWduSW5Vc2VyIiwiZSIsInByZXZlbnREZWZhdWx0Iiwib3B0aW9ucyIsInJlZGlyZWN0IiwicmVzIiwic2lnbkluIiwiZXJyb3IiLCJwdXNoIiwic2lnblVwVXNlciIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImpzb24iLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbG9yIiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwicHJvdmlkZXIiLCJuYW1lIiwiaWQiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicmVxIiwic2Vzc2lvbiIsImdldFNlc3Npb24iLCJkZXN0aW5hdGlvbiIsImdldENzcmZUb2tlbiIsImdldFByb3ZpZGVycyIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsQ0FBZ0I7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWhCLEVBQTBDO0FBQ3JELFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLENBQUMsRUFBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkYsc0RBQVEsQ0FBQyxFQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCSixzREFBUSxDQUFDLElBQUQsQ0FBdEM7O0FB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Z25pbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldENzcmZUb2tlbiwgZ2V0UHJvdmlkZXJzLCBzaWduSW4sIGdldFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduSW4oeyBjc3JmVG9rZW4sIHByb3ZpZGVycyB9KSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICBjb25zdCBzaWduSW5Vc2VyID0gYXN5bmMgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHsgcmVkaXJlY3Q6IGZhbHNlLCBlbWFpbCwgcGFzc3dvcmQgfVxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBzaWduSW4oJ2NyZWRlbnRpYWxzJywgb3B0aW9ucyk7XG5cbiAgICAgICAgc2V0TWVzc2FnZShudWxsKTtcbiAgICAgICAgaWYgKHJlcz8uZXJyb3IpIHtcbiAgICAgICAgICAgIHNldE1lc3NhZ2UocmVzLmVycm9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByb3V0ZXIucHVzaCgnLycpO1xuICAgIH1cblxuXG4gICAgY29uc3Qgc2lnblVwVXNlciA9IGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvcmVnaXN0ZXInLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCwgcGFzc3dvcmQgfSksXG4gICAgICAgIH0pXG4gICAgICAgIGxldCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgICAgICBpZiAoZGF0YS5tZXNzYWdlKSB7XG4gICAgICAgICAgICBzZXRNZXNzYWdlKGRhdGEubWVzc2FnZSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YS5tZXNzYWdlID09IFwiUmVnaXN0ZXJlZCBzdWNjZXNzZnVsbHlcIikge1xuICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSB7IHJlZGlyZWN0OiBmYWxzZSwgZW1haWwsIHBhc3N3b3JkIH1cbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNpZ25JbihcImNyZWRlbnRpYWxzXCIsIG9wdGlvbnMpXG4gICAgICAgICAgICByZXR1cm4gcm91dGVyLnB1c2goXCIvXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHsvKiA8Zm9ybSBtZXRob2Q9XCJwb3N0XCIgYWN0aW9uPVwiL2FwaS9hdXRoL3NpZ25pbi9lbWFpbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiY3NyZlRva2VuXCIgdHlwZT1cImhpZGRlblwiIGRlZmF1bHRWYWx1ZT17Y3NyZlRva2VufSAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgRW1haWwgYWRkcmVzc1xuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TaWduIGluIHdpdGggRW1haWw8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT4gKi99XG5cbiAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiY3NyZlRva2VuXCIgdHlwZT1cImhpZGRlblwiIGRlZmF1bHRWYWx1ZT17Y3NyZlRva2VufSAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgRW1haWwgYWRkcmVzc1xuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9e2UgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICBQYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9e2UgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PnttZXNzYWdlfTwvcD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiBzaWduSW5Vc2VyKGUpfT5TaWduIGluIHdpdGggQ3JlZGVudGlhbHM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiBzaWduVXBVc2VyKGUpfT5TaWduIFVwPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG5cblxuXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhwcm92aWRlcnMpLm1hcCgocHJvdmlkZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3ZpZGVyLm5hbWUgPT09ICdFbWFpbCcgfHwgcHJvdmlkZXIubmFtZSA9PT0gJ0NyZWRlbnRpYWxzJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cHJvdmlkZXIubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduSW4ocHJvdmlkZXIuaWQpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiBpbiB3aXRoIHtwcm92aWRlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICAgIGNvbnN0IHsgcmVxIH0gPSBjb250ZXh0O1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxIH0pXG4gICAgaWYgKHNlc3Npb24pIHtcbiAgICAgICAgLy8gU2lnbmVkIGluXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZWRpcmVjdDogeyBkZXN0aW5hdGlvbjogXCIvXCIgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGNzcmZUb2tlbiA9IGF3YWl0IGdldENzcmZUb2tlbihjb250ZXh0KTtcbiAgICBjb25zdCBwcm92aWRlcnMgPSBhd2FpdCBnZXRQcm92aWRlcnMoKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7IGNzcmZUb2tlbiwgcHJvdmlkZXJzIH1cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/signin.js\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth/react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvcmVhY3RcIj8xMmY5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtYXV0aC9yZWFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aC9yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth/react\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });