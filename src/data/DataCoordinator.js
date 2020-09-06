import Data from './Data';
import Persistence from './Persistence';

class DataCoordinator{

    constructor(){
        this.previewCountries ={};
    }

    async getPreviewCountries(callbackData){
        this.previewCountries =  new Persistence().getPreviewCountries();/* LocalStorage */
        if (this.previewCountries === null){/* doesn't exist */

            this.previewCountries = new Data().getAllCountries();/* Fetch  */
            if (this.previewCountries == null){
                throw new Error("Can't get countries information'");
            }
            new Persistence().savePreviewCountries(
                this.previewCountries
            );
            
        }
        callbackData( this.previewCountries);
    }

}

export default DataCoordinator;