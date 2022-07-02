import React from "react";
import "./blogpage.css"
import { Search } from "../../components/Search/Search";
import { Startimage } from "../../components/Startimage/Startimage";
import { MainPopular } from "../../components/MainPopular/MainPopular";
import { Popular } from "../../components/Popular/Popular";
import {Line } from "../../components/Line/Line";
import { AllArticles } from "../../components/AllArticles/AllArticles";
import { BlogpageFooter } from "../../components/BlogpageFooter/BlogpageFooter";

export const Blogpage = () => {
    return (
        <div className="blog_container">
            <div className="image_container">
                <h1>Blog Afrianska</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className="search_container">
                <Search/>
            </div>
            <span className="popular_first_span">POPULAR</span>
            <MainPopular/>
            <Popular/>
            <Line/>
            <span className="popular_first_span">ALL ARTICLE</span>
            <AllArticles/>


        </div>

    )
}