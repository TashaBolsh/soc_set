import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {ProfileInfo} from "../Profile/ProfileInfo/ProfileInfo";

type DialogItemPropsType = {
    name:string
    id:string
}

const DialogItem = (props:DialogItemPropsType) => {
    const path = '/dialogs/' + props.id

    return(
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props:{message:string}) => {
    return <div className={classes.dialog}>{props.message}</div>
}

export const Dialogs = (props:any) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={'Dim'} id={'1'}/>
                <DialogItem name={'Sveta'} id={'2'}/>
                <DialogItem name={'Igor'} id={'3'}/>
            </div>
            <div className={classes.messages}>
                <Message message={'Hi'}></Message>
                <Message message={'How is you'}></Message>
                <Message message={'Yo'}></Message>
            </div>
        </div>
    )
}
















































