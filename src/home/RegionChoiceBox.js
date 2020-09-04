import React from 'react';
import '../styles/index.css';
import Chevron from './Chevron';

class RegionChoiceBox extends React.Component{

    constructor(props){
        super(props);
        this.state= {dropActive : false};
        this.dropDownOptions = React.createRef();
        this.chevronDropDown = React.createRef();
    }
    render() {
        let animation = this.state.dropActive? "animation-active":"animation-unactive";
        return (
            <div className="region-choice element-floating"
                onClick = {()=>{
                    this.setState({dropActive:!this.state.dropActive});
                }}
            >
                <div className="region-choice__selection ">Filter by Region 
                    <Chevron chevronDownDirection={this.state.dropActive} ></Chevron>
                </div>
                <div ref={this.dropDownOptions} className={"region-choice__options element-floating "+ animation} > {/* hidden absolute */}
                    <div className="options__option option-africa">Africa</div>
                    <div className="options__option option-africa">America</div>
                    <div className="options__option option-africa">Asia</div>
                    <div className="options__option option-africa">Europe</div>
                    <div className="options__option option-africa">Oceania</div>
                </div>
            
            </div>
        );
    }
    

}

export default RegionChoiceBox;