import React, { Fragment } from "react";
import { Hero } from "../../components/Hero";
import { HomepageTitle } from "../../components/HomepageTitle";
import { HomepageParagraph }  from "../../components/HomepageParagraph";


export const Homepage = () => {
    return(
        <Fragment>
            <Hero/>
            <HomepageTitle/>
            <HomepageParagraph/>
        </Fragment>
    )
}