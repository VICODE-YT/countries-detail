import React from 'react';
import '../styles/index.css'

function CardInfoRow(props) {
    const {titleInfo,descriptionInfo} = props;
    return (
        <div className="card-info-row">
            <span className="card-info__tittle">{titleInfo}: </span>
            <span className="card-info__description">{descriptionInfo}</span>
        </div>
    );

}
CardInfoRow.defaultProps = {
    titleInfo:"Title_Info ",
    descriptionInfo: " Description_Info",
}
export default CardInfoRow;