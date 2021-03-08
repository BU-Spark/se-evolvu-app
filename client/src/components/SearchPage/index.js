import React from 'react';

const SearchPage = (props) => {
    return (
        <div>
            {props.location.state.focus}
            {props.location.state.local}
        </div>
    )
}

export default SearchPage;