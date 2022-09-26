import React from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: React.ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onEnter} // деструктуризация пропсов
) => {
    const inputClass = (error ? s.error : s.input) // need to fix with (?:)

    return (
        <div>
            <input value={name} onChange={(e) => setNameCallback(e)} className={inputClass} onKeyDown={onEnter}
                   onBlur={setNameCallback}/>
            <button onClick={addUser} disabled={name.length === 0} className={s.button}>add</button>
            <span>{totalUsers}</span>
            <div className={s.errorName}>{error}</div>
        </div>
    )
}

export default Greeting
