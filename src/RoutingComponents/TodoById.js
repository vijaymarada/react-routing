import React, { useState } from "react";

export default function TodoById() {
    const [todoIdStart, setTodoIdState] = useState({})
    const todoIdref = React.useRef()
    const GetDatabyId = () => {

        fetch('https://jsonplaceholder.typicode.com/todos/' + todoIdref.current.value)
            .then(response => response.json())
            .then(json => setTodoIdState(json))
    }
    return (

        <div>
            <label>Enter number</label>
            <input type="number" ref={todoIdref}></input><br/>
            <button type="submit" onClick={GetDatabyId}>GetData</button><br/>
            Data is: {JSON.stringify(todoIdStart)}
        </div>

    )
}

