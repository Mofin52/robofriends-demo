import React from 'react';

const SearchBox = (props) => {
    return (
        <div className='pa2'>
            <input
                aria-label='Search robots'
                className='pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='search robofriends'
                onChange={props.onSearchChange}
                value={props.searchValue}
                >
            </input>
        </div>
    )
}

export default SearchBox;