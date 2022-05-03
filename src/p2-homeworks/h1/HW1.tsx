import React from 'react'
import Message from "./Message";
import s from './Message.module.css'

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Nikolas',
    message: 'I wake up to the sounds of the silence that allows\n' +
        'For my mind to run around, with my ear up to the ground\n' +
        'I\'m searching to behold the stories that are told\n' +
        'When my back is to the world that was smiling when I turned\n',
    time: '22:00',
}

///TEST

function HW1() {
    return (
        <div className={s.main}>
            <hr/>
            homeworks 1

            should work (должно работат)

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
