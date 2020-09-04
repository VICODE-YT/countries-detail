import React from 'react';
import "../styles/index.css"

import InputSearch from '../home/InputSearch';
import RegionChoiceBox from './RegionChoiceBox';
import CountryCard from './CountryCard';

function Home(){
    return(

        <div className="home">
            <div className="home__filter-search-container">
                <InputSearch ></InputSearch>
                <RegionChoiceBox></RegionChoiceBox>
            </div>
            <div className="home__countries-cards">
                <CountryCard countryName={"Germany"} population={"987"} region = {"Marte"} capital = {"Vic_Capital"}></CountryCard>
            </div>
        </div>

    );
}

export default Home;