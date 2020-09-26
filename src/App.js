import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


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
            <Router>
                <div className="app">             
                    <NavBar clicSwitchTheme={this.switchTheme} ></NavBar>
                    <Switch>
                        <Route path="/" exact component={Home} />{/* Have the slash, render out the component too, so use exact tag */}
                        <Route path="/Country-Detail/:name" component={CountryDetail}/>
                    </Switch>
                        {/*  it'll will be changed to country detail. */}
                        {/* <Home ></Home>  */}
                        {/* <CountryDetail></CountryDetail> */}
                    
                </div>
            </Router>
        );
    }
    
}



export default App;