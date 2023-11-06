import React, { useEffect, useState } from "react";

function CountByCategory() {
    let [countByCategory, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3030/api/products")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.countByCategory);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">

                    <h1>Total de Productos por Categoria</h1>
                    <h3>Mujer</h3>
                    <p>{countByCategory.Mujer}</p>
                    <h3>Hombre</h3>
                    <p>{countByCategory.Hombre}</p>
                    <h3>Accesorios</h3>
                    <p>{countByCategory.Accesorios}</p>



                </div>
            </div>
        </div>
    );
}

export default CountByCategory