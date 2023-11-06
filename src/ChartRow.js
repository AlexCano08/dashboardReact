import React from 'react';


function ChartRow(props) {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.description}</td>
            <td>{props.image}</td>
            <td>{props.color}</td>
            <td>{props.price}</td>
            <td>{props.Category.name}</td>
        </tr>
    )
}



export default ChartRow;