<<<<<<< HEAD
import { configureStore, createSlice } from '@reduxjs/toolkit';
// import { Stream } from 'stream';

// //* configureStore는 옵션 객체를 정확한 key와 함께 넘겨야 하므로
// //* rootReducer를 첫 번째 매개변수로 전달하는 대신 reducer라는 key의 value로 전달
=======
import { configureStore } from '@reduxjs/toolkit';

>>>>>>> 185c8b3... add : 초기 환경 세팅
export const store = configureStore({
  reducer: {},
});

<<<<<<< HEAD
// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;
=======
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
>>>>>>> 185c8b3... add : 초기 환경 세팅
