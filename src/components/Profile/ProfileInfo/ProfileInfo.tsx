import React from "react";
import classes from "./ProfileInfo.module.css";

export const ProfileInfo = (props:any) => {
    return(
        <div>
            <div>
                <img src="https://klike.net/uploads/posts/2019-09/1568797153_10.jpg" alt=""/>
            </div>
            <div className={classes.descriptionBlock}>
                ava+discription
            </div>
        </div>
    )
}