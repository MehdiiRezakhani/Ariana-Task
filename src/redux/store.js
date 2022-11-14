import { createStore } from "redux";
import dataReducer from "./data/dataReducer";

// convert object to string and store in localStorage
const saveToLocalStorage = (state) => {
  try {
    const ListState = JSON.stringify(state);
    localStorage.setItem("usersArianaData", ListState);
  } catch (e) {
    console.warn(e);
  }
}

// load string from localStarage and convert into an Object
// invalid output must be undefined
const loadFromLocalStorage = () => {
  try {
    const ListState = localStorage.getItem("usersArianaData");
    if (ListState === null) return undefined;
    return JSON.parse(ListState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

// create our store from our dataReducer and use loadFromLocalStorage
// to overwrite any values that we already have saved
const store = createStore(dataReducer, loadFromLocalStorage());

// listen for store changes and use saveToLocalStorage to
// save them to localStorage
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;