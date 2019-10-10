import React from 'react';
import {Card} from './card/card-component';
import './card-list.styles.css';

export const CardList = props => {
  return (
    <div className="card-list">
      {props.creatures.map(creature => {
        return <Card key={creature.id} creature={creature} />;
      })}
    </div>
  );
};
 