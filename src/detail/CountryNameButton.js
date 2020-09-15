import React from 'react';

function CountryNameButton(props) {
    const {country} = props;

    return (
        <div className="country-name-button element-floating">
            {country}
        </div>
    );
}

export default CountryNameButton;