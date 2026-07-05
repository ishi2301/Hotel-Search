import { useState } from "react";

export default function Contact() {

    let [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    function handleInputChange(e) {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    }

    function handleSubmit(e) {

        e.preventDefault();

        console.log(formData);

        alert("Form Submitted Successfully");

        setFormData({
            name: "",
            email: "",
            message: ""
        });

    }

    return (

        <>

            <h1 style={{ textAlign: "center" }}>
                Contact Us
            </h1>

            <form
                onSubmit={handleSubmit}
                style={{
                    width: "400px",
                    margin: "30px auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px"
                }}
            >

                <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    style={{ padding: "10px" }}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={{ padding: "10px" }}
                />

                <textarea
                    name="message"
                    placeholder="Enter Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    style={{
                        padding: "10px",
                        height: "120px"
                    }}
                ></textarea>

                <input
                    type="submit"
                    value="Submit"
                    style={{
                        padding: "10px",
                        cursor: "pointer"
                    }}
                />

            </form>

        </>

    );

}