import React from 'react';
import SubstationSlider from "@/features/client/substation/organisms/SubstationSlider";

function WhiteSliderTemplate({background ,slides ,name}) {
    return (

          <SubstationSlider slides={slides} background={background || "#ffffff"} name={name}/>

    );
}

export default WhiteSliderTemplate;