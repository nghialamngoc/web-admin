// Libraries
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

// Modules
import auth from "./modules/auth";

const store = configureStore({
  reducer: {
    auth,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
export type AppDispatch = typeof store.dispatch;
