import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Comment from './pages/Comment';
import PostRecipe from './pages/PostRecipe';
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' index element={<Comment />} />
                <Route path="/favorite-recipes" element={<FavoriteRecipes />} />
                <Route path="/post-recipe" element={<PostRecipe />} />
            </Routes>
        </BrowserRouter>
    )
}

const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container)
root.render(<App />)

// ReactDOM.render(<App />, document.querySelector('#root'))