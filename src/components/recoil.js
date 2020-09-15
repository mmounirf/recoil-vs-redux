import React from 'react';
import { useRecoilValue } from 'recoil';
import RecoilCounter from './recoil-counter';
import { countersListState } from '../state/recoil/store';

const RecoilContainer = () => {
    const countersList = useRecoilValue(countersListState);
    return (
        <ul>
            {countersList.map((item) => (
                <RecoilCounter key={item.id} id={item.id} />
            ))}
        </ul>
    )
}

export default RecoilContainer;