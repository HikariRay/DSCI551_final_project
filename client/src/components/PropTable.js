import React from 'react';

export default function PropTable({prop}){
    //console.log(prop)
    return(
        <tr>
            <td>{prop.name}</td>
            <td>{prop.neighbourhood_group}</td>
            <td>{prop.felony}</td>
            <td>{prop.misdemeanor}</td>
            <td>{prop.violation}</td>
        </tr>
    )
}