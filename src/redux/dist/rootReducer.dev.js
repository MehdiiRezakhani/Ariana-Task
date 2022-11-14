"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rootReducers = void 0;

var _redux = require("redux");

var _dataReducer = _interopRequireDefault(require("./data/dataReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var rootReducers = (0, _redux.combineReducers)(_toConsumableArray(_dataReducer["default"]));
exports.rootReducers = rootReducers;