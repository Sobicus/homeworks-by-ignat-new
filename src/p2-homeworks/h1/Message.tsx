import React from 'react'
import s from './Message.module.css'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={s.message}>
            <div>
                <img src={props.avatar}/>
            </div>
            <div className={s.blockmessage}>
                <div>
                    {props.name}
                </div>
                <div>
                    {props.message}
                </div>
                <div>
                    {props.time}
                </div>
            </div>
            <div className={s.xboct}></div>
        </div>
    )
}

export default Message
