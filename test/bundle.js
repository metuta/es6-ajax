/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _index = __webpack_require__(1);

	_index.http.get('/ajax').then(function (data) {
	  console.log(data);
	}).catch(function (error) {
	  console.log(error);
	});
	_index.http.get('/ajax/1').then(function (data) {
	  console.log(data);
	}).catch(function (error) {
	  console.log(error);
	});
	_index.http.post('/ajax', { hello: 'hello' }).then(function (data) {
	  console.log(data);
	}).catch(function (error) {
	  console.log(error);
	});
	_index.http.delete('/ajax/1').then(function (data) {
	  console.log(data);
	}).catch(function (error) {
	  console.log(error);
	});
	_index.http.put('/ajax/1', { hello: 'hello' }).then(function (data) {
	  console.log(data);
	}).catch(function (error) {
	  console.log(error);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ajax = function ajax(method, url) {
	  var data = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	  return new Promise(function (resolve, reject) {
	    var req = new XMLHttpRequest();
	    req.open(method, url, true);

	    req.onload = function () {
	      return req.status == 200 ? resolve(req.response) : reject(Error(req.status + ' ' + req.statusText));
	    };

	    if (method == 'PUT' || method == 'POST') {
	      req.setRequestHeader('Content-type', 'application/json');
	      data = JSON.stringify(data);
	    }
	    req.send(data);
	  });
	};

	var http = function () {
	  function http() {
	    _classCallCheck(this, http);
	  }

	  _createClass(http, null, [{
	    key: 'get',
	    value: function get(url, data) {
	      return ajax('GET', url);
	    }
	  }, {
	    key: 'post',
	    value: function post(url, data) {
	      return ajax('POST', url, data);
	    }
	  }, {
	    key: 'delete',
	    value: function _delete(url) {
	      return ajax('DELETE', url);
	    }
	  }, {
	    key: 'put',
	    value: function put(url, data) {
	      return ajax('PUT', url, data);
	    }
	  }]);

	  return http;
	}();

	exports.ajax = ajax;
	exports.http = http;

/***/ }
/******/ ]);