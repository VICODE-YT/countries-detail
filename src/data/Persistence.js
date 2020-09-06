


class Persistence {

    savePreviewCountries = function(countriesPreview){
        localStorage.setItem('countriesPreviewData',JSON.stringify(countriesPreview));
    }

    getPreviewCountries = function(){
        let previewData = localStorage.getItem('countriesPreviewData');
        
        return previewData ? JSON.parse(previewData):null;
    }
}

export default Persistence;
