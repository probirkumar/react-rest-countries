import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, population, area, region} = props.country;
    return (
        <div className='country'>
            <h2>Country Name: {name.common}</h2>
            <p>Population: {population}</p>
            <p><small>Area: {area}</small></p>
            <p>Region: {region}</p>
        </div>
    );
};

export default Country;