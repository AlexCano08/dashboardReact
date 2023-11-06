import React, { useEffect, useState } from "react";
import ChartRowUsers from "./ChartRowUsers";


function ChartUsers() {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3030/api/users")
            .then((response) => response.json())
            .then((data) => {
                setUsers(data.data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <h1>Usuarios</h1>
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
                                <th>Apellido</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((row, i) => {
                                return <ChartRowUsers {...row} key={i} />;
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ChartUsers