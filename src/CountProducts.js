import React, { useEffect, useState } from "react";

function CountProducts() {
    let [count, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3030/api/products")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.count);

            })
            .catch((error) => console.log(error));
    }, []);

    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">




            <h1>Cantidad total del Productos</h1>
            <p>{count}</p>



        </div>
    );
}

export default CountProducts