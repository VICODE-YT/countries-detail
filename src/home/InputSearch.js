import React from 'react';
/* import ShearchIcon from '../img/search.svg' */
import { ReactComponent as SearchIcon } from '../img/search.svg';

function InputSearch(props) {
    return (
        <div className="inputsearch element-floating">
            <SearchIcon className="iconSearch"></SearchIcon>
            <input className="inputsearch__input" type="text" placeholder={"Search for a country..."}/>
        </div>
    );
}

export default InputSearch;