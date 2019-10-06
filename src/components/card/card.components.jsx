import React from 'react';
import './card.style.css';

const Card = (props) => {
    const {item} = props;
    return (
    <div className='card-container'>
        <img alt='monster' src={`https://robohash.org/${item.id}?set=set2&size=180x180`}/>
        <h2>{item.name}</h2>
        <p>{item.email}</p>
    </div>
    )
};

export default Card;