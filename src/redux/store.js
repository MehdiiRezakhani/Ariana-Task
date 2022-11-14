import { createStore } from "redux";

import dataReducer  from './data/dataReducer';

const store = createStore(dataReducer);

export default store;