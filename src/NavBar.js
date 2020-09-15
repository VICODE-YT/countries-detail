import React from 'react';
import "./styles/index.css"

import Tittle from './shared/Tittle';

function NavBar(props){

    return (
        <div className="navbar">
            <Tittle tittle={"Where in the world?"}></Tittle>
            <BtnThemeSwith clicSwitchThemeF={props.clicSwitchTheme}></BtnThemeSwith>
        </div>
    );
}

class BtnThemeSwith extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            btnTheme:true,
        }
    }
    render(){
       /*  let props = this.props; */
       const {btnTheme} = this.state;
        let icon = btnTheme ? '':'btn-switch-theme--light-theme';
        return(
            <div className={"navbar__btn-switch-theme " + icon}
                onClick={ () => {
                    this.props.clicSwitchThemeF();
                    this.setState({ btnTheme:!this.state.btnTheme})
                }
                }
            >Dark Mode</div>
        );
    }
}
export default NavBar;