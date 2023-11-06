import React from 'react';


function ChartRowUsers(props) {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.last_name}</td>
            <td>{props.email}</td>
        </tr>
    )
}



export default ChartRowUsers;