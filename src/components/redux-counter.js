import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCounter, selectCounter } from "../state/redux/store";

const ReduxCounter = ( { id }) => {
    const counter = useSelector(selectCounter)(id);
    const dispatch = useDispatch();
    
    const increment = () => {
        dispatch(setCounter(id, counter.count + 1))
    }

    const decrement = () => {
        dispatch(setCounter(id, counter.count - 1))
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

export default ReduxCounter;

// export default React.memo(ReduxCounter);