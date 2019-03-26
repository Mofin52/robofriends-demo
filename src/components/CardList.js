import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return robots.map(el =>
            <Card
                name={el.name}
                email={el.email}
                id={el.id}
                key={el.name}
            />
    );
}

export default CardList;