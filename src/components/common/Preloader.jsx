import React from "react";
import s from './Preloader_module.css'
import preloader from "../../Image/usersImage/9080607321ab98fa3e70dd24b2513a20.gif"

let Preloader = (props) => {
    return <div><img src={preloader} style={{width: '100px', height:'100px'}}/></div>
}

export default Preloader