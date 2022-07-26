/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const teamColors = __webpack_require__(/*! ./scripts/teamColors */ \"./src/scripts/teamColors.js\"); // import './scripts/dataSetup.js';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsVUFBVSxHQUFHQyxtQkFBTyxDQUFDLHlEQUFELENBQTFCLEMsQ0FDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25iYV9iYXJfY2hhcnRfcmFjZXMvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0ZWFtQ29sb3JzID0gcmVxdWlyZSgnLi9zY3JpcHRzL3RlYW1Db2xvcnMnKTtcbi8vIGltcG9ydCAnLi9zY3JpcHRzL2RhdGFTZXR1cC5qcyc7Il0sIm5hbWVzIjpbInRlYW1Db2xvcnMiLCJyZXF1aXJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/teamColors.js":
/*!***********************************!*\
  !*** ./src/scripts/teamColors.js ***!
  \***********************************/
/***/ (function(module) {

eval("const teamColorCodes = [{\n  'team': 'MIA',\n  'background': '#98002e',\n  'border': '#f9a01b'\n}, {\n  'team': 'BOS',\n  'background': '#007a33',\n  'border': '#ba9653'\n}, {\n  'team': 'BRK',\n  'background': '#000000',\n  'border': '#ffffff'\n}, {\n  'team': 'CHI',\n  'background': '#ce1141',\n  'border': '#000000'\n}, {\n  'team': 'PHO',\n  'background': '#e56020',\n  'border': '#1d1160'\n}, {\n  'team': 'DEN',\n  'background': '#0e2240',\n  'border': '#fec524'\n}, {\n  'team': 'GSW',\n  'background': '#1d428a',\n  'border': '#ffc72c'\n}, {\n  'team': 'IND',\n  'background': '#002d62',\n  'border': '#fdbb30'\n}, {\n  'team': 'MIL',\n  'background': '#00471b',\n  'border': '#eee1c6'\n}, {\n  'team': 'NOP',\n  'background': '#0c2340',\n  'border': '#c8102e'\n}, {\n  'team': 'OKC',\n  'background': '#007ac1',\n  'border': '#ef3b24'\n}, {\n  'team': 'PHI',\n  'background': '#006bb6',\n  'border': '#ed174c'\n}, {\n  'team': 'SAC',\n  'background': '#5a2d81',\n  'border': '#63727a'\n}, {\n  'team': 'TOR',\n  'background': '#ce1141',\n  'border': '#000000'\n}, {\n  'team': 'CLE',\n  'background': '#860038',\n  'border': '#041e42'\n}, {\n  'team': 'LAL',\n  'background': '#552583',\n  'border': '#f9a01b'\n}, {\n  'team': 'LAC',\n  'background': '#c8102e',\n  'border': '#1d428a'\n}, {\n  'team': 'CHO',\n  'background': '#1d1160',\n  'border': '#00788c'\n}, {\n  'team': 'CHA',\n  'background': '#1d1160',\n  'border': '#00788c'\n}, {\n  'team': 'ATL',\n  'background': '#e03a3e',\n  'border': '#c1d32f'\n}, {\n  'team': 'DAL',\n  'background': '#00538c',\n  'border': '#002b5e'\n}, {\n  'team': 'DET',\n  'background': '#c8102e',\n  'border': '#1d42ba'\n}, {\n  'team': 'HOU',\n  'background': '#ce1141',\n  'border': '#000000'\n}, {\n  'team': 'MEM',\n  'background': '#5d76a9',\n  'border': '#12173f'\n}, {\n  'team': 'MIN',\n  'background': '#0c2340',\n  'border': '#236192'\n}, {\n  'team': 'NYK',\n  'background': '#f58426',\n  'border': '#006bb6'\n}, {\n  'team': 'ORL',\n  'background': '#0077c0',\n  'border': '#c4ced4'\n}, {\n  'team': 'POR',\n  'background': '#e03a3e',\n  'border': '#000000'\n}, {\n  'team': 'SAS',\n  'background': '#c4ced4',\n  'border': '#000000'\n}, {\n  'team': 'UTA',\n  'background': '#002b5c',\n  'border': '#00471b'\n}, {\n  'team': 'WAS',\n  'background': '#002b5c',\n  'border': '#e31837'\n}, {\n  'team': 'TOT',\n  'background': '#808080',\n  'border': '#e31837'\n}, {\n  'team': 'SEA',\n  'background': '#00653A',\n  'border': '#FFC200'\n}];\nmodule.exports = teamColors;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90ZWFtQ29sb3JzLmpzLmpzIiwibmFtZXMiOlsidGVhbUNvbG9yQ29kZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwidGVhbUNvbG9ycyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmJhX2Jhcl9jaGFydF9yYWNlcy8uL3NyYy9zY3JpcHRzL3RlYW1Db2xvcnMuanM/ODg5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0ZWFtQ29sb3JDb2RlcyA9IFtcbiAgICB7J3RlYW0nOiAnTUlBJywgJ2JhY2tncm91bmQnOiAnIzk4MDAyZScsICdib3JkZXInOiAnI2Y5YTAxYid9LFxuICAgIHsndGVhbSc6ICdCT1MnLCAnYmFja2dyb3VuZCc6ICcjMDA3YTMzJywgJ2JvcmRlcic6ICcjYmE5NjUzJ30sXG4gICAgeyd0ZWFtJzogJ0JSSycsICdiYWNrZ3JvdW5kJzogJyMwMDAwMDAnLCAnYm9yZGVyJzogJyNmZmZmZmYnfSxcbiAgICB7J3RlYW0nOiAnQ0hJJywgJ2JhY2tncm91bmQnOiAnI2NlMTE0MScsICdib3JkZXInOiAnIzAwMDAwMCd9LFxuICAgIHsndGVhbSc6ICdQSE8nLCAnYmFja2dyb3VuZCc6ICcjZTU2MDIwJywgJ2JvcmRlcic6ICcjMWQxMTYwJ30sXG4gICAgeyd0ZWFtJzogJ0RFTicsICdiYWNrZ3JvdW5kJzogJyMwZTIyNDAnLCAnYm9yZGVyJzogJyNmZWM1MjQnfSxcbiAgICB7J3RlYW0nOiAnR1NXJywgJ2JhY2tncm91bmQnOiAnIzFkNDI4YScsICdib3JkZXInOiAnI2ZmYzcyYyd9LFxuICAgIHsndGVhbSc6ICdJTkQnLCAnYmFja2dyb3VuZCc6ICcjMDAyZDYyJywgJ2JvcmRlcic6ICcjZmRiYjMwJ30sXG4gICAgeyd0ZWFtJzogJ01JTCcsICdiYWNrZ3JvdW5kJzogJyMwMDQ3MWInLCAnYm9yZGVyJzogJyNlZWUxYzYnfSxcbiAgICB7J3RlYW0nOiAnTk9QJywgJ2JhY2tncm91bmQnOiAnIzBjMjM0MCcsICdib3JkZXInOiAnI2M4MTAyZSd9LFxuICAgIHsndGVhbSc6ICdPS0MnLCAnYmFja2dyb3VuZCc6ICcjMDA3YWMxJywgJ2JvcmRlcic6ICcjZWYzYjI0J30sXG4gICAgeyd0ZWFtJzogJ1BISScsICdiYWNrZ3JvdW5kJzogJyMwMDZiYjYnLCAnYm9yZGVyJzogJyNlZDE3NGMnfSxcbiAgICB7J3RlYW0nOiAnU0FDJywgJ2JhY2tncm91bmQnOiAnIzVhMmQ4MScsICdib3JkZXInOiAnIzYzNzI3YSd9LFxuICAgIHsndGVhbSc6ICdUT1InLCAnYmFja2dyb3VuZCc6ICcjY2UxMTQxJywgJ2JvcmRlcic6ICcjMDAwMDAwJ30sXG4gICAgeyd0ZWFtJzogJ0NMRScsICdiYWNrZ3JvdW5kJzogJyM4NjAwMzgnLCAnYm9yZGVyJzogJyMwNDFlNDInfSxcbiAgICB7J3RlYW0nOiAnTEFMJywgJ2JhY2tncm91bmQnOiAnIzU1MjU4MycsICdib3JkZXInOiAnI2Y5YTAxYid9LFxuICAgIHsndGVhbSc6ICdMQUMnLCAnYmFja2dyb3VuZCc6ICcjYzgxMDJlJywgJ2JvcmRlcic6ICcjMWQ0MjhhJ30sXG4gICAgeyd0ZWFtJzogJ0NITycsICdiYWNrZ3JvdW5kJzogJyMxZDExNjAnLCAnYm9yZGVyJzogJyMwMDc4OGMnfSxcbiAgICB7J3RlYW0nOiAnQ0hBJywgJ2JhY2tncm91bmQnOiAnIzFkMTE2MCcsICdib3JkZXInOiAnIzAwNzg4Yyd9LFxuICAgIHsndGVhbSc6ICdBVEwnLCAnYmFja2dyb3VuZCc6ICcjZTAzYTNlJywgJ2JvcmRlcic6ICcjYzFkMzJmJ30sXG4gICAgeyd0ZWFtJzogJ0RBTCcsICdiYWNrZ3JvdW5kJzogJyMwMDUzOGMnLCAnYm9yZGVyJzogJyMwMDJiNWUnfSxcbiAgICB7J3RlYW0nOiAnREVUJywgJ2JhY2tncm91bmQnOiAnI2M4MTAyZScsICdib3JkZXInOiAnIzFkNDJiYSd9LFxuICAgIHsndGVhbSc6ICdIT1UnLCAnYmFja2dyb3VuZCc6ICcjY2UxMTQxJywgJ2JvcmRlcic6ICcjMDAwMDAwJ30sXG4gICAgeyd0ZWFtJzogJ01FTScsICdiYWNrZ3JvdW5kJzogJyM1ZDc2YTknLCAnYm9yZGVyJzogJyMxMjE3M2YnfSxcbiAgICB7J3RlYW0nOiAnTUlOJywgJ2JhY2tncm91bmQnOiAnIzBjMjM0MCcsICdib3JkZXInOiAnIzIzNjE5Mid9LFxuICAgIHsndGVhbSc6ICdOWUsnLCAnYmFja2dyb3VuZCc6ICcjZjU4NDI2JywgJ2JvcmRlcic6ICcjMDA2YmI2J30sXG4gICAgeyd0ZWFtJzogJ09STCcsICdiYWNrZ3JvdW5kJzogJyMwMDc3YzAnLCAnYm9yZGVyJzogJyNjNGNlZDQnfSxcbiAgICB7J3RlYW0nOiAnUE9SJywgJ2JhY2tncm91bmQnOiAnI2UwM2EzZScsICdib3JkZXInOiAnIzAwMDAwMCd9LFxuICAgIHsndGVhbSc6ICdTQVMnLCAnYmFja2dyb3VuZCc6ICcjYzRjZWQ0JywgJ2JvcmRlcic6ICcjMDAwMDAwJ30sXG4gICAgeyd0ZWFtJzogJ1VUQScsICdiYWNrZ3JvdW5kJzogJyMwMDJiNWMnLCAnYm9yZGVyJzogJyMwMDQ3MWInfSxcbiAgICB7J3RlYW0nOiAnV0FTJywgJ2JhY2tncm91bmQnOiAnIzAwMmI1YycsICdib3JkZXInOiAnI2UzMTgzNyd9LFxuICAgIHsndGVhbSc6ICdUT1QnLCAnYmFja2dyb3VuZCc6ICcjODA4MDgwJywgJ2JvcmRlcic6ICcjZTMxODM3J30sXG4gICAgeyd0ZWFtJzogJ1NFQScsICdiYWNrZ3JvdW5kJzogJyMwMDY1M0EnLCAnYm9yZGVyJzogJyNGRkMyMDAnfVxuXVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRlYW1Db2xvcnM7Il0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxjQUFjLEdBQUcsQ0FDbkI7RUFBQyxRQUFRLEtBQVQ7RUFBZ0IsY0FBYyxTQUE5QjtFQUF5QyxVQUFVO0FBQW5ELENBRG1CLEVBRW5CO0VBQUMsUUFBUSxLQUFUO0VBQWdCLGNBQWMsU0FBOUI7RUFBeUMsVUFBVTtBQUFuRCxDQUZtQixFQUduQjtFQUFDLFFBQVEs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\n//# sourceURL=webpack-internal:///./src/scripts/teamColors.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uYmFfYmFyX2NoYXJ0X3JhY2VzLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;