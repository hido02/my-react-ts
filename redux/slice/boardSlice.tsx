import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';

// Redux Toolkit을 사용하여 상태와 리듀서를 정의합니다.
const boardSlice = createSlice({
  name: 'board',
  initialState: [] as string[],
  reducers: {
    addPost: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
    },
  },
});

// 액션 생성자를 내보냅니다.
export const { addPost } = boardSlice.actions;


