import React from 'react';
import {Link} from 'react-router-dom';
import "../styles/index.css";

import InputSearch from '../home/InputSearch';
import RegionChoiceBox from './RegionChoiceBox';
import CountryCard from './CountryCard';

import Data from '../data/Data.js'

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            dataPreviewReady:false,
            currentDataCountriesToShow:null,
        }
        this.dataPreview = null;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        console.log( "Handle change: " + e.target.value);
    }

    handleSubmit(e) {
        e.preventDefault();

        /* alert("Handle submit: " + e.target.country_search.value); */
        let userSubmitted = e.target.country_search.value;
        let dataPreviewReady = [];

        let countriesPreview = JSON.parse(localStorage.getItem('countriesPreview'));
        for(let country of countriesPreview){
            let userSubiteLower = userSubmitted.toLowerCase();
            let countryNameLower = country.name.toLowerCase();

            if (countryNameLower.startsWith(userSubiteLower)){
                dataPreviewReady[dataPreviewReady.length] = country;
            }
        }

        this.setState({
            currentDataCountriesToShow: dataPreviewReady,
        });

    }

    async componentDidMount() {
       
        let countriesPreview = JSON.parse( localStorage.getItem('countriesPreview') );

        let dataPreviewIsReady = true;/* if fails, then the value change */
        if(!countriesPreview){
            countriesPreview = await new Data().getAllCountries();
            /* Check if the fetch isnt empty */
            try {
                /* if fails, then there's no countries in the fetch*/
                let tryGetElement = countriesPreview[0];
                localStorage.setItem("countriesPreview", JSON.stringify(countriesPreview));
                this.dataPreview = countriesPreview;
                dataPreviewIsReady = true;

            } catch (error) {
                localStorage.setItem("countriesPreview", null);
                this.dataPreview = null; /* Explicit assignation */
                dataPreviewIsReady = false;
            }
        }
        this.setState({
            dataPreviewReady: dataPreviewIsReady,
            currentDataCountriesToShow: countriesPreview.slice(0, 8),
        });//data ready

    }


    render(){

        if (this.state.dataPreviewReady===false){
            return(
                <div className="home">
                    <div className="home__filter-search-container">
                        <InputSearch handleChange={this.handleChange} handleSubmit={this.handleSubmit} ></InputSearch>
                        <RegionChoiceBox></RegionChoiceBox>
                    </div>
                    <div className="home__countries-cards">
                        <CountryCard name={"Germany"} population={"987"} region = {"Marte"} capital = {"Vic_Capital"}></CountryCard>
                    </div>
                </div>

            );
        }else{
            /* When dataPreviewReady true, always will get into here, so 
            if wanna show other cards, it's only needed to modify currentDataCountriesToShow state property
            */
            let dataForCards = this.state.currentDataCountriesToShow;
            return (
                <div className="home">
                    <div className="home__filter-search-container">
                        <InputSearch handleChange={this.handleChange} handleSubmit = {this.handleSubmit} ></InputSearch>
                        <RegionChoiceBox></RegionChoiceBox>
                    </div>
                    <div className="home__countries-cards">
                        {dataForCards.map(function(element,index){
                            return(
                                <Link key={element.name /* FOr React */} to={`/Country-Detail/${element.name}`} style={{ textDecoration: 'none' }}>
                                    <CountryCard                     
                                        name={element.name} population={element.population}
                                        region={element.region} capital={element.capital} 
                                        flagURL={element.flag}
                                        >
                                    </CountryCard>
                                </Link>
                                
                            );
                             
                        })}
                    
                    </div>
                </div>

            );
        }
        
    }
    
}

export default Home;