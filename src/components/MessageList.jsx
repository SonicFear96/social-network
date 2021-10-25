import React from 'react'
import { useState } from 'react'

export const MessageList = ({messageList}) => {


    return (
        <div>
        {messageList.map((elm, index) =>(
        <div key={index}>
            <h2>{elm.author}</h2>
            <p>{elm.text}</p>
        </div> ))}
        </div>
    )
}
