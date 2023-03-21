import React from "react"
import Preloader from "../../../common/preloader/preloader";
import profInf from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div className={profInf.main}>
      <div className={profInf.im}>
      <img
        src="https://www.planetware.com/wpimages/2019/11/canada-in-pictures-beautiful-places-to-photograph-morraine-lake.jpg"
        alt="img"
      />
      </div>
      <div className = {profInf.discription}>
        <img src={props.profile.photos.large}
        alt='img'
         />
        <div>{props.profile.fullName}</div>

        <div>{props.profile.contacts.github}</div>
      </div>
    </div>
  );
}

export default ProfileInfo