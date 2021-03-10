import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const LoadingCircle = () => {

    return (
       <div style={{ padding: '5rem'}}>
            <Spinner animation="grow" /> {' '}
            <Spinner animation="grow" /> {' '}
            <Spinner animation="grow" />
       </div>
    )
}

export default LoadingCircle;