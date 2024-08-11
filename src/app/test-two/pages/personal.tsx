import { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";

export default function Personal() {
	const [name, setName] = useState("");
	const [nidSmartCard, setNidSmartCard] = useState("");

	const [error, setError] = useState({
		nameError: "",
		nidSmartCardError: "",
	});

	const validateName = (name: string) => {
		if (!name.trim() || name.trim() === "" || name.trim() === null) {
			setError((e) => ({
				...e,
				nameError: "Name field can't be empty",
			}));
			return false;
		} else {
			setError((e) => ({
				...e,
				nameError: "",
			}));
			return true;
		}
	};

	const validateNidSmartCard = (nidSmartCard: string) => {
		if (
			!nidSmartCard.trim() ||
			nidSmartCard.trim() === "" ||
			nidSmartCard.trim() === null
		) {
			setError((e) => ({
				...e,
				nidSmartCardError: "NID/SmartCard number field can't be empty",
			}));
			return false;
		} else {
			setError((e) => ({
				...e,
				nidSmartCardError: "",
			}));
			return true;
		}
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (validateName(name) && validateNidSmartCard(nidSmartCard)) {
			console.log("good");
		} else {
			console.log("bad");
		}
	};

	return (
		<>
			<h1>personal</h1>
			<form
				className="flex flex-col gap-2"
				onSubmit={handleSubmit}
				action=""
			>
				<input
					type="text"
					name="name"
					id="name"
					placeholder="name"
					value={name}
					onChange={(event: any) => {
						setName((n) => (n = event.target.value));
					}}
				/>
				<span>{error.nameError}</span>
				<input
					type="text"
					name="nidSmartCard"
					id="nidSmartCard"
					placeholder="nidSmartCard"
					value={nidSmartCard}
					onChange={(event: any) => {
						setNidSmartCard((n) => (n = event.target.value));
					}}
				/>
				<span>{error.nidSmartCardError}</span>
				<button type="submit">Next</button>
			</form>
		</>
	);
}
