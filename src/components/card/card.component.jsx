import React from "react";

import './card.styles.css';

export const Card = props => (
    <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set4&size=180x180`}/>
        {/* https://robohash.org/ - set2 = Crazy robots, set4 = Cats :P*/}
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
)

// IF we DO NOT define/declare this:
// e.g. `export default Card;´
// THEN, in the import we need to include brackets e.g.
// import { Card }, instead of import Card from './...'

