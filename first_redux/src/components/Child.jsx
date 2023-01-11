import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Child() {
    const counter = useSelector(state => {
        return state.counter;
    });

    const dispatch = useDispatch();

    return (
        <>
            <div>{counter}</div>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>incresae</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>decrease</button>
            <button onClick={() => dispatch({ type: "RESET" })}>reset</button>

        </>

    )
}

export default Child