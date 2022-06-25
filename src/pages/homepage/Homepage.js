import React, { Fragment } from "react";
import { Hero } from "../../components/Hero";
import { HomepageTitle } from "../../components/Homepage/HomepageTitle";
import { HomepageParagraph }  from "../../components/Homepage/HomepageParagraph";
import { HomepageButton } from "../../components/Homepage/HomepageButton";


export const Homepage = () => {
    return(
        <Fragment>
            <Hero/>
            <HomepageTitle/>
            <HomepageParagraph/>
            <HomepageButton/>
        </Fragment>
    )
}