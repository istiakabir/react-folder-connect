import React from 'react';
import './SingleCountry.css'

const SingleCountry = (props) => {
    return (
        <div className='singleCountry'>
            <img src={props.country.flags.png} alt="" />
            <h1>Country Name: {props.country.name.common}</h1>
            <h4>Population: {props.country.population}</h4>
            <h4>Area: {props.country.area}</h4>
            
        </div>
    );
};

export default SingleCountry;