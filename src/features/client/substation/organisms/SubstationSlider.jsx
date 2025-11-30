import React from 'react';
import clsx from "clsx";

import SliderContent from "@/features/client/substation/molecules/SliderContent";

function SubstationSlider({background, slides, name}) {

    const baseTextClass = "font-bold text-[16px] md:text-[24px] mr-5 md:mr-2 mb-2 mt-5";

    return (
        <div
            className=" md:py-12 md:px-20 flex flex-col items-start justify-between"
            style={{background: background}}>
            <span className={clsx(baseTextClass, background === "#315F41" ? "text-white" : "text-black")}>
  {name}
</span>
            <SliderContent slides={slides}/>
        </div>
    );
}

export default SubstationSlider;