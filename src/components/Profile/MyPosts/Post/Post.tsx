import React from 'react';
import classes from './Post.module.css';

type PostPropsType = {
    message:string
}

export const Post = (props:PostPropsType) => {
    return (
        <div className={classes.item}>
            <img src="https://img.freepik.com/free-photo/beauty-fashion-portrait-of-young-blond-woman-model-with-natural-makeup-and-perfect-skin-posing_158538-8776.jpg?w=740&t=st=1693227174~exp=1693227774~hmac=200249cb2ecb1281f7eca5f3eedc23782e9add1a0c580a9a65ee5f25e525a38e"/>
            {props.message}
            <div>
                <span>like</span>
            </div>
        </div>
    )
}