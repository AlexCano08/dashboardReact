import React, { useEffect, useState } from "react";
import ChartRow from "./ChartRow";


function Chart() {
    let [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3030/api/products")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.products);
                console.log(data.products[0].Category.name)
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <h1>Productos</h1>
                    <table
                        className="table table-bordered"
                        id="dataTable"
                        width="100%"
                        cellSpacing="0"
                    >
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Imagen</th>
                                <th>Color</th>
                                <th>Precio</th>
                                <th>Categoria</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((row, i) => {
                                return <ChartRow {...row} key={i} />;
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Chart