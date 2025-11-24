import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseConfig";
import "bootstrap/dist/css/bootstrap.min.css";

const Registro = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mensaje, setMensaje] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setMensaje("Usuario registrado correctamente 🎉");
            setEmail("");
            setPassword("");
        } catch (error) {
            setMensaje(error.message);
        }
    };

    return (
        <div className="container mt-4 col-md-6">
            <h3>Registro</h3>

            {mensaje && <div className="alert alert-info">{mensaje}</div>}

            <form onSubmit={handleRegister}>
                <div className="mb-3">
                    <label className="form-label">Correo electrónico</label>
                    <input
                        type="email"
                        className="form-control"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Contraseña (mínimo 6 caracteres)</label>
                    <input
                        type="password"
                        className="form-control"
                        required
                        minLength={6}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button className="btn btn-primary w-100">Crear cuenta</button>
            </form>
        </div>
    );
};

export default Registro;
