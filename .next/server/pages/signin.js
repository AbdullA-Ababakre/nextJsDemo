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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SignIn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/bytedance/Desktop/06-onwards-to-a-bigger-project-starting-project/pages/signin.js\";\n\n\n\nfunction SignIn({\n  csrfToken,\n  providers\n}) {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  const {\n    0: email,\n    1: setEmail\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])('');\n  const {\n    0: password,\n    1: setPassword\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])('');\n  const {\n    0: message,\n    1: setMessage\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null);\n\n  const signInUser = async e => {\n    console.log(\"email\", email);\n    console.log(\"password\", password);\n    e.preventDefault();\n    let options = {\n      redirect: false,\n      email,\n      password\n    };\n    const res = await Object(next_auth_react__WEBPACK_IMPORTED_MODULE_1__[\"signIn\"])('credentials', options);\n    console.log(\"ress----\", res); // setMessage(null);\n    // if (res?.error) {\n    //     setMessage(res.error);\n    // }\n    // return router.push('/');\n  };\n\n  const signUpUser = async e => {\n    e.preventDefault();\n    const res = await fetch('./api/register', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n        'Accept': 'application/json'\n      },\n      body: JSON.stringify({\n        email,\n        password\n      })\n    });\n    let data = await res.json();\n\n    if (data.message) {\n      setMessage(data.message);\n    }\n\n    if (data.message == \"Registered successfully\") {\n      let options = {\n        redirect: false,\n        email,\n        password\n      };\n      const res = await Object(next_auth_react__WEBPACK_IMPORTED_MODULE_1__[\"signIn\"])(\"credentials\", options); // return router.push(\"/\");\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      action: \"\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        name: \"csrfToken\",\n        type: \"hidden\",\n        defaultValue: csrfToken\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: [\"Email address\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"email\",\n          id: \"email\",\n          name: \"email\",\n          value: email,\n          onChange: e => setEmail(e.target.value)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: [\"Password\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"email\",\n          id: \"password\",\n          name: \"password\",\n          value: password,\n          onChange: e => setPassword(e.target.value)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        style: {\n          color: 'red'\n        },\n        children: message\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: e => signInUser(e),\n        children: \"Sign in with Credentials\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: e => signUpUser(e),\n        children: \"Sign Up\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 13\n    }, this), Object.values(providers).map(provider => {\n      if (provider.name === 'Email' || provider.name === 'Credentials') {\n        return;\n      }\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: () => Object(next_auth_react__WEBPACK_IMPORTED_MODULE_1__[\"signIn\"])(provider.id),\n          children: [\"Sign in with \", provider.name]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 29\n        }, this)\n      }, provider.name, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 25\n      }, this);\n    })]\n  }, void 0, true);\n}\nasync function getServerSideProps(context) {\n  const {\n    req\n  } = context;\n  const session = await Object(next_auth_react__WEBPACK_IMPORTED_MODULE_1__[\"getSession\"])({\n    req\n  });\n\n  if (session) {\n    // Signed in\n    return {\n      redirect: {\n        destination: \"/\"\n      }\n    };\n  }\n\n  const csrfToken = await Object(next_auth_react__WEBPACK_IMPORTED_MODULE_1__[\"getCsrfToken\"])(context);\n  const providers = await Object(next_auth_react__WEBPACK_IMPORTED_MODULE_1__[\"getProviders\"])();\n  return {\n    props: {\n      csrfToken,\n      providers\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaWduaW4uanM/MGMxZSJdLCJuYW1lcyI6WyJTaWduSW4iLCJjc3JmVG9rZW4iLCJwcm92aWRlcnMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJlbWFpbCIsInNldEVtYWlsIiwidXNlU3RhdGUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJzaWduSW5Vc2VyIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJwcmV2ZW50RGVmYXVsdCIsIm9wdGlvbnMiLCJyZWRpcmVjdCIsInJlcyIsInNpZ25JbiIsInNpZ25VcFVzZXIiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwidGFyZ2V0IiwidmFsdWUiLCJjb2xvciIsIk9iamVjdCIsInZhbHVlcyIsIm1hcCIsInByb3ZpZGVyIiwibmFtZSIsImlkIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInJlcSIsInNlc3Npb24iLCJnZXRTZXNzaW9uIiwiZGVzdGluYXRpb24iLCJnZXRDc3JmVG9rZW4iLCJnZXRQcm92aWRlcnMiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULENBQWdCO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFoQixFQUEwQztBQUNyRCxRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQyxzREFBUSxDQUFDLEVBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJGLHNEQUFRLENBQUMsRUFBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDRyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3Qkosc0RBQVEsQ0FBQyxJQUFELENBQXRDOztB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dXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldENzcmZUb2tlbiwgZ2V0UHJvdmlkZXJzLCBzaWduSW4sIGdldFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduSW4oeyBjc3JmVG9rZW4sIHByb3ZpZGVycyB9KSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICBjb25zdCBzaWduSW5Vc2VyID0gYXN5bmMgKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJlbWFpbFwiLCBlbWFpbCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFzc3dvcmRcIiwgcGFzc3dvcmQpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBvcHRpb25zID0geyByZWRpcmVjdDogZmFsc2UsIGVtYWlsLCBwYXNzd29yZCB9XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNpZ25JbignY3JlZGVudGlhbHMnLCBvcHRpb25zKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXNzLS0tLVwiLHJlcyk7XG4gICAgICAgIC8vIHNldE1lc3NhZ2UobnVsbCk7XG4gICAgICAgIC8vIGlmIChyZXM/LmVycm9yKSB7XG4gICAgICAgIC8vICAgICBzZXRNZXNzYWdlKHJlcy5lcnJvcik7XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyByZXR1cm4gcm91dGVyLnB1c2goJy8nKTtcbiAgICB9XG5cblxuICAgIGNvbnN0IHNpZ25VcFVzZXIgPSBhc3luYyAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcuL2FwaS9yZWdpc3RlcicsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWwsIHBhc3N3b3JkIH0pLFxuICAgICAgICB9KVxuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICAgICAgaWYgKGRhdGEubWVzc2FnZSkge1xuICAgICAgICAgICAgc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEubWVzc2FnZSA9PSBcIlJlZ2lzdGVyZWQgc3VjY2Vzc2Z1bGx5XCIpIHtcbiAgICAgICAgICAgIGxldCBvcHRpb25zID0geyByZWRpcmVjdDogZmFsc2UsIGVtYWlsLCBwYXNzd29yZCB9XG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBzaWduSW4oXCJjcmVkZW50aWFsc1wiLCBvcHRpb25zKVxuICAgICAgICAgICAgLy8gcmV0dXJuIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7LyogPGZvcm0gbWV0aG9kPVwicG9zdFwiIGFjdGlvbj1cIi9hcGkvYXV0aC9zaWduaW4vZW1haWxcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cImNzcmZUb2tlblwiIHR5cGU9XCJoaWRkZW5cIiBkZWZhdWx0VmFsdWU9e2NzcmZUb2tlbn0gLz5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIEVtYWlsIGFkZHJlc3NcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2lnbiBpbiB3aXRoIEVtYWlsPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+ICovfVxuXG4gICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cImNzcmZUb2tlblwiIHR5cGU9XCJoaWRkZW5cIiBkZWZhdWx0VmFsdWU9e2NzcmZUb2tlbn0gLz5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIEVtYWlsIGFkZHJlc3NcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXtlID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgUGFzc3dvcmRcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXtlID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT57bWVzc2FnZX08L3A+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gc2lnbkluVXNlcihlKX0+U2lnbiBpbiB3aXRoIENyZWRlbnRpYWxzPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gc2lnblVwVXNlcihlKX0+U2lnbiBVcDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuXG5cblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIE9iamVjdC52YWx1ZXMocHJvdmlkZXJzKS5tYXAoKHByb3ZpZGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm92aWRlci5uYW1lID09PSAnRW1haWwnIHx8IHByb3ZpZGVyLm5hbWUgPT09ICdDcmVkZW50aWFscycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Byb3ZpZGVyLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2lnbkluKHByb3ZpZGVyLmlkKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpZ24gaW4gd2l0aCB7cHJvdmlkZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHJlcSB9ID0gY29udGV4dDtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7IHJlcSB9KVxuICAgIGlmIChzZXNzaW9uKSB7XG4gICAgICAgIC8vIFNpZ25lZCBpblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVkaXJlY3Q6IHsgZGVzdGluYXRpb246IFwiL1wiIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBjc3JmVG9rZW4gPSBhd2FpdCBnZXRDc3JmVG9rZW4oY29udGV4dCk7XG4gICAgY29uc3QgcHJvdmlkZXJzID0gYXdhaXQgZ2V0UHJvdmlkZXJzKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczogeyBjc3JmVG9rZW4sIHByb3ZpZGVycyB9XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/signin.js\n");

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