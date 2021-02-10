import { createSlice } from "@reduxjs/toolkit";

export const planSlice = createSlice({
  name: "plan",
  initialState: {
    plan: null,
  },
  reducers: {
    showPlan: (state, action) => {
      state.plan = action.payload;
    },
  },
});

export const { showPlan } = planSlice.actions; //Mandar a global store Push Dispatch

export const selectPlan = (state) => state.plan.plan; //Acceder a global store Pull Selector

export default planSlice.reducer;
