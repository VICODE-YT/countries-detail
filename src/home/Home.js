import React from 'react';
import "../styles/index.css"

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
                        <InputSearch ></InputSearch>
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
                        <InputSearch ></InputSearch>
                        <RegionChoiceBox></RegionChoiceBox>
                    </div>
                    <div className="home__countries-cards">
                        {dataForCards.map(function(element,index){
                            return <CountryCard 
                                key={element.name}
                                name={element.name} population={element.population} 
                                region={element.region} capital={element.capital} 
                                flagURL={element.flag}
                                >

                            </CountryCard>
                        })}
                    
                    </div>
                </div>

            );
        }
        
    }
    
}

export default Home;