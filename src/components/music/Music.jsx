import React from "react"
import music from './Music.module.css';
import { Navigate } from 'react-router-dom';


const Music = (props) => {
    if (props.isAuth === false) return <Navigate to={'/login'}/>
    return (
        <div className={music.music}>
            Music
        </div>
    )
}

export default Music