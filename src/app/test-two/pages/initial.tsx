import { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { setEmail, setPhone } from "@/redux/slices/formSlice";
import addUser from "@/actions/user-actions";

export default function Initial(props: any) {
	const email = useAppSelector((state) => state.form.email);
	const phone = useAppSelector((state) => state.form.phone);

	const dispatch = useAppDispatch();

	const [error, setError] = useState({
		emailError: "",
		phoneError: "",
	});

	const validateEmail = (email: string) => {
		if (
			email.trim().toLowerCase() === "" ||
			email.trim().toLowerCase() === null
		) {
			setError((e) => ({
				...e,
				emailError: "Email field can not be empty",
			}));
			return false;
		} else if (
			!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim().toLowerCase())
		) {
			setError((e) => ({
				...e,
				emailError: "Please enter a valid email",
			}));
			return false;
		} else {
			setError((e) => ({
				...e,
				emailError: "",
			}));
			return true;
		}
	};

	const validatePhone = (phone: string) => {
		if (!phone.trim() || phone.trim() === "" || phone.trim() === null) {
			setError((e) => ({
				...e,
				phoneError: "Phone number field can not be empty",
			}));
			return false;
		} else if (!/^\d+$/.test(phone.trim())) {
			setError((e) => ({
				...e,
				phoneError: "Please enter a valid phone number",
			}));
			return false;
		} else {
			setError((e) => ({
				...e,
				phoneError: "",
			}));
			return true;
		}
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (validateEmail(email) && validatePhone(phone)) {
			console.log(
				await addUser({
					email: email.trim().toLowerCase(),
					phone: phone.trim(),
				})
			);
			// props.nextPage();
		} else {
			console.log("invalid inputs");
		}
	};

	return (
		<>
			<h1>initial</h1>
			<form
				className="flex flex-col gap-2"
				onSubmit={handleSubmit}
				action=""
			>
				<input
					type="text"
					name="email"
					id="email"
					placeholder="email"
					value={email}
					onChange={(event: any) =>
						dispatch(setEmail(event.target.value))
					}
				/>
				<span>{error.emailError}</span>
				<input
					type="text"
					name="phone"
					id="phone"
					placeholder="phone"
					value={phone}
					onChange={(event: any) =>
						dispatch(setPhone(event.target.value))
					}
				/>
				<span>{error.phoneError}</span>
				<button type="submit">Enter</button>
			</form>
			<h1>{email}</h1>
			<h1>{phone}</h1>
		</>
	);
}
