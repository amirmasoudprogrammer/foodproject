import React from 'react';
import SubstationSlider from "@/features/client/substation/organisms/SubstationSlider";

function SliderTemplate({background, slides ,name}) {
    return (
            <SubstationSlider slides={slides} background={background || "#315F41"} name={name}/>
    );
}

export default SliderTemplate;