import { configureStore, current } from "@reduxjs/toolkit";
import formReducer from "./slices/formSlice";
import currentPageReducer from "./slices/currentPageSlice";
import formErrorReducer from "./slices/formErrorSlice";

export const makeStore = () => {
	return configureStore({
		reducer: {
			form: formReducer,
			formError: formErrorReducer,
			currentPage: currentPageReducer,
		},
	});
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
