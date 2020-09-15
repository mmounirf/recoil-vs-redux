import React from 'react';
import { useSelector } from 'react-redux';
import { selectCounters } from '../state/redux/store';
import ReduxCounter from './redux-counter';

const ReduxContainer = () => {
    const countersList = useSelector(selectCounters);
    return (
        <ul>
            {countersList.map((item) => (
                <ReduxCounter key={item.id} id={item.id} />
            ))}
        </ul>
    )
}

export default ReduxContainer;