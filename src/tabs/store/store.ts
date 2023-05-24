import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  RESYNC,
  persistReducer,
  persistStore
} from "@plasmohq/redux-persist";
import type { PersistConfig } from "@plasmohq/redux-persist/lib/types";
import { Storage } from "@plasmohq/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { localStorage } from "redux-persist-webextension-storage";
import { todoSlice } from "../todo-list/todo-list.slice";

const persistConfig: PersistConfig<any> = {
  key: "root",
  version: 1,
  storage: localStorage
};

const combinedReducer = combineReducers({
  todoSlice: todoSlice.reducer
});

const persistedReducer = persistReducer(persistConfig, combinedReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
          RESYNC
        ]
      }
    })
});

export const persistor = persistStore(store);

new Storage().watch({
  [`persist:${persistConfig.key}`]: () => {
    persistor.resync();
  }
});

// selectors
export const todosDoneSelector = (state) => {
  return state.todoSlice.todos.filter((todo) => todo.isDone);
};

export const todosNotDoneSelector = (state) => {
  return state.todoSlice.todos.filter((todo) => !todo.isDone);
};
