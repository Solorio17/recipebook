import React from "react";

const HomePage = (props) => {
    return (
        <div className='ui container'>
            <div className="ui secondary menu">
                <a className="item" href='/'>Featured Recipes</a>
                <a className="item" href='/favorite-recipes'>Favorite Recipes</a>
                <a className="item" href='/post-recipe'>Post Recipe</a>
            </div>
            {props.children}
        </div>
    )
}

export default HomePage;