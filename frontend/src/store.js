import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import { apiSlice } from './slices/apiSlice';
import { videoApiSlice } from './slices/vidoApiSlice';
import { usersManageApiSlice } from './slices/usersManageApiSlice';
import { blogApiSlice } from './slices/blogApiSlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer, auth: authReducer,
    [videoApiSlice.reducerPath]: videoApiSlice.reducer,
    [usersManageApiSlice.reducerPath]: usersManageApiSlice.reducer,
    [blogApiSlice.reducerPath]: blogApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware, videoApiSlice.middleware, usersManageApiSlice.middleware, blogApiSlice.middleware),
  devTools: true,
});

export default store;
