import React from 'react';
import CommentsContent from "@/features/client/substation/molecules/CommentsContent";

function SubstationComments({data}) {
    return (
        <div className="flex items-center justify-between flex-col mt-20">
            <p className="font-bold text-[16px] md:text-[24px] text-[#353535]">نظرات کاربران</p>

            <CommentsContent data={data}/>
        </div>
    );
}

export default SubstationComments;