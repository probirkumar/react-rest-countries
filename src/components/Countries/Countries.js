import React, { useEffect, useState } from 'react';
import './Countries.css'
import Country from '../Country/Country';

const Countries = () => {
    const [Countries, setCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))

    }, [])

    return (
        <div>
            <h2>Countries Are Here: {Countries.length}</h2>
            {
                Countries.map(country => console.log(country))
            }
            {
                Countries.map(country => <Country country={country}></Country>)
            }
        </div>
    );
};

export default Countries;