import React from 'react';

function Tittle(props) {
    const {tittle,} = props;
    let forNavbarl = props.forNavbar;
    return (
        <div className={`navbar__title ${forNavbarl?'tittle_detail':''}`}>
            {tittle}
        </div>

    );
}

export default Tittle;