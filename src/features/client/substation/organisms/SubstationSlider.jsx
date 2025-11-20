import React from 'react';
import CardFood from "@/features/client/substation/atoms/CardFood";
import SliderContent from "@/features/client/substation/molecules/SliderContent";

function SubstationSlider({background, slides ,name}) {
    return (
        <div
            className=" md:py-12 md:px-20 flex flex-col items-start justify-between"
            style={{background: background}}
        >
            <span className={`${background === "#315F41" ? "text-white font-bold text-[16px] md:text-[24px]" : "text-black font-bold text-[16px] md:text-[24px]"} mr-5 md:mr-2 mb-2 mt-5 md:mt-0`}>{name}</span>
            <SliderContent slides={slides}/>
        </div>
    );
}

export default SubstationSlider;