import React from 'react';
import '../../styles/cardStyles.css';


export const Card = props => (
  <div className='card-container'>
    <img alt='monster' src={`https://robohash.org/${props.monster.id}?set=set2&size=130x130`} />
    <h1>{props.children}</h1>
    <p>{props.monster.email}</p>
  </div>
);

