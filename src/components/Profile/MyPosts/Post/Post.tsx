import React from 'react';
import classes from './Post.module.css';

type PostPropsType = {
    message:string
}

export const Post = (props:PostPropsType) => {
    return (
        <div className={classes.item}>
            <img src="https://i.pinimg.com/originals/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg"/>
            {props.message}
            <div>
                <span>like</span>
            </div>
        </div>
    )
}