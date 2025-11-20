import React from 'react';
import SubstationSlider from "@/features/client/substation/organisms/SubstationSlider";

function GreenSliderTemplate({background, slides ,name}) {
    return (
            <SubstationSlider slides={slides} background={background || "#315F41"} name={name}/>
    );
}

export default GreenSliderTemplate;