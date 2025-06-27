import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/register`, {
        name,
        email,
        password,
        password_confirmation,
      });
      navigate("/login");
    } catch (err) {
      alert("Chyba registrácie");
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Registrácia</h2>
      <input type="text" placeholder="Meno" value={name} onChange={(e) => setName(e.target.value)} /><br />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
      <input type="password" placeholder="Heslo" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
      <input type="password" placeholder="Potvrď heslo" value={password_confirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} /><br />
      <button type="submit">Registrovať sa</button>
    </form>
  );
}