import React from "react";
import HomePage from "./HomePage";

const PostRecipe = () => {
    return (
        <HomePage>
            <form className="ui form">
                <div className="field">
                    <label>Your first name</label>
                    <input type='text' name="first-name" placeholder="Chef {your-name}"></input>
                </div>
                <div className="field">
                    <label>Name of your Recipe</label>
                    <input type='text' name="recipe-name" placeholder="Name of recipe ..."></input>
                </div>
                <div className="field">
                    <label>Your Recipe Here</label>
                    <textarea rows="3"></textarea>
                </div>
                <button className="ui button yellow" type="submit">Post Recipe!</button>
            </form>
        </HomePage>
    )
}

export default PostRecipe;