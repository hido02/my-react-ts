import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';

import todoSlice from 'redux/slice/todoSlice';

// 스토어를 생성하고 리듀서를 등록합니다.
const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});
