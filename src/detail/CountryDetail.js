import React from 'react';
import '../styles/index.css'

import CardInfoRow from '../shared/CardInfoRow';
import CountryNameButton from './CountryNameButton'
import Tittle from '../shared/Tittle';
import ButtonBack from '../shared/ButtonBack';





class CountryDetail extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name:props.match.params.name,
            countryDetail:null,
        }
    }
     componentDidMount(){
        
        let getCountry = async ()=>{
            /* SET STATE to change or refresh the data from rest api*/
            if (!this.countryDetailCache.hasOwnProperty('languajes')) {
                let data = await fetch(`https://restcountries.eu/rest/v2/name/${this.state.name}?fields=nativeName;subregion;topLevelDomain;currencies;languages;borders`)
                console.log(data);
                let dataJ = await data.json();
                for(let d of dataJ){
                    let cache = this.countryDetailCache;
                    let F = Object.assign(cache, d );
                    this.setState({ countryDetail: F})
                }

            }
        }
      
        getCountry();
        
    }
    render(){
 
        let countriesLocal = JSON.parse(localStorage.getItem('countriesPreview'));
        this.countryDetailCache = {};
        for (let countryLocal of countriesLocal) {
            if (countryLocal.name === this.state.name) {
                this.countryDetailCache = countryLocal;
            }
        }

/*         console.log(this.match);
 */
        if(this.state.countryDetail){
            return (
                <div className="country-detail-container">
                    <ButtonBack />
                    <div className="country-detail__info-container">
                        <img className="info-container__flag-big" src={this.state.countryDetail.flag}></img>
                        <div className="info-container__total-description">
                            <div className="total-description__info">
                                <Tittle tittle={this.state.countryDetail.name} forNavbar={true}></Tittle>
                                <div className="info__detail-container">
                                    <div className="detail-container__geography-info">
                                        <CardInfoRow
                                            titleInfo="Native Name"
                                            descriptionInfo={this.state.countryDetail.nativeName}
                                        />
                                        <CardInfoRow
                                            titleInfo="Population"
                                            descriptionInfo={this.state.countryDetail.population}
                                        />
                                        <CardInfoRow
                                            titleInfo="Region"
                                            descriptionInfo={this.state.countryDetail.region}
                                        />
                                        <CardInfoRow
                                            titleInfo="Sub Region"
                                            descriptionInfo={this.state.countryDetail.subregion}
                                        />
                                        <CardInfoRow
                                            titleInfo="Capital"
                                            descriptionInfo={this.state.countryDetail.capital}
                                        />
                                    </div>

                                    <div className="detail-container__micellanious-info">
                                        <CardInfoRow
                                            titleInfo="Top Level Domain"
                                            descriptionInfo={"this.state.countryDetail.topLevelDomain"}
                                        />
                                        <CardInfoRow
                                            titleInfo="Currencies"
                                            descriptionInfo={"this.state.countryDetail.currencies"}
                                        />
                                        <CardInfoRow
                                            titleInfo="Languages"
                                            descriptionInfo={this.state.countryDetail.languages[0].name}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="total-description__border-countries">
                                <CardInfoRow titleInfo="Border countries" descriptionInfo="" />
                                <CountryNameButton country={"France"} />
                                <CountryNameButton country={"Germany"} />
                                <CountryNameButton country={"Netherlands"} />
                            </div>
                        </div>
                    </div>
                </div>

            );

        }
        return (
            <div className="country-detail-container">
                <ButtonBack />
                <div className="country-detail__info-container">
                    <img className="info-container__flag-big" src={this.countryDetailCache.flag}></img>
                    <div className="info-container__total-description">
                        <div className="total-description__info">
                            <Tittle tittle={this.state.name} forNavbar={true}></Tittle>
                            <div className="info__detail-container">
                                <div className="detail-container__geography-info">
                                    <CardInfoRow
                                        titleInfo="Native Name"
                                        descriptionInfo="AAAAA"
                                    />
                                    <CardInfoRow
                                        titleInfo="Population"
                                        descriptionInfo={this.countryDetailCache.population}
                                    />
                                    <CardInfoRow
                                        titleInfo="Region"
                                        descriptionInfo={this.countryDetailCache.region}
                                    />
                                    <CardInfoRow
                                        titleInfo="Sub Region"
                                        descriptionInfo="WEWEWE"
                                    />
                                    <CardInfoRow
                                        titleInfo="Capital"
                                        descriptionInfo={this.countryDetailCache.capital}
                                    />
                                </div>

                                <div className="detail-container__micellanious-info">
                                    <CardInfoRow
                                        titleInfo="Top Level Domain"
                                        descriptionInfo=".aaaaaa"
                                    />
                                    <CardInfoRow
                                        titleInfo="Currencies"
                                        descriptionInfo="EEEAA"
                                    />
                                    <CardInfoRow
                                        titleInfo="Languajes"
                                        descriptionInfo="AEWAWE"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="total-description__border-countries">
                            <CardInfoRow titleInfo="Border countries" descriptionInfo="" />
                            <CountryNameButton country={"France"} />
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