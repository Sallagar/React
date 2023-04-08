import React from "react"
import Preloader from "../../../common/preloader/preloader";
import profInf from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  } 
  

  return (
    <div className={profInf.main}>
      <div className = {profInf.discription}>
        <img src={props.profile.photos.large}
        alt='img'
         />
        <div>{props.profile.fullName}</div>
        <ProfileStatus status={props.status}/>
        <div>{props.profile.contacts.github}</div>
      </div>
    </div>
  );
}

export default ProfileInfo