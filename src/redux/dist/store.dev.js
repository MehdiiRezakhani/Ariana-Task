"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _dataReducer = _interopRequireDefault(require("./data/dataReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// convert object to string and store in localStorage
var saveToLocalStorage = function saveToLocalStorage(state) {
  try {
    var ListState = JSON.stringify(state);
    localStorage.setItem("usersArianaData", ListState);
  } catch (e) {
    console.warn(e);
  }
}; // load string from localStarage and convert into an Object
// invalid output must be undefined


var loadFromLocalStorage = function loadFromLocalStorage() {
  try {
    var ListState = localStorage.getItem("usersArianaData");
    if (ListState === null) return undefined;
    return JSON.parse(ListState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}; // create our store from our dataReducer and use loadFromLocalStorage
// to overwrite any values that we already have saved


var store = (0, _redux.createStore)(_dataReducer["default"], loadFromLocalStorage()); // listen for store changes and use saveToLocalStorage to
// save them to localStorage

store.subscribe(function () {
  return saveToLocalStorage(store.getState());
});
var _default = store;
exports["default"] = _default;