import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 

import rootReducer from "./root-reducer";

const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer);


const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

// export const store = createStore(rootReducer, applyMiddleware(...middlewares));

const store = createStore(persistedReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store);
export { persistor, store };





// export default store;
