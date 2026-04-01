import React, { use, useState } from 'react';
import Country from './country/Country';
import './countries.css'

const Countries = ({ countriesPromies }) => {

    const [visitedCountries, setVisitedCountries] = useState([])

    const handleVisitedCountry = (country) =>{
        console.log('visited', country)
    }

    const countiesData = use(countriesPromies)
    const countries = countiesData.countries

    const text ={
        fontSize: '35px',
        fontweight: 'bold'
    }

    return (
        <div>
            <h1 style={text} className='bungee-regular'>Countries: {countries.length}</h1>
            <h3 className='bungee-regular'>Total country visited: {visitedCountries.length}</h3>
            <div id='countries'>
                {
                    countries.map(country => <Country key={country.cca3.cca3} handleVisitedCountry={handleVisitedCountry} country={country} ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;