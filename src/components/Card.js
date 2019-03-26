import React from 'react';

const Card = ({name, email}) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5 tc'>
            <img alt='robots' src={`https://robohash.org/${name}?size=200x200`} />
            <div className=''>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
