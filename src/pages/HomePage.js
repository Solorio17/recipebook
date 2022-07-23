import React from "react";
import CommentDetail from "./CommentDetail";
import FavoriteRecipes from "./FavoriteRecipes";

const HomePage = (props) => {
    return (
        <div className='ui container'>
            <div className="ui three item menu">
                <a className="active item" href='/'>Featured Recipes</a>
                <a className="item" href='/favorite-recipes'>Favorite Recipes</a>
                <a className="item" href='/post-recipe'>Post Recipe</a>
            </div>


            {props.children}
        </div>
    )
}

export default HomePage;