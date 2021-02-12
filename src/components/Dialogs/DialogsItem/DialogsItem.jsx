import React from 'react'
import s from "./DialogsItem.module.css"
import {NavLink} from "react-router-dom";


const DialogsItem = (props) => {

    let valueDialog = "/dialogs/" + props.id

    return <div className={s.dialog + " " + s.active}>
        <img className={s.logotype}
            src="https://i.pinimg.com/originals/d1/1a/45/d11a452f5ce6ab534e083cdc11e8035e.png"
            alt="not img"
        />
        <NavLink to={valueDialog}>{props.name}</NavLink>

    </div>
}

export default DialogsItem