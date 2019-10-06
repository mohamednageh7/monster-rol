import React from 'react';
import Card from '../card/card.components';
import './card-list.style.css';

const CardList = (props) => {
    const {monster} = props; // props.monster
   
    const arrayName = () =>  monster.map((item) => {
        return (
          <Card key={item.id} item={item}/>
        )
      });

    return <div className='card-list'>{arrayName()}</div>
}

export default CardList;