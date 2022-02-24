import React from 'react';
import '../../styles/cardListStyles.css';
import { Card } from '../card/cardComponent.jsx';

export const CardList = props => (
  <div className='card-list'>
    {
      props.monsters.map(monster => (
        <Card monster={monster} key={monster.id}>{monster.name}</Card>
      )
      )}
  </div>
);

