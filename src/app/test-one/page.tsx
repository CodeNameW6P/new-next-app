"use client";
import addUser from "@/actions/user-actions";
import { useState } from "react";

const TestOne: React.FC = () => {
    const [errorMessage, setErrorMessage] = useState({
        emailError: "",
        phoneError: ""
    });

    const [formData, setFormData] = useState({
        email: "",
        phone: ""
    });

    const validateForm = (formData: any) => {
        let validity = true;

        if (formData.email.trim() === "" || formData.email.trim() === null) {
            setErrorMessage(e => ({
                ...e,
                emailError: "Email is required"
            }));
            validity = false;
        } else {
            setErrorMessage(e => ({
                ...e,
                emailError: ""
            }));
        }
        if (formData.phone.trim() === "" || formData.phone.trim() === null) {
            setErrorMessage(e => ({
                ...e,
                phoneError: "Phone number is required"
            }));
            validity = false;
        } else if ((/^\d+$/).test(formData.phone.trim()) === false) {
            setErrorMessage(e => ({
                ...e,
                phoneError: "Please enter a valid phone number"
            }));
            validity = false;
        } else {
            setErrorMessage(e => ({
                ...e,
                phoneError: ""
            }));
        }

        return validity;
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(f => ({
            ...f,
            [event.target.name]: event.target.value
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const validity = validateForm(formData);
        if (validity === true) {
            console.log(formData);
        } else {
            console.log("bad");
        }
    };

    return (
        <>
            <h1>Create account</h1>
            <form onSubmit={handleSubmit} action="">
                <input
                    className="border-2 border-black"
                    type="text"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange} />
                <span>{errorMessage.emailError}</span>
                <br />
                <input
                    className="border-2 border-black"
                    type="text"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange} />
                <span>{errorMessage.phoneError}</span>
                <br />
                <button>Proceed</button>
            </form>
            <h1>{formData.email}</h1>
            <h1>{formData.phone}</h1>
        </>
    );
};

export default TestOne;