import React, { Fragment } from "react";
import { Hero } from "../../components/Hero";
import { HomepageTitle } from "../../components/Homepage/HomepageTitle";
import { HomepageParagraph }  from "../../components/Homepage/HomepageParagraph";
import { HomepageButton } from "../../components/Homepage/HomepageButton";
import { WhatWeDoTitle } from "../../components/WhatWeDo/WhatWeDoTitle";
import { WhatWeDoCard1 } from "../../components/WhatWeDo/WhatWeDoCard1";
import { WhatWeDoCard2 } from "../../components/WhatWeDo/WhatWeDoCard2";
import { WhatWeDoCard3 } from "../../components/WhatWeDo/WhatWeDoCard3";


export const Homepage = () => {
    return(
        <Fragment>
            <Hero/>
            <HomepageTitle/>
            <HomepageParagraph/>
            <HomepageButton/>
            <WhatWeDoTitle/>
            <WhatWeDoCard1/>
            <WhatWeDoCard2/>
            <WhatWeDoCard3/>
        </Fragment>
    )
}