import { atom, atomFamily } from "recoil";
import { v4 as uuidv4 } from 'uuid';

export const countersListState = atom({
    key: 'counters',
    default: [
        {count: 0, id: uuidv4()},
        {count: 0, id: uuidv4()},
        {count: 0, id: uuidv4()}
    ]
});


export const counterState = atomFamily({
    key: 'counter',
    default: (id) => ({ id, count: 0 }),
});