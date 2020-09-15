import React from 'react';

function Tittle(props) {
    const {tittle} = props;

    return (
        <div className= "navbar__title">
            {tittle}
        </div>

    );
}

export default Tittle;