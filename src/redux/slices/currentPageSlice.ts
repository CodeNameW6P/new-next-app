import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

type InitialCurrentPageState = {
	value: number;
};

const initialState: InitialCurrentPageState = {
	value: 0,
};

export const currentPageSlice = createSlice({
	name: "currentPage",
	initialState,
	reducers: {
		nextPage: (state) => {
			state.value = state.value + 1;
		},
		prevPage: (state) => {
			state.value = state.value - 1;
		},
	},
});

export const { nextPage, prevPage } = currentPageSlice.actions;
export default currentPageSlice.reducer;
