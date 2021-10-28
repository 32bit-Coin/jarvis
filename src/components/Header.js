import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Header() {
    let value = 10;
    let history = useHistory()
    return (
        <div className="jarvis-header">
            <h1> HEADER</h1>
            <button onClick= {()=> history.push("/Footer")}> Home</button>
            <button onClick= {()=> history.push("/")}> MAin</button>
        </div>
    )
}
