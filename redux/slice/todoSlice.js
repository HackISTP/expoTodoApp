//todo 를 위한 todoSlice 생성
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    currentId: 4,
    todos: [],
  },
  reducer: {
    addTodo: (state, action) => {
      state.todos.push({
        id: state.currentId++,
        text: action.payload.trim(),
        state: "todo",
      });
    },
    updateTodo: (state, action) => {
      const item = state.todos.findIndex((item) => item.id === action.payload);
      state.todos[item].state === "todo" ? "done" : "tood";
      state.todos.push(state.todos.splice(item, 1)[0]);
    },
    deleteTodo: (state, action) => {
      const item = state.todos.findIndex((item) => item.id === action.payload);
      if (item > -1) {
        state.todos.splice(item, 1);
      }
    },
  },
});
export default todoSlice.reducer;
//다른 컴포넌트에서 action 을 사용할수 있게 export 해줌
export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
