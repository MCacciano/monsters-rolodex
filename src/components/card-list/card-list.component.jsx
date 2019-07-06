import React from 'react';
import {Card} from '../card/card.component';

import './card-list.styles.css';

export const CardList = ({ monsters }) => {
  const renderMonsters = () => {
    return monsters.map(monster => <Card key={monster.id} monster={monster} />);
  };

  return <div className="card-list">{renderMonsters()}</div>
}