import React from 'react'

export default function Header() {

    const style = {
        backgroundColor: "hsla(0,0%,100%,.5)",
        padding: "0 10px 0 10px",
        borderRadius: "5px"
    }

    return (
        <div style={style}>
            <h1>React To-Do App (Basic)</h1>
        </div>
    )
}
