import React, { useState } from 'react';
import './country.css'
const Country = ({country, handleVisitedCountry}) => {
    const [visited, setVisited] = useState(false)
    const image = {
        borderRadius:'20px'
    }
    const hendleVisite = () => {
        // if(visited == true){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }

        //or
        // setVisited(visited ? false : true)

        //or
        setVisited(!visited)
        handleVisitedCountry(country)
    }
    return (
        <div className={`country ${visited && 'country-visited'} bungee-regular`}>
            <img style={image} src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h3>Name: <span className='span'>{country.name.common}</span></h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area >  300000 ? 'Big Country' : 'Small Country'} </p>
            <button onClick={hendleVisite} className={`${visited ? 'btn-visited' : 'btn'}`}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>
        </div>
    );
};

export default Country;