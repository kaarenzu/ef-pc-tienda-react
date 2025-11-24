import React, { useState } from "react";
import Login from "./FormBootstrap";
import Registro from "./Login";

const AuthContainer = () => {
    const [vista, setVista] = useState("login");

    return (
        <div>
            {vista === "login" && (
                <>
                    <Login />
                    <button
                        className="btn btn-link mt-3"
                        onClick={() => setVista("registro")}
                    >
                        ¿No tienes cuenta? Registrar usuario
                    </button>
                </>
            )}

            {vista === "registro" && (
                <>
                    <Registro />
                    <button
                        className="btn btn-link mt-3"
                        onClick={() => setVista("login")}
                    >
                        ← Ya tengo cuenta, iniciar sesión
                    </button>
                </>
            )}
        </div>
    );
};

export default AuthContainer;
