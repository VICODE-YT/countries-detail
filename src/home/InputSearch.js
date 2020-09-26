import React from 'react';
/* import ShearchIcon from '../img/search.svg' */
import { ReactComponent as SearchIcon } from '../img/search.svg';

function InputSearch(props) {
    return (
        <div className="inputsearch element-floating">
            <SearchIcon className="iconSearch"></SearchIcon>
            <form className="inputsearch-form" onSubmit={props.handleSubmit} style={{display:'inline'}} >
                <input name="country_search" className="inputsearch__input" type="text" placeholder={"Search for a country..."} onChange={props.handleChange} />            
            </form>
        </div>
    );
}

export default InputSearch;