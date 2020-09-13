import React from 'react';
import '../styles/index.css'

import CardInfoRow from './CardInfoRow';

class CountryCard extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        const { name, population, region, capital,flagURL } = this.props;

        return (
            <div className="country-card element-floating ">
                <img src={flagURL} loading="lazy" alt={"flag"} className="country-card__flag"></img>
                <div className="country-card__container-info">
                    <div className="container-info__content">

                        <div className="content__country-name">{name}</div>
                        <div className="country-country-info-rows">
                            <CardInfoRow
                                titleInfo={"Population"}
                                descriptionInfo={population}
                            />
                            <CardInfoRow

                                titleInfo="Region"
                                descriptionInfo={region}
                            />
                            <CardInfoRow
                                titleInfo="Capital"
                                descriptionInfo={capital}
                            />
                        </div>
                    </div>
            
                </div>
            </div>
        );
    }
    
}

CountryCard.defaultProps = {
    name : "Country_Name", 
    population : "Population",
    region: "Region_Name", 
    capital : "Capital "
}


export default CountryCard;