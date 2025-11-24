import React, { Component } from "react";
import SimpleReactValidator from "simple-react-validator";
import { db } from "../../services/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

class Formulario extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nombre: "",
            correo: "",
            mensaje: "",
            enviado: false
        };

        this.validator = new SimpleReactValidator();
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    guardarEnFirebase = async () => {
        try {
            await addDoc(collection(db, "formularioContactos"), {
                nombre: this.state.nombre,
                correo: this.state.correo,
                mensaje: this.state.mensaje,
                fecha: new Date().toLocaleString()
            });

            this.setState({ enviado: true, nombre: "", correo: "", mensaje: "" });
        } catch (error) {
            console.log("Error al guardar:", error);
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.validator.allValid()) {
            this.guardarEnFirebase();
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    };

    render() {
        return (
            <div className="container mt-4">
                <h3>Formulario de Contacto</h3>

                <form onSubmit={this.handleSubmit} className="border p-4 shadow rounded">

                    <div className="mb-3">
                        <label>Nombre:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="nombre"
                            value={this.state.nombre}
                            onChange={this.handleChange}
                        />
                        <span className="text-danger">
                            {!this.state.enviado && this.validator.message("nombre", this.state.nombre, "required|min:3")}
                        </span>
                    </div>

                    <div className="mb-3">
                        <label>Correo:</label>
                        <input
                            type="email"
                            className="form-control"
                            name="correo"
                            value={this.state.correo}
                            onChange={this.handleChange}
                        />
                        <span className="text-danger">
                            {!this.state.enviado && this.validator.message("correo", this.state.correo, "required|email")}
                        </span>
                    </div>

                    <div className="mb-3">
                        <label>Mensaje:</label>
                        <textarea
                            className="form-control"
                            name="mensaje"
                            value={this.state.mensaje}
                            onChange={this.handleChange}
                        ></textarea>
                        <span className="text-danger">
                            {!this.state.enviado && this.validator.message("mensaje", this.state.mensaje, "required|min:10")}
                        </span>
                    </div>

                    <button className="btn btn-primary w-100" type="submit">
                        Enviar
                    </button>
                </form>

                {this.state.enviado && (
                    <div className="alert alert-success mt-3">
                        Datos enviados y guardados en Firebase correctamente
                    </div>
                )}
            </div>
        );
    }
}

export default Formulario;
