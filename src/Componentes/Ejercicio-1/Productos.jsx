import React, { Component } from "react";

class ProductItem extends Component {
    render() {
        const { producto, onAdd } = this.props;

        return (
            <div className="card p-3 shadow-sm">
                <h5>{producto.nombre}</h5>
                <p className="text-muted">${producto.precio}</p>

                <button
                    className="btn btn-success w-100"
                    onClick={() => onAdd(producto)}
                >
                    Agregar al carrito
                </button>
            </div>
        );
    }
}

export default ProductItem;
