import React from 'react';
import Slider from "@/shared/slider/Slider";
import SubstationBranch from "@/features/client/substation/organisms/SubstationBranch";

function BranchSlider({data, name ,}) {
    return (
        <div className="flex items-center justify-between flex-col mt-16">
            <span className="text-[#353535] font-bold text-[24px] mb-8">{name}</span>
            <Slider data={data}/>
            <SubstationBranch />
        </div>
    );
}

export default BranchSlider;