import React from 'react';
import "./styles/app.css";

import NavBar from './NavBar';
import Home from './home/Home';
import CountryDetail from './detail/CountryDetail';

let callbackThemeQ;
/* The app component will always contain the navbarComponent */
function App(props){
    callbackThemeQ = props.callbackTheme;
    return(
       
        <div className="app">             
            <NavBar clicSwitchTheme={switchTheme} ></NavBar>
            <div id="currentContentApp">
                <Home></Home>{/* it'll will be changed to country detail. */}
            </div>
            
        </div>

    );
}
const switchTheme = function (){
    
    callbackThemeQ();
}
export default App;