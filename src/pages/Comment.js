import { faker } from "@faker-js/faker";
import React from "react";
import CommentDetail from "./CommentDetail";
import HomePage from "./HomePage";

const Comment = () => {
    return (
        <HomePage>
            <div className='ui placeholder segment'>
                <div className="ui items">
                    <div className="item">
                        <div className="image">
                            <img src={faker.image.food()}></img>
                        </div>
                        <div className="content">
                            <a className="header"> Title of Recipe</a>
                            <div className="meta">
                                <span>Description</span>
                            </div>
                            <div className="description">
                                <p>This is the description of the recipe</p>
                            </div>
                            <div className="extra">
                                <div className="ui right floated yellow button">
                                    Share Recipe!
                                </div>
                                Any additional details will go here
                            </div>
                        </div>
                    </div>
                </div>
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