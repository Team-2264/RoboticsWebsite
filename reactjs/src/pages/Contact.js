import Footer from "../components/footer";
import NavBar from "../components/NavBar";
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

export default function Contact() {
    const [name, setName] = useState("");
    return (
        <div>
            <NavBar />
            <h1>Contact page needs some work to be done.</h1>
            {/* <div>
                <form>
                    <label>Enter your name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                </form>

            </div> */}
        </div>
    )
}

