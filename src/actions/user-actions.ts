"use server";
import connectDB from "@/database/connectDB";
import User from "@/database/models/User";

export const addUser = async (formData: any) => {
	await connectDB();
	try {
		const user = await User.create(formData);
		if (user) {
			return JSON.parse(JSON.stringify(user));
		} else {
			return false;
		}
	} catch (error: any) {
		console.log(error.message);
		return false;
	}
};

export const findUser = async (formData: any) => {
	await connectDB();
	try {
		const user = await User.findOne(formData);
		if (user) {
			return JSON.parse(JSON.stringify(user));
		} else {
			return false;
		}
	} catch (error: any) {
		console.log(error.message);
		return false;
	}
};

export const updateUser = async (email: string, formData: any) => {
	await connectDB();
	try {
		const user = await User.findOneAndUpdate({ email: email }, formData);
		if (user) {
			return JSON.parse(JSON.stringify(user));
		} else {
			return false;
		}
	} catch (error: any) {
		console.log(error.message);
		return false;
	}
};

export const updateDPS = async (email: string, index: number, formData: any) => {
	const dpsIndex = `dps.${index}`;
	const dpsData: any = {};
	dpsData[dpsIndex] = formData;

	await connectDB();
	try {
		const user = await User.findOneAndUpdate({ email: email }, { $set: dpsData });
		if (user) {
			return JSON.parse(JSON.stringify(user));
		} else {
			return false;
		}
	} catch (error: any) {
		console.log(error.message);
		return false;
	}
};
