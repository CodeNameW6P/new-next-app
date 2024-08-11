import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { setEmail, setPhone } from "@/redux/slices/formSlice";
import { setEmailError, setPhoneError } from "@/redux/slices/formErrorSlice";
import { nextPage } from "@/redux/slices/currentPageSlice";
import { addUser, findUser } from "@/actions/user-actions";
import { useState } from "react";

export default function Initial() {
	const email = useAppSelector((state) => state.form.email);
	const phone = useAppSelector((state) => state.form.phone);

	const emailError = useAppSelector((state) => state.formError.emailError);
	const phoneError = useAppSelector((state) => state.formError.phoneError);

	const dispatch = useAppDispatch();

	const [loading, setLoading] = useState("");

	const validateEmail = (email: string) => {
		if (
			!email.trim().toLowerCase() ||
			email.trim().toLowerCase() === "" ||
			email.trim().toLowerCase() === null
		) {
			dispatch(setEmailError("Email can't be empty"));
			return false;
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim().toLowerCase())) {
			dispatch(setEmailError("Please enter a valid email"));
			return false;
		} else {
			dispatch(setEmailError(""));
			return true;
		}
	};

	const validatePhone = (phone: string) => {
		if (!phone.trim() || phone.trim() === "" || phone.trim() === null) {
			dispatch(setPhoneError("Phone number can't be empty"));
			return false;
		} else if (!/^\d+$/.test(phone.trim())) {
			dispatch(setPhoneError("Please enter a valid phone number"));
			return false;
		} else {
			dispatch(setPhoneError(""));
			return true;
		}
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (validateEmail(email) && validatePhone(phone)) {
			setLoading((l) => (l = "loading..."));
			const user = await findUser({
				email: email.trim().toLowerCase(),
				phone: phone.trim(),
			});
			if (user) {
				dispatch(nextPage());
			} else {
				await addUser({
					email: email.trim().toLowerCase(),
					phone: phone.trim(),
				});
				dispatch(nextPage());
			}
			setLoading((l) => (l = ""));
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit} className="flex flex-col gap-5" action="" method="">
				<input
					type="text"
					name="email"
					id="email"
					placeholder="email"
					value={email}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
						dispatch(setEmail(event.target.value))
					}
				/>
				<span>{emailError}</span>
				<input
					type="text"
					name="phone"
					id="phone"
					placeholder="phone"
					value={phone}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
						dispatch(setPhone(event.target.value))
					}
				/>
				<span>{phoneError}</span>
				<button type="submit">Enter</button>
				<span>{loading}</span>
			</form>
			<h1>{email}</h1>
			<h1>{phone}</h1>
		</>
	);
}
