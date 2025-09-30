import React from 'react';
import Image from "next/image";

function CardPopup({data}) {
    return (

        <div className="w-[175px] h-[260px] transition-all cursor-pointer hover:scale-105 border border-[#eeeee] shadow-md mr-3 mt-5 rounded-lg ">
            <Image src={data.image} alt="image" width={175} height={179} className="w-[175px] h-[169px] rounded-t-lg"/>
            <div className="w-[175px] h-[79px] pt-2 pr-2 pl-2 pb-2 flex items-center justify-center text-black flex-col text-center">
                <span className='text-[16px]'>{data.name}</span>
                <p className="text-[10px] pt-2">{data.desc}</p>
            </div>
        </div>
    );
}

export default CardPopup;