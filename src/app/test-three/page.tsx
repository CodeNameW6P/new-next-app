"use client";
import { useAppSelector } from "@/redux/hooks";
import Initial from "./form-pages/Initial";
import Personal from "./form-pages/Personal";
import Income from "./form-pages/Income";

export default function TestThree() {
	const currentPage = useAppSelector((state) => state.currentPage.value);

	const formPages = [<Initial />, <Personal />, <Income />];

	return (
		<>
			<div className="flex flex-col gap-5 bg-pink-300 p-5 w-96">
				<h1>{currentPage}</h1>
				<h1>~ F O R M ~</h1>
				{formPages[currentPage]}
			</div>
		</>
	);
}
