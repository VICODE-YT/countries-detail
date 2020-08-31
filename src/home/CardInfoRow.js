import React from 'react';
import '../styles/cardinforow.css'

function CardInfoRow(props) {
    const {titleInfo,descriptionInfo} = props;
    return (
        <div className="card-info-row">
            <span className="card-info-tittle">{titleInfo}: </span>
            <span className="card-info-description">{descriptionInfo}</span>
        </div>
    );

}
CardInfoRow.defaultProps = {
    titleInfo:"Title_Info ",
    descriptionInfo: " Description_Info",
}
export default CardInfoRow;