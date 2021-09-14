import React from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={`${s.item} ${s.active}`}>
                <img src="https://clipart-db.ru/file_content/rastr/background_065.jpg"/>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={props.status}/>
            </div>
        </div>
    );
};

export default ProfileInfo;