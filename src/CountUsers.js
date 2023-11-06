import React, { useEffect, useState } from "react";

function CountUsers() {
    let [count, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3030/api/users")
            .then((response) => response.json())
            .then((data) => {
                setUsers(data.count);

            })
            .catch((error) => console.log(error));
    }, []);

    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">




            <h1>Cantidad total de Usuarios</h1>
            <p>{count}</p>



        </div>
    );
}

export default CountUsers