import React from 'react';
/* import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"; */


import NavBar from './NavBar';
import Home from './home/Home';
import CountryDetail from './detail/CountryDetail';




let callbackThemeQ;
/* The app component will always contain the navbarComponent */
class App extends React.Component{
    constructor(props){
        super(props);
        this.switchTheme = function () {

            callbackThemeQ();
        }
    }
    render(){
        callbackThemeQ = this.props.callbackTheme;
        return(
        
            <div className="app">             
                <NavBar clicSwitchTheme={this.switchTheme} ></NavBar>
                <div id="currentContentApp">
                    {/*  it'll will be changed to country detail. */}
                    {/* <Home ></Home>  */}
                    <CountryDetail></CountryDetail>
                </div>
                
            </div>

        );
    }
    
}



export default App;