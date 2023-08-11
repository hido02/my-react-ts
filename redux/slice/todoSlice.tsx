import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';

// Redux Toolkit을 사용하여 상태와 리듀서를 정의합니다.
const todoSlice = createSlice({
  name: 'todos',
  initialState: [] as string[],
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.splice(action.payload, 1);
    },
  },
});

// 액션 생성자를 내보냅니다.
export const { addTodo, removeTodo } = todoSlice.actions;
