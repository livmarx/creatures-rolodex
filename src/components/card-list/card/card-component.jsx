import React from 'react';
import './card.styles.css';
export const Card = props => {
  return (
    <div className="card-container">
      <img
        alt="creature"
        src={`https://robohash.org/${props.creature.id}?set=set2&size=180x180`}
      />
      <h3>{props.creature.name}</h3>
      <p>{props.creature.email}</p>
    </div>
  );
};
