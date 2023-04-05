import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './modules/counterSlice';
import contactsReducer from './modules/contactsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    contacts: contactsReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;