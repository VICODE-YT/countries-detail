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
            dataP:null
        }
        
        

    }
    async componentDidMount() {
       
        
        let data = await new Data().getAllCountries();
        this.setState({ dataP: data });
       /*  fetch('https://api.mydomain.com')
            .then(response => response.json())
            .then(data => this.setState({ data })); 
            */
    }

    render(){

        if(this.state.dataP==null){
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
            let {name,population,region,capital,flag} = this.state.dataP[0];

            return (
                <div className="home">
                    <div className="home__filter-search-container">
                        <InputSearch ></InputSearch>
                        <RegionChoiceBox></RegionChoiceBox>
                    </div>
                    <div className="home__countries-cards">
                        <CountryCard name={name} population={population} region={region} capital={capital} flagURL={flag}></CountryCard>
                    </div>
                </div>

            );
        }
        
    }
    
}

export default Home;