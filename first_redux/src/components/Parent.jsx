import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Parent() {
    const todo = useSelector(state => state.todo)
    const counter = useSelector(state=>state.counter)
    const dispatch = useDispatch()
    console.log(todo)
    return (
        <div>
            {todo.map((t, index) => (
                <span style={{marginLeft: "20px"}} key={index}>{t}</span>
            ))}
            <button onClick={() => dispatch({ type: "ADD", payload: counter})}>Add</button>
            <button onClick={() => dispatch({ type: "SORT"})}>SORTTT</button>

        </div>
    )
}

export default Parent