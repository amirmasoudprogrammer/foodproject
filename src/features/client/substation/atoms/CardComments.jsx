import React from 'react';
import Image from "next/image";
import { IoStar } from "react-icons/io5";


function CardComments({data}) {
    const {image, comment, name, date, star} = data


    return (
        <div className="w-[252px] h-[142px] md:w-[600px] md:h-[202px] flex flex-col items-center justify-between border border-[#CBCBCB] rounded-xl overflow-hidden">
            <div className="flex items-center justify-end ">
                <div className="w-[148px] md:w-[427px] mr-3 flex flex-col text-black text-end text-[10px] md:text-[16px] ">
                    <p>{comment}</p>

                </div>

                <div className="flex items-center flex-col m-auto  mt-5">
                    <Image src={image} width={96} height={96} alt="img" className="w-[56px] h-[56px] md:w-[96px] object-cover md:h-[96px]  rounded-full"/>
                    <span className="text-[#717171] text-[10px] md:text-[14px] mt-2">{name}</span>
                    <p className="text-[#717171] text-[10px] md:text-[14px] mt-1">{date}</p>
                </div>

            </div>
            <div className="flex items-center justify-start w-full  -top-5 relative  ">
                <p className="flex text-yellow-400 items-center ml-10 mb-10">
                    <strong className="text-black text-[11px] md:text-[15px] mr-1">{star}</strong>
                    <IoStar />

                </p>
            </div>

        </div>
    );
}

export default CardComments;