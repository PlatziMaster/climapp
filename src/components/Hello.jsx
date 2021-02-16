import React, { useContext } from 'react';
import { AppContext } from '@context/AppContext';

const Hello = () => {
    const { state } = useContext(AppContext);
    return (
        <h1>{state.home}</h1>
    )
}

export default Hello;