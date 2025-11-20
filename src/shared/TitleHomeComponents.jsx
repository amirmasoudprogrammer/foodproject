import React from 'react';

function TitleHomeComponents({title}) {
    return (
        <div className="flex items-center justify-center mt-10 mb-10">
            <span className="text-[16px] md:text-[24px] text-[#353535] font-medium">{title}</span>
        </div>
    );
}

export default TitleHomeComponents;