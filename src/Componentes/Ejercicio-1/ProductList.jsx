import React, { Component } from "react";
import ProductItem from "./Productos";

class ProductList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            carrito: [],
            productos: [
                { id: 1, nombre: "Notebook", precio: 500000 },
                { id: 2, nombre: "Mouse", precio: 20000 },
                { id: 3, nombre: "Teclado", precio: 30000 },
            ]
        };
    }

    agregarAlCarrito = (producto) => {
        this.setState({
            carrito: [...this.state.carrito, producto]
        });
    };

    calcularTotal = () => {
        return this.state.carrito.reduce((acc, item) => acc + item.precio, 0);
    };

    render() {
        return (
            <div>
                <h3>Lista de Productos</h3>
                <div className="row">
                    {this.state.productos.map((prod) => (
                        <div className="col-md-4 mb-3" key={prod.id}>
                            <ProductItem
                                producto={prod}
                                onAdd={this.agregarAlCarrito}
                            />
                        </div>
                    ))}
                </div>

                <h3 className="mt-4">Carrito</h3>
                <ul className="list-group">
                    {this.state.carrito.map((item, index) => (
                        <li className="list-group-item" key={index}>
                            {item.nombre} - ${item.precio}
                        </li>
                    ))}
                </ul>

                {this.state.carrito.length > 0 && (
                    <div className="alert alert-info mt-3">
                        <strong>Total:</strong> ${this.calcularTotal()}
                    </div>
                )}
            </div>
        );
    }
}

export default ProductList;
