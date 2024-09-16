import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TTodo = {
  _id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
};

type TInitialState = {
  todo: TTodo[];
};

const initialState: TInitialState = {
  todo: [],
};
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todo.push({ ...action.payload, isCompleted: false });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todo = state.todo.filter((item) => item._id !== action.payload);
      console.log(state.todo);
    },
    toggleComplete: (state, action: PayloadAction<string>) => {
      const task = state.todo.find((item) => item._id === action.payload);
      console.log(task);

      if (task) {
        task.isCompleted = !task.isCompleted;

        if (task.isCompleted === true) {
          // Find the index of the task in state.todo
          const foundIdx = state.todo.findIndex(
            (el: TTodo) => el._id === task._id
          );

          if (foundIdx > -1) {
            // Remove the task from its current position
            state.todo.splice(foundIdx, 1);
            // Add the task to the beginning of the array
            state.todo.push(task);
          }
        }
      } else {
        console.log("Task not found");
      }
    },
  },
});
export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;
