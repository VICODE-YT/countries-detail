import React from 'react';
import '../styles/index.css'

import CardInfoRow from './CardInfoRow';

function CountryCard(props) {

    const { countryName, population,region, capital} = props;
    
    return (
        <div className="country-card">
            <img alt ={"flag-image"}></img>
            <div className="country-card__content">
                <span className="content__country-name">{countryName}</span>
                <CardInfoRow 
                    titleInfo= {"Population"}
                    descriptionInfo={population}                
                />
                <CardInfoRow
                    
                    titleInfo= "Region"
                    descriptionInfo= {region}            
                />
                <CardInfoRow
                    titleInfo = "Capital"
                    descriptionInfo = {capital}                
                />
            </div>
        </div>
    );
}

CountryCard.defaultProps = {
    countryName : "Country_Name", 
    population : "12345 popNum",
    region : "Name Region ", 
    capital : "Coutnry Capital "
}


export default CountryCard;