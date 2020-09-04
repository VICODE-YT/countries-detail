import React from 'react';
import '../styles/index.css';


class Chevron extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            chevronDownDirection: props.chevronDownDirection,
        }
    }
    render(){
        let chevronActive = "chevron--"+ (this.props.chevronDownDirection ? "active" :"unactive");
        return (
            <div className={"chevronD " + chevronActive}>
                <div className="chevron__left"></div>
                <div className="chevron__right"></div>
            </div>
        );
    }
}

export default Chevron;