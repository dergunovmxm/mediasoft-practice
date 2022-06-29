import React , {Fragment} from "react";
import { Search } from "../../components/Search/Search";
import { Startimage } from "../../components/Startimage/Startimage";
import { Popular } from "../../components/Popular/Popular";
import { AllArticles } from "../../components/AllArticles/AllArticles";
import { BlogpageFooter } from "../../components/BlogpageFooter/BlogpageFooter";

export const Blogpage = () => {
    return (
        <Fragment>
            <Startimage/>
            <Search/>
            <Popular/>
            <AllArticles/>
            <BlogpageFooter />
        </Fragment>

    )
}