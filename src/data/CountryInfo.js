
class CountryInfo{

    constructor(info){
        this.name = info.name;
        this.population = info.population;
        this.region = info.region;
        this.capital = info.capital;
    }


}

CountryInfo.defaultProps = {
    name: "Country_Model_Name",
    population: "Population_Model",
    region: "Region_Model ",
    capital: "Capital_Model"
}

export default Country;