//생성한 reducer store 에 등록해주기
//todoReducer 는 todoSlice 안에 있는 reducer 를 가져오게 된다.
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice/todoSlice";
export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
