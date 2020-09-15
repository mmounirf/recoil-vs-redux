import React from "react";
import { useRecoilState } from "recoil";
import { counterState } from "../state/recoil/store";


const RecoilCounter = ({ id }) => {
    const [counter, setCounter] = useRecoilState(counterState(id));

    const increment = () => {
        setCounter((counter) => ({ ...counter, count: counter.count + 1 }));
    }

    const decrement = () => {
        setCounter((counter) => ({ ...counter, count: counter.count - 1 }));
    }

    return (
        <div className="counter">
            <p>{counter.id}</p>
            <button type="button" onClick={decrement}>-</button>
            <h1 className="recoil">{counter.count}</h1>
            <button type="button" onClick={increment}>+</button>
        </div>
    )
}

export default RecoilCounter;