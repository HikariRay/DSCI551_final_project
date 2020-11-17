import React from 'react';

export default function PropCrime({prop}){
    console.log(prop)
    return(
        <div>
            <h3>Name:{prop.name}</h3>
            <h3>Neighbourhood: {prop.neighbourhood_group}</h3>
            <h3>Number of Felony:{prop.felony}</h3>
            <h3>Number of Misdemeanor:{prop.misdemeanor}</h3>
            <h3>Number of Violation: {prop.violation}</h3>
        </div>
    )
}