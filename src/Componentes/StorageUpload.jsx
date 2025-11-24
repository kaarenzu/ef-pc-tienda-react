import React, { useState } from "react";
import { storage } from "../services/firebaseConfig";
import { ref, uploadBytes } from "firebase/storage";
import "bootstrap/dist/css/bootstrap.min.css";

const StorageUpload = () => {
    const [archivo, setArchivo] = useState(null);
    const [mensaje, setMensaje] = useState("");

    const subirArchivo = async () => {
        if (!archivo) return setMensaje("⚠ Selecciona un archivo primero");

        const archivoRef = ref(storage, `archivos/${archivo.name}`);

        try {
            await uploadBytes(archivoRef, archivo);
            setMensaje("🎉 Archivo subido correctamente");
        } catch (error) {
            setMensaje("❌ Error: " + error.message);
        }
    };

    return (
        <div className="container mt-4 col-md-6">
            <h3>Subir archivo al Storage</h3>

            {mensaje && <div className="alert alert-info">{mensaje}</div>}

            <input
                type="file"
                className="form-control mb-3"
                onChange={(e) => setArchivo(e.target.files[0])}
            />

            <button onClick={subirArchivo} className="btn btn-primary w-100">
                Subir al Storage
            </button>
        </div>
    );
};

export default StorageUpload;
