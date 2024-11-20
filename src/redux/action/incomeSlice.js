import { createSlice } from "@reduxjs/toolkit";

var initialState = {
  data: [],
};

const incomeSlice = createSlice({
  name: "incomes",
  initialState,
  reducers: {
    addData: (state, action) => {
      const existingItem = state.data.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          data: state.data.map((item) =>
            item.id === action.payload.id ? { ...item } : item
          ),
        };
      }
      return {
        ...state,
        data: [...state.data, { ...action.payload }],
      };
    },
  },
});

export const { addData } = incomeSlice.actions;

export default incomeSlice.reducer;
