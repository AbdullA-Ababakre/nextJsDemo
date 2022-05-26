module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/auth/[...nextauth].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_auth_providers_email__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/email */ \"next-auth/providers/email\");\n/* harmony import */ var next_auth_providers_email__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_email__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/mongodb-adapter */ \"@next-auth/mongodb-adapter\");\n/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/mongodb */ \"./pages/api/auth/lib/mongodb.js\");\n/* harmony import */ var _lib_connectDB__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/connectDB */ \"./pages/api/auth/lib/connectDB.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/userModel */ \"./pages/models/userModel.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nObject(_lib_connectDB__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n/* harmony default export */ __webpack_exports__[\"default\"] = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()({\n  // Configure one or more authentication providers\n  providers: [next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_5___default()({\n    name: \"Credentials\",\n    credentials: {\n      username: {\n        label: \"Username\",\n        type: \"text\",\n        placeholder: \"jsmith\"\n      },\n      password: {\n        label: \"Password\",\n        type: \"password\"\n      }\n    },\n\n    async authorize(credentials, req) {\n      const email = credentials.email;\n      const password = credentials.password;\n      const user = await _models_userModel__WEBPACK_IMPORTED_MODULE_6__[\"default\"].findOne({\n        email\n      });\n\n      if (!user) {\n        throw new Error(\"You have'nt registered yet\");\n      }\n\n      if (user) {\n        return signInUser({\n          password,\n          user\n        });\n      }\n    }\n\n  })],\n  pages: {\n    signIn: '/signin'\n  },\n  secret: 'secret',\n  database: process.env.MONGODB_URI\n}));\n\nconst signInUser = async ({\n  password,\n  user\n}) => {\n  if (!user.password) {\n    throw new Error(\"Please enter password\");\n  }\n\n  const isMatch = await bcrypt__WEBPACK_IMPORTED_MODULE_7___default.a.compare(password, user.password);\n\n  if (!isMatch) {\n    throw new Error(\"Password is incorrect\");\n  }\n\n  return user;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzk5MDkiXSwibmFtZXMiOlsiY29ubmVjdERCIiwiTmV4dEF1dGgiLCJwcm92aWRlcnMiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwibmFtZSIsImNyZWRlbnRpYWxzIiwidXNlcm5hbWUiLCJsYWJlbCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwicmVxIiwiZW1haWwiLCJ1c2VyIiwiVXNlcnMiLCJmaW5kT25lIiwiRXJyb3IiLCJzaWduSW5Vc2VyIiwicGFnZXMiLCJzaWduSW4iLCJzZWNyZXQiLCJkYXRhYmFzZSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsImlzTWF0Y2giLCJiY3J5cHQiLCJjb21wYXJlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSw4REFBUztBQUVNQywrR0FBUSxDQUFDO0FBQ3BCO0FBQ0FDLFdBQVMsRUFBRSxDQUNQQyxzRUFBbUIsQ0FBQztBQUNoQkMsUUFBSSxFQUFFLGFBRFU7QUFFaEJDLGVBQVcsRUFBRTtBQUNUQyxjQUFRLEVBQUU7QUFBRUMsYUFBSyxFQUFFLFVBQVQ7QUFBcUJDLFlBQUksRUFBRSxNQUEzQjtBQUFtQ0MsbUJBQVcsRUFBRTtBQUFoRCxPQUREO0FBRVRDLGNBQVEsRUFBRTtBQUFFSCxhQUFLLEVBQUUsVUFBVDtBQUFxQkMsWUFBSSxFQUFFO0FBQTNCO0FBRkQsS0FGRzs7QUFNaEIsVUFBTUcsU0FBTixDQUFnQk4sV0FBaEIsRUFBNkJPLEdBQTdCLEVBQWtDO0FBQzlCLFlBQU1DLEtBQUssR0FBR1IsV0FBVyxDQUFDUSxLQUExQjtBQUNBLFlBQU1ILFFBQVEsR0FBR0wsV0FBVyxDQUFDSyxRQUE3QjtBQUNBLFlBQU1JLElBQUksR0FBRyxNQUFNQyx5REFBSyxDQUFDQyxPQUFOLENBQWM7QUFBRUg7QUFBRixPQUFkLENBQW5COztBQUNBLFVBQUksQ0FBQ0MsSUFBTCxFQUFXO0FBQ1AsY0FBTSxJQUFJRyxLQUFKLENBQVUsNEJBQVYsQ0FBTjtBQUNIOztBQUVELFVBQUlILElBQUosRUFBVTtBQUNOLGVBQU9JLFVBQVUsQ0FBQztBQUFFUixrQkFBRjtBQUFZSTtBQUFaLFNBQUQsQ0FBakI7QUFDSDtBQUNKOztBQWpCZSxHQUFELENBRFosQ0FGUztBQXVCcEJLLE9BQUssRUFBRTtBQUNIQyxVQUFNLEVBQUU7QUFETCxHQXZCYTtBQTBCcEJDLFFBQU0sRUFBRSxRQTFCWTtBQTJCcEJDLFVBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDO0FBM0JGLENBQUQsQ0FBdkI7O0FBK0JBLE1BQU1QLFVBQVUsR0FBRyxPQUFPO0FBQUVSLFVBQUY7QUFBWUk7QUFBWixDQUFQLEtBQThCO0FBRTdDLE1BQUksQ0FBQ0EsSUFBSSxDQUFDSixRQUFWLEVBQW9CO0FBQ2hCLFVBQU0sSUFBSU8sS0FBSixDQUFVLHVCQUFWLENBQU47QUFDSDs7QUFFRCxRQUFNUyxPQUFPLEdBQUcsTUFBTUMsNkNBQU0sQ0FBQ0MsT0FBUCxDQUFlbEIsUUFBZixFQUF5QkksSUFBSSxDQUFDSixRQUE5QixDQUF0Qjs7QUFFQSxNQUFJLENBQUNnQixPQUFMLEVBQWM7QUFDVixVQUFNLElBQUlULEtBQUosQ0FBVSx1QkFBVixDQUFOO0FBQ0g7O0FBQ0QsU0FBT0gsSUFBUDtBQUNILENBWkQiLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVtYWlsUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZW1haWxcIjtcbmltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCJcbmltcG9ydCB7IE1vbmdvREJBZGFwdGVyIH0gZnJvbSBcIkBuZXh0LWF1dGgvbW9uZ29kYi1hZGFwdGVyXCI7XG5pbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tIFwiLi9saWIvbW9uZ29kYlwiO1xuaW1wb3J0IGNvbm5lY3REQiBmcm9tIFwiLi9saWIvY29ubmVjdERCXCI7XG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xuaW1wb3J0IFVzZXJzIGZyb20gJy4uLy4uL21vZGVscy91c2VyTW9kZWwnO1xuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHQnO1xuXG5jb25uZWN0REIoKTtcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICAgIC8vIENvbmZpZ3VyZSBvbmUgb3IgbW9yZSBhdXRoZW50aWNhdGlvbiBwcm92aWRlcnNcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICAgICAgICBuYW1lOiBcIkNyZWRlbnRpYWxzXCIsXG4gICAgICAgICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB7IGxhYmVsOiBcIlVzZXJuYW1lXCIsIHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJqc21pdGhcIiB9LFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiBcIlBhc3N3b3JkXCIsIHR5cGU6IFwicGFzc3dvcmRcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzLCByZXEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbWFpbCA9IGNyZWRlbnRpYWxzLmVtYWlsO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhc3N3b3JkID0gY3JlZGVudGlhbHMucGFzc3dvcmQ7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXJzLmZpbmRPbmUoeyBlbWFpbCB9KTtcbiAgICAgICAgICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IGhhdmUnbnQgcmVnaXN0ZXJlZCB5ZXRcIik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNpZ25JblVzZXIoeyBwYXNzd29yZCwgdXNlciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgXSxcbiAgICBwYWdlczoge1xuICAgICAgICBzaWduSW46ICcvc2lnbmluJyxcbiAgICB9LFxuICAgIHNlY3JldDogJ3NlY3JldCcsXG4gICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJXG59KVxuXG5cbmNvbnN0IHNpZ25JblVzZXIgPSBhc3luYyAoeyBwYXNzd29yZCwgdXNlciB9KSA9PiB7XG5cbiAgICBpZiAoIXVzZXIucGFzc3dvcmQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIGVudGVyIHBhc3N3b3JkXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGlzTWF0Y2ggPSBhd2FpdCBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgdXNlci5wYXNzd29yZCk7XG5cbiAgICBpZiAoIWlzTWF0Y2gpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGFzc3dvcmQgaXMgaW5jb3JyZWN0XCIpO1xuICAgIH1cbiAgICByZXR1cm4gdXNlcjtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "./pages/api/auth/lib/connectDB.js":
/*!*****************************************!*\
  !*** ./pages/api/auth/lib/connectDB.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst connectDB = () => {\n  if (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection.readyState) {\n    console.log(\"Already connected\");\n    return;\n  }\n\n  mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(process.env.MONGODB_URI, {}, err => {\n    if (err) {\n      throw err;\n    }\n\n    console.log(\"Connected successfully\");\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (connectDB);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9saWIvY29ubmVjdERCLmpzPzBmMzYiXSwibmFtZXMiOlsiY29ubmVjdERCIiwibW9uZ29vc2UiLCJjb25uZWN0aW9uIiwicmVhZHlTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiZXJyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQSxNQUFNQSxTQUFTLEdBQUcsTUFBTTtBQUNwQixNQUFJQywrQ0FBUSxDQUFDQyxVQUFULENBQW9CQyxVQUF4QixFQUFvQztBQUNoQ0MsV0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVo7QUFDQTtBQUNIOztBQUVESixpREFBUSxDQUFDSyxPQUFULENBQWlCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsV0FBN0IsRUFBMEMsRUFBMUMsRUFBOENDLEdBQUcsSUFBSTtBQUNqRCxRQUFJQSxHQUFKLEVBQVM7QUFDTCxZQUFNQSxHQUFOO0FBQ0g7O0FBQ0ROLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHdCQUFaO0FBQ0gsR0FMRDtBQU1ILENBWkQ7O0FBY2VMLHdFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2F1dGgvbGliL2Nvbm5lY3REQi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmNvbnN0IGNvbm5lY3REQiA9ICgpID0+IHtcbiAgICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbi5yZWFkeVN0YXRlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQWxyZWFkeSBjb25uZWN0ZWRcIik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJLCB7fSwgZXJyID0+IHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkIHN1Y2Nlc3NmdWxseVwiKTtcbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0REI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/auth/lib/connectDB.js\n");

/***/ }),

/***/ "./pages/api/auth/lib/mongodb.js":
/*!***************************************!*\
  !*** ./pages/api/auth/lib/mongodb.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb\n\nconst uri = process.env.MONGODB_URI;\nconst options = {\n  useUnifiedTopology: true,\n  useNewUrlParser: true\n};\nlet client;\nlet clientPromise;\n\nif (!process.env.MONGODB_URI) {\n  throw new Error(\"Please add your Mongo URI to .env.local\");\n}\n\nif (true) {\n  // In development mode, use a global variable so that the value\n  // is preserved across module reloads caused by HMR (Hot Module Replacement).\n  if (!global._mongoClientPromise) {\n    client = new mongodb__WEBPACK_IMPORTED_MODULE_0__[\"MongoClient\"](uri, options);\n    global._mongoClientPromise = client.connect();\n  }\n\n  clientPromise = global._mongoClientPromise;\n} else {} // Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (clientPromise);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9saWIvbW9uZ29kYi5qcz9lOGZmIl0sIm5hbWVzIjpbInVyaSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsIm9wdGlvbnMiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ1c2VOZXdVcmxQYXJzZXIiLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiRXJyb3IiLCJnbG9iYWwiLCJfbW9uZ29DbGllbnRQcm9taXNlIiwiTW9uZ29DbGllbnQiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0EsTUFBTUEsR0FBRyxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsV0FBeEI7QUFDQSxNQUFNQyxPQUFPLEdBQUc7QUFDWkMsb0JBQWtCLEVBQUUsSUFEUjtBQUVaQyxpQkFBZSxFQUFFO0FBRkwsQ0FBaEI7QUFLQSxJQUFJQyxNQUFKO0FBQ0EsSUFBSUMsYUFBSjs7QUFFQSxJQUFJLENBQUNQLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxXQUFqQixFQUE4QjtBQUMxQixRQUFNLElBQUlNLEtBQUosQ0FBVSx5Q0FBVixDQUFOO0FBQ0g7O0FBRUQsVUFBNEM7QUFDeEM7QUFDQTtBQUNBLE1BQUksQ0FBQ0MsTUFBTSxDQUFDQyxtQkFBWixFQUFpQztBQUM3QkosVUFBTSxHQUFHLElBQUlLLG1EQUFKLENBQWdCWixHQUFoQixFQUFxQkksT0FBckIsQ0FBVDtBQUNBTSxVQUFNLENBQUNDLG1CQUFQLEdBQTZCSixNQUFNLENBQUNNLE9BQVAsRUFBN0I7QUFDSDs7QUFDREwsZUFBYSxHQUFHRSxNQUFNLENBQUNDLG1CQUF2QjtBQUNILENBUkQsTUFRTyxFLENBTVA7QUFDQTs7O0FBQ2VILDRFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2F1dGgvbGliL21vbmdvZGIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGFwcHJvYWNoIGlzIHRha2VuIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL3RyZWUvY2FuYXJ5L2V4YW1wbGVzL3dpdGgtbW9uZ29kYlxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiXG5cblxuY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUklcbmNvbnN0IG9wdGlvbnMgPSB7XG4gICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbn1cblxubGV0IGNsaWVudFxubGV0IGNsaWVudFByb21pc2VcblxuaWYgKCFwcm9jZXNzLmVudi5NT05HT0RCX1VSSSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBhZGQgeW91ciBNb25nbyBVUkkgdG8gLmVudi5sb2NhbFwiKVxufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgIC8vIEluIGRldmVsb3BtZW50IG1vZGUsIHVzZSBhIGdsb2JhbCB2YXJpYWJsZSBzbyB0aGF0IHRoZSB2YWx1ZVxuICAgIC8vIGlzIHByZXNlcnZlZCBhY3Jvc3MgbW9kdWxlIHJlbG9hZHMgY2F1c2VkIGJ5IEhNUiAoSG90IE1vZHVsZSBSZXBsYWNlbWVudCkuXG4gICAgaWYgKCFnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSkge1xuICAgICAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKVxuICAgICAgICBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KClcbiAgICB9XG4gICAgY2xpZW50UHJvbWlzZSA9IGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlXG59IGVsc2Uge1xuICAgIC8vIEluIHByb2R1Y3Rpb24gbW9kZSwgaXQncyBiZXN0IHRvIG5vdCB1c2UgYSBnbG9iYWwgdmFyaWFibGUuXG4gICAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucylcbiAgICBjbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKVxufVxuXG4vLyBFeHBvcnQgYSBtb2R1bGUtc2NvcGVkIE1vbmdvQ2xpZW50IHByb21pc2UuIEJ5IGRvaW5nIHRoaXMgaW4gYVxuLy8gc2VwYXJhdGUgbW9kdWxlLCB0aGUgY2xpZW50IGNhbiBiZSBzaGFyZWQgYWNyb3NzIGZ1bmN0aW9ucy5cbmV4cG9ydCBkZWZhdWx0IGNsaWVudFByb21pc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/auth/lib/mongodb.js\n");

/***/ }),

/***/ "./pages/models/userModel.js":
/*!***********************************!*\
  !*** ./pages/models/userModel.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  name: {\n    type: 'string',\n    default: 'guest'\n  },\n  email: {\n    type: 'string'\n  },\n  password: {\n    type: 'string'\n  },\n  image: {\n    type: 'string',\n    default: 'https://i.stack.imgur.com/34AD2.jpg'\n  }\n}, {\n  timeStamp: true\n});\nlet Dataset = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.users || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('users', userSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dataset);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9tb2RlbHMvdXNlck1vZGVsLmpzPzJkMDIiXSwibmFtZXMiOlsidXNlclNjaGVtYSIsIm1vbmdvb3NlIiwiU2NoZW1hIiwibmFtZSIsInR5cGUiLCJkZWZhdWx0IiwiZW1haWwiLCJwYXNzd29yZCIsImltYWdlIiwidGltZVN0YW1wIiwiRGF0YXNldCIsIm1vZGVscyIsInVzZXJzIiwibW9kZWwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUEsVUFBVSxHQUFHLElBQUlDLCtDQUFRLENBQUNDLE1BQWIsQ0FBb0I7QUFDbkNDLE1BQUksRUFBRTtBQUNGQyxRQUFJLEVBQUUsUUFESjtBQUVGQyxXQUFPLEVBQUU7QUFGUCxHQUQ2QjtBQUtuQ0MsT0FBSyxFQUFFO0FBQ0hGLFFBQUksRUFBRTtBQURILEdBTDRCO0FBUW5DRyxVQUFRLEVBQUU7QUFDTkgsUUFBSSxFQUFFO0FBREEsR0FSeUI7QUFXbkNJLE9BQUssRUFBQztBQUNGSixRQUFJLEVBQUUsUUFESjtBQUVGQyxXQUFPLEVBQUU7QUFGUDtBQVg2QixDQUFwQixFQWVqQjtBQUFDSSxXQUFTLEVBQUM7QUFBWCxDQWZpQixDQUFuQjtBQWtCQSxJQUFJQyxPQUFPLEdBQUdULCtDQUFRLENBQUNVLE1BQVQsQ0FBZ0JDLEtBQWhCLElBQXlCWCwrQ0FBUSxDQUFDWSxLQUFULENBQWUsT0FBZixFQUF1QmIsVUFBdkIsQ0FBdkM7QUFDZVUsc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9tb2RlbHMvdXNlck1vZGVsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcblxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgIG5hbWU6IHtcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIGRlZmF1bHQ6ICdndWVzdCdcbiAgICB9LFxuICAgIGVtYWlsOiB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgfSxcbiAgICBwYXNzd29yZDoge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgIH0sXG4gICAgaW1hZ2U6e1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgZGVmYXVsdDogJ2h0dHBzOi8vaS5zdGFjay5pbWd1ci5jb20vMzRBRDIuanBnJ1xuICAgIH1cbn0se3RpbWVTdGFtcDp0cnVlfSk7XG5cblxubGV0IERhdGFzZXQgPSBtb25nb29zZS5tb2RlbHMudXNlcnMgfHwgbW9uZ29vc2UubW9kZWwoJ3VzZXJzJyx1c2VyU2NoZW1hKTtcbmV4cG9ydCBkZWZhdWx0IERhdGFzZXQ7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/models/userModel.js\n");

/***/ }),

/***/ "@next-auth/mongodb-adapter":
/*!*********************************************!*\
  !*** external "@next-auth/mongodb-adapter" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@next-auth/mongodb-adapter\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmV4dC1hdXRoL21vbmdvZGItYWRhcHRlclwiP2Q2MDEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG5leHQtYXV0aC9tb25nb2RiLWFkYXB0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmV4dC1hdXRoL21vbmdvZGItYWRhcHRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@next-auth/mongodb-adapter\n");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiY3J5cHRcIj9jZjljIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImJjcnlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///bcrypt\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiP2ZmZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibW9uZ29vc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongoose\n");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGhcIj8yOWY3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtYXV0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth\n");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth/providers/credentials\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI/ZGUwNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth/providers/credentials\n");

/***/ }),

/***/ "next-auth/providers/email":
/*!********************************************!*\
  !*** external "next-auth/providers/email" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth/providers/email\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2VtYWlsXCI/ZjhjMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJuZXh0LWF1dGgvcHJvdmlkZXJzL2VtYWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL3Byb3ZpZGVycy9lbWFpbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth/providers/email\n");

/***/ })

/******/ });