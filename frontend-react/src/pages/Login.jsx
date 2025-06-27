import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/login`, {
                email,
                password,
            });

            localStorage.setItem("token", res.data.token);
            navigate("/"); // presmeruj na homepage
        } catch (err) {
            alert("Chyba prihlásenia");
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <h2>Prihlásenie</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            /><br />
            <input
                type="password"
                placeholder="Heslo"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            /><br />
            <button type="submit">Prihlásiť sa</button>
        </form>
    );
}
