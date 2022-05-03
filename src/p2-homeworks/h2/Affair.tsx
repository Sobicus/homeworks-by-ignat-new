import React from 'react'
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType// need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className="general">
            <div className="generalHomeworks">
                {props.affair.name}
            </div>
            <div className="generalHomeworks">
                {props.affair.priority}
            </div>
            <div className="generalHomeworks">
                <button onClick={deleteCallback}>X</button>
            </div>
        </div>
    )
}

export default Affair
