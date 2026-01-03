import React, { useContext } from 'react'
import { CountContext } from '../App'
import { UserContext } from '../main'


function Todo() {
    const { count, setCount } = useContext(CountContext)
    return (
        <div>
            Todo
            <div>
                <h1>{count}</h1>
                <button  onClick={()=> setCount(count +1)}>increment</button>
            </div>
            </div>

    )
}

export default Todo