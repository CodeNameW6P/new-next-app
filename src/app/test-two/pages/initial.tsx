"use client";
import { eventNames } from "process";
import { useState } from "react";

const Initial: React.FC = () => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [error, setError] = useState({
        emailError: "",
        phoneError: ""
    });

    const [formData, setFormData] = useState({
        email: "",
        phone: ""
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (email.trim().toLowerCase() === "" || email.trim().toLowerCase() === null) {
            setError(e => ({
                ...e,
                emailError: "Email field can not be empty"
            }));
        } else if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email.trim().toLowerCase())) {
            setError(e => ({
                ...e,
                emailError: "Please enter a valid email"
            }));
        } else {
            setFormData(f => ({
                ...f,
                email: email.trim().toLowerCase()
            }));

            setError(e => ({
                ...e,
                emailError: ""
            }));
        }
    };

    return (
        <>
            <form className="flex flex-col gap-2" name="initial" id="initial" onSubmit={handleSubmit} action="">
                <input className="border-2 border-black"
                    type="text"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(event: any) => setEmail(e => e = event.target.value)} />
                <span>{error.emailError}</span>
                <input className="border-2 border-black"
                    type="text"
                    name="phone"
                    id="phone"
                    value={phone}
                    onChange={(event: any) => setPhone(p => p = event.target.phone)} />
                <span>{error.phoneError}</span>
                <button type="submit">Enter</button>
            </form>
            <h1>{formData.email}</h1>
            <h1>{phone}</h1>
        </>
    );
};

export default Initial;