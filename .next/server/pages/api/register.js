module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/register.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/register.js":
/*!*******************************!*\
  !*** ./pages/api/register.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handler; });\n/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/userModel */ \"./pages/models/userModel.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n  const body = req.body;\n  const userExist = await _models_userModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n    email: body.email\n  });\n\n  if (userExist) {\n    res.status(200).json({\n      message: 'Already registered'\n    });\n    return;\n  } // generate salt to hash password\n\n\n  const salt = await bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.genSalt(10); // now we set user password to hashed password\n\n  const hashpass = await bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.hash(body.password, salt);\n  const user = new _models_userModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    email: body.email,\n    password: hashpass\n  }); // user.password = await bcrypt.hash(user.password, salt);\n\n  await user.save();\n  res.status(200).json({\n    message: 'Registered successfully'\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvcmVnaXN0ZXIuanM/MTU5YiJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwiYm9keSIsInVzZXJFeGlzdCIsIlVzZXJzIiwiZmluZE9uZSIsImVtYWlsIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJzYWx0IiwiYmNyeXB0IiwiZ2VuU2FsdCIsImhhc2hwYXNzIiwiaGFzaCIsInBhc3N3b3JkIiwidXNlciIsInNhdmUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRWUsZUFBZUEsT0FBZixDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBQzVDLFFBQU1DLElBQUksR0FBR0YsR0FBRyxDQUFDRSxJQUFqQjtBQUNBLFFBQU1DLFNBQVMsR0FBRyxNQUFNQyx5REFBSyxDQUFDQyxPQUFOLENBQWM7QUFBRUMsU0FBSyxFQUFFSixJQUFJLENBQUNJO0FBQWQsR0FBZCxDQUF4Qjs7QUFDQSxNQUFJSCxTQUFKLEVBQWU7QUFDWEYsT0FBRyxDQUFDTSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FBckI7QUFDQTtBQUNILEdBTjJDLENBUTVDOzs7QUFDQSxRQUFNQyxJQUFJLEdBQUcsTUFBTUMsNkNBQU0sQ0FBQ0MsT0FBUCxDQUFlLEVBQWYsQ0FBbkIsQ0FUNEMsQ0FVNUM7O0FBQ0EsUUFBTUMsUUFBUSxHQUFHLE1BQU1GLDZDQUFNLENBQUNHLElBQVAsQ0FBWVosSUFBSSxDQUFDYSxRQUFqQixFQUEyQkwsSUFBM0IsQ0FBdkI7QUFDQSxRQUFNTSxJQUFJLEdBQUcsSUFBSVoseURBQUosQ0FBVTtBQUFFRSxTQUFLLEVBQUVKLElBQUksQ0FBQ0ksS0FBZDtBQUFxQlMsWUFBUSxFQUFFRjtBQUEvQixHQUFWLENBQWIsQ0FaNEMsQ0FhNUM7O0FBQ0EsUUFBTUcsSUFBSSxDQUFDQyxJQUFMLEVBQU47QUFDQWhCLEtBQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLFdBQU8sRUFBRTtBQUFYLEdBQXJCO0FBRUgiLCJmaWxlIjoiLi9wYWdlcy9hcGkvcmVnaXN0ZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXNlcnMgZnJvbSAnLi4vbW9kZWxzL3VzZXJNb2RlbCc7XG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgICBjb25zdCBib2R5ID0gcmVxLmJvZHk7XG4gICAgY29uc3QgdXNlckV4aXN0ID0gYXdhaXQgVXNlcnMuZmluZE9uZSh7IGVtYWlsOiBib2R5LmVtYWlsIH0pO1xuICAgIGlmICh1c2VyRXhpc3QpIHtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnQWxyZWFkeSByZWdpc3RlcmVkJyB9KVxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gZ2VuZXJhdGUgc2FsdCB0byBoYXNoIHBhc3N3b3JkXG4gICAgY29uc3Qgc2FsdCA9IGF3YWl0IGJjcnlwdC5nZW5TYWx0KDEwKTtcbiAgICAvLyBub3cgd2Ugc2V0IHVzZXIgcGFzc3dvcmQgdG8gaGFzaGVkIHBhc3N3b3JkXG4gICAgY29uc3QgaGFzaHBhc3MgPSBhd2FpdCBiY3J5cHQuaGFzaChib2R5LnBhc3N3b3JkLCBzYWx0KTtcbiAgICBjb25zdCB1c2VyID0gbmV3IFVzZXJzKHsgZW1haWw6IGJvZHkuZW1haWwsIHBhc3N3b3JkOiBoYXNocGFzcyB9KTtcbiAgICAvLyB1c2VyLnBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2godXNlci5wYXNzd29yZCwgc2FsdCk7XG4gICAgYXdhaXQgdXNlci5zYXZlKCk7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnUmVnaXN0ZXJlZCBzdWNjZXNzZnVsbHknIH0pO1xuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/register.js\n");

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

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiY3J5cHRcIj9jZjljIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImJjcnlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///bcrypt\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiP2ZmZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibW9uZ29vc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongoose\n");

/***/ })

/******/ });