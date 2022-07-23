import React from "react";
import { faker } from "@faker-js/faker";
import HomePage
    from "./HomePage";
const CommentDetail = (props) => {
    return (
        <div className='comment'>
            <a className='avatar'>
                <img src={faker.image.avatar()} alt="This is a profile picture"></img>
            </a>
            <div className='content'>
                <a className='author'>
                    {props.author}
                </a>
                <div className='metadata'>
                    <span className='date'>{props.posted}</span>
                </div>
                <div className='text'>
                    {props.content}
                </div>
            </div>
        </div>
    )
}

export default CommentDetail;