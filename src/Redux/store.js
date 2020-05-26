import { combineReducers } from "redux";
import contactsReducer from "./reducers/contactsReducer";
import filterReducer from "./reducers/filterReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["contacts"],
};

const defaultMiddlewareConfig = {
  serializableCheck: {
    ignoredActions: ["persist/PERSIST"],
  },
};

const middleware = [...getDefaultMiddleware(defaultMiddlewareConfig)];

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware,
});

export const persistor = persistStore(store);
