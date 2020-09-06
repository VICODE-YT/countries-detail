
class Data{
    getAllCountries = async function (callback){

        let result = await fetch('https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag');
        /* let countries = "vic";
        countries = await result.json();
        callback(countries); */
        let countries = await result.json();
        return countries;
    }

    getFlag =  function (URLFlag){
        let result =  fetch(URLFlag);
        return result;
    }

   /*  getDetailCountry(countryName){
        let result = await fetch('https://restcountries.eu/rest/v2/name/${countryName}?fields=name');

        return result;
    } */
}

 

export default Data;
