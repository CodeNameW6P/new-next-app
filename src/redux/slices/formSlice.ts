import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type InitialFormState = {
	email: string;
	phone: string;
	personal: {
		name: string;
		nidSmartCard: string;
	};
	income: {
		profession: string;
		monthlyIncome: string;
	};
	address: {
		house: string;
		road: string;
	};
};

const initialState: InitialFormState = {
	email: "",
	phone: "",
	personal: {
		name: "",
		nidSmartCard: "",
	},
	income: {
		profession: "",
		monthlyIncome: "",
	},
	address: {
		house: "",
		road: "",
	},
};

export const formSlice = createSlice({
	name: "form",
	initialState,
	reducers: {
		setEmail: (state, action: PayloadAction<string>) => {
			state.email = action.payload;
		},
		setPhone: (state, action: PayloadAction<string>) => {
			state.phone = action.payload;
		},
		setName: (state, action: PayloadAction<string>) => {
			state.personal.name = action.payload;
		},
		setNidSmartCard: (state, action: PayloadAction<string>) => {
			state.personal.nidSmartCard = action.payload;
		},
		setProfession: (state, action: PayloadAction<string>) => {
			state.income.profession = action.payload;
		},
		setMonthlyIncome: (state, action: PayloadAction<string>) => {
			state.income.monthlyIncome = action.payload;
		},
		setHouse: (state, action: PayloadAction<string>) => {
			state.address.house = action.payload;
		},
		setRoad: (state, action: PayloadAction<string>) => {
			state.address.road = action.payload;
		},
	},
});

export const {
	setEmail,
	setPhone,
	setName,
	setNidSmartCard,
	setProfession,
	setMonthlyIncome,
	setHouse,
	setRoad,
} = formSlice.actions;
export default formSlice.reducer;
