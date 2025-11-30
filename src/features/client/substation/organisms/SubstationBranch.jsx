import React from 'react';
import BranchContent from "@/features/client/substation/molecules/BranchContent";

function SubstationBranch() {
    return (
        <div className="relative -top-8 rounded-xl bg-white z-10 w-[320px] md:w-[810px] h-[80px] md:h-[130px] border border-[#417F56]">
            <BranchContent />
        </div>
    );
}

export default SubstationBranch;