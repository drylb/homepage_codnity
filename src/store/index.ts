import { configureStore } from "@reduxjs/toolkit";
import galleryReducer from "./gallerySlice";

const store = configureStore({
  reducer: {
    gallery: galleryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type StoreType = typeof store;
export default store;
