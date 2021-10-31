import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Header() {
    let history = useHistory()
    return (
        <div className="jarvis-header">
            <p>HEADER</p>
            <button onClick= {()=> history.push("/Footer")}> Home</button>
            <button onClick= {()=> history.push("/")}> MAin</button>
            <button onClick= {()=> history.push("/Calendar")}> Cal</button>
            <button onClick= {()=> history.push("/Tania")}> Tania</button>
        </div>
    )
}
