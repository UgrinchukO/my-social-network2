import React from "react";
import s from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div>
            <div className={`${s.item} ${s.active}`}>
                <img
                    src="https://clipart-db.ru/file_content/rastr/background_065.jpg"
                    alt="not img"
                ></img>
                <p>ava + description</p>
            </div>
        </div>
    );
};

export default ProfileInfo;