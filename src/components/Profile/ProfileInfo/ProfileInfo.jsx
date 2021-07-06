import React from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={`${s.item} ${s.active}`}>
                <img
                    src="https://clipart-db.ru/file_content/rastr/background_065.jpg"
                    alt="not img"
                ></img>
                <img src={props.profile.photos.large}/>
                <p>{props.profile.fullName}</p>
                <p>{props.profile.aboutMe}</p>
                <p>{props.profile.contacts.facebook}</p>
            </div>
        </div>
    );
};

export default ProfileInfo;