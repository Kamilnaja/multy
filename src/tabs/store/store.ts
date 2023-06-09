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
import { configureStore } from "@reduxjs/toolkit";
import { localStorage } from "redux-persist-webextension-storage";
import { templateSlice } from "~tabs/templates/store/templates.slice";
import { todoSlice } from "~tabs/todo-list/store/todo-list.slice";

const persistConfig: PersistConfig<any> = {
  key: "root",
  version: 1,
  storage: localStorage
};

export const store = configureStore({
  reducer: {
    todoSlice: persistReducer(persistConfig, todoSlice.reducer),
    templateSlice: persistReducer(persistConfig, templateSlice.reducer)
  },
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
