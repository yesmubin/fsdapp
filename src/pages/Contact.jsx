import { useState } from "react";

function Contact() {
    const [name, setName] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        alert(`Thank you, ${name}!`);
    }

    return (
        <section className="page">
            <h1>Contact Us</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(event) =>
                        setName(event.target.value)
                    }
                />

                <button type="submit">
                    Submit
                </button>

            </form>
        </section>
    );
}

export default Contact;
