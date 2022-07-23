import React from "react";
import HomePage from "./HomePage";
import { faker } from "@faker-js/faker";

const FavoriteRecipes = () => {
    return (
        <HomePage>
            <div className="ui link cards">
                <div className="card">
                    <div className="image">
                        <img src={faker.image.food()}></img>
                    </div>
                    <div className="content">
                        <div className="header">Spaghetti and Meatballs</div>
                        <div className="meta">
                            <a>Chef Bear</a>
                        </div>
                        <div className="description">
                            Al dente pasta with a homemade tomato sauce and premium beef
                        </div>
                    </div>
                    <div className="extra content">
                        <span className="right floated">
                            Posted 1 day ago
                        </span>
                        <span>
                            <i className="thumbs up icon"></i>
                            75 Likes
                        </span>
                    </div>
                </div>

                <div className="card">
                    <div className="image">
                        <img src={faker.image.food()}></img>
                    </div>
                    <div className="content">
                        <div className="header">Baby Back Ribs</div>
                        <div className="meta">
                            <a>Chef Ayanna</a>
                        </div>
                        <div className="description">
                            Wood Fire Grill with the finest hickory wood, Cooked for over 13 hours
                        </div>
                    </div>
                    <div className="extra content">
                        <span className="right floated">
                            Posted 1 week ago
                        </span>
                        <span>
                            <i className="thumbs up icon"></i>
                            151 Likes
                        </span>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src={faker.image.food()}></img>
                    </div>
                    <div className="content">
                        <div className="header">Ham and Turkey Sandwich on Wheat</div>
                        <div className="meta">
                            <a>Chef Jason</a>
                        </div>
                        <div className="description">
                            Black forest ham, honey turkey on wheat bread
                        </div>
                    </div>
                    <div className="extra content">
                        <span className="right floated">
                            Posted 2 years ago
                        </span>
                        <span>
                            <i className="thumbs up icon"></i>
                            2.5k Likes
                        </span>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src={faker.image.food()}></img>
                    </div>
                    <div className="content">
                        <div className="header">Ham and Turkey Sandwich on Wheat</div>
                        <div className="meta">
                            <a>Chef Jason</a>
                        </div>
                        <div className="description">
                            Black forest ham, honey turkey on wheat bread
                        </div>
                    </div>
                    <div className="extra content">
                        <span className="right floated">
                            Posted 2 years ago
                        </span>
                        <span>
                            <i className="thumbs up icon"></i>
                            2.5k Likes
                        </span>
                    </div>
                </div>
            </div>
        </HomePage>
    )
}

export default FavoriteRecipes;