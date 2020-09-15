import React from 'react';
import { ReactComponent as BackArrow } from '../img/arrow-back-outline.svg';


function ButtonBack(props) {
    return (
        <div className="country-detail__button-back country-card element-floating">
            <BackArrow className="iconSearch"></BackArrow> Back
        </div>
    );

}

export default ButtonBack;