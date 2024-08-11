import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { setProfession, setMonthlyIncome } from "@/redux/slices/formSlice";
import { findUser, updateDPS } from "@/actions/user-actions";
import { useState } from "react";

export default function Income() {
	const email = useAppSelector((state) => state.form.email);

	const profession = useAppSelector((state) => state.form.income.profession);
	const monthlyIncome = useAppSelector((state) => state.form.income.monthlyIncome);

	const dispatch = useAppDispatch();

	const [loading, setLoading] = useState("");

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading((l) => (l = "Loading..."));
		const user = await findUser({ email: email.trim().toLowerCase() });
		const dpsLength = user.dps.length;
		if (dpsLength === 0) {
			await updateDPS(email.trim().toLowerCase(), 0, {
				income: {
					profession: profession.trim(),
					monthlyIncome: monthlyIncome.trim(),
				},
			});
		} else if (user.dps[dpsLength - 1].complete === false) {
			await updateDPS(email.trim().toLowerCase(), dpsLength - 1, {
				income: {
					profession: profession.trim(),
					monthlyIncome: monthlyIncome.trim(),
				},
			});
		} else {
			await updateDPS(email.trim().toLowerCase(), dpsLength, {
				income: {
					profession: profession.trim(),
					monthlyIncome: monthlyIncome.trim(),
				},
			});
		}
		setLoading((l) => (l = ""));
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-5" action="" method="">
			<input
				type="text"
				name="profession"
				id="profession"
				placeholder="profession"
				value={profession}
				onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
					dispatch(setProfession(event.target.value))
				}
			/>
			<input
				type="text"
				name="monthlyIncome"
				id="monthlyIncome"
				placeholder="monthlyIncome"
				value={monthlyIncome}
				onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
					dispatch(setMonthlyIncome(event.target.value))
				}
			/>
			<button type="submit">Next</button>
			<span>{loading}</span>
		</form>
	);
}
