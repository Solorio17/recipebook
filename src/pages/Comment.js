import React from "react";
import CommentDetail from "./CommentDetail";
import HomePage from "./HomePage";

const Comment = () => {
    return (
        <HomePage>
            <div className='ui placeholder segment'>
                <div className='ui icon header'>
                    <i className='book icon'></i>
                    This is the future place for the recipes
                </div>
                <div className='ui yellow button'>Share Recipe!</div>
            </div>
            <div className='ui comments'>
                <CommentDetail author="Bearry" posted="Today at 10:44PM" content="I love the personality of the girl in the video ;)" />
                <CommentDetail author="Baby" posted="2 weeks ago" content="I really enjoyed the content in this video!" />
                <CommentDetail author="Daddy" posted="Yesterday at 10:47PM" content="I don't have much to say about this video" />
            </div>
        </HomePage>
    )
}

export default Comment