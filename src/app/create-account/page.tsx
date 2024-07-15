"use client";
import addUser from "@/actions/user-actions";
import { useState } from "react";

const CreateAccount: React.FC = () => {
    const [errorMessage, setErrorMessage] = useState({
        nameError: "",
        nidSmartCardError: ""
    });

    const [formData, setFormData] = useState({
        name: "",
        nidSmartCard: ""
    });

    const validateForm = (formData: any) => {
        let validity = true;

        if (formData.name.trim() === "" || formData.name.trim() === null) {
            setErrorMessage(e => ({
                ...e,
                nameError: "Name is required"
            }));
            validity = false;
        } else {
            setErrorMessage(e => ({
                ...e,
                nameError: ""
            }));
        }
        if (formData.nidSmartCard.trim() === "" || formData.nidSmartCard.trim() === null) {
            setErrorMessage(e => ({
                ...e,
                nidSmartCardError: "NID is required"
            }));
            validity = false;
        } else {
            setErrorMessage(e => ({
                ...e,
                nidSmartCardError: ""
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
            addUser(formData);
            console.log("good");
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
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange} />
                <span>{errorMessage.nameError}</span>
                <br />
                <input
                    className="border-2 border-black"
                    type="text"
                    name="nidSmartCard"
                    id="nidSmartCard"
                    value={formData.nidSmartCard}
                    onChange={handleChange} />
                <span>{errorMessage.nidSmartCardError}</span>
                <br />
                <button>Proceed</button>
            </form>
            <h1>{formData.name}</h1>
            <h1>{formData.nidSmartCard}</h1>
        </>
    );
};

export default CreateAccount;