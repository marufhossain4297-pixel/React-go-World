import React, { use } from 'react';
import Country from './country/Country';

const Countries = ({countriesPromies}) => {

    const countiesData = use(countriesPromies)
    const countries = countiesData.countries

    return (
        <div>
            <h1>Countries: {countries.length}</h1>
            {
                countries.map(country=> <Country key={country.cca3.cca3} country = {country} ></Country>)
            }
        </div>
    );
};

export default Countries;