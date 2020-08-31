import React from 'react';
import "./styles/app.css";

import NavBar from './NavBar';
import Home from './home/Home';
import CountryDetail from './detail/CountryDetail';

/* The app component will always contain the navbarComponent */
function App(){
    return(

       
        <div className="app">             
            <NavBar></NavBar>
            <div id="currentContentApp">
                <Home></Home>{/* it'll will be changed to country detail. */}
            </div>
            
        </div>

    );
}

export default App;