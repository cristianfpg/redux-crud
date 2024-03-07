import { createSlice } from '@reduxjs/toolkit'

const getTasks = JSON.parse(localStorage.getItem("tasks"));
const initialState = getTasks.length > 0 ? getTasks : ["Example task"]

export const crudSlice = createSlice({
  name: 'crud',
  initialState,
  reducers: {
    createTask: (state, action) => {
      state.push(action.payload)
      localStorage.setItem("tasks", JSON.stringify(state))
    },
    deleteTask: (state, action) => {
      state.splice(action.payload, 1)
      localStorage.setItem("tasks", JSON.stringify(state))
    },
    updateTask: (state, action) => {
      state[action.payload.id] = action.payload.newValue
      localStorage.setItem("tasks", JSON.stringify(state))
    }
  },
})

export const { createTask, deleteTask, updateTask } = crudSlice.actions
export default crudSlice.reducer