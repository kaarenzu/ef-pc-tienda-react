import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseConfig";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mensaje, setMensaje] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            setMensaje("Inicio de sesión exitoso ✔");
        } catch (error) {
            setMensaje("❌ " + error.message);
        }
    };

    return (
        <div className="container mt-4 col-md-6">
            <h3>Iniciar sesión</h3>

            {mensaje && <div className="alert alert-warning">{mensaje}</div>}

            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label className="form-label">Correo electrónico</label>
                    <input
                        type="email"
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button className="btn btn-success w-100">Ingresar</button>
            </form>
        </div>
    );
};

export default Login;
