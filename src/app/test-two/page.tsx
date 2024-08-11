"use client";
import { useState } from "react";
import Initial from "./pages/initial";
import Personal from "./pages/personal";

export default function TestTwo() {
	const [currentPage, setCurrentPage] = useState(0);

	const prevPage = () => {
		setCurrentPage((c) => c - 1);
	};

	const nextPage = () => {
		setCurrentPage((c) => c + 1);
	};

	const formPages = [<Initial nextPage={nextPage} />, <Personal />];

	return (
		<>
			<div className="flex flex-col gap-5 w-96 bg-pink-200 p-5">
				<h1>FORM</h1>
				{formPages[currentPage]}
			</div>
		</>
	);
}
