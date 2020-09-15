import React from 'react';
import '../styles/index.css'

import CardInfoRow from '../shared/CardInfoRow';
import CountryNameButton from './CountryNameButton'
import Tittle from '../shared/Tittle';
import ButtonBack from '../shared/ButtonBack';





class CountryDetail extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="country-detail-container">
                <ButtonBack/>
                <div className="country-detail__info-container">
                    <img className="info-container__flag-big" src="https://restcountries.eu/data/bel.svg"></img>
                    <div className="info-container__total-description">
                        <div className="total-description__info">
                            <Tittle tittle={"Belgium"}></Tittle>
                            <div className="info__detail-container">
                                <div className="detail-container__geography-info">
                                    <CardInfoRow 
                                    titleInfo="Native Name"
                                    descriptionInfo="Belgie"
                                    />
                                    <CardInfoRow
                                        titleInfo="Population"
                                        descriptionInfo="213124"
                                    />
                                    <CardInfoRow
                                        titleInfo="Region"
                                        descriptionInfo="Europe"
                                    />
                                    <CardInfoRow
                                        titleInfo="Sub Region"
                                        descriptionInfo="Western Europe"
                                    />
                                    <CardInfoRow
                                        titleInfo="Capital"
                                        descriptionInfo="Brussels"
                                    />
                                </div>
                                
                                <div className="detail-container__micellanious-info">
                                    <CardInfoRow
                                        titleInfo="Top Level Domain"
                                        descriptionInfo=".be"
                                    />
                                    <CardInfoRow
                                        titleInfo="Currencies"
                                        descriptionInfo="Euro"
                                    />
                                    <CardInfoRow
                                        titleInfo="Languajes"
                                        descriptionInfo="Dutch, French, German"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="total-description__border-countries">                    
                            <CardInfoRow titleInfo="Border countries" descriptionInfo=""/>
                            <CountryNameButton country={"France"}/>
                            <CountryNameButton country={"Germany"} />
                            <CountryNameButton country={"Netherlands"} />
                        </div>
                    </div>
                </div>
            </div>
            
        );
            
    }

}

export default CountryDetail;