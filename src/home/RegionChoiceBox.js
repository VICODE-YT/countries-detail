import React from 'react';
import '../styles/regionchoicebox.css';

function RegionChoiceBox(props) {

    return (
        <div className="region-choice">
            <div className="region-choice__selection">Filter by Region</div>
            <div className="region-choice__options"> {/* hidden absolute */}
                <div className="options__option option-africa">Africa</div>
                <div className="options__option option-africa">America</div>
                <div className="options__option option-africa">Asia</div>
                <div className="options__option option-africa">Europe</div>
                <div className="options__option option-africa">Oceania</div>
            </div>
        
        </div>
    );

}

export default RegionChoiceBox;