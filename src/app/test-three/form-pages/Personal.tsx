import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { setName, setNidSmartCard } from "@/redux/slices/formSlice";
import { setNameError, setNidSmartCardError } from "@/redux/slices/formErrorSlice";
import { nextPage } from "@/redux/slices/currentPageSlice";
import { useState } from "react";
import { updateUser, findUser } from "@/actions/user-actions";

export default function Personal() {
	const email = useAppSelector((state) => state.form.email);

	const name = useAppSelector((state) => state.form.personal.name);
	const nidSmartCard = useAppSelector((state) => state.form.personal.nidSmartCard);

	const nameError = useAppSelector((state) => state.formError.nameError);
	const nidSmartCardError = useAppSelector((state) => state.formError.nidSmartCardError);

	const dispatch = useAppDispatch();

	const [loading, setLoading] = useState("");

	const validateName = (name: string) => {
		if (!name.trim() || name.trim() === "" || name.trim() === null) {
			dispatch(setNameError("Name can't be empty"));
			return false;
		} else {
			dispatch(setNameError(""));
			return true;
		}
	};

	const validateNidSmartCard = (nidSmartCard: string) => {
		if (!nidSmartCard.trim() || nidSmartCard.trim() === "" || nidSmartCard.trim() === null) {
			dispatch(setNidSmartCardError("NID/SmartCard number can't be empty"));
			return false;
		} else if (!/^\d+$/.test(nidSmartCard.trim())) {
			dispatch(setNidSmartCardError("Please enter a valid NID/SmartCard number"));
			return false;
		} else {
			dispatch(setNidSmartCardError(""));
			return true;
		}
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading((l) => (l = "Loading..."));
		if (validateName(name) && validateNidSmartCard(nidSmartCard)) {
			await updateUser(email.trim().toLowerCase(), {
				personal: {
					name: name.trim(),
					nidSmartCard: nidSmartCard.trim(),
				},
			});
			dispatch(nextPage());
		}
		setLoading((l) => (l = ""));
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-5" action="" method="">
			<input
				type="text"
				name="name"
				id="name"
				placeholder="name"
				value={name}
				onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
					dispatch(setName(event.target.value))
				}
			/>
			<span>{nameError}</span>
			<input
				type="text"
				name="nidSmartCard"
				id="nidSmartCard"
				placeholder="nidSmartCard"
				value={nidSmartCard}
				onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
					dispatch(setNidSmartCard(event.target.value))
				}
			/>
			<span>{nidSmartCardError}</span>
			<button type="submit">Next</button>
			<span>{loading}</span>
		</form>
	);
}
