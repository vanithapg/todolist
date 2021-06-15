import React from 'react'

const todo=(props)=>{
    return(
        <div>
            <input type="checkbox" value={props.text}></input>
            <label>{props.text}</label>
        </div>
    )
}

export default todo