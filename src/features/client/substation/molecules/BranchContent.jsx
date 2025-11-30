import React from 'react';
import CardBranch from "@/features/client/substation/atoms/CardBranch";

function BranchContent() {
    return (
        <div className="flex items-center md:items-center justify-start md:justify-around mt-4">
           <CardBranch/>
        </div>
    );
}

export default BranchContent;