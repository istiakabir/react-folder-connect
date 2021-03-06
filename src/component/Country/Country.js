import React, { useEffect, useState } from 'react';
import './Country.css'
import SingleCountry from '../SingleCountry/SingleCountry';

const Country = () => {

    const [countries, setCountries] = useState([]);
    useEffect( () => {

        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))

    },[])

    return (
        <div className='country'>
            {
                countries.map( country => <SingleCountry 
                    country={country}
                    key={country.cca3}
                    // name={country.name.common} 
                    // population={country.population}
                    ></SingleCountry>)
            }
            
        </div>
    );
};

export default Country;