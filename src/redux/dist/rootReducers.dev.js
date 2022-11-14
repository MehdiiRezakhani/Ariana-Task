"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rootReducers = void 0;

var _redux = require("redux");

var _dataReducer = _interopRequireDefault(require("./data/dataReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rootReducers = (0, _redux.combineReducers)([_dataReducer["default"]]);
exports.rootReducers = rootReducers;