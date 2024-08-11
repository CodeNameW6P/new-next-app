import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type InitialFormErrorState = {
	emailError: string;
	phoneError: string;
	nameError: string;
	nidSmartCardError: string;
};

const initialState: InitialFormErrorState = {
	emailError: "",
	phoneError: "",
	nameError: "",
	nidSmartCardError: "",
};

export const formErrorSlice = createSlice({
	name: "formError",
	initialState,
	reducers: {
		setEmailError: (state, action: PayloadAction<string>) => {
			state.emailError = action.payload;
		},
		setPhoneError: (state, action: PayloadAction<string>) => {
			state.phoneError = action.payload;
		},
		setNameError: (state, action: PayloadAction<string>) => {
			state.nameError = action.payload;
		},
		setNidSmartCardError: (state, action: PayloadAction<string>) => {
			state.nidSmartCardError = action.payload;
		},
	},
});

export const { setEmailError, setPhoneError, setNameError, setNidSmartCardError } =
	formErrorSlice.actions;
export default formErrorSlice.reducer;
