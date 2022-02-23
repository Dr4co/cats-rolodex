import React from 'react';

import { Card } from '../card/card.component';

import './card-list.styles.css';

export const CardList = props => (
    <div className='card-list'>
        {props.fetchedMonsters.map(monster => (
            <Card key={monster.id} monster={monster} />
        ))};
    </div>
    );

// export default CardList;

/*


export const CardList = props => {
    console.log(props);
    <div className='card-list'>
        {props.fetchedMonsters.map(monster => (
            <h1>{monster.name}</h1>
            // <Card key={monster.id}> monster={monster}/</Card>
        ))}
    </div>
}

export default CardList;


export const CardList = props => (
    // console.log(props);
        <div className='card-list'>
            {props.fetchedMonsters.map(monster => (
                <h1 key={monster.id}> {monster.name} </h1>
                
            ))}
        </div>
    );
*/